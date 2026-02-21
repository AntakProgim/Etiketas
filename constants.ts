import { Topic, QuizQuestion } from './types';

export const APP_TITLE = "Etiketo akademija";
export const APP_SUBTITLE = "Jūsų gidas į eleganciją ir sėkmę";

export const STYLE_GUIDE = {
  colors: {
    primary: {
      50: 'bg-primary-50',
      100: 'bg-primary-100',
      500: 'bg-primary-500',
      600: 'bg-primary-600',
      800: 'text-primary-800',
      900: 'text-primary-900',
    },
    gold: {
      500: 'text-gold-500',
      600: 'text-gold-600',
    },
    neutral: {
      bg: 'bg-slate-50',
      surface: 'bg-white',
      text: 'text-gray-700',
      muted: 'text-gray-500',
      border: 'border-gray-100'
    }
  },
  typography: {
    fontFamily: {
      sans: 'font-sans',
      serif: 'font-serif',
    },
    headings: {
      h1: 'font-serif text-3xl md:text-4xl font-bold text-primary-800',
      h2: 'font-serif text-2xl md:text-3xl font-bold text-primary-800',
      h3: 'font-serif text-xl font-bold text-primary-800 mb-4',
    },
    body: 'font-sans text-base text-gray-700 leading-relaxed',
    caption: 'font-sans text-sm text-gray-500',
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
    card: 'bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden',
    button: {
      primary: 'bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-sm font-medium flex items-center justify-center',
      secondary: 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center',
      icon: 'p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center',
      ghost: 'text-gray-500 hover:text-primary-600 transition-colors font-medium cursor-pointer'
    },
    input: 'w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow',
    badge: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800',
    divider: 'border-t border-gray-100 my-6',
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
        imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Etiketas ir vertybių sistema</h3>
          <p class="mb-4 text-gray-700">Etiketas dažniausiai suprantamas kaip visuma elgesio taisyklių, kuriose vienaip ar kitaip atsispindi tarpusavio santykiai. Etiketas yra situatyvinio pobūdžio reiškinys, t.y. tam tikro žodžio, gesto ar veiksmo parinkimą nulemianti konkreti situacija.</p>
          <p class="mb-4 text-gray-700">Pagrindiniai šiuolaikinio etiketo principai.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Humaniškumas ir žmoniškumas.</strong> Mandagumas, taktiškumas, korektiškumas.</li>
            <li><strong>Veiksmų tikslingumas.</strong> Elgtis išmintingai, paprastai ir patogiai.</li>
            <li><strong>Elgesio grožis</strong> ir estetinis patrauklumas.</li>
            <li><strong>Tradicijų ir papročių paisymas.</strong></li>
          </ul>
          <p class="mb-4 text-gray-700">Etiketo paskirtis – mažinti nepagrįstą socialinę-psichologinę įtampą, baimę, agresiją, padėti užmegzti kontaktus.</p>
        `
      },
      {
        id: 'history',
        title: 'Ekskursas į praeitį',
        imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Etiketo kilmė</h3>
          <p class="mb-4 text-gray-700">Žodis „etiketas“ atsirado nuo paprasto draudimo „nemindžioti žolės“ Liudviko XIV dvare. Sodininkas prismaigstė lentelių su užrašu „Po žolę nevaikščioti“ (pranc. <em>etiquette</em> – etiketė, lentelė).</p>
          <p class="mb-4 text-gray-700">Vėliau „etiketas“ tapo ženklais, apibrėžiančiais, ką asmuo gali daryti ar ko turi vengti. Iš Versalio etiketas pradėjo plisti po pasaulį kaip karališkųjų rūmų elgesio kanonai.</p>
          <p class="mb-4 text-gray-700">Senovės Kinijos mąstytojas Konfucijus etiketui (<em>li</em>) skyrė ypatingą dėmesį, teigdamas, kad jis formuoja harmoningus santykius. Viduramžiais riterių luomas sukūrė savo garbės kodeksą, pagrįstą pagarba, dosnumu ir rūpesčiu silpnesniais.</p>
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
        imageUrl: 'https://images.unsplash.com/photo-1516780236580-ef416334d5b4?auto=format&fit=crop&w=800&q=80',
        audioPhrases: [
          { phrase: "Laba diena", lang: "lt-LT", label: "Lietuviškai" },
          { phrase: "Good morning", lang: "en-US", label: "Angliškai (Ryte)" },
          { phrase: "Bonjour", lang: "fr-FR", label: "Prancūziškai" },
          { phrase: "Guten Tag", lang: "de-DE", label: "Vokiškai" }
        ],
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kas ką sveikina pirmas?</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Mokinys</strong> sveikina mokytoją.</li>
            <li><strong>Jaunesnis</strong> sveikina vyresnį.</li>
            <li><strong>Ateinantis</strong> sveikina stovintį.</li>
            <li><strong>Vėluojantis</strong> sveikina laukiančius (klasę ir mokytoją).</li>
            <li><strong>Berniukas</strong> sveikina mergaitę.</li>
          </ul>
          <p class="mb-4 text-gray-700">Šiuolaikinė taisyklė: <strong>pirmas sveikinasi tas, kuris yra mandagesnis</strong>.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Rankos paspaudimas</h3>
          <p class="mb-4 text-gray-700">Rankos paspaudimas rodo pokalbio pradžią ir pabaigą. Mokykloje rankos paspaudimas dažniau naudojamas oficialiuose renginiuose arba sveikinant su apdovanojimais.</p>
        `
      },
      {
        id: 'appearance',
        title: 'Išvaizda ir apranga',
        imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Darbuotojų aprangos kodas</h3>
          <p class="mb-4 text-gray-700">Progimnazijos darbuotojai savo išvaizda reprezentuoja įstaigą, todėl apranga turi būti:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Tvarkinga ir švari.</strong> Laikomasi asmens higienos ir estetikos reikalavimų.</li>
            <li><strong>Etiška.</strong> Nedėvima provokuojanti apranga (gilios iškirptės, permatomi ar itin atviri rūbai).</li>
            <li><strong>Dalykiška.</strong> Apranga turi atitikti darbo pobūdį ir kurti pagarbią atmosferą.</li>
          </ul>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Mokinių uniformos (1-8 kl.)</h3>
          <p class="mb-4 text-gray-700">Mokiniai privalo dėvėti tvarkingą uniformą kiekvieną dieną.</p>
          
          <div class="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-6">
            <h4 class="font-bold text-primary-800 mb-2">Privalomos dalys:</h4>
            <ul class="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li><strong>Viršus:</strong> Džemperis be gobtuvo (tamsiai žalias, pilkas, mėlynas, bordo) arba Polo marškinėliai (šviesiai pilki, mėlyni, violetiniai, balti) su mokyklos logotipu.</li>
              <li><strong>Apačia:</strong> Vienspalvės juodos, pilkos ar mėlynos kelnės/džinsai (mergaitėms – ir sijonai).</li>
            </ul>
          </div>

          <p class="mb-4 text-gray-700"><strong>Draudžiama:</strong> Sportinės kelnės (treningai), plėšyti džinsai, paplūdimio apranga, šlepetės, avalynė aukšta pakulne.</p>

          <div class="flex flex-col gap-3 mt-6">
            <a href="https://antakalnio.lt/progimnazija/uniformos" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800 underline font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Informacija apie uniformas (antakalnio.lt)
            </a>
            <a href="https://docs.google.com/document/d/1DdRpNCeNFYRQJhkY-SxjNCpAqTF0VNUPBO1pyVzB8bs/edit?tab=t.0" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-800 underline font-medium flex items-center">
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
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Rankinės ir Pirštinės</h3>
          <p class="mb-4 text-gray-700">Prie gatvėje dėvimų drabužių nešiokite spalviškai suderintą didesnę rankinę. Prie popiečio drabužių – nedidelį rankinuką, prie vakarinės suknelės – mažą krepšelį.</p>
          <p class="mb-4 text-gray-700">Dama gatvėje nuolat mūvi pirštines. Prie vakarinės suknelės mūvimos pirštinės nusiimamos prie stalo. Namų šeimininkė, sveikindama svečius, niekada nemūvi pirštinių.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kvepalai</h3>
          <p class="mb-4 text-gray-700">Būkite saikingi. Kvepalai neturi skelbti apie jūsų pasirodymą, o tik lydėti kaip šešėlis. Dieną vartokite tualetinį vandenį, vakare – kvepalus.</p>
        `
      },
      {
        id: 'public_transport',
        title: 'Viešasis transportas',
        imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Moksleivio elgesys autobuse</h3>
          <p class="mb-4 text-gray-700">Viešasis transportas – tai vieta, kur pasimato tavo mandagumas.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Užleisk vietą.</strong> Tai auksinė taisyklė. Pamatęs vyresnį žmogų, nėščią moterį ar tėvus su mažais vaikais – atsistok ir pasiūlyk atsisėsti.</li>
            <li><strong>Kuprinė.</strong> Įlipęs į autobusą, nusiimk kuprinę ir laikyk ją rankose arba pasidėk ant kelių (jei sėdi). Ant nugaros palikta kuprinė trukdo kitiems praeiti ir gali ką nors užgauti.</li>
            <li><strong>Tyla.</strong> Muzikos klausykis tik su ausinėmis. Jei kalbi telefonu ar su draugu – daryk tai tyliai, kad visas autobusas negirdėtų tavo paslapčių.</li>
            <li><strong>Maistas.</strong> Autobuse nevalgome ledų, kebabų ar kito tepančio maisto.</li>
          </ul>
        `
      },
      {
        id: 'hygiene',
        title: 'Asmens higiena',
        imageUrl: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Švara – mandagumo dalis</h3>
          <p class="mb-4 text-gray-700">Tvarkinga išvaizda rodo pagarbą sau ir aplinkiniams.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Rankos.</strong> Plauk rankas prieš valgį, pasinaudojęs tualetu ir grįžęs iš lauko. Tai pagrindinė taisyklė saugant sveikatą.</li>
            <li><strong>Čiaudėjimo etiketas.</strong> Jei neturi nosinės, čiaudėk ar kosėk ne į delną, o į sulenktą alkūnę. Taip mikrobai nepateks ant rankų, kuriomis lieti daiktus ar sveikini draugus.</li>
            <li><strong>Nagai.</strong> Jie turi būti švarūs ir tvarkingai nukarpyti. Nagų kramtymas – nemalonus įprotis, kurio reikėtų atsikratyti.</li>
            <li><strong>Plaukai.</strong> Plaukai turi būti švarūs ir sušukuoti. Svarbu: niekada nesikeisk šukomis ar kepurėmis su draugais, kad išvengtum utėlių (pedikuliozės). Jei taip nutiko – lik namuose ir gydykis, tai ne gėda, o liga.</li>
            <li><strong>Apranga.</strong> Drabužiai turi būti švarūs ir tvarkingi. Mokykloje venk iššaukiančios aprangos.</li>
          </ul>
        `
      },
      {
        id: 'language',
        title: 'Kalbos kultūra',
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Žodžiai turi galią</h3>
          <p class="mb-4 text-gray-700">Tavo kalba pasako apie tave daugiau nei apranga.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Keiksmažodžiai.</strong> Keiksmai nerodo „kietumo“, jie rodo skurdų žodyną ir nepagarbą aplinkiniams. Mandagus žmogus randa kitų būdų emocijoms išreikšti.</li>
            <li><strong>Atsiprašymas.</strong> Jei netyčia nusikeikei ar pasakei kažką nemalonaus, svarbu atsiprašyti. Sakyk: „Atsiprašau, man išsprūdo“ arba „Atsiprašau, nenorėjau to pasakyti“.</li>
            <li><strong>Stebuklingi žodžiai.</strong> „Ačiū“, „Prašau“, „Laba diena“, „Viso gero“ – šie žodžiai atidaro visas duris.</li>
          </ul>
        `
      },
      {
        id: 'respect',
        title: 'Pagarbus elgesys',
        imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Konfliktinės situacijos</h3>
          <p class="mb-4 text-gray-700">Kaip elgtis, kai aplink tvyro įtampa?</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Rėkimas.</strong> Jei matai rėkiantį mokytoją ar mokinį – neįsitrauk į konfliktą ir nerėk atgal. Išlik ramus. Jei situacija pavojinga ar nuolatinė, būtinai pasakyk tėvams arba mokyklos psichologui.</li>
            <li><strong>Apkalbos.</strong> Jei girdėjai, kaip kažkas viešai apkalba mokinį ar mokytoją, neprisidėk prie to. Geriausia reakcija – pasakyti „Man nepatinka apkalbos“ arba tiesiog nueiti. Apkalbos žemina tą, kuris apkalba.</li>
            <li><strong>Pagalba.</strong> Jei matai, kad kažkas skriaudžiamas, nelik abejingas. Pakviesk suaugusįjį.</li>
          </ul>

          <div class="mt-8 grid gap-4 md:grid-cols-2">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfz-k14DibU7M8GBV4OkGULyHrRHw6vadfdDTnNbsAveJTW7w/viewform" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-red-50 rounded-lg border border-red-100 hover:bg-red-100 transition-colors group shadow-sm">
              <div class="mr-3 bg-white p-2 rounded-full text-red-500 group-hover:text-red-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div>
                <h4 class="font-bold text-red-800 text-sm">Pranešk apie patyčias</h4>
                <p class="text-xs text-red-600 mt-1">Anoniminė forma</p>
              </div>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCMuGJFcTpZzRm4R4zQJfU1FWPtqC-ZtwcIyvycL3BnNZevw/viewform" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-100 hover:bg-amber-100 transition-colors group shadow-sm">
              <div class="mr-3 bg-white p-2 rounded-full text-amber-500 group-hover:text-amber-600 shadow-sm">
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
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Punktualumas</h3>
          <p class="mb-4 text-gray-700">Į teatrą ar kiną vėluoti nemandagu. Į teatro salę po trečio skambučio žiūrovai dažniausiai neįleidžiami iki pertraukos.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Ėjimas į savo vietą</h3>
          <p class="mb-4 text-gray-700">Jei tenka praeiti pro jau sėdinčius žiūrovus, visada eikite <strong>veidu į juos</strong> (nugara į sceną/ekraną). Atsiprašykite už sutrukdymą.</p>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Telefonai ir maistas</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Telefonai.</strong> Privalo būti išjungti arba nustatyti begarsiu režimu. Ekrano šviesa tamsoje trukdo kitiems labiau nei garsas.</li>
            <li><strong>Maistas.</strong> Teatre salėje nevalgoma. Kine užkandžiauti priimta, tačiau venkite čežančių pakuočių ir stiprių kvapų.</li>
          </ul>
        `
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
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        audioPhrases: [
          { phrase: "Ačiū, kad skyrėte laiko", lang: "lt-LT", label: "Padėka (LT)" },
          { phrase: "Thank you for your time", lang: "en-US", label: "Padėka (EN)" },
          { phrase: "Atsiprašau, ar galiu paklausti?", lang: "lt-LT", label: "Mandagus įsiterpimas (LT)" },
          { phrase: "Excuse me, may I ask?", lang: "en-US", label: "Mandagus įsiterpimas (EN)" }
        ],
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Pirmasis įspūdis</h3>
          <p class="mb-4 text-gray-700">Verslo pasaulyje, kaip ir mokykloje, pirmasis įspūdis yra labai svarbus. Tai tinka tiek darbo pokalbiams, tiek egzaminams, pristatymams ar susitikimams su mokyklos administracija.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Punktualumas.</strong> Vėlavimas rodo nepagarbą kito laikui. Į pamokas, egzaminus ar susitikimus su direktoriumi visada ateikite laiku.</li>
            <li><strong>Prisistatymas.</strong> Aiškiai ištarkite savo vardą ir pavardę. Tai rodo pasitikėjimą savimi, ypač bendraujant su naujais mokytojais ar svečiais.</li>
            <li><strong>Laikysena.</strong> Tiesus stuburas ir atviras žvilgsnis rodo, kad esate pasiruošę bendradarbiauti ir klausytis.</li>
          </ul>
        `
      },
      {
        id: 'business_dress',
        title: 'Dalykinė apranga',
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Aprangos kodai</h3>
          <p class="mb-4 text-gray-700">Tinkama apranga rodo profesionalumą. Tai svarbu ne tik darbe, bet ir mokyklos renginiuose, egzaminuose ar atstovaujant mokyklą olimpiadose.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Business Formal (Oficiali).</strong> Tamsus kostiumas, balti marškiniai (vyrams). Kostiumėlis (moterims). Tinka egzaminams, išleistuvėms, oficialiems minėjimams ar susitikimams su svarbiais svečiais.</li>
            <li><strong>Business Casual (Kasdienė dalykinė).</strong> Tvarkinga apranga be griežtų reikalavimų. Mokytojams tai kasdienė darbo apranga, mokiniams – tvarkinga uniforma.</li>
            <li><strong>Smart Casual (Puošni kasdienė).</strong> Tvarkingi džinsai su švarku ar marškiniais. Tinka neformaliems susitikimams, klasės šventėms ar ekskursijoms.</li>
          </ul>
        `
      },
      {
        id: 'business_meetings',
        title: 'Susitikimų valdymas',
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Efektyvūs susitikimai</h3>
          <p class="mb-4 text-gray-700">Mokinių tarybos posėdžiai, grupiniai projektai ar klasės valandėlės taip pat yra „verslo susitikimai“, kuriuose galioja tos pačios taisyklės.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">El. laiškų etiketas</h3>
          <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80" alt="Darbas kompiuteriu" class="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
          <p class="mb-4 text-gray-700">Rašytinė komunikacija su mokytojais, administracija ar būsimais darbdaviais turi būti profesionali ir aiški.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
        id: 'teacher_room',
        title: 'Mokytojų kambarys ir kabinetai',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Mokytojų kambarys – mokytojų poilsio zona</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Beldimas.</strong> Prieš įeinant į kabinetą ar mokytojų kambarį, būtina pasibelsti ir palaukti leidimo įeiti.</li>
            <li><strong>Pertraukos.</strong> Mokytojų kambarys yra vieta, kur mokytojai ilsisi ir ruošiasi pamokoms. Mokiniai čia turėtų užeiti tik esant svarbiam reikalui.</li>
            <li><strong>Pagarba.</strong> Įėjus būtina pasisveikinti su visais esančiais mokytojais, ne tik su tuo, kurio ieškote.</li>
          </ul>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kabineto kultūra</h3>
          <p class="mb-4 text-gray-700">Kabinetas yra mokymosi erdvė. Nelieskite mokytojo stalo, kompiuterio ar asmeninių daiktų be leidimo. Išeidami palikite savo darbo vietą tvarkingą.</p>
        `
      },
      {
        id: 'student_teacher_comm',
        title: 'Mokinio ir mokytojo bendravimas',
        imageUrl: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kreipiniai</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li>Į mokytojus kreipiamės „Jūs“ ir „Mokytojau / Mokytoja“.</li>
            <li>Venkite familiaraus tono, net jei mokytojas jaunas ar bendrauja laisviau.</li>
          </ul>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Diskusijos ir klausimai</h3>
          <p class="mb-4 text-gray-700">Klausti ir diskutuoti yra skatinama, tačiau tai daryti reikia mandagiai. Pakelkite ranką, nepertraukinėkite. Jei nesutinkate su vertinimu, aptarkite tai po pamokos ramiai ir argumentuotai, o ne emocingai prieš visą klasę.</p>
        `
      },
      {
        id: 'parent_meetings',
        title: 'Tėvų susirinkimai',
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Bendradarbiavimas</h3>
          <p class="mb-4 text-gray-700">Tėvų susirinkimai skirti aptarti vaiko pažangą. Tai ne vieta viešai kritikuoti kitus vaikus ar mokytojus.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Konfidencialumas</h3>
          <p class="mb-4 text-gray-700">Asmeniniai klausimai apie konkretų mokinį turėtų būti aptariami individualiai su mokytoju, o ne bendro susirinkimo metu.</p>
        `
      },
      {
        id: 'school_events',
        title: 'Mokyklos renginiai',
        imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Himnas ir vėliava</h3>
          <p class="mb-4 text-gray-700">Giedant himną ar keliant vėliavą, stovime ramiai, pasitempę, nekalbame ir nesinaudojame telefonais. Tai pagarbos valstybei ženklas.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Pagarba kalbėtojui</h3>
          <p class="mb-4 text-gray-700">Kai kas nors kalba scenoje (direktorius, svečias, mokinys), salėje turi būti tyla. Plojimai – geriausia padėka už pasirodymą. Švilpimas ar replikos yra nemandagu.</p>
        `
      },
      {
        id: 'sustainable_events',
        title: 'Tvarūs mokyklos renginiai',
        imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Šventės be žalos gamtai</h3>
          <p class="mb-4 text-gray-700">Būti mandagiam reiškia būti mandagiam ir gamtai. Planuojant klasės žiburėlį ar gimtadienį, pagalvokite apie tvarumą.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Kvietimai.</strong> Vietoj popierinių kvietimų, sukurkite gražų skaitmeninį kvietimą ar vaizdo įrašą.</li>
            <li><strong>Dekoracijos.</strong> Venkite vienkartinių balionų ir plastikinių girliandų. Naudokite daugkartines dekoracijas arba pasigaminkite jas patys iš perdirbamų medžiagų.</li>
            <li><strong>Vaišės.</strong> Naudokite daugkartinius indus arba popierinius (ne plastikinius). Atsineškite savo gertuves, kad nereikėtų pirkti vandens plastikiniuose buteliukuose.</li>
            <li><strong>Dovanos.</strong> Geriausia dovana – įspūdžiai (bilietai į kiną, ekskursija) arba valgomi dalykai, o ne plastikiniai niekučiai, kurie greitai atsibosta ir tampa šiukšlėmis.</li>
          </ul>
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
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Temos eilutė ir Tonas</h3>
          <p class="mb-4 text-gray-700">Temos eilutė (Subject) yra pirmoji laiško dalis, kurią mato mokytojas. Ji turi būti informatyvi. Rašydami laišką, laikykitės pagarbaus tono. Venkite „slengo“ ir emociukų pertekliaus.</p>
          
          <h4 class="font-bold text-lg mt-8 mb-4 text-gray-800 text-center">Interaktyvi El. Laiško Anatomija</h4>
          <div class="my-6 border border-gray-200 rounded-lg shadow-lg bg-white overflow-hidden max-w-2xl mx-auto transform transition-all hover:shadow-xl">
            <!-- Mock Window Header -->
            <div class="bg-gray-100 p-3 border-b border-gray-200 flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <span class="ml-2 text-xs text-gray-500 font-mono">Naujas laiškas</span>
            </div>
            
            <div class="p-6 space-y-4">
              <!-- Interactive Subject Line -->
              <div class="relative group">
                 <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Tema</label>
                 <div class="bg-gray-50 p-3 rounded border border-gray-200 text-gray-700 hover:border-primary-400 hover:bg-white transition-all cursor-help flex items-center justify-between">
                   <span>Dėl namų darbų (Matematika, 8a kl.)</span>
                   <span class="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">Kodėl tai gerai?</span>
                 </div>
                 <div class="absolute z-20 bottom-full left-0 mb-2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
                   <strong>Gera tema:</strong> Konkreti, nurodo pamoką ir klasę. Mokytojas iškart supranta, apie ką laiškas.
                   <div class="absolute bottom-[-6px] left-6 w-3 h-3 bg-gray-800 transform rotate-45"></div>
                 </div>
              </div>
              
              <!-- Interactive Body -->
              <div class="relative group">
                 <label class="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Turinis</label>
                 <div class="bg-gray-50 p-4 rounded border border-gray-200 text-gray-700 min-h-[120px] hover:border-primary-400 hover:bg-white transition-all cursor-help text-sm leading-relaxed">
                   <p class="mb-2"><span class="bg-blue-100 px-1 rounded">Laba diena, mokytoja,</span></p>
                   <p class="mb-2">Siunčiu savo namų darbus, kuriuos uždavėte vakar. Prisegtuke rasite PDF failą.</p>
                   <p><span class="bg-blue-100 px-1 rounded">Geros dienos!</span></p>
                 </div>
                 <div class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 pointer-events-none text-center">
                   <strong>Struktūra:</strong><br/>
                   1. Pagarbus kreipinys (Laba diena).<br/>
                   2. Aiškus tikslas (Siunčiu namų darbus).<br/>
                   3. Mandagus atsisveikinimas.
                 </div>
              </div>

              <!-- Interactive Signature -->
              <div class="relative group border-t border-gray-100 pt-4 mt-2">
                  <div class="flex items-center gap-3 cursor-help opacity-75 hover:opacity-100 transition-opacity bg-gray-50 p-2 rounded hover:bg-white border border-transparent hover:border-primary-200">
                      <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">VP</div>
                      <div>
                          <div class="font-bold text-sm text-gray-800">Vardenis Pavardenis</div>
                          <div class="text-xs text-gray-500">8a klasės mokinys</div>
                      </div>
                  </div>
                  <div class="absolute z-20 bottom-full left-0 mb-2 w-72 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-2 pointer-events-none">
                   <strong>Parašas:</strong> Visada nurodykite savo vardą, pavardę ir klasę, kad mokytojas žinotų, kas rašo.
                   <div class="absolute bottom-[-6px] left-8 w-3 h-3 bg-gray-800 transform rotate-45"></div>
                 </div>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800 mt-8">„Atsakyti visiems“ ir Laikas</h3>
          <p class="mb-4 text-gray-700">Funkciją „Atsakyti visiems“ naudokite atsargiai. Į laiškus mokytojams rašykite darbo metu (ne vėlai vakare ar savaitgaliais).</p>
        `
      },
      {
        id: 'instant_messaging',
        title: 'Bendravimas klasės grupėse',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Klasės susirašinėjimai (Messenger, Discord)</h3>
          <p class="mb-4 text-gray-700">Bendraujant internetu su klasiokais ir mokytojais galioja tos pačios mandagumo taisyklės kaip ir realybėje.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
        imageUrl: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kaip elgtis per Google Meet ar Zoom?</h3>
          <p class="mb-4 text-gray-700">Nuotolinė pamoka yra tokia pati pamoka, tik vyksta kompiuterio ekrane. Svarbu elgtis atsakingai ir pagarbiai.</p>
          
          <div class="bg-green-50 p-4 rounded-lg border border-green-100 mb-6">
            <h4 class="font-bold text-green-800 mb-2 flex items-center">✅ 5 TAIP (Ką daryti)</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li><strong>Pasiruošk.</strong> Susikurk patogią darbo vietą, pasitikrink įrangą ir interneto ryšį.</li>
              <li><strong>Uniforma.</strong> Pamokų metu dėvėk mokyklos uniformą – tai nuteikia darbui.</li>
              <li><strong>Kamera.</strong> Laikyk kamerą įjungtą. Mokytojui ir draugams svarbu tave matyti. Naudok foną privatumui.</li>
              <li><strong>Aktyvumas.</strong> Būk aktyvus: klausk, kelk ranką, dalyvauk diskusijose.</li>
              <li><strong>Poilsis.</strong> Po pamokų būtinai pailsėk nuo ekrano, pajudėk ir atsigerk vandens.</li>
            </ul>
          </div>

          <div class="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
            <h4 class="font-bold text-red-800 mb-2 flex items-center">❌ 5 NE (Ko vengti)</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700 text-sm">
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
        imageUrl: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Pasiruošimas vaizdo skambučiui</h3>
          <p class="mb-6 text-gray-700">Vaizdo skambučiai reikalauja tokio pat pasiruošimo kaip ir gyvi susitikimai, tačiau turi papildomų techninių niuansų.</p>

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
                      <div class="w-2 h-2 bg-white rounded-full"></div> REC
                   </div>
                   <div class="absolute top-full right-0 mt-2 w-56 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/rec:opacity-100 transition-opacity transform translate-y-2 group-hover/rec:translate-y-0 z-20">
                     <strong>Etiketo taisyklė:</strong> Visada atsiklauskite ir įspėkite visus dalyvius prieš pradedant įrašinėti pokalblį.
                   </div>
                 </div>
              </div>
              
              <div class="flex justify-center gap-4 mb-2 pointer-events-auto">
                 <!-- Mute Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-red-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Mikrofonas:</strong> Laikykite išjungtą (Mute), kai nekalbate, kad išvengtumėte pašalinių garsų (klaviatūros barškėjimo, aido).
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                   </div>
                 </div>

                 <!-- Camera Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-green-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Kamera:</strong> Įjungta kamera rodo pagarbą ir dėmesį pašnekovams. Žiūrėkite į kamerą, ne į ekraną.
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                   </div>
                 </div>
                 
                 <!-- Hand Raise Button -->
                 <div class="group/btn relative">
                   <div class="w-12 h-12 rounded-full bg-gray-700/80 backdrop-blur hover:bg-yellow-500 flex items-center justify-center text-white transition-all cursor-help border border-gray-500 hover:scale-110 shadow-lg">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a9 9 0 0 1 3.24-14.22"/></svg>
                   </div>
                   <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-white text-gray-800 text-xs p-3 rounded-lg shadow-xl opacity-0 group-hover/btn:opacity-100 transition-all translate-y-2 group-hover/btn:translate-y-0 text-center">
                     <strong>Pakelti ranką:</strong> Naudokite šią funkciją, kad nepertrauktumėte kalbančiojo.
                     <div class="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Svarbiausios taisyklės</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
    title: 'Pobūvių ir stalo etiketas',
    description: 'Priėmimai, elgesys prie stalo, įrankiai ir dovanos.',
    iconName: 'Utensils',
    color: 'rose',
    imageUrl: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: 'receptions',
        title: 'Mokyklos šventės',
        imageUrl: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Renginių tipai</h3>
          <p class="mb-4 text-gray-700">Mokykloje vyksta įvairios šventės, kurioms galioja skirtingos taisyklės.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Arbatėlė.</strong> Jauki klasės šventė. Vaišinamasi arbata ir suneštiniais užkandžiais. Svarbu mandagiai pasiūlyti draugui, o ne pulti prie stalo pirmam.</li>
            <li><strong>Žiburėlis / Diskoteka.</strong> Linksma šventė su muzika. Apranga gali būti laisvesnė, bet tvarkinga. Svarbu ne tik šokti, bet ir bendrauti, nepalikti vienišų klasiokų.</li>
            <li><strong>Išleistuvės / Šimtadienis.</strong> Iškilmingas renginys. Apranga puošni (kostiumas, suknelė). Elgesys – ypač mandagus ir pagarbus mokytojams bei tėvams.</li>
            <li><strong>Piknikas.</strong> Šventė gamtoje. Svarbiausia taisyklė – nepalikti šiukšlių ir saugoti gamtą.</li>
          </ul>
        `
      },
      {
        id: 'table_manners',
        title: 'Elgesys prie stalo',
        imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Laikysena</h3>
          <p class="mb-4 text-gray-700">Sėdėkite tiesiai, neatsilošę. Rankas laikykite ant stalo (ne alkūnes!), o ne po stalu. Nedera žaisti su įrankiais ar sukiotis.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Servetėlė</h3>
          <p class="mb-4 text-gray-700">Servetėlė tiesiama tik ant kelių. Baigus valgyti, ji paliekama kairėje lėkštės pusėje, nesulankstyta kruopščiai, bet ir nesuglamžyta.</p>
        `
      },
      {
        id: 'cutlery_eating',
        title: 'Įrankiai ir valgymas',
        imageUrl: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Įrankių naudojimas</h3>
          <p class="mb-4 text-gray-700">Pradėkite nuo įrankių, esančių toliausiai nuo lėkštės. Baigus valgyti, įrankiai sudedami lygiagrečiai (kotais į dešinę).</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kaip valgyti</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Duona.</strong> Laužiama mažais gabalėliais rankomis.</li>
            <li><strong>Sriuba.</strong> Šaukštas keliamas smaigaliu arba šonu. Lėkštę galima lengvai paversti nuo savęs.</li>
            <li><strong>Spagečiai.</strong> Sukami ant šakutės, galima padėti šaukštu.</li>
          </ul>
        `
      },
      {
        id: 'gifts',
        title: 'Dovanų politika',
        imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Ką galima ir ko negalima priimti?</h3>
          <p class="mb-4 text-gray-700">Švietimo įstaigose galioja griežta dovanų politika, siekiant užtikrinti skaidrumą.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-green-50 p-4 rounded-lg border border-green-100">
              <h4 class="font-bold text-green-800 mb-2 flex items-center"><span class="mr-2">✅</span> Galima priimti</h4>
              <ul class="text-sm text-green-900 space-y-1 list-disc pl-4">
                <li>Dovanas pagal tarptautinį protokolą ar tradicijas.</li>
                <li>Reprezentacines dovanas (su įstaigos simbolika).</li>
                <li>Simbolines dovanas (gėles, knygas) profesinių švenčių proga (Mokytojo diena, Rugsėjo 1-oji).</li>
                <li>Kvietimus į nemokamus renginius, susijusius su pareigomis.</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg border border-red-100">
              <h4 class="font-bold text-red-800 mb-2 flex items-center"><span class="mr-2">❌</span> Negalima priimti</h4>
              <ul class="text-sm text-red-900 space-y-1 list-disc pl-4">
                <li>Pinigų (grynais ar dovanų čekiais).</li>
                <li>Alkoholio ir tabako gaminių.</li>
                <li>Paslaugų, kelionių, nuolaidų.</li>
                <li>Dovanų, kurios gali sukelti interesų konfliktą.</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Tylaus sutikimo taisyklė</h3>
          <p class="mb-4 text-gray-700">Jei dovana yra simbolinė ir jos vertė <strong>neviršija 1 BSI (74 Eur)</strong>, ji laikoma ją gavusio asmens nuosavybe ir jos registruoti nereikia. Tai vadinama „Tylaus sutikimo taisykle“.</p>

          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Dovanų registravimas</h3>
          <p class="mb-4 text-gray-700">Jei dovanos vertė viršija 150 Eur, ji tampa įstaigos nuosavybe. Visos dovanos, kurių vertė viršija 1 BSI, turi būti deklaruojamos.</p>

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
        id: 'meeting_etiquette',
        title: 'Elgesys pamokų metu',
        imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Dėmesys ir pagarba</h3>
          <p class="mb-4 text-gray-700">Pamoka yra laikas mokytis. Kaip elgtis, kad netrukdytume kitiems?</p>
          
          <h4 class="font-bold text-gray-800 mb-2">Gamtiniai reikalai</h4>
          <p class="mb-4 text-gray-700">Jei pamokos metu prireikia į tualetą:</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Pakelkite ranką.</strong> Tyliai paprašykite mokytojo leidimo išeiti.</li>
            <li><strong>Išeikite tyliai.</strong> Tiesiog atsistokite ir kuo tyliau išeikite pro duris.</li>
            <li><strong>Grįžkite taip pat tyliai.</strong> Užimkite savo vietą nekeldami triukšmo.</li>
          </ul>

          <h4 class="font-bold text-gray-800 mb-2">Telefonai</h4>
          <p class="mb-4 text-gray-700">Telefonai pamokų metu turi būti kuprinėse ir begarsiu režimu, nebent mokytojas leido juos naudoti mokymuisi.</p>
        `
      },
      {
        id: 'cafeteria',
        title: 'Mokyklos valgykloje',
        imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kultūra prie stalo mokykloje</h3>
          <p class="mb-4 text-gray-700">Valgykla – tai vieta, kur ilsimės ir bendraujame, todėl svarbu netrukdyti kitiems.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
        imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Ką sako kūnas?</h3>
          <p class="mb-4 text-gray-700">Neverbalinės priemonės perduoda net 55 proc. informacijos. Gestai dažnai svarbesni už žodžius.</p>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
            <li><strong>Atviri delnai.</strong> Atvirumas, sąžiningumas.</li>
            <li><strong>Sukryžiuotos rankos.</strong> Gynyba, uždarumas.</li>
            <li><strong>Akių kontaktas.</strong> Pasitikėjimas. Tačiau pernelyg įkyrus žiūrėjimas gali būti agresyvus.</li>
          </ul>
        `
      },
      {
        id: 'gestures_abroad',
        title: 'Gestai užsienyje',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Kultūriniai skirtumai</h3>
          <ul class="list-disc pl-5 space-y-2 mb-6 text-gray-700">
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
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        content: `
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Vokietija</h3>
          <p class="mb-4 text-gray-700">Labai svarbus punktualumas ir oficialumas. Kreipinys „tu“ darbe nepriimtinas. Rankos niekada nelaikomos kišenėse.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Prancūzija</h3>
          <p class="mb-4 text-gray-700">Vertinamas mandagumas ir prancūzų kalbos mokėjimas. Verslo pietūs gali užtrukti ilgai.</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Japonija</h3>
          <p class="mb-4 text-gray-700">Vizitinės kortelės teikiamos abiem rankomis. Nusilenkimas yra tradicinis pasisveikinimas. Dovanos yra labai svarbios, jos turi būti gražiai įpakuotos (vengti balto popieriaus).</p>
          <h3 class="text-xl font-serif font-bold mb-4 text-primary-800">Arabų šalys</h3>
          <p class="mb-4 text-gray-700">Kairė ranka laikoma nešvaria (negalima ja paduoti daiktų ar valgyti). Negalima rodyti pado. Venkite kalbų apie moteris.</p>
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
  }
];
