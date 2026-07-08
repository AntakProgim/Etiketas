import { Topic, QuizQuestion } from './types';

export const APP_TITLE = "Etiketo akademija";
export const APP_SUBTITLE = "Jūsų gidas į eleganciją ir sėkmę";

export const STYLE_GUIDE = {
  colors: {
    primary: {
      50: 'bg-primary-50 dark:bg-primary-900/20',
      100: 'bg-primary-100',
      500: 'bg-primary-500',
      600: 'bg-primary-600',
      800: 'text-primary-800 dark:text-primary-300',
      900: 'text-primary-900',
    },
    gold: {
      500: 'text-gold-500',
      600: 'text-gold-600',
    },
    neutral: {
      bg: 'bg-slate-50',
      surface: 'bg-white dark:bg-slate-800',
      text: 'text-gray-700 dark:text-gray-300',
      muted: 'text-gray-500 dark:text-gray-400',
      border: 'border-gray-100 dark:border-slate-700'
    }
  },
  typography: {
    fontFamily: {
      sans: 'font-sans',
      serif: 'font-serif',
    },
    headings: {
      h1: 'font-serif text-3xl md:text-4xl font-bold text-primary-800 dark:text-primary-300',
      h2: 'font-serif text-2xl md:text-3xl font-bold text-primary-800 dark:text-primary-300',
      h3: 'font-serif text-xl font-bold text-primary-800 dark:text-primary-300 mb-4',
    },
    body: 'font-sans text-base text-gray-700 dark:text-gray-300 leading-relaxed',
    caption: 'font-sans text-sm text-gray-500 dark:text-gray-400',
  },
  spacing: {
    container: 'max-w-5xl mx-auto px-4 md:px-8',
    section: 'py-8 md:py-12',
    cardPadding: 'p-6 md:p-8',
    stack: {
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-12'
    },
    grid: {
      basic: 'grid grid-cols-1 md:grid-cols-2 gap-6',
      cards: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
    }
  },
  components: {
    card: 'bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-all duration-300 overflow-hidden',
    button: {
      primary: 'bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-sm font-medium flex items-center justify-center',
      secondary: 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border border-primary-200 hover:bg-primary-50 dark:bg-primary-900/20 px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center',
      icon: 'p-2 rounded-full hover:bg-gray-100 dark:bg-slate-700 transition-colors flex items-center justify-center',
      ghost: 'text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:text-primary-400 transition-colors font-medium cursor-pointer'
    },
    input: 'w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow',
    badge: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:text-primary-300',
    divider: 'border-t border-gray-100 dark:border-slate-700 my-6',
    tooltip: 'absolute bg-gray-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none'
  }
};

export const TOPICS: Topic[] = [
  {
    id: 'principles',
    title: 'Pagrindiniai principai',
    description: 'Etiketo istorija, vertybių sistema ir mandagaus elgesio pagrindai.',
    iconName: 'Book',
    color: 'blue',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'values',
        title: 'Etiketas ir vertybės',
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Etiketas ir vertybių sistema</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Etiketas dažniausiai suprantamas kaip visuma elgesio taisyklių, kuriose vienaip ar kitaip atsispindi tarpusavio santykiai. Etiketas yra situatyvinio pobūdžio reiškinys, t.y. tam tikro žodžio, gesto ar veiksmo parinkimą nulemianti konkreti situacija.</p>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Pagrindiniai šiuolaikinio etiketo principai.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Humaniškumas ir žmoniškumas.</strong> Mandagumas, taktiškumas, korektiškumas.</li>
            <li><strong>Veiksmų tikslingumas.</strong> Elgtis išmintingai, paprastai ir patogiai.</li>
            <li><strong>Elgesio grožis</strong> ir estetinis patrauklumas.</li>
            <li><strong>Tradicijų ir papročių paisymas.</strong></li>
          </ul>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Etiketo paskirtis – mažinti nepagrįstą socialinę-psichologinę įtampą, baimę, agresiją, padėti užmegzti kontaktus.</p>
        `
      },
      {
        id: 'history',
        title: 'Ekskursas į praeitį',
        imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Etiketo kilmė</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Žodis „etiketas“ atsirado nuo paprasto draudimo „nemindžioti žolės“ Liudviko XIV dvare. Sodininkas prismaigstė lentelių su užrašu „Po žolę nevaikščioti“ (pranc. <em>etiquette</em> – etiketė, lentelė).</p>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vėliau „etiketas“ tapo ženklais, apibrėžiančiais, ką asmuo gali daryti ar ko turi vengti. Iš Versalio etiketas pradėjo plisti po pasaulį kaip karališkųjų rūmų elgesio kanonai.</p>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Senovės Kinijos mąstytojas Konfucijus etiketui (<em>li</em>) skyrė ypatingą dėmesį, teigdamas, kad jis formuoja harmoningus santykius. Viduramžiais riterių luomas sukūrė savo garbės kodeksą, pagrįstą pagarba, dosnumu ir rūpesčiu silpnesniais.</p>
        `
      }
    ]
  },
  {
    id: 'daily',
    title: 'Kasdienis etiketas',
    description: 'Pasisveikinimas, prisistatymas, išvaizda ir aksesuarai.',
    iconName: 'Sun',
    color: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'greetings',
        title: 'Pasisveikinimo menas',
        imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
        audioPhrases: [
          { phrase: "Laba diena", lang: "lt-LT", label: "Lietuviškai" },
          { phrase: "Good morning", lang: "en-US", label: "Angliškai (Ryte)" },
          { phrase: "Bonjour", lang: "fr-FR", label: "Prancūziškai" },
          { phrase: "Guten Tag", lang: "de-DE", label: "Vokiškai" }
        ],
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kas ką sveikina pirmas?</h3>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" alt="Pasisveikinimas mokykloje" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Mokinys</strong> sveikina mokytoją.</li>
            <li><strong>Jaunesnis</strong> sveikina vyresnį.</li>
            <li><strong>Ateinantis</strong> sveikina stovintį.</li>
            <li><strong>Vėluojantis</strong> sveikina laukiančius (klasę ir mokytoją).</li>
            <li><strong>Berniukas</strong> sveikina mergaitę.</li>
          </ul>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Šiuolaikinė taisyklė: <strong>pirmas sveikinasi tas, kuris yra mandagesnis</strong>.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Rankos paspaudimas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Rankos paspaudimas rodo pokalbio pradžią ir pabaigą. Mokykloje rankos paspaudimas dažniau naudojamas oficialiuose renginiuose arba sveikinant su apdovanojimais.</p>
        `
      },
      {
        id: 'greeting_customs',
        title: 'Skirtingi pasisveikinimo būdai',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip sveikintis su skirtingais žmonėmis?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Pasisveikinimas priklauso nuo aplinkos, žmogaus amžiaus ir jūsų santykio:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Su mokytojais ir vadovais.</strong> Visada naudokite oficialų „Laba diena“ ar „Labas rytas“. Dažniausiai palydima lengvu galvos linktelėjimu ir pagarbiu akių kontaktu.</li>
            <li><strong>Su vyresnio amžiaus žmonėmis.</strong> Išlaikykite pagarbą. Kreipkitės „Jūs“, net jei tai šeimos draugai (nebent jie paprašė kitaip). Pirmas pasisveikinkite jūs.</li>
            <li><strong>Su bendraamžiais ir draugais.</strong> Tinka laisvesnis formatas: „Labas“, „Sveikas(-a)“. Vaikinai dažniau sumuša rankomis, merginos – galbūt apsikabina (jei tai artimi draugai).</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip taisyklingai paspausti ranką?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Rankos paspaudimas yra klasikinis, oficialus pasisveikinimo būdas, kurį turėtų mokėti kiekvienas:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Tvirtumas.</strong> Paspaudimas neturi būti nei per silpnas (it „negyva žuvis“), nei per stiprus (it spaustumėte reples), kad netyčia nesukeltumėte skausmo. Jis turi būti užtikrintas, tvirtas delnas į delną.</li>
            <li><strong>Trukmė.</strong> Idealus rankos paspaudimas trunka apie 2–3 sekundes (2-3 trumpi kryptelėjimai žemyn-aukštyn).</li>
            <li><strong>Akių kontaktas.</strong> Spaudžiant ranką būtina žiūrėti žmogui į akis ir šypsotis. Žiūrėjimas į žemę rodo nepasitikėjimą arba nepagarbą.</li>
            <li><strong>Kas pirmas ištiesia ranką?</strong> Oficialioje aplinkoje vyresnis amžiumi arba aukštesnio rango asmuo (pvz., mokytojas, vadovas) pirmas pasiūlo ranką. Jei esate svečias, šeimininkas pirmas ištiesia ranką pasisveikinti.</li>
            <li><strong>Ar būtina tiesti ranką?</strong> Ne, tai nėra privaloma. Jei sergate, jaučiatės negerai, nenorite fizinio kontakto ar tai prieštarauja jūsų įsitikinimams, galite tiesiog pagarbiai linktelėti galvą ir mandagiai pasisveikinti žodžiu.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip atsakyti į pasisveikinimą?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai, kaip priimate pasisveikinimą, parodo jūsų dėmesingumą ir kultūrą. Svarbu atskirti oficialią ir neformalią aplinką bei tinkamai pripažinti kito žmogaus gestą:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Oficialioje aplinkoje.</strong> Į mokytojo ar suaugusiojo „Laba diena“ ar „Labas rytas“ visada atsakoma tokiu pat formaliu pasisveikinimu („Laba diena“). Nemandagu atsakyti trumpiniu ar laisvesniu žodžiu (pvz., „Sveiki“ ar „Labas“ vietoj atitinkamo formalaus atsakymo). Visada palaikykite akių kontaktą ir šiek tiek linktelėkite galvą.</li>
            <li><strong>Neformalioje aplinkoje.</strong> Bendraujant su bendraamžiais, pasisveikinimas gali būti palaiduojamesnis. Į „Labas“ atsakykite tuo pačiu arba draugišku „Kaip laikaisi?“, nusišypsokite. Čia tinka atviresnė ir laisvesnė kūno kalba.</li>
            <li><strong>Tinkamas pripažinimas (Acknowledgement).</strong> Kūno kalba atsakant yra kritiškai svarbi. Išgirdę pasisveikinimą, atgręžkite į tą asmenį veidą ir krūtinę. Jei sėdite ir atsakote formaliu pasisveikinimu (ypač su rankos paspaudimu), privaloma bent šiek tiek kilstelėti ar visiškai atsistoti.</li>
            <li><strong>Tylūs koridoriaus prasilenkimai.</strong> Jei einate koridoriumi ir praeinate pro mokinį ar mokytoją, su kuriuo tą dieną jau sveikinotės, pakanka mandagiai, be žodžių linktelėti galvą ir nusišypsoti – taip parodote, kad jį matote ir gerbiate jo buvimą erdvėje.</li>
            <li><strong>Ignoravimas – didžiausia klaida.</strong> Akių nuleidimas į telefoną, nusisukimas į šoną ar tiesiog tylėjimas girdint į jus nukreiptą pasisveikinimą, yra traktuojamas kaip grubiausia nepagarba.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300 mt-8">Kaip elgtis kebliose situacijose?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kartais sveikinantis pasitaiko nepatogių ar nejaukių momentų. Išlikite ramūs – tai nutinka visiems, o etiketas siūlo elegantiškas išeitis:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Pamiršote žmogaus vardą.</strong> Geriausia išeitis – būti nuoširdiems ir mandagiems, užuot bandžius laužyti galvą ar vengti kreipimosi ištisą pokalbį. Nusišypsokite ir pasakykite: <em>„Atsiprašau, žinau, kad mes esame pažįstami, bet šiuo metu iškrito tavo/jūsų vardas. Aš esu [Jūsų vardas].“</em> Žmonės kur kas labiau įvertina nuoširdumą nei apsimetinėjimą.</li>
            <li><strong>Nežinote, kokį pasisveikinimo būdą pasirinkti.</strong> Sutikote pažįstamą ar tolimą giminaitį, bet abejojate, ar tiesti ranką, ar apsikabinti? Tokiu atveju visada padeda iniciatyvos perleidimas arba neutralumas. Šiltai nusišypsokite ir ištarkite žodinį pasisveikinimą išlaikydami patogų atstumą. Jei kitas žmogus ištiesia ranką ar žengia artyn apsikabinti – tiesiog atsakykite tuo pačiu.</li>
            <li><strong>Nesusišnekėjimas (vienas tiesia ranką, kitas nori apsikabinti).</strong> Jei pasisveikinimo judesiai <em>susipyko</em>, jokiu būdu nepanikuokite. Tiesiog nusišypsokite, galite lengvai pasijuokti iš situacijos sakydami: <em>„Atrodo, mūsų signalai truputį susikirto!“</em> ir greitai pereiti prie neutralaus varianto (paspausti ranką ar tiesiog pasisveikinti žodžiu).</li>
            <li><strong>Sutikote žmogų antrą kartą per dieną.</strong> Visiškai normalu dienos eigoje kelis kartus prasilenkti su tais pačiais žmonėmis. Antrą kartą nesakykite vėl pakilaus „Laba diena“. Užtenka linktelti galvą, nusišypsoti arba, jei situacija labai formali, ištarti trumpą mandagų komentarą (pvz., „Ir vėl susitinkame“).</li>
          </ul>
        `
      },
      {
        id: 'appearance',
        title: 'Išvaizda ir apranga',
        imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Darbuotojų aprangos kodas</h3>
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" alt="Dalykinė apranga" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Progimnazijos darbuotojai savo išvaizda reprezentuoja įstaigą, todėl apranga turi būti:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Tvarkinga ir švari.</strong> Laikomasi asmens higienos ir estetikos reikalavimų.</li>
            <li><strong>Etiška.</strong> Nedėvima provokuojanti apranga (gilios iškirptės, permatomi ar itin atviri rūbai).</li>
            <li><strong>Dalykiška.</strong> Apranga turi atitikti darbo pobūdį ir kurti pagarbią atmosferą.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Mokinių uniformos (1-8 kl.)</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Mokiniai privalo dėvėti tvarkingą uniformą kiekvieną dieną.</p>
          
          <div class="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800 mb-6">
            <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Privalomos dalys:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>Viršus.</strong> Džemperis be gobtuvo (tamsiai žalias, pilkas, mėlynas, bordo) arba Polo marškinėliai (šviesiai pilki, mėlyni, violetiniai, balti) su mokyklos logotipu.</li>
              <li><strong>Apačia.</strong> Vienspalvės juodos, pilkos ar mėlynos kelnės/džinsai (mergaitėms – ir sijonai).</li>
            </ul>
          </div>

          <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Draudžiama.</strong> Sportinės kelnės (treningai), plėšyti džinsai, paplūdimio apranga, šlepetės, avalynė aukšta pakulne. Taip pat mokykloje labai nemandagu ir nepriimtina dėvėti drabužius, <strong>apnuoginančius juosmenį</strong> (pvz., trumpos palaidinės, „crop tops“), gilias iškirptes ar pernelyg trumpus sijonus.</p>
          <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80" alt="Tvarkinga avalynė" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />

          <div class="flex flex-col gap-3 mt-6">
            <a href="https://antakalnio.lt/progimnazija/uniformos" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:text-primary-300 underline font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Informacija apie uniformas (antakalnio.lt)
            </a>
            <a href="https://docs.google.com/document/d/1DdRpNCeNFYRQJhkY-SxjNCpAqTF0VNUPBO1pyVzB8bs/edit?tab=t.0" target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:text-primary-300 underline font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Uniformų dėvėjimo tvarkos aprašas
            </a>
          </div>
        `
      },
      {
        id: 'accessories',
        title: 'Aksesuarai ir etiketas',
        imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Rankinės ir Pirštinės</h3>
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80" alt="Stilinga rankinė" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Prie gatvėje dėvimų drabužių nešiokite spalviškai suderintą didesnę rankinę. Prie popiečio drabužių – nedidelį rankinuką, prie vakarinės suknelės – mažą krepšelį.</p>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Dama gatvėje nuolat mūvi pirštines. Prie vakarinės suknelės mūvimos pirštinės nusiimamos prie stalo. Namų šeimininkė, sveikindama svečius, niekada nemūvi pirštinių.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kvepalai</h3>
          <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80" alt="Kvepalai" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Būkite saikingi. Kvepalai neturi skelbti apie jūsų pasirodymą, o tik lydėti kaip šešėlis. Dieną vartokite tualetinį vandenį, vakare – kvepalus.</p>
        `
      },
      {
        id: 'public_transport',
        title: 'Viešasis transportas ir išvykos',
        imageUrl: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Moksleivio elgesys viešajame transporte</h3>
          <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80" alt="Autobusas" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Viešasis transportas – tai vieta, kur pasimato tavo mandagumas ir sąmoningumas.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Saugumas stotelėje.</strong> Nestovėkite prie pat gatvės krašto (bordiūro), kad atvažiuojantis autobusas netyčia jūsų neužkabintų veidrodėliu. Visada palikite vietos išlipantiems keleiviams.</li>
            <li><strong>Įlipimas ir išlipimas.</strong> Lipkite tik autobusui visiškai sustojus. Viduje nestovėkite prie pat durų, jei neketinate išlipti kitoje stotelėje – tai trukdo kitiems įlipti ir išlipti.</li>
            <li><strong>Užleisk vietą.</strong> Tai auksinė taisyklė. Pamatęs vyresnį žmogų, nėščią moterį ar tėvus su mažais vaikais – atsistok ir pasiūlyk atsisėsti.</li>
            <li><strong>Kuprinė.</strong> Įlipęs į autobusą, nusiimk kuprinę ir laikyk ją rankose arba pasidėk ant kelių (jei sėdi). Ant nugaros palikta kuprinė trukdo kitiems praeiti ir gali ką nors užgauti.</li>
            <li><strong>Ausinės ir aplinka.</strong> Muzikos klausykis tik su ausinėmis, tačiau svarbu girdėti aplinkinių prašymus (pvz., praleisti) ar vairuotojo pranešimus. Būk budrus!</li>
            <li><strong>Maistas.</strong> Autobuse nevalgome ledų, kebabų ar kito tepančio maisto.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Elgesys mokyklos išvykose</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Važiuojant užsakytu autobusu į ekskursiją galioja griežtesnės saugumo taisyklės.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Saugos diržai.</strong> Vos atsisėdus, privaloma prisisegti saugos diržą. Tai ne rekomendacija, o įstatymas ir jūsų saugumo garantas.</li>
            <li><strong>Jokio vaikščiojimo.</strong> Autobusui važiuojant griežtai draudžiama stotis ar vaikščioti po saloną. Tai pavojinga staigiai stabdant.</li>
            <li><strong>Pagalbos prašymas.</strong> Jei pasijutote blogai, pykina ar reikia sustoti į tualetą, nelaukite paskutinės minutės. Pakelkite ranką arba garsiai, bet mandagiai kreipkitės į mokytoją ar vairuotoją: „Atsiprašau, man negera, ar galėtume sustoti?“. Nereikia gėdytis – tai natūralu.</li>
            <li><strong>Švara.</strong> Išlipdami iš autobuso, susirinkite visas savo šiukšles. Palikite vietą tokią, kokią radote.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Svečiuose (lankantis kito namuose)</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Nesvarbu, ar tai draugo gimtadienis, ar klasės draugų susitikimas – lankantis kito namuose galioja svarbios bendravimo ir atsakomybės taisyklės:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Punktualumas.</strong> Nevėluokite (leistina iki 10–15 minučių) ir neatvykite pernelyg anksti, kad nesutrukdytumėte šeimininkams besiruošiant.</li>
            <li><strong>Dovanėlė.</strong> Atvykstant į svečius mandagu atnešti nedidelę lauktuvę, pavyzdžiui, skanėstą prie arbatos. Taip parodote dėkingumą už kvietimą.</li>
            <li><strong>Pagalba šeimininkams.</strong> Pasisiūlykite padėti padengti stalą ar nunešti indus – tai parodo jūsų rūpestį ir palengvina šventės ruošą.</li>
            <li><strong>Namų taisyklės.</strong> Gerbkite draugo namų taisykles: nusiaukite batus, nerėkaukite ir nevaikščiokite po kambarius be leidimo ar kvietimo.</li>
          </ul>
        `
      },
      {
        id: 'hygiene',
        title: 'Asmens higiena',
        imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Švara – mandagumo dalis</h3>
          <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80" alt="Rankų plovimas su muilu" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tvarkinga išvaizda rodo pagarbą sau ir aplinkiniams. Mūsų kūnas keičiasi, todėl švara tampa vis svarbesnė.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Maudymasis.</strong> Prauskitės po dušu ar vonioje kasdien. Taip pat nepamirškite kasdien nuplauti veido bei pasivalyti dantų bent du kartus dienoje ir naudoti dantų siūlą. Skirtingam plaukų tipui reikia skirtingos priežiūros – plaukite juos pagal poreikį, kad atrodytų sveiki.</li>
            <li><strong>Bendras vonios kambarys.</strong> Jei dalinatės vonios kambariu su kitais šeimos nariais, nepraleiskite ten visos amžinybės ir taupykite karštą vandenį! Po savęs palikite švarą: nušluostykite prilaisčius vandens, nuleiskite klozeto dangtį, pakabinkite rankšluostį, nuskalaukite kriauklę (dantų pastos likučius).</li>
            <li><strong>Čiaudėjimo ir kosėjimo etiketas.</strong> Saugiausia ir mandagiausia čiaudėti ar kosėti į vienkartinę nosinaitę, o jos neturint – <strong>į sulenktą vidinę rankos alkūnę</strong>. Niekada nečiaudėkite į delnus (kad neperneštumėte mikrobų ant paviršių ar pasisveikinant). Marškinių rankovė išorėje NĖRA servetėlė nosiai nusišluostyti – visada nešiokitės vienkartinių nosinaičių.</li>
            <li><strong>Kaip reaguoti į čiaudulį.</strong> Nusičiaudėjus pačiam, reikėtų tyliai pasakyti <em>„Atsiprašau“</em>. O kaip reaguoti, kai nusičiaudi kitas? Šiuolaikinis oficialus etiketas pataria tiesiog <strong>nepastebėti ir nekomentuoti</strong>, ypač viešumoje ar klasėje, kad neatkreiptumėte nereikalingo dėmesio. Visgi, artimų draugų ar šeimos rate palinkėti <em>„Į sveikatą!“</em> yra gražus, šiltas gestas.</li>
            <li><strong>Rankų higiena.</strong> Dažnai plaukite rankas – prieš valgį, pasinaudoję tualetu, grįžę namo ar pabuvę viešajame transporte.</li>
            <li><strong>Apranga.</strong> Drabužiai turi būti švarūs. Net jei labai mėgstate konkretų rūbą, jei jis nešvarus, nesivilkite ir tiesiog jį išskalbkite arba palaukite, kol išskalbs tėvai.</li>
          </ul>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Valgymo kultūra</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Valgymas pamokų metu.</strong> Pamokų metu valgyti negalima. Tai blaško tave ir kitus, be to, trupiniai ir kvapai klasėje yra nepageidaujami. Užkandžiauk per pertraukas.</li>
            <li><strong>Kalbėjimas pilna burna.</strong> Niekada nekalbėk kramtydamas. Tai neestetiška ir nemandagu. Pirma nuryk kąsnį, tada kalbėk.</li>
            <li><strong>Kramtomoji guma.</strong> Kramtyti gumą kalbant su kitu žmogumi ar pamokos metu yra nepagarba. Jei kramtai gumą, daryk tai diskretiškai (užsičiaupęs) ir tik ne pamokų ar oficialių pokalbių metu. Išspjauk ją į šiukšliadėžę, o ne po suolu!</li>
          </ul>
        `
      },
      {
        id: 'language',
        title: 'Kalbos kultūra',
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Žodžiai turi galią</h3>
          <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Bendravimas" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tavo kalba pasako apie tave daugiau nei apranga.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Keiksmažodžiai.</strong> Keiksmai nerodo „kietumo“, jie rodo skurdų žodyną ir nepagarbą aplinkiniams. Mandagus žmogus randa kitų būdų emocijoms išreikšti.</li>
            <li><strong>Atsiprašymas.</strong> Jei netyčia nusikeikei ar pasakei kažką nemalonaus, svarbu atsiprašyti. Sakyk: „Atsiprašau, man išsprūdo“ arba „Atsiprašau, nenorėjau to pasakyti“.</li>
            <li><strong>Stebuklingi žodžiai.</strong> „Ačiū“, „Prašau“, „Laba diena“, „Viso gero“ – šie žodžiai atidaro visas duris.</li>
          </ul>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip reaguoti į nepagarbą?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei girdi keiksmažodžius ar matai nepagarbų elgesį:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Neprisidėk.</strong> Niekada neatsakyk tuo pačiu. Jei tave įžeidė, geriausias atsakas – ramybė ir pasitraukimas.</li>
            <li><strong>Pasakyk „Ne“.</strong> Jei draugai keikiasi, gali ramiai pasakyti: „Man nepatinka tokie žodžiai“ arba „Prašau prie manęs nesikeikti“.</li>
            <li><strong>Ignoruok.</strong> Kartais geriausia reakcija į provokaciją yra tiesiog jos nepastebėti.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Neverbalinis bendravimas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai viskas, ką pasakome nenaudodami žodžių. Tyrimai rodo, kad bendraujant akis į akį, daugiau nei 60–90 % informacijos perduodama būtent per kūno kalbą, toną ir gestus. Tai „tylioji kalba“, kuri dažnai yra nuoširdesnė už ištartus žodžius.</p>
          
          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">1. Kūno kalba (Kinezika)</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Laikysena.</strong> Atvira laikysena (nesukryžiuotos rankos) rodo pasitikėjimą ir palankumą; susigūžimas – gynybinę poziciją.</li>
            <li><strong>Gestai.</strong> Rankų judesiai gali sustiprinti mintį, tačiau perteklinis gestikuliavimas gali rodyti nerimą.</li>
            <li><strong>Mėgdžiojimas (Mirroring).</strong> Jei pašnekovas subtiliai atkartoja jūsų pozą, tai dažniausiai reiškia, kad jis jaučia jums empatiją arba pritaria jūsų nuomonei.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">2. Veido išraiškos ir akių kontaktas</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Mikroišraiškos.</strong> Akimirksniu pasirodančios tikrosios emocijos (pvz., trumpas lūpų virptelėjimas), kurias sunku suklastoti.</li>
            <li><strong>Akių kontaktas.</strong> Tiesioginis žvilgsnis rodo susidomėjimą, tačiau per ilgas spoksojimas gali būti suvokiamas kaip agresija. Vengimas žiūrėti į akis dažnai signalizuoja apie nepatogumą ar nesaugumą.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">3. Paralingvistika (Balso savybės)</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Tonis ir aukštis.</strong> Pakeltas tonas gali reikšti pyktį arba susijaudinimą.</li>
            <li><strong>Tempas.</strong> Greita kalba dažnai išduoda nervingumą, o lėta ir rami – autoritetą.</li>
            <li><strong>Pauzės.</strong> Jos gali būti naudojamos pabrėžti svarbią mintį arba rodyti dvejones.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">4. Proksemika (Erdvės pojūtis)</h4>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Intymioji zona (iki 45 cm).</strong> Skirta tik artimiausiems.</li>
            <li><strong>Asmeninė zona (45 cm – 1,2 m).</strong> Draugiškiems pokalbiams.</li>
            <li><strong>Socialinė zona (1,2 m – 3,6 m).</strong> Darbo reikalams ir nepažįstamiems.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Kodėl tai svarbu?</h4>
          <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Auksinė taisyklė.</strong> Jei žmogaus žodžiai prieštarauja jo kūno kalbai (pvz., sako „aš nesijaudinu“, bet trepsi koja), mes pasąmoningai labiau tikime kūno kalba.</p>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Patarimai geresniam bendravimui:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Stebėkite visumą.</strong> Vienas gestas (pvz., sukryžiuotos rankos) gali reikšti tiesiog tai, kad žmogui šalta. Išvadas darykite matydami bent kelis ženklus vienu metu.</li>
            <li><strong>Kontroliuokite save.</strong> Sąmoningai atpalaiduoti pečiai ir švelni šypsena padeda ne tik pašnekovui pasijusti geriau, bet ir jums patiems nusiraminti.</li>
          </ul>
        `
      },
      {
        id: 'respect',
        title: 'Pagarbus elgesys',
        imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Konfliktinės situacijos</h3>
          <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80" alt="Pagalba draugui" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kaip elgtis, kai aplink tvyro įtampa?</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Rėkimas.</strong> Jei matai rėkiantį mokytoją ar mokinį – neįsitrauk į konfliktą ir nerėk atgal. Išlik ramus. Jei situacija pavojinga ar nuolatinė, būtinai pasakyk tėvams arba mokyklos psichologui.</li>
            <li><strong>Apkalbos.</strong> Jei girdėjai, kaip kažkas viešai apkalba mokinį ar mokytoją, neprisidėk prie to. Geriausia reakcija – pasakyti „Man nepatinka apkalbos“ arba tiesiog nueiti. Apkalbos žemina tą, kuris apkalba.</li>
            <li><strong>Pagalba.</strong> Jei matai, kad kažkas skriaudžiamas, nelik abejingas. Pakviesk suaugusįjį.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Sportinis etiketas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Pagarba yra svarbi ne tik klasėje ar namuose, bet ir sportuojant:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Garbingas žaidimas.</strong> Visada laikykitės žaidimo taisyklių, nežaiskite nešvariai. Svarbiausia – garbingas varžymasis.</li>
            <li><strong>Mokėti pralaimėti (ir laimėti).</strong> Tikras sportininkas moka oriai pralaimėti – pasveikina varžovus ir neieško pasiteisinimų. Taip pat svarbu mokėti ir laimėti: nesityčioti iš pralaimėjusių, nesišaipyti, o elgtis pagarbiai.</li>
            <li><strong>Pagarba teisėjams ir priešininkams.</strong> Gerbkite teisėjų sprendimus net jei su jais nesutinkate. Palaikomųjų rungtynių metu stadione taip pat nerėkaukite įžeidinėjimų priešininkų komandai – kultūra privalo išlikti ir tribūnose.</li>
          </ul>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfz-k14DibU7M8GBV4OkGULyHrRHw6vadfdDTnNbsAveJTW7w/viewform" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 hover:bg-red-100 transition-colors group shadow-sm">
              <div class="mr-3 bg-white dark:bg-slate-800 p-2 rounded-full text-red-500 group-hover:text-red-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div>
                <h4 class="font-bold text-red-800 dark:text-red-300 text-sm">Pranešk apie patyčias</h4>
                <p class="text-xs text-red-600 mt-1">Anoniminė forma</p>
              </div>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCMuGJFcTpZzRm4R4zQJfU1FWPtqC-ZtwcIyvycL3BnNZevw/viewform" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors group shadow-sm">
              <div class="mr-3 bg-white dark:bg-slate-800 p-2 rounded-full text-amber-500 group-hover:text-amber-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 class="font-bold text-amber-800 text-sm">Dėkingumo paštas</h4>
                <p class="text-xs text-amber-600 mt-1">Padėkok mokytojui ar draugui</p>
              </div>
            </a>
          </div>

          <div class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 class="font-bold text-blue-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Naudinga nuoroda
            </h4>
            <p class="text-sm text-blue-700 mb-2">Daugiau apie bendravimą be pykčio ir konfliktų sprendimą:</p>
            <a href="https://nk.antakalnio.lt/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Nesmurtinės komunikacijos portalas &rarr;</a>
          </div>
        `
      },
      {
        id: 'theater_cinema',
        title: 'Teatras ir kinas',
        imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Punktualumas</h3>
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" alt="Kino teatras" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Į teatrą ar kiną vėluoti nemandagu. Į teatro salę po trečio skambučio žiūrovai dažniausiai neįleidžiami iki pertraukos.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Ėjimas į savo vietą</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei tenka praeiti pro jau sėdinčius žiūrovus, visada eikite <strong>veidu į juos</strong> (nugara į sceną/ekraną). Atsiprašykite už sutrukdymą.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Telefonai ir maistas</h3>
          <img src="https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80" alt="Užkandžiai kine" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Telefonai.</strong> Privalo būti išjungti arba nustatyti begarsiu režimu. Ekrano šviesa tamsoje trukdo kitiems labiau nei garsas.</li>
            <li><strong>Maistas.</strong> Teatre salėje nevalgoma. Kine užkandžiauti priimta, tačiau venkite čežančių pakuočių ir stiprių kvapų.</li>
          </ul>
        `
      },
      {
        id: 'public_spaces',
        title: 'Pagarba viešose erdvėse: muzika ir triukšmas',
        imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Muzika ir ausinės</h3>
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" alt="Muzika su ausinėmis" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Muzika yra puikus būdas atsipalaiduoti, tačiau viešumoje ji neturi trukdyti kitiems. Svarbu prisiminti:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Garso lygis.</strong> Jei tavo muziką girdi šalia sėdintis žmogus – vadinasi, ji per garsi. Tai ne tik nemandagu, bet ir kenkia tavo klausai.</li>
            <li><strong>Ausinės.</strong> Viešajame transporte, laukiamuosiuose ar bibliotekoje visada naudok ausines. Niekada neleisk muzikos per telefono garsiakalbį.</li>
            <li><strong>Saugumas.</strong> Eidamas per gatvę ar važiuodamas dviračiu, nusiimk bent vieną ausinę, kad girdėtum aplinką.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Tyla viešose vietose</h3>
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80" alt="Biblioteka" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Bibliotekos, laukiamieji, ligoninės ir viešasis transportas yra bendros erdvės, kuriose visi nori jaustis patogiai. Triukšmas sukelia stresą ir vargina aplinkinius.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Bibliotekos.</strong> Čia tyla yra šventa. Kalbėkite tik pašnibždomis, telefoną laikykite begarsiu režimu.</li>
            <li><strong>Laukiamieji ir ligoninės.</strong> Gerbkite kitų privatumą ir ramybę. Venkite garsių pokalbių telefonu ar juoko.</li>
            <li><strong>Viešasis transportas.</strong> Tai ne vieta koncertams ar garsiems ginčams. Jei kalbate telefonu, darykite tai trumpai ir tyliai.</li>
          </ul>
        `,
        scenarios: [
          {
            role: 'student',
            situation: 'Važiuojate autobusu ir norite paklausyti naujos dainos, bet pamiršote ausines.',
            action: 'Neklausykite muzikos per garsiakalbį. Palaukite, kol grįšite namo, arba klausykite labai tyliai priglaudę telefoną prie ausies (jei tai netrukdo kitiems).',
            explanation: 'Muzika per garsiakalbį viešajame transporte yra vienas didžiausių etiketo pažeidimų, rodantis nepagarbą kitiems keleiviams.'
          },
          {
            role: 'employee',
            situation: 'Laukiate priėmimo pas gydytoją bendroje eilėje ir jums skambina kolega aptarti darbo reikalų.',
            action: 'Atsiliepkite tyliai, pasakykite, kad esate viešoje vietoje, ir susitarkite perskambinti vėliau. Jei pokalbis skubus – išeikite į koridorių ar lauką.',
            explanation: 'Kitiems žmonėms nereikia (ir nemalonu) klausytis jūsų darbo detalių ar asmeninių problemų.'
          }
        ]
      }
    ]
  },
  {
    id: 'business',
    title: 'Verslo etiketas',
    description: 'Profesionalus įvaizdis, derybos ir bendravimas verslo aplinkoje.',
    iconName: 'Briefcase',
    color: 'slate',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'business_intro',
        title: 'Verslo etiketo pagrindai',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
        audioPhrases: [
          { phrase: "Ačiū, kad skyrėte laiko", lang: "lt-LT", label: "Padėka (LT)" },
          { phrase: "Thank you for your time", lang: "en-US", label: "Padėka (EN)" },
          { phrase: "Atsiprašau, ar galiu paklausti?", lang: "lt-LT", label: "Mandagus įsiterpimas (LT)" },
          { phrase: "Excuse me, may I ask?", lang: "en-US", label: "Mandagus įsiterpimas (EN)" }
        ],
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Pirmasis įspūdis</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Verslo pasaulyje, kaip ir mokykloje, pirmasis įspūdis yra labai svarbus. Tai tinka tiek darbo pokalbiams, tiek egzaminams, pristatymams ar susitikimams su mokyklos administracija.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Punktualumas.</strong> Vėlavimas rodo nepagarbą kito laikui. Į pamokas, egzaminus ar susitikimus su direktoriumi visada ateikite laiku.</li>
            <li><strong>Prisistatymas.</strong> Aiškiai ištarkite savo vardą ir pavardę. Tai rodo pasitikėjimą savimi, ypač bendraujant su naujais mokytojais ar svečiais.</li>
            <li><strong>Laikysena.</strong> Tiesus stuburas ir atviras žvilgsnis rodo, kad esate pasiruošę bendradarbiauti ir klausytis.</li>
          </ul>
        `,
        scenarios: [
          {
            role: 'student',
            situation: 'Vėluojate į svarbų susitikimą su mokyklos direktoriumi dėl nenumatytų aplinkybių.',
            action: 'Jei įmanoma, praneškite iš anksto. Atėję atsiprašykite trumpai, nepasakokite ilgų istorijų ir padėkokite, kad vis tiek jus priėmė.',
            explanation: 'Vėlavimas yra nemandagus, bet gebėjimas prisiimti atsakomybę ir nešvaistyti kito laiko pasiteisinimais yra vertinamas.'
          },
          {
            role: 'employee',
            situation: 'Pirmą kartą susitinkate su nauju kolega ar partneriu.',
            action: 'Atsistokite, nusišypsokite, tvirtai paspauskite ranką ir aiškiai pasakykite savo vardą bei pareigas. Palaikykite akių kontaktą.',
            explanation: 'Tvirtas, bet ne per stiprus rankos paspaudimas ir akių kontaktas kuria pasitikėjimą nuo pat pirmos akimirkos.'
          }
        ]
      },
      {
        id: 'business_dress',
        title: 'Dalykinė apranga',
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Aprangos kodai</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tinkama apranga rodo profesionalumą. Tai svarbu ne tik darbe, bet ir mokyklos renginiuose, egzaminuose ar atstovaujant mokyklą olimpiadose.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Business Formal (Oficiali).</strong> Tamsus kostiumas, balti marškiniai (vyrams). Kostiumėlis (moterims). Tinka egzaminams, išleistuvėms, oficialiems minėjimams ar susitikimams su svarbiais svečiais.</li>
            <li><strong>Business Casual (Kasdienė dalykinė).</strong> Tvarkinga apranga be griežtų reikalavimų. Mokytojams tai kasdienė darbo apranga, mokiniams – tvarkinga uniforma.</li>
            <li><strong>Smart Casual (Puošni kasdienė).</strong> Tvarkingi džinsai su švarku ar marškiniais. Tinka neformaliems susitikimams, klasės šventėms ar ekskursijoms.</li>
          </ul>
        `
      },
      {
        id: 'hosting_etiquette',
        title: 'Svečiuose ir priimant svečius',
        imageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Svečiavimosi planavimas</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Papildomi svečiai.</strong> Prieš atsivesdami papildomą draugą ar šeimos narį į vakarėlį ar vakarienę, privalote iš anksto paklausti ir gauti šeimininko sutikimą. Be įspėjimo atsivesti daugiau žmonių yra didžiulė nepagarba.</li>
            <li><strong>Atšaukimas dėl ligos.</strong> Jei anksčiau dieną blogai pasijutote ir nusprendėte nedalyvauti vakaro renginyje, privalote kuo greičiau paskambinti ir informuoti šeimininką.</li>
          </ul>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip elgtis atvykus į svečius?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Geras svečias palieka malonų įspūdį ir yra laukiamas vėl. Štai svarbiausios taisyklės lankantis kito namuose:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Punktualumas.</strong> Niekada nevėluokite, bet ir neatvykite per anksti. Jei atvyksite anksčiau, šeimininkai dar gali būti nepasiruošę (optimalu nevėluoti daugiau nei 10-15 minučių).</li>
            <li><strong>Dovanėlė šeimininkams.</strong> Atvykstant į svečius (ypač pirmą kartą arba kviečiant pietų ar nakvynei) priimta atnešti nedidelę dovanėlę, pavyzdžiui, gėlių, desertą prie arbatos ar šokoladą, kaip padėką už kvietimą.</li>
            <li><strong>Laikykitės namų taisyklių ir dienotvarkės.</strong> Kiekvieni namai turi savo taisykles. Eidami miegoti laikykitės šeimininkų ritmo, ryte kelkitės tuomet, kai keliasi jie. Pasiklokite lovą, sutvarkykite kambarį ir pasikabinkite rankšluostį vonioje.</li>
            <li><strong>Nekritikuokite ir nelyginkite.</strong> Būdami svečiuose niekada nesakykite: „Mūsų namuose mes darome ne taip...“ ar „Pas mus skaniau...“. Tai skamba tarsi priekaištas ir verčia šeimininkus jaustis prastai.</li>
            <li><strong>Nesmalsaukite.</strong> Gerbkite kitų privatumą. Nekaitaliokite TV kanalų be atsiklausimo, nevaikščiokite po kambarius laisvai, neatidarinėkite spintų, stalčių ar šaldytuvo, jei nesate pakviesti. Nereikalaukite užkandžių – palaukite, kol pasiūlys.</li>
            <li><strong>Pagalba šeimininkams.</strong> Mandagu pasisiūlyti padėti, pavyzdžiui, padengti stalą, nunešti lėkštes po valgio į virtuvę. Taip parodysite, kad nesate tik aptarnaujamas svečias, bet ir dėmesingas draugas.</li>
          </ul>
        `
      },
      {
        id: 'business_meetings',
        title: 'Susitikimų valdymas',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Efektyvūs susitikimai</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Mokinių tarybos posėdžiai, grupiniai projektai ar klasės valandėlės taip pat yra „verslo susitikimai“, kuriuose galioja tos pačios taisyklės.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Darbotvarkė.</strong> Žinokite, ką aptarsite (pvz., projektų temos, renginio planavimas). Tai taupo visų laiką.</li>
            <li><strong>Klausymasis.</strong> Nepertraukinėkite. Išklausykite kitų nuomonę, net jei nesutinkate. Tai ypač svarbu dirbant komandoje.</li>
            <li><strong>Užrašai.</strong> Užsirašykite svarbiausius sprendimus ir kas už ką atsakingas (pvz., kas atneš plakatus, kas paruoš pristatymą).</li>
          </ul>
        `
      },
      {
        id: 'business_email',
        title: 'Dalykinis susirašinėjimas',
        imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
        audioPhrases: [
          { phrase: "Pagarbiai", lang: "lt-LT", label: "Atsisveikinimas (LT)" },
          { phrase: "Sincerely", lang: "en-US", label: "Atsisveikinimas (EN)" },
          { phrase: "Laukiu Jūsų atsakymo", lang: "lt-LT", label: "Pabaiga (LT)" },
          { phrase: "I look forward to hearing from you", lang: "en-US", label: "Pabaiga (EN)" }
        ],
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">El. laiškų etiketas</h3>
          <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" alt="Darbas kompiuteriu" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Rašytinė komunikacija su mokytojais, administracija ar būsimais darbdaviais turi būti profesionali ir aiški.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Tema.</strong> Turi būti konkreti (pvz., „Dėl matematikos kontrolinio“, „Dėl praktikos vietos“, „8a klasės išvyka“).</li>
            <li><strong>Kreipinys.</strong> „Laba diena, Mokytojau“, „Gerb. Direktoriau“. Venkite „Sveiki“ oficialiuose laiškuose vyresniems asmenims, nebent jau esate sutarę dėl laisvesnio bendravimo.</li>
            <li><strong>Rašyba.</strong> Visada pasitikrinkite klaidas. Tai rodo atidumą ir pagarbą gavėjui.</li>
            <li><strong>Atsakymas.</strong> Į svarbius laiškus stenkitės atsakyti per 24 valandas, net jei tik patvirtinate gavimą.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'school_community',
    title: 'Mokyklos bendruomenė',
    description: 'Bendra kultūra, elgesys klasėje, mokytojų kambaryje ir renginiuose.',
    iconName: 'Users',
    color: 'indigo',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'academic_integrity',
        title: 'Akademinis sąžiningumas',
        imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kas yra akademinis sąžiningumas?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai vertybė, kuri reiškia, kad visi darbai, kuriuos atliekate (kontroliniai, projektai, namų darbai), yra atlikti jūsų pačių, sąžiningai ir be apgaulės.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Dažniausi pažeidimai</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Nusirašinėjimas.</strong> Svetimų atsakymų kopijavimas per kontrolinį ar namų darbus. Tai rodo nepagarbą sau ir savo pastangoms.</li>
            <li><strong>Plagijavimas.</strong> Svetimo teksto ar idėjų pateikimas kaip savo, nenurodant autoriaus. Jei naudojate informaciją iš interneto, visada nurodykite šaltinį.</li>
            <li><strong>„Šperos“.</strong> Neleistinų paruoštukių naudojimas. Tai trumpalaikė nauda, kuri trukdo išmokti ir suprasti medžiagą.</li>
            <li><strong>Pagalba kitiems sukčiauti.</strong> Leidimas nusirašyti yra toks pat pažeidimas kaip ir pats nusirašinėjimas.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kodėl verta būti sąžiningam?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Sąžiningumas kuria pasitikėjimą. Mokytojai vertina pastangas ir klaidas labiau nei tobulą, bet nesąžiningą darbą. Be to, tik savarankiškai atliktas darbas suteikia tikrų žinių, kurios pravers ateityje.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Dirbtinis intelektas (DI)</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">DI įrankiai (kaip ChatGPT, Gemini) gali būti puikūs pagalbininkai mokantis, tačiau svarbu juos naudoti atsakingai:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Pagalba, ne pakaitalas.</strong> Naudok DI idėjoms generuoti, paaiškinimams gauti ar klaidoms taisyti, bet ne visam darbui už tave parašyti.</li>
            <li><strong>Kritinis mąstymas.</strong> DI gali klysti. Visada tikrink informaciją ir nepasitikėk aklai.</li>
            <li><strong>Sąžiningumas.</strong> Jei naudojai DI rengdamas darbą, visada tai nurodyk. Pateikti DI sugeneruotą tekstą kaip savo yra plagijavimas.</li>
          </ul>
        `
      },
      {
        id: 'teacher_room',
        title: 'Mokytojų kambarys ir kabinetai',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Mokytojų kambarys – mokytojų poilsio zona</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Beldimas.</strong> Prieš įeinant į kabinetą ar mokytojų kambarį, būtina pasibelsti ir palaukti leidimo įeiti.</li>
            <li><strong>Pertraukos.</strong> Mokytojų kambarys yra vieta, kur mokytojai ilsisi ir ruošiasi pamokoms. Mokiniai čia turėtų užeiti tik esant svarbiam reikalui.</li>
            <li><strong>Pagarba.</strong> Įėjus būtina pasisveikinti su visais esančiais mokytojais, ne tik su tuo, kurio ieškote.</li>
          </ul>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kabineto kultūra</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kabinetas yra mokymosi erdvė. Nelieskite mokytojo stalo, kompiuterio ar asmeninių daiktų be leidimo. Išeidami palikite savo darbo vietą tvarkingą.</p>
        `
      },
      {
        id: 'student_teacher_comm',
        title: 'Mokinio ir mokytojo bendravimas',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Prasmingas bendravimas</h3>
          <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80" alt="Mokinys ir mokytojas" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai daugiau nei pamoka. Tai abipusė pagarba, noras suprasti ir augti kartu. Prasmingas ryšys kuriamas, kai abi pusės jaučiasi saugios ir vertinamos.</p>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Ar mokytojas gali būti draugas?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Mokytojas yra mentorius, vadovas ir pagalbininkas. Nors bendravimas gali būti šiltas, atviras ir draugiškas, svarbu išlaikyti <strong>profesionalias ribas</strong>. Mokytojas nėra „draugelis“ – toks atstumas būtinas, kad vertinimas išliktų objektyvus, o mokinys jaustųsi saugiai žinodamas taisykles.</p>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip susikalbėti?</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Kaip paklausti?</strong> Pradėkite mandagiai: „Atsiprašau, ar galėčiau pasitikslinti?“ arba „Norėčiau paklausti dėl...“.</li>
            <li><strong>Kaip paprašyti?</strong> Naudokite „Aš“ kalbą: „Būčiau dėkingas, jei paaiškintumėte dar kartą“ vietoj reikalavimo „Paaiškinkite“.</li>
            <li><strong>Kaip neįžeisti?</strong> Venkite kaltinimų („Jūs blogai išaiškinote“). Sakykite apie savo patirtį: „Aš nesupratau šios dalies, man sunku įveikti šią užduotį“.</li>
            <li><strong>Kaip išgirsti?</strong> Klausykitės ne tam, kad atsakytumėte, o tam, kad suprastumėte. Nepertraukinėkite ir leiskite mokytojui baigti mintį.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">KĄ SAKO KŪNAS?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai viskas, ką pasakome nenaudodami žodžių. Tyrimai rodo, kad bendraujant akis į akį, daugiau nei 60–90 % informacijos perduodama būtent per kūno kalbą, toną ir gestus. Tai „tylioji kalba“, kuri dažnai yra nuoširdesnė už ištartus žodžius.</p>
          
          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">1. Kūno kalba (Kinezika)</h4>
          <p class="mb-2 text-gray-700 dark:text-gray-300">Tai judesiai, kurie išduoda mūsų vidinę būseną:</p>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Laikysena.</strong> Atvira laikysena (nesukryžiuotos rankos) rodo pasitikėjimą ir palankumą; susigūžimas – gynybinę poziciją.</li>
            <li><strong>Gestai.</strong> Rankų judesiai gali sustiprinti mintį, tačiau perteklinis gestikuliavimas gali rodyti nerimą.</li>
            <li><strong>Mėgdžiojimas (Mirroring).</strong> Jei pašnekovas subtiliai atkartoja jūsų pozą, tai dažniausiai reiškia, kad jis jaučia jums empatiją arba pritaria jūsų nuomonei.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">2. Veido išraiškos ir akių kontaktas</h4>
          <p class="mb-2 text-gray-700 dark:text-gray-300">Veidas yra pagrindinis emocijų žemėlapis:</p>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Mikroišraiškos.</strong> Akimirksniu pasirodančios tikrosios emocijos (pvz., trumpas lūpų virptelėjimas), kurias sunku suklastoti.</li>
            <li><strong>Akių kontaktas.</strong> Tiesioginis žvilgsnis rodo susidomėjimą, tačiau per ilgas spoksojimas gali būti suvokiamas kaip agresija. Vengimas žiūrėti į akis dažnai signalizuoja apie nepatogumą ar nesaugumą.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">3. Paralingvistika (Balso savybės)</h4>
          <p class="mb-2 text-gray-700 dark:text-gray-300">Tai ne ką sakote, o kaip sakote:</p>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Tonis ir aukštis.</strong> Pakeltas tonas gali reikšti pyktį arba susijaudinimą.</li>
            <li><strong>Tempas.</strong> Greita kalba dažnai išduoda nervingumą, o lėta ir rami – autoritetą.</li>
            <li><strong>Pauzės.</strong> Jos gali būti naudojamos pabrėžti svarbią mintį arba rodyti dvejones.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">4. Proksemika (Erdvės pojūtis)</h4>
          <p class="mb-2 text-gray-700 dark:text-gray-300">Kiekvienas turime „asmeninį burbulą“. Atstumas tarp žmonių nusako santykių pobūdį:</p>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Intymioji zona (iki 45 cm).</strong> Skirta tik artimiausiems.</li>
            <li><strong>Asmeninė zona (45 cm – 1,2 m).</strong> Draugiškiems pokalbiams.</li>
            <li><strong>Socialinė zona (1,2 m – 3,6 m).</strong> Darbo reikalams ir nepažįstamiems.</li>
          </ul>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Kodėl tai svarbu?</h4>
          <p class="mb-4 text-gray-700 dark:text-gray-300"><strong>Auksinė taisyklė.</strong> Jei žmogaus žodžiai prieštarauja jo kūno kalbai (pvz., sako „aš nesijaudinu“, bet trepsi koja), mes pasąmoningai labiau tikime kūno kalba.</p>

          <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Patarimai geresniam bendravimui:</h4>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Stebėkite visumą.</strong> Vienas gestas (pvz., sukryžiuotos rankos) gali reikšti tiesiog tai, kad žmogui šalta. Išvadas darykite matydami bent kelis ženklus vienu metu.</li>
            <li><strong>Kontroliuokite save.</strong> Sąmoningai atpalaiduoti pečiai ir švelni šypsena padeda ne tik pašnekovui pasijusti geriau, bet ir jums patiems nusiraminti.</li>
          </ul>
        `
      },
      {
        id: 'parent_meetings',
        title: 'Tėvų susirinkimai',
        imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Pagalba šeimai auginančiai vaikus</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tyrimai rodo, kad tėvų įtraukimas į mokyklos gyvenimą tiesiogiai siejasi su geresniais vaikų pasiekimais ir elgesiu. Nors kartais tėvų susirinkimai kelia nerimą, šiuolaikinė mokykla siekia, kad jie būtų prasmingi ir įdomūs.</p>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">5+ Tėvų susirinkimų vadovas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vadovaujantis LIONS QUEST programų modeliu, siūlomos penkios aktualios temos susitikimams, kurios padeda kurti bendruomenę ir stiprinti ryšį su vaiku:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>1. Klasės bendruomenės kūrimas.</strong></li>
            <li><strong>2. Bendravimas šeimoje.</strong></li>
            <li><strong>3. Emocijos ir jų atpažinimas.</strong></li>
            <li><strong>4. Stresas ir jo valdymas.</strong></li>
            <li><strong>5. Kompiuteris namuose.</strong></li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Sėkmingo susirinkimo taisyklės</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Tikslas.</strong> Bendri susirinkimai skirti visai klasei aktualioms temoms, o ne asmeniniams vaikų pasiekimams aptarti.</li>
            <li><strong>Konfidencialumas.</strong> Individualūs klausimai sprendžiami asmeninių pokalbių metu, kad nebūtų pažeistas vaiko ar šeimos privatumas.</li>
            <li><strong>Pasirengimas.</strong> Apie susirinkimus informuojama iš anksto, nurodant temą ir trukmę.</li>
          </ul>
        `
      },
      {
        id: 'school_events',
        title: 'Mokyklos renginiai',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Himnas ir vėliava</h3>
          <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80" alt="Mokyklos renginys" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Giedant himną ar keliant vėliavą, stovime ramiai, pasitempę, nekalbame ir nesinaudojame telefonais. Tai pagarbos valstybei ženklas.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Elgesys renginio metu</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Telefonai.</strong> Renginio metu telefonai turi būti išjungti arba nustatyti begarsiu režimu. Jokių žinučių rašymo ar naršymo internete – tai rodo nepagarbą atlikėjams ir kitiems žiūrovams.</li>
            <li><strong>Fotografavimas ir filmavimas.</strong> Fotografuoti ar filmuoti galima tik jei tai netrukdo kitiems (be blykstės, neužstojant vaizdo). Svarbu: filmuoti privačius asmenis ar kelti medžiagą į socialinius tinklus be jų sutikimo yra nemandagu ir gali pažeisti privatumą. Viešuose renginiuose tai dažniausiai leidžiama, bet visada geriau pasitikslinti.</li>
            <li><strong>Tyla.</strong> Jei salėje triukšminga, o renginys jau prasidėjo, mandagiai paprašykite tylos: „Atsiprašau, negirdžiu, kas kalbama“ arba tiesiog pridėkite pirštą prie lūpų. Švilpimas ar replikos yra nemandagu.</li>
            <li><strong>Išėjimas.</strong> Jei būtina išeiti (pvz., į tualetą ar pasijutote blogai), darykite tai kuo tyliau, geriausia per plojimus arba tarp pasirodymų. Stenkitės neužstoti vaizdo kitiems.</li>
          </ul>
        `
      },
      {
        id: 'sustainable_events',
        title: 'Tvarūs mokyklos renginiai',
        imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Šventės be žalos gamtai</h3>
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" alt="Tvari šventė" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700 dark:text-gray-300">Būti mandagiam reiškia būti mandagiam ir gamtai. Planuojant klasės žiburėlį ar gimtadienį, pagalvokite apie tvarumą.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Kvietimai.</strong> Vietoj popierinių kvietimų, sukurkite gražų skaitmeninį kvietimą ar vaizdo įrašą.</li>
            <li><strong>Dekoracijos.</strong> Venkite vienkartinių balionų ir plastikinių girliandų. Naudokite daugkartines dekoracijas arba pasigaminkite jas patys iš perdirbamų medžiagų.</li>
            <li><strong>Vaišės.</strong> Naudokite daugkartinius indus arba popierinius (ne plastikinius). Atsineškite savo gertuves, kad nereikėtų pirkti vandens plastikiniuose buteliukuose.</li>
            <li><strong>Dovanos.</strong> Geriausia dovana – įspūdžiai (bilietai į kiną, ekskursija) arba valgomi dalykai, o ne plastikiniai niekučiai, kurie greitai atsibosta ir tampa šiukšlėmis.</li>
          </ul>
        `
      },
      {
        id: 'meeting_etiquette',
        title: 'Elgesys pamokų metu',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Dėmesys ir pagarba</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Pamoka yra laikas mokytis. Kaip elgtis, kad netrukdytume kitiems?</p>
          
          <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">Gamtiniai reikalai</h4>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei pamokos metu prireikia į tualetą:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Pakelkite ranką.</strong> Tyliai paprašykite mokytojo leidimo išeiti.</li>
            <li><strong>Išeikite tyliai.</strong> Tiesiog atsistokite ir kuo tyliau išeikite pro duris.</li>
            <li><strong>Grįžkite taip pat tyliai.</strong> Užimkite savo vietą nekeldami triukšmo.</li>
          </ul>

          <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">Telefonai</h4>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Telefonai pamokų metu turi būti kuprinėse ir begarsiu režimu, nebent mokytojas leido juos naudoti mokymuisi.</p>
        `
      }
    ]
  },
  {
    id: 'digital',
    title: 'Moderni skaitmeninė etika',
    description: 'El. pašto, socialinių tinklų ir vaizdo konferencijų kultūra.',
    iconName: 'Laptop',
    color: 'violet',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'email',
        title: 'El. pašto kultūra',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Temos eilutė (Subject)</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Temos eilutė yra pirmoji laiško dalis, kurią mato gavėjas. Ji turi būti aiški ir informatyvi, kad iškart atspindėtų laiško esmę. Tinkama temos eilutė padeda gavėjui suprasti laiško svarbą ir greičiau atsakyti.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 shadow-sm">
              <h4 class="font-bold text-red-800 dark:text-red-300 mb-2">Venktini pavyzdžiai ❌</h4>
              <ul class="list-disc pl-5 space-y-2 text-sm text-red-900 dark:text-red-200">
                <li><em>(Tuščia temos eilutė)</em> – Gali atsidurti šlamšto aplanke.</li>
                <li><strong>„Sveiki“</strong> – Visiškai neinformuoja apie turinį.</li>
                <li><strong>„Klausimas“</strong> – Per daug bendra frazė.</li>
                <li><strong>„SVARBU!!! PRASAU PERSKAITYTI!!!“</strong> – Atrodo tarytum rėkimas, nurodo ne temą, o tik emociją.</li>
                <li><strong>„Atsiprašau, aš susirgau ir rytoj negalėsiu...“</strong> – Tema nėra visas laiškas, ji turi būti trumpa.</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 shadow-sm">
              <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">Geri pavyzdžiai ✅</h4>
              <ul class="list-disc pl-5 space-y-2 text-sm text-green-900 dark:text-green-200">
                <li><strong>„Dėl matematikos kontrolinio darbo perlaikymo“</strong></li>
                <li><strong>„Klausimas apie biologijos projektą (Petras Petraitis, 8a kl.)“</strong></li>
                <li><strong>„Pasiūlymas dėl kalėdinio mokyklos renginio – Jonas Jonaitis“</strong></li>
                <li><strong>„Tėvų susirinkimo darbotvarkė (Gruodžio 12 d.)“</strong></li>
                <li><strong>„Vardas Pavardė – Gyvenimo aprašymas (CV)“</strong></li>
              </ul>
            </div>
          </div>
          
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Būkite konkretūs.</strong> Iš temos turi būti aišku, apie ką rašote.</li>
            <li><strong>Įtraukite svarbiausius raktinius žodžius.</strong> Tai padės vėliau lengviau rasti laišką naudojant paiešką.</li>
            <li><strong>Jei reikia, naudokite identifikatorius.</strong> Nurodykite savo klasę arba projektą, jei rašote mokytojui, turinčiam daug mokinių.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300 mt-8">Tinkamas tonas ir kalba</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Bendraujant su mokytojais, administracija ar darbdaviais el. paštu, labai svarbu naudoti atitinkamą toną ir taisyklingą kalbą:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Kreipiniai („Gerb.“ vs. „Sveiki“).</strong> Oficialiems asmenims (mokyklos vadovybei, dėstytojams, būsimam darbdaviui) naudokite formalius kreipinius: „Gerbiamas(-a) [Pavardė ar Pareigos]“ arba laiško pradžioje rašykite „Laba diena“. Kreipinys „Sveiki“ yra neutralus ir tinka kasdienei dalykinei komunikacijai, tačiau „Labas“ ar vardinis kreipinys (be „poveikio“ žodžių) skirtas tik draugams.</li>
            <li><strong>Venkite žargono (slengo).</strong> Profesionalus laiškas turi būti švarus. Nenaudokite internetinių trumpinių, populiaraus gatvės žargono, šnekamosios kalbos išsireiškimų. Rašykite pilnais, aiškiais sakiniais.</li>
            <li><strong>Ribokite emociukus (Emojis).</strong> Nors žinutėse draugams emociukai būtini emocijoms perteikti, oficialiuose laiškuose jie dažnai atrodo neprofesionaliai. Geriausia jų visai vengti arba naudoti ypatingai retai, jei su asmeniu jau bendraujate pakankamai laisvai.</li>
            <li><strong>Pagarbumas.</strong> Net jei rašote pranešdami problemą ar ginčydami įvertinimą, stenkitės išlaikyti ramų, konstruktyvų toną. Pagarbus tonas atveria duris greitesniam ir palankesniam problemų sprendimui.</li>
          </ul>
          
          <h4 class="font-bold text-lg mt-8 mb-4 text-gray-800 dark:text-gray-200 text-center">Interaktyvi El. Laiško Anatomija</h4>
          <div class="my-6 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg bg-white dark:bg-slate-800 overflow-hidden max-w-2xl mx-auto transform transition-all hover:shadow-xl">
            <!-- Mock Window Header -->
            <div class="bg-gray-100 dark:bg-slate-700 p-3 border-b border-gray-200 dark:border-slate-700 flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <span class="ml-2 text-xs text-gray-500 dark:text-gray-400 font-mono">Naujas laiškas</span>
            </div>
            
            <div class="p-6 space-y-4">
              <!-- Interactive Subject Line -->
              <div class="relative group">
                 <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Tema</label>
                 <div class="bg-gray-50 dark:bg-slate-800/50 p-3 rounded border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:bg-white dark:bg-slate-800 transition-all cursor-help flex items-center justify-between">
                   <span>Dėl namų darbų (Matematika, 8a kl.)</span>
                   <span class="text-xs text-primary-500 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Kodėl tai gerai?</span>
                 </div>
                 <div class="absolute z-20 bottom-full left-0 mb-2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
                   <strong>Gera tema.</strong> Konkreti, nurodo pamoką ir klasę. Mokytojas iškart supranta, apie ką laiškas.
                   <div class="absolute bottom-[-6px] left-6 w-3 h-3 bg-gray-800 transform rotate-45"></div>
                 </div>
              </div>
              
              <!-- Interactive Body -->
              <div class="relative group">
                 <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Turinis</label>
                 <div class="bg-gray-50 dark:bg-slate-800/50 p-4 rounded border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 min-h-[120px] hover:border-primary-400 hover:bg-white dark:bg-slate-800 transition-all cursor-help text-sm leading-relaxed">
                   <p class="mb-2"><span class="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">Laba diena, mokytoja,</span></p>
                   <p class="mb-2">Siunčiu savo namų darbus, kuriuos uždavėte vakar. Prisegtuke rasite PDF failą.</p>
                   <p><span class="bg-blue-100 dark:bg-blue-900/40 px-1 rounded">Geros dienos!</span></p>
                 </div>
                 <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 pointer-events-none text-center">
                   <strong>Struktūra.</strong><br/>
                   1. Pagarbus kreipinys (Laba diena).<br/>
                   2. Aiškus tikslas (Siunčiu namų darbus).<br/>
                   3. Mandagus atsisveikinimas.
                 </div>
              </div>

              <!-- Interactive Signature -->
              <div class="relative group border-t border-gray-100 dark:border-slate-700 pt-4 mt-2">
                  <div class="flex items-center gap-3 cursor-help opacity-75 hover:opacity-100 transition-opacity bg-gray-50 dark:bg-slate-800/50 p-2 rounded hover:bg-white dark:bg-slate-800 border border-transparent hover:border-primary-200">
                      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-sm">VP</div>
                      <div>
                          <div class="font-bold text-sm text-gray-800 dark:text-gray-200">Vardenis Pavardenis</div>
                          <div class="text-xs text-gray-500 dark:text-gray-400">8a klasės mokinys</div>
                      </div>
                  </div>
                  <div class="absolute z-20 bottom-full left-0 mb-2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
                   <strong>Parašas.</strong> Visada nurodykite savo vardą, pavardę ir klasę, kad mokytojas žinotų, kas rašo.
                   <div class="absolute bottom-[-6px] left-8 w-3 h-3 bg-gray-800 transform rotate-45"></div>
                 </div>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300 mt-8">Laiško užbaigimo frazės</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kaip ir graži pradžia, tinkamas atsisveikinimas palieka gerą paskutinį įspūdį. Prieš pridedant savo asmeninį parašą, laišką reikia mandagiai užbaigti. Štai dažniausiai naudojamos atsisveikinimo frazės ir situacijos, kada jas naudoti:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>„Pagarbiai“ (Pagarbiai,)</strong> – Pati saugiausia, standartinė ir universali frazė. Puikiai tinka bendraujant oficialiai, rašant mokytojams, vadovams, darbdaviams, ar asmenims, kuriems rašote pirmą kartą. (Angliški atitikmenys: <em>Sincerely</em>, <em>Regards</em>).</li>
            <li><strong>„Nuoširdžiai“ (Nuoširdžiai,)</strong> – Šiek tiek šiltesnė, asmeniškesnė frazė. Tinka bendraujant su žmonėmis, kuriuos jau neblogai pažįstate, tačiau vis dar išlaikant profesinį ar pagarbų toną. (Angliški atitikmenys: <em>Yours truly</em>, <em>Warm regards</em>).</li>
            <li><strong>„Geriausi linkėjimai“ / „Linkėjimai“</strong> – Tinka mažiau formaliam, kasdieniam ir draugiškam bendravimui, kai su asmeniu bendraujate nuolatos (pvz., laiškai klasiokams, būrelio draugams, kolegoms). (Angliški atitikmenys: <em>Best regards</em>, <em>Best</em>, <em>Cheers</em>).</li>
            <li><strong>„Iš anksto dėkoju“</strong> – Labai naudinga frazė, kai laiške ko nors prašote (pvz., atidėti atsiskaitymą, persiųsti medžiagą). Tai parodo jūsų dėkingumą dar prieš įvykdant prašymą.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300 mt-8">Profesionalus el. pašto parašas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kiekvieno laiško pabaigoje būtinas profesionalus parašas. Jis parodo jūsų rimtumą ir padeda gavėjui iškart suprasti, su kuo jis bendrauja. Paraše būtinai nurodykite:</p>
          <ul class="list-disc pl-5 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
            <li><strong>Vardą ir pavardę.</strong></li>
            <li><strong>Rolę.</strong> Klasę (mokiniams), pareigas (darbuotojams) arba organizaciją.</li>
            <li><strong>Kontaktinę informaciją.</strong> Telefono numerį ir, jei reikia, nuorodą į jūsų profilį / svetainę.</li>
          </ul>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded p-4 shadow-sm">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Mokinio parašo pavyzdys.</strong></p>
              <p class="text-sm text-gray-800 dark:text-gray-200 font-mono">
                Pagarbiai,<br>
                Vardenis Pavardenis<br>
                8a klasės mokinys / Gimnazijos tarybos narys<br>
                El. paštas: vardenis.p@mokykla.lt<br>
                Tel.: +370 600 00000
              </p>
            </div>
            <div class="bg-blue-50 border border-blue-200 rounded p-4 shadow-sm">
              <p class="text-sm text-blue-700 mb-2"><strong>Darbuotojo / Oficialus pavyzdys.</strong></p>
              <p class="text-sm text-blue-900 font-mono">
                Nuoširdžiai,<br>
                Rūta Jonaitienė<br>
                Projektų vadovė | UAB „Inovacijos“<br>
                ruta.j@inovacijos.lt | www.inovacijos.lt<br>
                Tel.: +370 611 11111
              </p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4 md:col-span-2 shadow-sm">
              <p class="text-sm text-green-700 mb-2"><strong>Akademinis (studento/mokytojo) pavyzdys.</strong></p>
              <p class="text-sm text-green-900 dark:text-green-200 font-mono">
                Pagarbiai,<br>
                Linas Petrauskas<br>
                Istorijos mokytojas metodininkas | Šviesos gimnazija<br>
                Konsultacijų laikas: Antradieniais 15:00 - 16:00
              </p>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300 mt-8">„Atsakyti visiems“ ir Laikas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Funkciją „Atsakyti visiems“ naudokite atsargiai. Į laiškus mokytojams rašykite darbo metu (ne vėlai vakare ar savaitgaliais).</p>
        `
      },
      {
        id: 'instant_messaging',
        title: 'Bendravimas klasės grupėse',
        imageUrl: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Klasės bendravimas (Google Chat, Google Meet, Discord)</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Bendraujant internetu su klasiokais ir mokytojais galioja tos pačios mandagumo taisyklės kaip ir realybėje.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Pasisveikinimas.</strong> Visada mandagu pasisveikinti, ypač jei rašote mokytojui. „Labas“ tinka draugams, „Laba diena“ – mokytojams.</li>
            <li><strong>Laikas.</strong> Gerbkite kitų poilsį. Nerašykite klausimų apie namų darbus vėlai vakare ar savaitgaliais. Mokytojai taip pat turi laisvalaikį!</li>
            <li><strong>Emoji ir rašyba.</strong> Emoji padeda perteikti emocijas, bet nenaudokite jų per daug. Rašykite aiškiai, venkite įžeidžiančių žodžių ar patyčių.</li>
            <li><strong>Spamas.</strong> Nesiuntinėkite beprasmių žinučių ar paveikslėlių į bendrą klasės grupę, nes tai trukdo kitiems rasti svarbią informaciją.</li>
          </ul>
        `
      },
      {
        id: 'remote_work',
        title: 'Nuotolinės pamokos',
        imageUrl: 'https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip elgtis per Google Meet ar Zoom?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Nuotolinė pamoka yra tokia pati pamoka, tik vyksta kompiuterio ekrane. Svarbu elgtis atsakingai ir pagarbiai.</p>
          
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 mb-6">
            <h4 class="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center">✅ 5 TAIP (Ką daryti)</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>Pasiruošk.</strong> Susikurk patogią darbo vietą, pasitikrink įrangą ir interneto ryšį.</li>
              <li><strong>Uniforma.</strong> Pamokų metu dėvėk mokyklos uniformą – tai nuteikia darbui.</li>
              <li><strong>Kamera.</strong> Laikyk kamerą įjungtą. Mokytojui ir draugams svarbu tave matyti. Naudok foną privatumui.</li>
              <li><strong>Aktyvumas.</strong> Būk aktyvus: klausk, kelk ranką, dalyvauk diskusijose.</li>
              <li><strong>Poilsis.</strong> Po pamokų būtinai pailsėk nuo ekrano, pajudėk ir atsigerk vandens.</li>
            </ul>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 mb-6">
            <h4 class="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center">❌ 5 NE (Ko vengti)</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>Vėlavimas.</strong> Nevėluok prisijungti prie pamokos.</li>
              <li><strong>Triukšmas.</strong> Laikyk mikrofoną išjungtą, kai nekalbi, kad pašaliniai garsai netrukdytų kitiems.</li>
              <li><strong>Blaškymasis.</strong> Nesiblaškyk po kitus naršyklės langus ar žaidimus pamokos metu.</li>
              <li><strong>Pašaliniai daiktai.</strong> Žaislai ar kiti daiktai neturi trukdyti mokymuisi.</li>
              <li><strong>Įrašinėjimas.</strong> Griežtai draudžiama be leidimo įrašinėti ar platinti pamokų vaizdo įrašus.</li>
            </ul>
          </div>

          <div class="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 class="font-bold text-blue-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              Daugiau informacijos
            </h4>
            <a href="https://nuotolinis.antakalnio.lt/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium text-sm">Antakalnio progimnazijos nuotolinis ugdymas &rarr;</a>
          </div>
        `
      },
      {
        id: 'video_calls',
        title: 'Vaizdo konferencijų etiketas',
        imageUrl: 'https://images.unsplash.com/photo-1616587226157-48e49175ee20?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Pasiruošimas vaizdo skambučiui</h3>
          <p class="mb-6 text-gray-700 dark:text-gray-300">Vaizdo skambučiai reikalauja tokio pat pasiruošimo kaip ir gyvi susitikimai, tačiau turi papildomų techninių niuansų.</p>

          <div class="my-8 bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800 relative aspect-video group">
            <!-- Mock Video Feed -->
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" alt="Video call background">
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

            <!-- Overlay Controls -->
            <div class="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 z-10">
              <div class="flex justify-between items-start">
                 <div class="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                    Jonas Jonaitis (Jūs)
                 </div>
                 <div class="group/rec relative pointer-events-auto">
                   <div class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse cursor-help flex items-center gap-1 shadow-lg">
                      <div class="w-2 h-2 bg-white dark:bg-slate-800 rounded-full"></div> REC
                   </div>
                   <div class="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/rec:opacity-100 transition-opacity transform translate-y-2 group-hover/rec:translate-y-0 z-20">
                     <strong>Etiketo taisyklė.</strong> Visada atsiklauskite ir įspėkite visus dalyvius prieš pradedant įrašinėti pokalblį.
                   </div>
                 </div>
              </div>
              
              <div class="flex justify-center gap-4 mb-2 pointer-events-auto">
                 <!-- Mute Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-red-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Mikrofonas.</strong> Laikykite išjungtą (Mute), kai nekalbate, kad išvengtumėte pašalinių garsų (klaviatūros barškėjimo, aido).
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45"></div>
                   </div>
                 </div>

                 <!-- Camera Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-green-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Kamera.</strong> Įjungta kamera rodo pagarbą ir dėmesį pašnekovams. Žiūrėkite į kamerą, ne į ekraną.
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45"></div>
                   </div>
                 </div>
                 
                 <!-- Hand Raise Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-yellow-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a9 9 0 0 1 3.24-14.22"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Pakelti ranką.</strong> Naudokite šią funkciją, kad nepertrauktumėte kalbančiojo.
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Svarbiausios taisyklės</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
             <li><strong>Aplinka.</strong> Pasirūpinkite neutraliu fonu ir geru apšvietimu (šviesa turi kristi jums į veidą).</li>
             <li><strong>Punktualumas.</strong> Prisijunkite 2-3 minutėmis anksčiau, kad patikrintumėte ryšį.</li>
             <li><strong>Dėmesys.</strong> Neužsiimkite pašaliniais darbais (el. pašto tikrinimu) pokalbio metu – tai matosi.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'table',
    title: 'Renginiai, dovanos ir stalo etiketas',
    description: 'Priėmimai, elgesys prie stalo, įrankiai ir dovanos.',
    iconName: 'Utensils',
    color: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'receptions',
        title: 'Mokyklos šventės',
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Renginių tipai</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Mokykloje vyksta įvairios šventės, kurioms galioja skirtingos taisyklės.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Arbatėlė.</strong> Jauki klasės šventė. Vaišinamasi arbata ir suneštiniais užkandžiais. Svarbu mandagiai pasiūlyti draugui, o ne pulti prie stalo pirmam.</li>
            <li><strong>Žiburėlis / Diskoteka.</strong> Linksma šventė su muzika. Apranga gali būti laisvesnė, bet tvarkinga. Svarbu ne tik šokti, bet ir bendrauti, nepalikti vienišų klasiokų.</li>
            <li><strong>Išleistuvės.</strong> Iškilmingas renginys baigiant progimnaziją ar jos etapą. Apranga puošni (kostiumas, šventinė suknelė). Elgesys – ypač mandagus ir pagarbus mokytojams bei tėvams.</li>
            <li><strong>Valstybės švenčių minėjimas.</strong> Oficialūs minėjimai (pvz., Vasario 16-oji, Kovo 11-oji, Sausio 13-oji). Būtina oficiali apranga (arba mokyklinė uniforma). Renginio metu išlaikoma pagarbi rimtis, giedant himną privalu atsistoti ir elgtis pagarbiai. Paslėpkite telefonus ir nesikalbėkite.</li>
            <li><strong>Piknikas.</strong> Šventė gamtoje. Svarbiausia taisyklė – nepalikti šiukšlių ir saugoti gamtą.</li>
          </ul>
        `
      },
      {
        id: 'table_manners',
        title: 'Elgesys prie stalo',
        imageUrl: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kada pradėti valgyti?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei esate svečiuose, palaukite, kol šeimininkė(-as) pradės valgyti arba pakvies tai daryti. Dideliame pobūvyje galima pradėti, kai patiekiama mažiausiai 3–4 svečiams.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Laikysena</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Sėdėkite tiesiai, neatsilošę ir ne per arti stalo. Rankas (riešus) laikykite ant stalo krašto, bet <strong>alkūnių ant stalo dėti negalima</strong> (nebent tarp patiekalų, kai nėra lėkščių).</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Servetėlė</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Medžiaginė servetėlė.</strong> Tiesiama ant kelių perlenkta pusiau. Ji skirta lūpoms nusivalyti (tapšnojant) ir pirštams nusivalyti.</li>
            <li><strong>Pakilus nuo stalo.</strong> Jei trumpam išeinate, servetėlę palikite ant kėdės. Baigus valgyti, ji paliekama kairėje lėkštės pusėje (nesulankstyta, bet ir ne suglamžyta).</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Pokalbiai ir telefonai</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Prie stalo telefonai turi būti paslėpti. Jei laukiate svarbaus skambučio, atsiprašykite ir išeikite pasikalbėti. Venkite ginčytinų temų (politika, ligos), kalbėkite apie malonius dalykus.</p>
        `
      },
      {
        id: 'seating_etiquette',
        title: 'Sodinimo planas',
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Garbės vietos</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Oficialiuose pietuose svarbiausia vieta – dešinėje nuo šeimininko (arba šeimininkės). Antroji pagal svarbą – kairėje.</p>
          
          <div class="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800 mb-6">
            <h4 class="font-bold text-primary-800 dark:text-primary-300 mb-2">Sodinimo principai:</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>Svečiai.</strong> Garbingiausias svečias sėdi šeimininkui iš dešinės.</li>
              <li><strong>Poros.</strong> Oficialiuose priėmimuose sutuoktiniai dažniausiai sodinami atskirai (kad bendrautų su kitais), tačiau neoficialiuose – gali sėdėti kartu.</li>
              <li><strong>Vyrai ir moterys.</strong> Stengiamasi sodinti pakaitomis (vyras-moteris-vyras).</li>
            </ul>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kada sėstis?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Prie stalo sėdamasi tik tada, kai atsisėda šeimininkė(-as) arba kai parodoma jūsų vieta. Vyras padeda atsisėsti moteriai (patraukia kėdę).</p>
        `
      },
      {
        id: 'cutlery_eating',
        title: 'Įrankiai ir valgymas',
        imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Įrankių kalba</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kaip padedate įrankius, siunčiate žinutę padavėjui:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">Pertraukėlė</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Įrankiai sukryžiuoti lėkštėje (šakutė kairėje, peilis dešinėje), bet ne ant kraštų. Reiškia: „Dar valgysiu“.</p>
            </div>
            <div class="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2">Pabaiga</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Įrankiai sudėti lygiagrečiai (kotais į dešinę, 4-5 valandos kryptimi). Reiškia: „Baigiau, galite paimti lėkštę“.</p>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Įvairių įrankių naudojimas</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Išorė į vidų.</strong> Pradėkite nuo įrankių, esančių toliausiai nuo lėkštės, ir eikite link jos. Dienos pietų peilis dedamas lėkštės dešinėje, <strong>jo ašmenys visuomet turi būti atsukti į lėkštės pusę</strong>. Salotų šakutė visuomet įprastai dedama lėkštės kairėje (nuo vakarienės šakutės į išorę).</li>
            <li><strong>Žuvies peilis ir šakutė.</strong> Žuvies peilis nėra aštrus – jis skirtas žuviai atskirti nuo kaulų, o ne pjauti. Žuvies šakutė paprastai yra pastebimai platesnė.</li>
            <li><strong>Deserto įrankiai.</strong> Jie dedami virš lėkštės (viršuje). Desertinis šaukštelis imamas į dešinę ranką, o šakutė – į kairę (ji padeda prilaikyti pyrago ar torto gabalėlį).</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kaip valgyti skirtingus patiekalus ir dalintis jais?</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Maisto perdavimas.</strong> Valgiai ar prieskoniai prie bendro stalo visuomet perduodami į dešinę pusę (prieš laikrodžio rodyklę), kad išvengtume susidūrimų. Atkreipkite dėmesį, kad imant duonos riekelę nereikėtų nuversti šalia sėdinčio žmogaus vandens taurės.</li>
            <li><strong>Dantų krapštukai.</strong> Niekada nesinaudokite dantų krapštuku prie stalo. Prireikus krapštuko, mandagiai atsiprašykite, sumurmėkite „man reikia į tualetą“ ir susitvarkykite vonios kambaryje.</li>
            <li><strong>Duona.</strong> Niekada nepjaukite duonos peiliu ir neatsikąskite nuo visos riekės. Laužkite po nedidelį gabalėlį (vienam kąsniui) pirštais virš savo duonos lėkštutės. Sviestas tepamas tik ant atsilaužto gabalėlio. Niekuomet nesitepkite visos duonos riekės sviestu iš karto, idant "sutaupytumėte laiko ir energijos".</li>
            <li><strong>Sriuba.</strong> Semkite sriubą šaukštu <strong>nuo savęs</strong>. Prie lūpų kelkite šaukštą, o ne patys lenkitės prie lėkštės. Likusią sriubą galima pabaigti, lėkštę šiek tiek paverčiant nuo savęs. Niekada nepūskite karštos sriubos.</li>
            <li><strong>Makaronai (pasta).</strong> Spagečiai vyniojami ant šakutės, atremiant ją į lėkštės kraštą. Jų nereikėtų pjaustyti peiliu ar garsiai siurbti. Leidžiama padėti šaukštu, bet elegantiškiau naudoti tik šakutę.</li>
          </ul>
        `
      },
      {
        id: 'gifts',
        title: 'Dovanų politika',
        imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Ką galima ir ko negalima priimti?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Švietimo įstaigose galioja griežta dovanų politika, siekiant užtikrinti skaidrumą.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100">
              <h4 class="font-bold text-green-800 dark:text-green-300 mb-2 flex items-center"><span class="mr-2">✅</span> Galima priimti</h4>
              <ul class="text-sm text-green-900 dark:text-green-200 space-y-1 list-disc pl-4">
                <li>Dovanas pagal tarptautinį protokolą ar tradicijas.</li>
                <li>Reprezentacines dovanas (su įstaigos simbolika).</li>
                <li>Simbolines dovanas (gėles, knygas) profesinių švenčių proga (Mokytojo diena, Rugsėjo 1-oji).</li>
                <li>Kvietimus į nemokamus renginius, susijusius su pareigomis.</li>
              </ul>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100">
              <h4 class="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center"><span class="mr-2">❌</span> Negalima priimti</h4>
              <ul class="text-sm text-red-900 dark:text-red-200 space-y-1 list-disc pl-4">
                <li>Pinigų (grynais ar dovanų čekiais).</li>
                <li>Alkoholio ir tabako gaminių.</li>
                <li>Paslaugų, kelionių, nuolaidų.</li>
                <li>Dovanų, kurios gali sukelti interesų konfliktą.</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Tylaus sutikimo taisyklė</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei dovana yra simbolinė ir jos vertė <strong>neviršija 1 BSI (74 Eur)</strong>, ji laikoma ją gavusio asmens nuosavybe ir jos registruoti nereikia. Tai vadinama „Tylaus sutikimo taisykle“.</p>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Dovanų registravimas</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Jei dovanos vertė viršija 150 Eur, ji tampa įstaigos nuosavybe. Visos dovanos, kurių vertė viršija 1 BSI, turi būti deklaruojamos.</p>

          <div class="mt-6">
            <a href="https://antakalnio.lt/paslaugos/registrai" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Dovanų registras (Registrai)</span>
            </a>
          </div>
        `
      },
      {
        id: 'cafeteria',
        title: 'Mokyklos valgykloje',
        imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kultūra prie stalo mokykloje</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Valgykla – tai vieta, kur ilsimės ir bendraujame, todėl svarbu netrukdyti kitiems.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Eilė.</strong> Stovėk eilėje ramiai, nesistumdyk ir nelįsk be eilės. Gerbk kitų laiką.</li>
            <li><strong>Valgymas.</strong> Valgyk tvarkingai, nemlėtėk ir nekalbėk pilna burna. Naudokis įrankiais.</li>
            <li><strong>Tvarka.</strong> Pavalgius, būtinai nusinešk savo indus į plovyklą. Nepalik ant stalo servetėlių ar maisto likučių.</li>
            <li><strong>Mandagumas.</strong> Nepamiršk pasisveikinti su virėjomis ir padėkoti už maistą („Ačiū, buvo skanu“).</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'body',
    title: 'Neverbalinis bendravimas',
    description: 'Kūno kalba, gestai ir jų reikšmės.',
    iconName: 'User',
    color: 'emerald',
    imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'body_language',
        title: 'Kūno kalba',
        imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Ką sako kūnas?</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Neverbalinės priemonės perduoda net 55 proc. informacijos. Gestai dažnai svarbesni už žodžius. Štai įprastų gestų reikšmės ir kaip jos skiriasi vertinant tarpkultūriškai:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Galvos linktelėjimas (aukštyn–žemyn).</strong> Daugelyje šalių reiškia „Taip“ arba pritarimą. Tačiau, pavyzdžiui, Bulgarijoje, Graikijoje ar kai kuriose Indijos dalyse, tai reiškia „Ne“.</li>
            <li><strong>Galvos sukiojimas (į šonus).</strong> Dažniausiai reiškia „Ne“, tačiau tose pačiose minėtose šalyse tai gali reikšti „Taip“. Indijoje būdingas ir „galvos siūbavimas“ (pakreipiant į šonus), rodantis, kad žmogus klausosi.</li>
            <li><strong>Sukryžiuotos rankos.</strong> Dažniausiai interpretuojama kaip gynybinė, uždara ar nepasitenkinimo pozicija. Tačiau žmogui paprasčiausiai gali būti šalta. Mokantis skaityti kūno kalbą, niekada nevertinkite vieno gesto – žiūrėkite į žmogaus visumą.</li>
            <li><strong>Sukryžiuotos kojos.</strong> Sėdint sukryžiavus kojas ir atsirėmus atgal, bendrauti atsisakoma arba rodomas skepticizmas. Jei pėda ar kelias nukreiptas į pašnekovą – tai rodo susidomėjimą, jei nusukta link durų – norą išeiti.</li>
            <li><strong>Atviri delnai.</strong> Rodo atvirumą, sąžiningumą ir palankumą. Tai vienas universaliausių draugiško nusiteikimo gestų visame pasaulyje.</li>
            <li><strong>„OK“ rankos ženklas.</strong> Nors JAV tai reiškia, kad „viskas gerai“, Prancūzijoje tai reiškia „nulis“ ar „bevertis“, o Brazilijoje ir kai kuriose kitose Lotynų Amerikos šalyse šis gestas laikomas įžeidžiančiu.</li>
          </ul>
        `
      },
      {
        id: 'gestures_abroad',
        title: 'Gestai užsienyje',
        imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kultūriniai skirtumai</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>„OK“ ženklas.</strong> JAV – gerai, Prancūzijoje – nulis, Japonijoje – pinigai.</li>
            <li><strong>Pakeltas nykštys.</strong> Vakaruose – viskas gerai, Graikijoje – įžeidimas („užsičiaupk“).</li>
            <li><strong>„V“ ženklas.</strong> Jei delnas atsuktas į save, Didžiojoje Britanijoje tai įžeidimas.</li>
            <li><strong>Galvos linktelėjimas.</strong> Daugelyje šalių reiškia „taip“, o Bulgarijoje ir Indijoje gali reikšti „ne“.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'international',
    title: 'Etiketas užsienyje',
    description: 'Bendravimo ypatumai įvairiose šalyse.',
    iconName: 'Globe',
    color: 'amber',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'countries',
        title: 'Šalių ypatumai',
        imageUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Vokietija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Labai svarbus punktualumas ir oficialumas. Kreipinys „tu“ darbe nepriimtinas. Rankos niekada nelaikomos kišenėse.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Prancūzija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vertinamas mandagumas ir prancūzų kalbos mokėjimas. Verslo pietūs gali užtrukti ilgai.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Japonija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vizitinės kortelės teikiamos abiem rankomis. Nusilenkimas yra tradicinis pasisveikinimas. Dovanos yra labai svarbios, jos turi būti gražiai įpakuotos (vengti balto popieriaus).</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Arabų šalys</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kairė ranka laikoma nešvaria (negalima ja paduoti daiktų ar valgyti). Negalima rodyti pado. Venkite kalbų apie moteris.</p>
        `
      },
      {
        id: 'intercultural_comm',
        title: 'Tarpkultūrinė komunikacija',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Skirtingi bendravimo stiliai ir atstumai</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tai, kas mandagu vienoje kultūroje, kitoje gali būti nesuprasta ar net interpretuota kaip įžeidimas. Ne tik žodžiai, bet ir gestai bei atstumai vaidina esminį vaidmenį.</p>
          
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
            <li><strong>Akių kontaktas.</strong> Vakarų kultūrose (JAV, Europa) tiesioginis akių kontaktas rodo pasitikėjimą, sąžiningumą ir dėmesį asmeniui. Tačiau daugelyje Azijos, Afrikos ar Lotynų Amerikos šalių per ilgas ar tiesioginis žiūrėjimas į akis (ypač į vyresnį ar aukštesnio statuso vadovą) yra laikomas nepagarba, iššūkiu ar net agresija.</li>
            <li><strong>Asmeninė erdvė (Proksemika).</strong> Kiekviena kultūra turi savo nematomas „ribas“. Pietų Europoje (Italijoje, Ispanijoje), Pietų Amerikoje ar Artimuosiuose Rytuose žmonės stovi labai arti vienas kito, nebijo fizinio kontakto (prisilietimų prie peties ar rankos). Tuo tarpu Šiaurės Europoje (Skandinavijoje, Vokietijoje), Rytų Azijoje, taip pat ir Lietuvoje – vertinamas asmeninės erdvės išlaikymas. Jei bendraudami su pietiečiu instinktyviai atsitrauksite atgal, jis tai gali priimti kaip šaltumą ar atmetimą.</li>
            <li><strong>Tiesioginis vs. netiesioginis stilius.</strong> Šalyse kaip JAV ar Vokietija, žmonės kalba tiesmukai: jei kas nors nepatinka, jie taip ir pasakys („taip“ reiškia taip, „ne“ reiškia ne). Tačiau Rytų Azijos ar Artimųjų Rytų kultūrose itin svarbu išsaugoti „veidą“ (savo ir kito žmogaus orumą). Ten vengiama tiesioginio „ne“; vietoje jo sakoma „tai gali būti sunku įgyvendinti“ arba „mes pagalvosime“.</li>
            <li><strong>Tyla ir pertraukimai.</strong> Vakariečiams tyla pokalbio metu dažnai atrodo nejauki, atsiranda noras ją užpildyti žodžiais. Japonijoje, Kinijoje ar Suomijoje tyla yra gilaus mąstymo ir pagarbos kalbėtojui ženklas – ji reiškia, kad jūsų žodžiai yra vertinami. Taip pat Italijoje ar Ispanijoje pokalbio partnerio pertraukimas dažnai reiškia susidomėjimą ir aistrą temai, kai tuo tarpu Šiaurės šalyse tai laikoma labai nemandagiu elgesiu.</li>
          </ul>
        `
      },
      {
        id: 'business_cultures',
        title: 'Verslo etiketas pasaulyje',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">JAV</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vertinamas tiesmukiškumas ir greitis („Time is money“). Rankos paspaudimas turi būti tvirtas. Derybos dažnai būna greitos ir orientuotos į rezultatą.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Kinija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Svarbiausia – santykiai (<em>guanxi</em>). Verslo kortelės teikiamos abiem rankomis, jas reikia atidžiai perskaityti. Hierarchija yra labai svarbi – pirmiausia sveikinamasi su vyriausiuoju.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Japonija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tyla yra aukso vertės. Nusilenkimas rodo pagarbą. Vizitinės kortelės (<em>meishi</em>) yra šventos – negalima ant jų rašyti ar dėti į kišenę. Sprendimai priimami lėtai, siekiant konsensuso.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Jungtinė Karalystė</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Vertinamas mandagumas, santūrumas ir humoras. Tiesioginis „ne“ dažnai pakeičiamas mandagiomis frazėmis („I'm afraid that might be difficult“). Punktualumas yra būtinas.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Prancūzija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Kreipinys „Vous“ (Jūs) yra standartas. Pietūs yra svarbi verslo dalis ir gali trukti ilgai. Vertinamas gebėjimas diskutuoti ir argumentuoti.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Vokietija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Tvarka (<em>Ordnung</em>) ir punktualumas yra viskas. Titulai (Daktaras, Profesorius) yra labai svarbūs. Bendravimas tiesioginis, be nereikalingų emocijų.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 dark:text-primary-300">Indija</h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Laikas suvokiamas lanksčiau. Svarbi hierarchija ir pagarba vyresniems. Tradicinis pasisveikinimas „Namaste“ (sudėjus delnus) yra vertinamas, nors rankos paspaudimas taip pat įprastas.</p>
        `
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Kas pirmas sveikinasi mokykloje?',
    options: [
      'Mokytojas mokinį',
      'Mokinys mokytoją',
      'Tas, kuris vyresnis',
      'Tas, kuris eina lėčiau'
    ],
    correctIndex: 1,
    explanation: 'Pagal etiketą, mokinys visada pirmas sveikina mokytoją. Taip pat jaunesnis – vyresnį.'
  },
  {
    id: 'q2',
    question: 'Kur dedama medžiaginė servetėlė valgant?',
    options: [
      'Užkišama už apykaklės',
      'Pasidėta šalia lėkštės',
      'Ant kelių',
      'Laikoma rankoje'
    ],
    correctIndex: 2,
    explanation: 'Servetėlė tiesiama tik ant kelių drabužiams apsaugoti.'
  },
  {
    id: 'q3',
    question: 'Kaip elgtis įėjus į mokytojų kambarį?',
    options: [
      'Iškart eiti prie reikiamo mokytojo',
      'Garsiai sušukti „Labas!“',
      'Pasibelsti, palaukti leidimo ir pasisveikinti su visais',
      'Stovėti tarpduryje ir tylėti'
    ],
    correctIndex: 2,
    explanation: 'Būtina pasibelsti, palaukti leidimo įeiti ir pasisveikinti su visais esančiais mokytojais.'
  },
  {
    id: 'q4',
    question: 'Kaip parodome, kad baigėme valgyti?',
    options: [
      'Įrankius paliekame lėkštės šonuose',
      'Šaukštą įdedame į puodelį',
      'Įrankius sudedame lygiagrečiai (kotais į dešinę)',
      'Apverčiame šakutę'
    ],
    correctIndex: 2,
    explanation: 'Įrankiai sudedami lygiagrečiai, kotais į 5 valandos poziciją. Tai ženklas nunešti lėkštę.'
  },
  {
    id: 'q5',
    question: 'Ką reiškia „OK“ ženklas Japonijoje?',
    options: [
      'Viskas gerai',
      'Nulis',
      'Pinigai',
      'Įžeidimas'
    ],
    correctIndex: 2,
    explanation: 'Japonijoje nykščio ir rodomojo piršto sujungimas ratuku reiškia pinigus.'
  },
  {
    id: 'q6',
    question: 'Kada mandagu rašyti mokytojui žinutę?',
    options: [
      'Bet kada, kai kyla klausimas',
      'Vėlai vakare, kai ruošiu pamokas',
      'Darbo dienomis ir darbo valandomis',
      'Savaitgaliais'
    ],
    correctIndex: 2,
    explanation: 'Gerbiant mokytojo poilsį, žinutes reikėtų rašyti tik darbo dienomis ir darbo valandomis.'
  },
  {
    id: 'q7',
    question: 'Kuriuo metu negalima kalbėti telefonu?',
    options: [
      'Vaikštant parke',
      'Pertraukos metu',
      'Pamokos metu, teatre, kine',
      'Namuose'
    ],
    correctIndex: 2,
    explanation: 'Pamokos metu, teatre, kine ir kitose tylos zonose telefonas privalo būti išjungtas arba begarsiu režimu.'
  },
  {
    id: 'q8',
    question: 'Kaip elgtis, jei vėluojate į pamoką?',
    options: [
      'Nieko nesakyti ir sėstis į vietą',
      'Garsiai pasiteisinti visai klasei',
      'Tyliai atsiprašyti mokytojo ir atsisėsti',
      'Laukti už durų iki pertraukos'
    ],
    correctIndex: 2,
    explanation: 'Mandagu tyliai atsiprašyti už vėlavimą ir netrukdant kitiems užimti savo vietą.'
  },
  {
    id: 'q9',
    question: 'Kuriuo stalo įrankiu valgoma žuvis?',
    options: [
      'Įprasta šakute ir peiliu',
      'Tik šakute',
      'Specialiu žuvies peiliu ir šakute',
      'Šaukštu'
    ],
    correctIndex: 2,
    explanation: 'Žuviai skirti specialūs įrankiai: platesnis peilis (ne pjovimui, o atskyrimui) ir šakutė.'
  },
  {
    id: 'q10',
    question: 'Kas pirmas žengia pro duris?',
    options: [
      'Visada vyras',
      'Visada moteris',
      'Tas, kuris arčiau durų (jei durys atsidaro į save)',
      'Svečias'
    ],
    correctIndex: 3,
    explanation: 'Paprastai praleidžiamas svečias, vyresnis asmuo ar moteris. Tačiau jei durys sunkios ar atsidaro į save, vyras gali eiti pirmas ir jas prilaikyti.'
  },
  {
    id: 'q11',
    question: 'Kokia yra tinkama pokalbio distancija verslo aplinkoje?',
    options: [
      'Intymi (iki 45 cm)',
      'Asmeninė (45-120 cm)',
      'Socialinė (1,2-3,6 m)',
      'Vieša (virš 3,6 m)'
    ],
    correctIndex: 2,
    explanation: 'Verslo aplinkoje dažniausiai laikomasi socialinės distancijos (apie 1,2–3 metrų), kad pašnekovai jaustųsi patogiai.'
  },
  {
    id: 'q12',
    question: 'Kaip teisingai laikyti vyno taurę?',
    options: [
      'Už taurės viršaus',
      'Už kojelės',
      'Už pagrindo',
      'Abiem rankomis'
    ],
    correctIndex: 1,
    explanation: 'Vyno taurė laikoma už kojelės, kad rankos šiluma nesušildytų gėrimo.'
  },
  {
    id: 'q13',
    question: 'Ar mandagu palikti arbatpinigių, jei aptarnavimas buvo prastas?',
    options: [
      'Taip, visada privaloma',
      'Ne, arbatpinigiai yra padėka už gerą aptarnavimą',
      'Taip, bet labai mažai',
      'Reikia palikti ir parašyti skundą'
    ],
    correctIndex: 1,
    explanation: 'Arbatpinigiai nėra privalomi, tai padėka. Jei aptarnavimas blogas, jų palikti nereikia.'
  },
  {
    id: 'q14',
    question: 'Ką daryti, jei pamiršote pašnekovo vardą?',
    options: [
      'Vengti kreiptis vardu',
      'Nuoširdžiai prisipažinti ir atsiprašyti',
      'Paklausti kito žmogaus',
      'Sugalvoti pravardę'
    ],
    correctIndex: 1,
    explanation: 'Geriausia nuoširdžiai atsiprašyti: „Atsiprašau, užkrito Jūsų vardas“. Tai žmogiška ir geriau nei nuolat vengti kreipinio.'
  },
  {
    id: 'q15',
    question: 'Kaip elgtis su telefonu restorane?',
    options: [
      'Padėti ant stalo ekranu į viršų',
      'Padėti ant stalo ekranu į apačią',
      'Laikyti kišenėje ar rankinėje',
      'Laikyti rankoje'
    ],
    correctIndex: 2,
    explanation: 'Telefonas neturi būti ant stalo. Tai rodo, kad jis jums svarbesnis už pašnekovą.'
  },
  {
    id: 'q16',
    question: 'Kokia apranga tinkama „Black Tie“ aprangos kodui?',
    options: [
      'Kostiumas ir kaklaraištis',
      'Smokingas ir vakarinė suknelė',
      'Džinsai ir švarkas',
      'Frakas'
    ],
    correctIndex: 1,
    explanation: '„Black Tie“ vyrams reiškia smokingą, moterims – ilgą vakarinę suknelę (arba puošnią kokteilinę).'
  },
  {
    id: 'q17',
    question: 'Kaip valgoma duona prie sriubos?',
    options: [
      'Atkandama nuo visos riekės',
      'Laužiama mažais gabalėliais',
      'Pjaustoma peiliu',
      'Mirkoma į sriubą'
    ],
    correctIndex: 1,
    explanation: 'Duona laužiama kąsnio dydžio gabalėliais ir dedama į burną. Atkąsti nuo visos riekės nemandagu.'
  },
  {
    id: 'q18',
    question: 'Ką daryti, jei netyčia sudaužėte taurę restorane?',
    options: [
      'Greitai surinkti šukes',
      'Atsiprašyti ir leisti personalui sutvarkyti',
      'Nieko nesakyti',
      'Apkaltinti padavėją'
    ],
    correctIndex: 1,
    explanation: 'Ramiai atsiprašykite ir leiskite personalui sutvarkyti. Nebandykite patys rinkti šukių, kad nesusižeistumėte.'
  },
  {
    id: 'q19',
    question: 'Ar galima sveikintis per slenkstį?',
    options: [
      'Taip, tai neturi reikšmės',
      'Ne, tai laikoma blogu ženklu',
      'Tik su giminėmis',
      'Tik vasarą'
    ],
    correctIndex: 1,
    explanation: 'Pagal senus papročius ir etiketą, sveikintis per slenkstį nemandagu. Reikia arba įeiti, arba išeiti.'
  },
  {
    id: 'q20',
    question: 'Kaip pristatyti žmones vienas kitam?',
    options: [
      'Vyrą moteriai, jaunesnį vyresniam',
      'Moterį vyrui, vyresnį jaunesniam',
      'Visada pirmą sakyti savo vardą',
      'Nėra taisyklių'
    ],
    correctIndex: 0,
    explanation: 'Pristatant galioja taisyklė: mažiau svarbus pristatomas svarbesniam. Vyras – moteriai, jaunesnis – vyresniam, pavaldinys – vadovui.'
  },
  {
    id: 'q21',
    question: 'Kada galima pradėti valgyti svečiuose?',
    options: [
      'Kai tik gaunate maistą',
      'Kai pradeda šeimininkė (-as)',
      'Kai visiems patiekta',
      'Kai atvėsta maistas'
    ],
    correctIndex: 1,
    explanation: 'Oficialiuose pietuose laukiama, kol pradės šeimininkė (-as). Jei tai didelis banketas, galima pradėti, kai aptarnaujami kiti.'
  },
  {
    id: 'q22',
    question: 'Ką reiškia „RSVP“ kvietime?',
    options: [
      'Prašome atsakyti',
      'Apranga šventinė',
      'Renginys labai svarbus',
      'Atsinešti savo gėrimus'
    ],
    correctIndex: 0,
    explanation: 'RSVP (pranc. „Répondez s\'il vous plaît“) reiškia „Prašome atsakyti“. Būtina pranešti, ar dalyvausite.'
  },
  {
    id: 'q23',
    question: 'Kaip elgtis lifte?',
    options: [
      'Stovėti veidu į duris',
      'Stovėti veidu į kitus žmones',
      'Garsiai kalbėti telefonu',
      'Spoksoti į kitus keleivius'
    ],
    correctIndex: 0,
    explanation: 'Lifte stovima veidu į duris. Tai padeda išvengti nepatogaus akių kontakto mažoje erdvėje.'
  },
  {
    id: 'q24',
    question: 'Ar galima vėluoti į teatrą?',
    options: [
      'Taip, iki 15 minučių',
      'Ne, vėluoti negalima',
      'Taip, jei turite bilietą',
      'Tik į komedijas'
    ],
    correctIndex: 1,
    explanation: 'Į teatrą vėluoti griežtai draudžiama. Po trečio skambučio į salę dažniausiai neįleidžiama.'
  },
  {
    id: 'q25',
    question: 'Kaip teisingai sėdėti moteriai su sijonu?',
    options: [
      'Kojos sukryžiuotos per kelius',
      'Kojos suglaustos, keliai šiek tiek pasukti į šoną',
      'Kojos plačiai',
      'Viena koja ant kitos (čiurna ant kelio)'
    ],
    correctIndex: 1,
    explanation: 'Elegantiškiausia poza – kojos suglaustos, keliai šiek tiek pasukti į šoną („Undinėlės“ poza) arba sukryžiuotos ties kulkšnimis.'
  },
  {
    id: 'q26',
    question: 'Ką daryti su kauliukais valgant alyvuoges ar vyšnias?',
    options: [
      'Išspjauti į lėkštę',
      'Išimti pirštais',
      'Išspjauti į šaukštelį arba į saują prie lūpų',
      'Nuryti'
    ],
    correctIndex: 2,
    explanation: 'Kauliukas diskretiškai išspjaunamas į šaukštelį (jei valgoma su juo) arba į sugniaužtą saują prie lūpų, tada padedamas į lėkštės kraštą.'
  },
  {
    id: 'q27',
    question: 'Ar galima pūsti karštą sriubą?',
    options: [
      'Taip, jei labai karšta',
      'Ne, reikia palaukti kol atvės',
      'Taip, bet tyliai',
      'Tik vaikams'
    ],
    correctIndex: 1,
    explanation: 'Pūsti maisto negalima. Reikia palaukti, kol jis natūraliai atvės, arba kabinti nuo krašto, kur vėsiau.'
  },
  {
    id: 'q28',
    question: 'Kaip elgtis čiaudint?',
    options: [
      'Užsidengti burną delnu',
      'Užsidengti burną alkūne arba servetėle',
      'Nesisukti nuo stalo',
      'Nieko nedaryti'
    ],
    correctIndex: 1,
    explanation: 'Higieniškiausia čiaudėti į alkūnę arba vienkartinę servetėlę, nusisukus nuo žmonių.'
  },
  {
    id: 'q29',
    question: 'Kada nusiimti kepurę vyrams?',
    options: [
      'Tik bažnyčioje',
      'Įėjus į patalpą',
      'Tik valgant',
      'Niekada'
    ],
    correctIndex: 1,
    explanation: 'Vyrai privalo nusiimti kepurę įėję į patalpą (namus, biurą, restoraną, teatrą ir t.t.).'
  },
  {
    id: 'q30',
    question: 'Ar galima dažytis lūpas prie stalo?',
    options: [
      'Taip, greitai',
      'Ne, tai daroma tualete',
      'Tik po valgio',
      'Tik jei niekas nemato'
    ],
    correctIndex: 1,
    explanation: 'Makiažo taisymas, šukavimasis ar dantų krapštymas prie stalo yra nemandagus. Tai atliekama tualete.'
  },
  {
    id: 'q31',
    question: 'Kaip elgtis su šlapiu skėčiu įėjus į patalpą?',
    options: [
      'Išskleisti ir džiovinti atvirą',
      'Susukti ir įdėti į stovą',
      'Padėti ant grindų',
      'Nusipurtyti viduje'
    ],
    correctIndex: 1,
    explanation: 'Skėtis džiovinamas suskleistas (kad neišsitampytų medžiaga ir netrukdytų kitiems), įdėtas į specialų stovą.'
  },
  {
    id: 'q32',
    question: 'Ką daryti, jei gavote dovaną, kuri nepatinka?',
    options: [
      'Pasakyti tiesą',
      'Padėkoti ir nusišypsoti',
      'Grąžinti dovanotojui',
      'Paklausti, kur pirkta, kad pakeistumėte'
    ],
    correctIndex: 1,
    explanation: 'Mandagumas reikalauja padėkoti už dėmesį ir pastangas, net jei pati dovana nėra ideali.'
  },
  {
    id: 'q33',
    question: 'Kaip kreiptis į padavėją?',
    options: [
      'Spragtelėti pirštais',
      'Šaukti "Ei!"',
      'Užmegzti akių kontaktą ir linktelėti',
      'Plioti rankomis'
    ],
    correctIndex: 2,
    explanation: 'Diskretus akių kontaktas ir galvos linktelėjimas arba lengvas rankos pakėlimas yra tinkamiausias būdas.'
  },
  {
    id: 'q34',
    question: 'Ar galima kalbėti pilna burna?',
    options: [
      'Taip, jei svarbu',
      'Ne, niekada',
      'Tik užsidengus burną',
      'Tik su artimaisiais'
    ],
    correctIndex: 1,
    explanation: 'Kalbėti pilna burna yra vienas didžiausių stalo etiketo pažeidimų. Pirmiausia nurykite kąsnį.'
  },
  {
    id: 'q35',
    question: 'Ką daryti, jei kas nors kitas elgiasi nemandagiai?',
    options: [
      'Garsiai pastabėti',
      'Ignoruoti ir elgtis mandagiai pačiam',
      'Pamokyti',
      'Juoktis'
    ],
    correctIndex: 1,
    explanation: 'Tikrasis mandagumas yra nepastebėti kito nemandagumo. Viešas auklėjimas dažnai yra dar didesnis nemandagumas.'
  },
  {
    id: 'q36',
    question: 'Kaip elgtis su duona restorane, jei ji bendrame krepšelyje?',
    options: [
      'Imti ranka',
      'Smeigti šakute',
      'Paprašyti, kad paduotų padavėjas',
      'Paimti servetėle'
    ],
    correctIndex: 0,
    explanation: 'Duona iš bendro krepšelio imama ranka (neliečiant kitų riekių) ir dedama į savo duonos lėkštelę.'
  },
  {
    id: 'q37',
    question: 'Kuri pusė yra "garbingiausia" sėdint automobilyje?',
    options: [
      'Priekyje šalia vairuotojo',
      'Gale dešinėje',
      'Gale kairėje',
      'Gale viduryje'
    ],
    correctIndex: 1,
    explanation: 'Oficialiame etikete garbingiausia vieta automobilyje yra gale, dešinėje pusėje (įlipama/išlipama tiesiai ant šaligatvio).'
  },
  {
    id: 'q38',
    question: 'Ar galima sveikintis sėdint?',
    options: [
      'Taip, visada',
      'Tik moterims',
      'Tik vyrams',
      'Niekada'
    ],
    correctIndex: 1,
    explanation: 'Vyrai visada turi atsistoti sveikindamiesi. Moterys gali likti sėdėti, nebent sveikinasi su daug vyresniu ar aukšto rango asmeniu.'
  },
  {
    id: 'q39',
    question: 'Kaip elgtis su arbatos maišeliu puodelyje?',
    options: [
      'Palikti puodelyje',
      'Išspausti pirštais',
      'Ištraukti šaukšteliu, neapsukant siūlo, ir padėti ant lėkštelės',
      'Padėti ant stalo'
    ],
    correctIndex: 2,
    explanation: 'Maišelis ištraukiamas šaukšteliu (galima lengvai paspausti į puodelio sienelę) ir padedamas ant lėkštelės.'
  },
  {
    id: 'q40',
    question: 'Ką reiškia „Casual“ aprangos kodas?',
    options: [
      'Sportinė apranga',
      'Laisvalaikio apranga (tvarkingi džinsai, marškinėliai)',
      'Kostiumas',
      'Vakarinė suknelė'
    ],
    correctIndex: 1,
    explanation: '„Casual“ reiškia patogią, bet tvarkingą laisvalaikio aprangą.'
  },
  {
    id: 'q41',
    question: 'Ar galima prašyti druskos, neparagavus maisto?',
    options: [
      'Taip, jei mėgstate sūriai',
      'Ne, tai įžeidimas virėjui',
      'Taip, visada',
      'Tik namuose'
    ],
    correctIndex: 1,
    explanation: 'Bėrimas druskos ar pipirų neparagavus laikomas nepagarba virėjui – dar nežinote skonio, o jau taisote.'
  },
  {
    id: 'q42',
    question: 'Kaip elgtis, jei reikia išeiti iš stalo vidury vakarienės?',
    options: [
      'Nieko nesakyti',
      'Atsiprašyti („Atsiprašau, trumpam“) be detalių',
      'Paaiškinti priežastį visiems',
      'Paprašyti leidimo'
    ],
    correctIndex: 1,
    explanation: 'Pakanka pasakyti „Atsiprašau“ ar „Atsiprašau, trumpam“. Nereikia aiškinti, kad einate į tualetą ar skambinti.'
  },
  {
    id: 'q43',
    question: 'Kuriuo šonu lipama laiptais?',
    options: [
      'Kairiuoju',
      'Dešiniuoju',
      'Viduriu',
      'Kaip patogiau'
    ],
    correctIndex: 1,
    explanation: 'Laiptais lipama dešine puse, kad prasilenkiantys žmonės netrukdytų vieni kitiems.'
  },
  {
    id: 'q44',
    question: 'Kaip elgtis su telefonu susitikimo metu?',
    options: [
      'Laikyti ant stalo',
      'Tikrinti kas 5 minutes',
      'Laikyti paslėptą ir išjungtą garsą',
      'Atsiliepti į visus skambučius'
    ],
    correctIndex: 2,
    explanation: 'Telefonas turi būti nematomas ir negirdimas, kad rodytumėte pilną dėmesį pašnekovams.'
  },
  {
    id: 'q45',
    question: 'Ar galima sveikintis su pirštinėmis?',
    options: [
      'Taip, visada',
      'Vyrams reikia nusiimti (lauke nebūtina, jei šalta), moterims nebūtina',
      'Niekada negalima',
      'Tik žiemą'
    ],
    correctIndex: 1,
    explanation: 'Vyrai, sveikindamiesi rankos paspaudimu, turėtų nusiimti pirštinę (nebent lauke labai šalta). Moterims tai nebūtina.'
  },
  {
    id: 'q46',
    question: 'Kaip valgomi sušiai?',
    options: [
      'Tik lazdelėmis',
      'Lazdelėmis arba rankomis (išskyrus sašimi)',
      'Šakute ir peiliu',
      'Šaukštu'
    ],
    correctIndex: 1,
    explanation: 'Sušius (nigiri, maki) galima valgyti ir rankomis. Tik sašimi (žuvies gabaliukai) valgomi tik lazdelėmis.'
  },
  {
    id: 'q47',
    question: 'Ką daryti, jei pašnekovui tarp dantų įstrigo maistas?',
    options: [
      'Garsiai pasakyti',
      'Nieko nesakyti',
      'Diskretiškai duoti ženklą (pvz., paliesti savo dantis)',
      'Juoktis'
    ],
    correctIndex: 2,
    explanation: 'Geriausia diskretiškai duoti ženklą, kad kitas žmogus suprastų ir susitvarkytų, arba pasakyti tyliai, kai niekas negirdi.'
  },
  {
    id: 'q48',
    question: 'Ar galima į svečius atsivesti nekviestą draugą?',
    options: [
      'Taip, kuo daugiau, tuo linksmiau',
      'Ne, nebent atsiklausėte šeimininkų',
      'Taip, jei draugas atsineša maisto',
      'Tik į vakarėlius'
    ],
    correctIndex: 1,
    explanation: 'Niekada negalima vestis nekviestų svečių be išankstinio šeimininkų sutikimo.'
  },
  {
    id: 'q49',
    question: 'Kaip elgtis, jei sudaužėte prekę parduotuvėje?',
    options: [
      'Pabėgti',
      'Paslėpti šukes',
      'Pranešti personalui ir pasiūlyti atlyginti žalą',
      'Apkaltinti parduotuvę dėl blogo išdėstymo'
    ],
    correctIndex: 2,
    explanation: 'Sąžininga yra pranešti ir, jei tai jūsų kaltė, atlyginti žalą. Dažnai parduotuvės turi draudimą, bet elgesys turi būti atsakingas.'
  },
  {
    id: 'q50',
    question: 'Kokia yra pagrindinė etiketo taisyklė?',
    options: [
      'Atrodyti turtingai',
      'Elgtis taip, kad kitiems būtų patogu su jumis',
      'Žinoti visas taisykles',
      'Būti griežtam'
    ],
    correctIndex: 1,
    explanation: 'Etiketo esmė – ne formalios taisyklės, o pagarba ir siekis, kad aplinkiniai jaustųsi gerai ir patogiai.'
  },
  {
    id: 'q51',
    question: 'Kaip elgtis su durimis einant pro jas?',
    options: [
      'Paleisti, kai praeini',
      'Prilaikyti einančiam iš paskos',
      'Uždaryti',
      'Spirti koja'
    ],
    correctIndex: 1,
    explanation: 'Visada atsigręžkite ir prilaikykite duris einančiam iš paskos, nepriklausomai nuo lyties.'
  },
  {
    id: 'q52',
    question: 'Ar galima dėti alkūnes ant stalo?',
    options: [
      'Taip, visada',
      'Ne, valgant alkūnės turi būti prie šonų',
      'Tik geriant kavą',
      'Tik pusryčių metu'
    ],
    correctIndex: 1,
    explanation: 'Valgant alkūnės neturi remtis į stalą. Tarp valgių (pvz., kalbantis) taisyklės švelnesnės, bet valgant – ne.'
  },
  {
    id: 'q53',
    question: 'Kaip perduoti druską ir pipirus?',
    options: [
      'Tik druską',
      'Tik pipirus',
      'Abu kartu',
      'Paduoti į rankas'
    ],
    correctIndex: 2,
    explanation: 'Druska ir pipirai visada keliauja kartu kaip pora, net jei prašoma tik vieno.'
  },
  {
    id: 'q54',
    question: 'Ką daryti, jei gavote kvietimą su prierašu „Regrets only“?',
    options: [
      'Atsakyti, kad dalyvausite',
      'Atsakyti tik jei nedalyvausite',
      'Atsakyti bet kuriuo atveju',
      'Ignoruoti'
    ],
    correctIndex: 1,
    explanation: '„Regrets only“ reiškia, kad šeimininkai laukia pranešimo tik tuo atveju, jei NEGALITE dalyvauti.'
  },
  {
    id: 'q55',
    question: 'Kaip elgtis, jei kas nors nusičiaudėjo?',
    options: [
      'Sakyti "Į sveikatą"',
      'Nieko nesakyti (ignoruoti)',
      'Pasiūlyti nosinę',
      'Atsitraukti'
    ],
    correctIndex: 1,
    explanation: 'Pagal griežtą etiketą, čiaudulys yra „nelaimingas atsitikimas“, kurio nereikia pastebėti. „Į sveikatą“ sakoma tik artimame rate.'
  },
  {
    id: 'q56',
    question: 'Kaip valgoma pica formalioje aplinkoje?',
    options: [
      'Rankomis',
      'Peiliu ir šakute',
      'Sulenkta per pusę',
      'Nevalgoma'
    ],
    correctIndex: 1,
    explanation: 'Namuose ar picerijoje galima rankomis, bet formalioje aplinkoje (verslo pietūs) pica valgoma peiliu ir šakute.'
  },
  {
    id: 'q57',
    question: 'Ką daryti su citrina arbatoje?',
    options: [
      'Suvalgyti',
      'Išspausti šaukšteliu ir palikti',
      'Išimti ir padėti ant lėkštelės',
      'Išgerti su visa citrina'
    ],
    correctIndex: 1,
    explanation: 'Citrina šiek tiek paspaudžiama šaukšteliu ir paliekama puodelyje. Išimti nereikia.'
  },
  {
    id: 'q58',
    question: 'Ar galima laižyti peilį?',
    options: [
      'Taip, jei skanu',
      'Ne, niekada',
      'Tik namuose',
      'Tik sūrį'
    ],
    correctIndex: 1,
    explanation: 'Peilis skirtas tik pjaustymui ir maisto uždėjimui ant šakutės. Dėti peilį į burną yra pavojinga ir nemandagu.'
  },
  {
    id: 'q59',
    question: 'Kaip elgtis su švedišku stalu?',
    options: [
      'Prisikrauti pilną lėkštę visko',
      'Imti po nedaug, eiti kelis kartus',
      'Imti maistą rankomis',
      'Valgyti stovint prie stalo'
    ],
    correctIndex: 1,
    explanation: 'Geriau eiti kelis kartus ir imti po nedaug, nei prisikrauti „kalną“. Prie bendro stalo nevalgoma.'
  },
  {
    id: 'q60',
    question: 'Ką daryti, jei užstrigote lifte?',
    options: [
      'Panikuoti ir rėkti',
      'Spausti pagalbos mygtuką ir ramiai laukti',
      'Bandyti atidaryti duris jėga',
      'Skambinti visiems draugams'
    ],
    correctIndex: 1,
    explanation: 'Išlaikykite ramybę, paspauskite pagalbos mygtuką ir laukite instrukcijų.'
  },
  {
    id: 'q61',
    question: 'Ar galima dovanoti pinigus?',
    options: [
      'Taip, visada geriausia dovana',
      'Ne, tai rodo fantazijos trūkumą',
      'Taip, vestuvėms ar artimiesiems, gražiai įpakavus',
      'Tik monetomis'
    ],
    correctIndex: 2,
    explanation: 'Pinigai yra priimtina dovana vestuvėms arba artimiesiems, tačiau jie turi būti įdėti į voką ar atviruką, o ne paduodami į rankas.'
  },
  {
    id: 'q62',
    question: 'Kaip elgtis, jei jus vaišina patiekalu, kuriam esate alergiškas?',
    options: [
      'Valgyti ir kentėti',
      'Garsiai pasakyti „Fui, aš to nevalgau“',
      'Tyliai pasakyti šeimininkui ir nevalgyti',
      'Išmesti maistą'
    ],
    correctIndex: 2,
    explanation: 'Mandagiai ir tyliai informuokite šeimininką apie alergiją. Nereikia daryti scenos ar versti kitų jaustis nepatogiai.'
  },
  {
    id: 'q63',
    question: 'Kada galima pradėti gerti tostą?',
    options: [
      'Kai tik įpilama',
      'Kai pasakoma kalba ir susidaužiama (arba pakeliamos taurės)',
      'Kai visi atsisėda',
      'Prieš valgį'
    ],
    correctIndex: 1,
    explanation: 'Laukiama tosto pabaigos, tada susidaužiama (arba pakeliamos taurės) ir geriama.'
  },
  {
    id: 'q64',
    question: 'Kaip elgtis su rankine restorane?',
    options: [
      'Dėti ant stalo',
      'Dėti ant grindų',
      'Kabinti ant kėdės atlošo arba dėti ant kelių (mažą)',
      'Laikyti ant gretimos kėdės'
    ],
    correctIndex: 2,
    explanation: 'Maža rankinė dedama ant kelių arba už nugaros. Didesnė – ant žemės (jei švaru) arba kabinama ant specialaus kabliuko. Ant stalo – niekada.'
  },
  {
    id: 'q65',
    question: 'Ar galima rūkyti prie stalo?',
    options: [
      'Taip, jei yra peleninė',
      'Ne, nebent visi pavalgė ir atsiklausėte',
      'Taip, tarp patiekalų',
      'Tik elektronines cigaretes'
    ],
    correctIndex: 1,
    explanation: 'Prie stalo rūkyti (net ir elektronines cigaretes) nemandagu, kol visi nebaigė valgyti. Geriausia išeiti į tam skirtą vietą.'
  },
  {
    id: 'q66',
    question: 'Kaip elgtis, jei paskambinote ne tuo numeriu?',
    options: [
      'Padėti ragelį',
      'Paklausti „Kas čia?“',
      'Atsiprašyti ir pasakyti, kad suklydote',
      'Tylėti'
    ],
    correctIndex: 2,
    explanation: 'Būtina atsiprašyti: „Atsiprašau, surinkau ne tą numerį“. Tiesiog numesti ragelį yra nemandagu.'
  },
  {
    id: 'q67',
    question: 'Ką daryti, jei pokalbio metu žiovaujate?',
    options: [
      'Žiovauti plačiai išsižiojus',
      'Užsidengti burną ranka ir atsiprašyti',
      'Nusisukti',
      'Bandyti sulaikyti kvėpavimą'
    ],
    correctIndex: 1,
    explanation: 'Jei nepavyksta sulaikyti žiovulio, būtina užsidengti burną ranka ir tyliai atsiprašyti.'
  },
  {
    id: 'q68',
    question: 'Kaip elgtis su šlapiu paltu svečiuose?',
    options: [
      'Pakabinti spintoje tarp kitų',
      'Paklausti šeimininkų, kur padėti džiūti',
      'Mesti ant lovos',
      'Laikyti su savimi'
    ],
    correctIndex: 1,
    explanation: 'Šlapių drabužių negalima kabinti prie kitų svečių drabužių. Paklauskite šeimininkų, kur juos padžiauti.'
  },
  {
    id: 'q69',
    question: 'Ar galima aptarinėti politiką ir religiją su mažai pažįstamais?',
    options: [
      'Taip, tai įdomios temos',
      'Ne, tai „pavojingos“ temos, galinčios sukelti konfliktą',
      'Tik jei jūsų nuomonės sutampa',
      'Tik per vakarienę'
    ],
    correctIndex: 1,
    explanation: 'Politika, religija ir pinigai yra laikomos netinkamomis temomis „small talk“ pokalbiams, nes gali greitai įžiebti ginčus.'
  },
  {
    id: 'q70',
    question: 'Kaip elgtis, jei kažkas jus pertraukė?',
    options: [
      'Rėkti „Aš dar nebaigiau!“',
      'Leisti pasisakyti, tada tęsti',
      'Pertraukti atgal',
      'Įsižeisti ir išeiti'
    ],
    correctIndex: 1,
    explanation: 'Mandagiausia leisti įsiterpusiam baigti mintį, o tada ramiai pasakyti: „Kaip minėjau...“ arba „Norėčiau užbaigti mintį“.'
  },
  {
    id: 'q71',
    question: 'Ką daryti su dantų krapštuku?',
    options: [
      'Naudoti prie stalo atvirai',
      'Naudoti prie stalo užsidengus burną',
      'Naudoti tualete',
      'Kramtyti'
    ],
    correctIndex: 2,
    explanation: 'Dantų krapštymas yra higienos procedūra, todėl ji atliekama vonios kambaryje, o ne prie stalo.'
  },
  {
    id: 'q72',
    question: 'Kaip elgtis, jei pamiršote piniginę per pasimatymą?',
    options: [
      'Pabėgti',
      'Pasakyti tiesą ir pasiūlyti sumokėti vėliau (pervesti)',
      'Liepti kitam sumokėti',
      'Plauti indus'
    ],
    correctIndex: 1,
    explanation: 'Nuoširdumas geriausia. Paaiškinkite situaciją ir nedelsiant pasiūlykite sprendimą (pvz., momentinį pavedimą).'
  },
  {
    id: 'q73',
    question: 'Ar galima įeiti į kabinetą nepasibeldus?',
    options: [
      'Taip, jei durys atviros',
      'Ne, visada reikia pasibelsti (net jei atvira)',
      'Tik pas viršininką',
      'Tik pas kolegas'
    ],
    correctIndex: 1,
    explanation: 'Net jei durys praviros, mandagu stabtelėti ir pasibelsti į staktą ar paklausti „Ar galima?“, prieš įeinant.'
  },
  {
    id: 'q74',
    question: 'Kaip elgtis su komplimentais?',
    options: [
      'Ginčytis („Oi ne, čia sena suknelė“)',
      'Tylėti',
      'Padėkoti („Ačiū, malonu girdėti“)',
      'Sakyti komplimentą atgal iškart'
    ],
    correctIndex: 2,
    explanation: 'Į komplimentą atsakoma paprastu „Ačiū“. Nereikia teisintis ar menkinti savęs.'
  },
  {
    id: 'q75',
    question: 'Ką daryti, jei išpylėte gėrimą ant kito žmogaus?',
    options: [
      'Valyti jam drabužius',
      'Atsiprašyti ir pasiūlyti apmokėti valymą',
      'Juoktis',
      'Apkaltinti jį'
    ],
    correctIndex: 1,
    explanation: 'Nereikia pulti valyti (tai pažeidžia asmeninę erdvę). Atsiprašykite, duokite servetėlę ir pasiūlykite apmokėti cheminį valymą.'
  },
  {
    id: 'q76',
    question: 'Kaip elgtis su ausinėmis kalbant su žmogumi?',
    options: [
      'Palikti ausyse',
      'Išsiimti bent vieną (geriau abi)',
      'Pagarbinti muziką',
      'Rodyti ženklus'
    ],
    correctIndex: 1,
    explanation: 'Kalbantis būtina išsiimti ausines. Tai rodo pagarbą pašnekovui.'
  },
  {
    id: 'q77',
    question: 'Ar galima fotografuoti žmones be jų leidimo?',
    options: [
      'Taip, viešoje vietoje',
      'Ne, mandagu atsiklausti',
      'Tik jei jie nemato',
      'Tik įžymybes'
    ],
    correctIndex: 1,
    explanation: 'Nors viešoje vietoje įstatymai gali leisti, etiška yra atsiklausti, ypač jei fotografuojate iš arti ar privačioje situacijoje.'
  },
  {
    id: 'q78',
    question: 'Kaip elgtis eilėje?',
    options: [
      'Brautis į priekį',
      'Stovėti ir laukti savo eilės, išlaikant atstumą',
      'Garsiai skųstis',
      'Prašyti, kad praleistų'
    ],
    correctIndex: 1,
    explanation: 'Eilėje laikomasi tvarkos ir asmeninės erdvės (nealsuojama kitam į nugarą).'
  },
  {
    id: 'q79',
    question: 'Ką daryti, jei radote pamestą daiktą?',
    options: [
      'Pasiimti sau',
      'Palikti kur yra',
      'Bandyti rasti savininką arba atiduoti administracijai',
      'Išmesti'
    ],
    correctIndex: 2,
    explanation: 'Sąžininga yra bandyti grąžinti daiktą (per socialinius tinklus, policiją ar įstaigos administraciją).'
  },
  {
    id: 'q80',
    question: 'Kaip elgtis su „Tu“ ir „Jūs“ kreipiniais?',
    options: [
      'Visiems sakyti „Tu“',
      'Visiems sakyti „Jūs“',
      'Siūlyti pereiti prie „Tu“ gali vyresnis/viršininkas',
      'Nėra skirtumo'
    ],
    correctIndex: 2,
    explanation: 'Iniciatyvą pereiti prie „Tu“ rodo vyresnis asmuo, vadovas arba moteris (bendraujant su vyru).'
  },
  {
    id: 'q81',
    question: 'Ar galima valgyti vištieną rankomis?',
    options: [
      'Taip, visada',
      'Tik namuose ar piknike',
      'Niekada',
      'Tik sparnelius'
    ],
    correctIndex: 1,
    explanation: 'Restorane vištiena valgoma įrankiais. Rankomis – tik neformaliose situacijose (piknikas, greito maisto restoranas).'
  },
  {
    id: 'q82',
    question: 'Kaip elgtis, jei gavote elektroninį laišką su prierašu „CC“?',
    options: [
      'Būtina atsakyti',
      'Tai tik informacinis laiškas, atsakyti nebūtina',
      'Atsakyti visiems',
      'Ištrinti'
    ],
    correctIndex: 1,
    explanation: 'CC (Carbon Copy) reiškia, kad laiškas jums skirtas susipažinimui. Veiksmų tikimasi iš pagrindinio gavėjo (To).'
  },
  {
    id: 'q83',
    question: 'Ką daryti, jei netyčia sugadinote orą viešumoje?',
    options: [
      'Garsiai atsiprašyti',
      'Apsimesti, kad nieko neįvyko',
      'Apkaltinti kitą',
      'Pabėgti'
    ],
    correctIndex: 1,
    explanation: 'Tokiose situacijose geriausia ignoruoti ir elgtis lyg nieko neįvyko, kad neatkreiptumėte dar daugiau dėmesio.'
  },
  {
    id: 'q84',
    question: 'Kaip elgtis su padėklu greito maisto restorane?',
    options: [
      'Palikti ant stalo',
      'Nunešti į tam skirtą vietą ir išmesti šiukšles',
      'Padėti ant kito stalo',
      'Palikti ant kėdės'
    ],
    correctIndex: 1,
    explanation: 'Savitarnos restoranuose privaloma susitvarkyti savo vietą – nunešti padėklą ir išrūšiuoti atliekas.'
  },
  {
    id: 'q85',
    question: 'Ar galima dažytis plaukus viešame tualete?',
    options: [
      'Taip',
      'Ne, tai nehigieniška ir trukdo kitiems',
      'Tik jei greitai',
      'Tik oro uoste'
    ],
    correctIndex: 1,
    explanation: 'Vieši tualetai skirti gamtiniams reikalams ir rankų plovimui, o ne grožio procedūroms.'
  },
  {
    id: 'q86',
    question: 'Kaip elgtis, jei kas nors jūsų nepraleidžia perėjoje?',
    options: [
      'Rėkti ir gestikuliuoti',
      'Spirti į mašiną',
      'Ramiai palaukti kito momento',
      'Bėgti per kelią'
    ],
    correctIndex: 2,
    explanation: 'Saugumas ir ramybė svarbiausia. Agresija kelyje tik sukelia daugiau pavojaus.'
  },
  {
    id: 'q87',
    question: 'Ką daryti su kramtoma guma prieš pokalbį?',
    options: [
      'Kramtyti toliau',
      'Prilipdyti po stalu',
      'Išmesti į šiukšliadėžę (suvyniojus)',
      'Nuryti'
    ],
    correctIndex: 2,
    explanation: 'Kramtyti gumą kalbant yra nepagarba. Ją reikia išmesti (suvyniojus į popierėlį) prieš pradedant pokalbį.'
  },
  {
    id: 'q88',
    question: 'Kaip elgtis, jei svečias sudaužė jūsų mėgstamą vazą?',
    options: [
      'Rėkti ant jo',
      'Nuraminti svečią, kad tai tik daiktas',
      'Liepti sumokėti',
      'Verkti'
    ],
    correctIndex: 1,
    explanation: 'Geras šeimininkas visada teikia pirmenybę svečio savijautai, o ne daiktams. "Nieko tokio, tai tik vaza".'
  },
  {
    id: 'q89',
    question: 'Ar galima liesti eksponatus muziejuje?',
    options: [
      'Taip, jei niekas nemato',
      'Ne, nebent parašyta kitaip',
      'Tik pirštu',
      'Tik skulptūras'
    ],
    correctIndex: 1,
    explanation: 'Muziejuose eksponatų liesti negalima (riebalai nuo pirštų kenkia paviršiams), nebent tai interaktyvi paroda.'
  },
  {
    id: 'q90',
    question: 'Kaip elgtis su skėčiu einant gatve?',
    options: [
      'Laikyti žemai',
      'Kelti aukščiau prasilenkiant',
      'Sukti ratu',
      'Baksnoti kitiems'
    ],
    correctIndex: 1,
    explanation: 'Prasilenkiant su kitais, skėtį reikia pakelti aukščiau, kad neužgautumėte praeivių akių.'
  },
  {
    id: 'q91',
    question: 'Ką daryti, jei pamiršote piniginę parduotuvėje prie kasos?',
    options: [
      'Atsiprašyti ir paprašyti atidėti prekes',
      'Rėkti ant kasininkės',
      'Bėgti',
      'Vogti'
    ],
    correctIndex: 0,
    explanation: 'Ramiai atsiprašykite ir paprašykite atidėti prekes, kol atsinešite piniginę.'
  },
  {
    id: 'q92',
    question: 'Ar galima neštis savo maistą į kavinę?',
    options: [
      'Taip, jei užsisakai gėrimą',
      'Ne, tai nemandagu ir dažnai draudžiama',
      'Tik desertą',
      'Tik vaikams'
    ],
    correctIndex: 1,
    explanation: 'Į maitinimo įstaigas neštis savo maistą yra draudžiama ir nemandagu.'
  },
  {
    id: 'q93',
    question: 'Kaip elgtis, jei kas nors apkalba kitą žmogų?',
    options: [
      'Prisijungti',
      'Pakeisti temą arba pasakyti ką nors gero apie tą žmogų',
      'Įrašyti pokalbį',
      'Tylėti'
    ],
    correctIndex: 1,
    explanation: 'Elegantiškas būdas sustabdyti apkalbas – pasakyti: „O man jis pasirodė labai profesionalus“ arba tiesiog pakeisti temą.'
  },
  {
    id: 'q94',
    question: 'Ką daryti, jei gavote žinutę vėlai vakare?',
    options: [
      'Atsakyti iškart',
      'Atsakyti ryte (jei tai ne skubus atvejis)',
      'Pykti',
      'Užblokuoti'
    ],
    correctIndex: 1,
    explanation: 'Darbiniais klausimais vėlai vakare trukdyti nedera. Jei gavote – atsakykite darbo metu.'
  },
  {
    id: 'q95',
    question: 'Kaip elgtis sporto klube?',
    options: [
      'Palikti prakaituotą treniruoklį',
      'Nusivalyti treniruoklį po naudojimo',
      'Užimti treniruoklį naršant telefone',
      'Garsiai rėkti keliant svorį'
    ],
    correctIndex: 1,
    explanation: 'Higiena ir pagarba kitiems – būtina nusivalyti prakaitą nuo įrenginių ir neužimti jų be reikalo.'
  },
  {
    id: 'q96',
    question: 'Ką daryti, jei jūsų šuo atliko reikalus ant šaligatvio?',
    options: [
      'Nueiti',
      'Surinkti į maišelį',
      'Užberti smėliu',
      'Apsimesti, kad nematėte'
    ],
    correctIndex: 1,
    explanation: 'Šeimininkas privalo surinkti savo augintinio ekskrementus.'
  },
  {
    id: 'q97',
    question: 'Kaip elgtis su „švedišku stalu“ viešbutyje?',
    options: [
      'Neštis maistą į kambarį',
      'Valgyti restorane',
      'Krautis maistą į rankinę',
      'Imti rankomis'
    ],
    correctIndex: 1,
    explanation: 'Maistas nuo švediško stalo skirtas valgymui vietoje. Neštis į kambarį (nebent leidžiama) ar krautis į rankines yra vagystė.'
  },
  {
    id: 'q98',
    question: 'Ką daryti, jei kas nors užlipo jums ant kojos?',
    options: [
      'Stumti',
      'Priimti atsiprašymą',
      'Užlipti atgal',
      'Rėkti'
    ],
    correctIndex: 1,
    explanation: 'Jei žmogus atsiprašė, mandagu priimti atsiprašymą: „Nieko tokio“.'
  },
  {
    id: 'q99',
    question: 'Kaip elgtis, jei nežinote, kuria šakute valgyti?',
    options: [
      'Klausti padavėjo',
      'Žiūrėti, ką daro kiti, arba imti iš išorės į vidų',
      'Valgyti rankomis',
      'Nevalgyti'
    ],
    correctIndex: 1,
    explanation: 'Auksinė taisyklė: įrankiai naudojami iš išorės į vidų (link lėkštės). Arba stebėkite šeimininkus.'
  },
  {
    id: 'q100',
    question: 'Kokia yra svarbiausia savybė bendraujant?',
    options: [
      'Mokėjimas kalbėti',
      'Mokėjimas klausytis',
      'Būti teisiu',
      'Būti garsiam'
    ],
    correctIndex: 1,
    explanation: 'Geras pašnekovas yra tas, kuris moka klausytis ir girdėti kitą.'
  },
  {
    id: 'q101',
    question: 'Ką reiškia tiesioginis akių kontaktas Azijos kultūrose?',
    options: [
      'Pasitikėjimą ir atvirumą',
      'Nepagarbą ar iššūkį (ypač vyresniam)',
      'Meilę',
      'Baimę'
    ],
    correctIndex: 1,
    explanation: 'Skirtingai nei Vakaruose, Azijoje ilgas tiesioginis žiūrėjimas į akis vyresniam asmeniui gali būti laikomas nepagarba.'
  },
  {
    id: 'q102',
    question: 'Kaip vertinama tyla pokalbio metu Japonijoje ar Suomijoje?',
    options: [
      'Kaip nejaukus momentas',
      'Kaip normali bendravimo dalis (pagarba, mąstymas)',
      'Kaip pyktis',
      'Kaip nežinojimas ką sakyti'
    ],
    correctIndex: 1,
    explanation: 'Šiose kultūrose tyla yra vertinama teigiamai – ji rodo, kad pašnekovas apmąsto jūsų žodžius.'
  },
  {
    id: 'q103',
    question: 'Kaip elgtis, jei pietietis (pvz., italas) stovi labai arti jūsų?',
    options: [
      'Stumti jį',
      'Trauktis atgal',
      'Suprasti, kad tai jų kultūrinė norma (mažesnė asmeninė erdvė)',
      'Rėkti'
    ],
    correctIndex: 2,
    explanation: 'Pietų šalyse asmeninė erdvė yra mažesnė nei Šiaurės Europoje. Tai rodo draugiškumą, o ne agresiją.'
  }
];
