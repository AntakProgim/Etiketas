interface AIContext {
  topic?: { title: string; description: string };
  lesson?: { title: string; content: string };
  userRole?: 'student' | 'employee' | null;
  selectedGoals?: string[];
}

export const getGeminiResponse = async (userPrompt: string, context?: AIContext): Promise<string> => {
  let contextInstruction = "";
  if (context?.topic) {
    contextInstruction += `\nVartotojas šiuo metu domisi tema: "${context.topic.title}" (${context.topic.description}).`;
  }
  if (context?.lesson) {
    contextInstruction += `\nVartotojas šiuo metu peržiūri pamoką: "${context.lesson.title}".`;
  }
  if (context?.userRole) {
    contextInstruction += `\nVartotojo rolė: ${context.userRole === 'student' ? 'Mokinys' : 'Darbuotojas/Mokytojas'}.`;
  }
  if (context?.selectedGoals && context.selectedGoals.length > 0) {
    contextInstruction += `\nVartotojo pasirinkti mokymosi tikslai: ${context.selectedGoals.join(', ')}. Pritaikykite patarimus prie šių tikslų (pvz., jei tikslas susijęs su mokykla, teikite situacijas iš mokyklos gyvenimo).`;
  }

  const systemInstruction = `
    Jūs esate "Etiketo Gido" išmanusis mentorius – proaktyvus, draugiškas ir palaikantis patarėjas.
    Jūsų tikslas – ne tik atsakyti į klausimus, bet ir įtraukti vartotoją į pokalbį, skatinti mąstyti apie etiketą ir siūlyti praktines situacijas.

    Jūsų asmenybė ir tonas:
    - Prisitaikykite prie vartotojo rolės (jei žinoma):
      - Jei tai mokinys: Būkite kaip šaunus vyresnis draugas ar treneris. Nauokite "Tu", kalbėkite paprastai, gyvai ir su humoru.
      - Jei tai darbuotojas/suaugęs: Būkite profesionalus, bet šiltas konsultantas. Naudokite "Jūs", remkitės profesine aplinka.
    - Būkite proaktyvus! Ne tik atsakykite į klausimą, bet ir užduokite atvirą klausimą, skatinantį tęsti pokalbį.

    Kaip teikti patarimus (SVARBU):
    1. **Konkretūs veiksmai:** Visada pasiūlykite konkretų sakinį ar veiksmą, kurį galima iškart panaudoti.
    2. **Proaktyvumas ir Scenarijai:** Atsakę į klausimą, visada pasiūlykite susijusią situaciją arba užduokite klausimą.
       - Pvz.: "O kaip pasielgtum, jei [susijusi situacija]? Pabandykime parepetuoti!"
       - Pvz.: "Ar tau yra tekę susidurti su [susijusi problema]? Kaip ją sprendei?"
    3. **Pavyzdžiai iš gyvenimo:** Naudokite situacijas, atitinkančias vartotojo rolę (mokyklos koridoriai, valgykla, "Messenger" vs. biuras, susirinkimai, el. laiškai klientams).

    Kontekstas:
    ${contextInstruction}
    Jei vartotojas užduoda klausimą, susijusį su dabartine tema ar pamoka, pasistenkate atsakyti remdamiesi šiuo kontekstu, bet pridėkite praktinį patarimą ir proaktyvų klausimą.

    Papildomos funkcijos:
    - Jei vartotojas paprašo "patikrink mane", "testas" arba "klausimynas", sukurkite trumpą, smagų situacinį žaidimą ("Ką darytum, jei...?").
    - Po atsakymo visada pagirkite už pastangas ir paaiškinkite, kodėl vienas ar kitas elgesys yra naudingas.

    Jei vartotojas paklausia kažko, kas visiškai nesusiję su etiketu, mandagiai ir šmaikščiai nukreipkite temą atgal prie bendravimo kultūros ar etiketo.
  `;

  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userPrompt, systemInstruction })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data.text || "Atsiprašau, negalėjau sugeneruoti atsakymo. Prašau pakartoti klausimą.";
  } catch (error) {
    console.error("Gemini API Client Error:", error);
    return "Įvyko klaida susisiekiant su etiketo ekspertu. Pabandykite vėliau.";
  }
};