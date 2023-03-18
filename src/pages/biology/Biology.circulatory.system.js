import React from "react";
import "./AllBiology.scss";

const BiologyCirculatorySystem = () => {
  const goBack = () => {
    window.history.back();
  };

  const goBlood = () => {
    document.getElementById("blood").scrollIntoView();
  };

  const goBloodFunction = () => {
    document.getElementById("bloodFunction").scrollIntoView();
  };

  const goLymphaticSystem = () => {
    document.getElementById("lymphaticSystem").scrollIntoView();
  };

  const goCardiovascularSystem = () => {
    document.getElementById("cardiovascularDisease").scrollIntoView();
  };

  const goresistance = () => {
    document.getElementById("resistance").scrollIntoView();
  };

  const goAids = () => {
    document.getElementById("aids").scrollIntoView();
  };

  const goAlergy = () => {
    document.getElementById("alergy").scrollIntoView();
  };

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="menu">
        <button onClick={goBack}>Powrót</button>
        <button onClick={goBlood}>Skład i budowa krwi</button>
        <button onClick={goBloodFunction}>Funkcja układu odpornościowego</button>
        <button onClick={goLymphaticSystem}>Układ limfatyczny</button>
        <button onClick={goCardiovascularSystem}>Choroby układu krążenia</button>
        <button onClick={goresistance}>Odporność</button>
        <button onClick={goAids}>Aids</button>
        <button onClick={goAlergy}>Alergia</button>
      </div>
      <button className="toTop" onClick={toTop}>Na górę</button>
      <h1 id="blood">Skład i budowa krwi</h1>
      <p>Skład krwi to przede wszystkim krwinki czerwone, zwane także erytrocytami</p>
      <p>Krwinki białe zwane leukocytami, płytki krwi zwane trombocytami oraz osocze, czyli część płynną, w której
        zawieszone są wymienione wyżej komórki.</p>
      <h3>Osocze</h3>
      <img src="https://krwiodawcy.org/wp-content/uploads/2010/12/skladniki-krwi.png" alt="składniki krwi" width={500} />
      <p>bazuje na wodzie, która stanowi 90% jego budowy. Pozostałe składowe to między innymi jony sodowe, potasowe,
        chlorkowe, kwasy tłuszczowe, mocznik, hormony,cholesterol, witaminy, białka, glukoza oraz
        produkty przemiany materii. Osocze jest odpowiedzialne za transport substancji odżywczych, udział w reakcjach
        obronnych organizmu oraz utrzymanie stałego ciśnienia i pH komórek.</p>
      <h3>Erytrocyty (krwinki czerwone)</h3>
      <p>ich głównym składnikiem jest hemoglobina. Dzięki swej umiejętności wychwytywania cząsteczek
        tlenu i łączenia ich z żelazem, umożliwia przenoszenie owego tlenu do wszystkich komórek naszego
        organizmu. W tym samym procesie dwutlenek węgla jest wyprowadzany do płuc, skąd jest wydalany.</p>
      <h3>Trombocyty (płytki krwi)</h3>
      <p>to właśnie ten element składu krwi odpowiedzialny jest za krzepnięcie krwi. Razem z rozpuszczonym
        w osoczu fibrynogenem, w przypadku doznania urazu tworzą w miejscu uszkodzenia naczynia swego
        rodzaju zaporę, która zatrzymuje przepływ erytrocytów. Tak właśnie powstaje skrzep.</p>
      <h3>Aglutynacja</h3>
      <p>proces, w którym łączą się dwa lub więcej wyrazów w jeden większy wyraz, zachowując przy tym ich
        pierwotne znaczenie. Jest to zjawisko charakterystyczne dla niektórych języków, zwłaszcza języków
        aglutynacyjnych, w których słowa składają się z morfemów, czyli elementów o znaczeniu leksykalnym
        lub gramatycznym, które łączą się ze sobą w celu utworzenia wyrazu.</p>
      <h3>Grupy krwi</h3>
      <img src="https://www.gov.pl/photo/76939a75-8ac4-4e5d-a99b-0c1ded47166d" alt="grupy krwi" width={500} />
      <p>A → A, B</p>
      <p>B → B, AB</p>
      <p>AB - AB</p>
      <p>0 - A, B, AB, 0</p>
      <p>0, A → A</p>
      <p>0, B → B</p>
      <p>0, A, B, AB → AB</p>
      <p>0 → 0</p>
      <h3>Antygen</h3>
      <p>substancja, która jest rozpoznawana przez układ odpornościowy organizmu jako obca i
        prowokuje odpowiedź immunologiczną w postaci produkcji przeciwciał lub innych komórek odpornościowych.</p>
      <h1 id="bloodFunction">Funkcja układu krwionośnego</h1>
      <h3>Układ krwionośny</h3>
      <p>W skład układu krwionośnego wchodzą:</p>
      <li>żyły - odpowiedzialne za doprowadzanie krwi z tkanek do serca, w żyłach panuje
        zdecydowanie niższe ciśnienie niż w tętnicach</li>
      <li>tętnice - naczynia o grubych ścinkach, w których panuje wysokie ciśnienie; transportują krew z
        serca do pozostałych części organizmu, dostarczając tlen i substancje odżywcze oraz regulując ciśnienie krwi</li>
      <li>włosowate naczynia krwionośne, zwane też włośniczkami - cienkie naczynka, za pomocą których odbywa się
        wymiana substancji odżywczych z krwi do tkanek</li>
      <li>serce - położone w śródpiersiu, otoczone workiem osierdziowym. W budowie serca człowieka
        wyróżnia się 2 przedsionki i 2 komory sercowe</li>
      <h3>Układ limfatyczny</h3>
      <p>Układ limfatyczny jest częścią układu odpornościowego. Utrzymuje również równowagę płynów i
        odgrywa rolę we wchłanianiu tłuszczów i rozpuszczalnych w tłuszczach składników odżywczych.
        Układ limfatyczny obejmuje rozległą sieć naczyń, która przechodzi przez prawie wszystkie nasze
        tkanki, umożliwiając przepływ płynu zwanego limfą. Limfa krąży w organizmie w podobny sposób jak krew.</p>
      <h3>Układ odpornościowy</h3>
      <p>Układ odpornościowy codziennie walczy z niebezpiecznymi dla zdrowia drobnoustrojami i
        toksynami próbującymi atakować od zewnątrz. Jego zadaniem jest także reagowanie na niebezpieczeństwa
        płynące z wnętrza organizmu. Wyspecjalizowane jednostki codziennie przeczesują swoje rewiry, by sprawdzić,
        czy komórki dzielą się w prawidłowy sposób.</p>
      <h3>Krwoobieg mały</h3>
      <img src="https://zasoby.ekologia.pl/art/26280/max/max_Zdj_2_Uklad_krazenia.jpg" alt="Krwoobieg mały" width={500} />
      <h3>Krwoobieg duży</h3>
      <img src="https://pl-static.z-dn.net/files/ded/be4eaa70217f8dfd051e4db40824c1ac.jpg" alt="Krwoobieg duży" width={500} />
      <h3>Cykl pracy serca</h3>
      <p>trwa ok. 0,83 sekundy. Składają się na niego trzy fazy: skurcz przedsionków – 0,11 sekundy;
        skurcz komór – 0,32 sekundy; rozkurcz serca – 0,40 sekundy</p>
      <img src="https://powtorkazbiologii.pl/wp-content/uploads/2023/01/budowa-serca.jpg" alt="Cykl pracy serca" width={500} />
      <p>Skurcz serca (skurcz komór):</p>
      <li>Skurcz przedsionków: komory serca są wypełnione krwią, a z przedsionków napływa dodatkowa porcja krwi.
        Przedsionki kurczą się, wypychając krew do komór.</li>
      <li>Skurcz komór: impuls elektryczny powoduje skurcz komór, który zaciska się, wypychając
        krew z serca do naczyń krwionośnych.</li>
      <p>Rozkurcz serca (rozkurcz komór):</p>
      <li>Rozkurcz komór: po skurczu komór, mięśnie rozkurczają się, a zastawki półksiężycowate na wlocie
        do komór są zamknięte, aby zapobiec cofaniu się krwi.</li>
      <li>Rozkurcz przedsionków: przedsionki rozkurczają się, a zastawki mitralne (przy wlocie do lewej komory)
        i trójdzielne (przy wlocie do prawej komory) otwierają się, pozwalając krwi zalewać przedsionki.</li>
      <h3>Naczynia wieńcowe</h3>
      <img src="https://topmedyk.pl/uploads/website/choroba-wiencowa/1-naczynia-wiencowe.jpg" alt="Naczynia wieńcowe" width={500} />
      <p>Naczynia wieńcowe to naczynia krwionośne, które zaopatrują
        serce w krew i tlen. Są to małe, wąskie tętnice, które wychodzą
        bezpośrednio z aorty i biegną po powierzchni serca, rozgałęziając się
        w drobne naczynia krwionośne nazywane tętnicami wieńcowymi mniejszymi i większymi.
        Naczynia wieńcowe łączą się ze sobą, tworząc gęstą sieć naczyń, która pokrywa całą powierzchnię serca.</p>
      <p>Funkcją naczyń wieńcowych jest dostarczanie krwi i tlenu do mięśnia sercowego,
        który wymaga ciągłego dopływu tlenku węgla i składników odżywczych, aby działać efektywnie.
        Ponieważ mięsień sercowy pracuje nieprzerwanie przez całe życie, jego potrzeby metaboliczne są
        szczególnie duże. Z tego powodu, gdy naczynia wieńcowe ulegają zwężeniu lub blokadzie, co może wynikać
        z chorób układu krążenia, takich jak miażdżyca, może dojść do niedotlenienia mięśnia sercowego, co może
        prowadzić do chorób wieńcowych, takich jak choroba niedokrwienna serca, zawał serca
        lub inne powikłania sercowe.</p>
      <h1 id="lymphaticSystem">Układ limfatyczny</h1>
      <h3>Naczynia limfatyczne</h3>
      <img src="https://onkoopieka.pl/wp-content/uploads/2018/03/uklad-limfatyczny-powstawanie-limfy.jpg" alt="Naczynia limfatyczne" width={500} />
      <p>Naczynia limfatyczne to sieć przewodów i naczyń, które transportują limfę z tkanek i
        narządów z powrotem do układu krwionośnego. Limfa to płyn wypełniający przestrzenie międzykomórkowe,
        który zawiera białka, glukozę, elektrolity, leukocyty, a także odpady metaboliczne, bakterie i inne cząstki,
        które zalegają w tkankach.</p>
      <h3>Narządy limfatyczne</h3>
      <img src="https://bi.im-g.pl/im/f2/e2/12/z19803378IH,Uklad-limfatyczny.jpg" alt="Narządy limfatyczne" width={500} />
      <p>Narządy limfatyczne to ważna część układu limfatycznego, który odpowiada za
        obronę przed chorobami i infekcjami. Narządy te składają się z tkanki limfatycznej,
        która wytwarza i magazynuje komórki odpornościowe, takie jak limfocyty, które pomagają zwalczać patogeny.</p>
      <p>Do narządów limfatycznych zalicza się:</p>
      <li>Śledzionę - narząd o kształcie fasoli, znajdujący się w lewym górnym kwadrancie
        brzucha, który pomaga w produkcji limfocytów i filtracji krwi.</li>
      <li>Grasica - narząd znajdujący się w klatce piersiowej, który bierze
        udział w produkcji limfocytów i regulacji układu odpornościowego.</li>
      <li>Węzły chłonne - niewielkie, owalne narządy, które znajdują się wzdłuż
        naczyń limfatycznych i pomagają w filtrowaniu limfy oraz produkcji komórek odpornościowych.</li>
      <li>Migdałki - narządy znajdujące się w gardle, które biorą udział w
        obronie przed drobnoustrojami i innymi substancjami obcymi.</li>
      <li>Tkanka limfatyczna błony śluzowej - znajdująca się w przewodzie pokarmowym,
        oddechowym i moczowym, która pomaga w obronie przed patogenami.</li>
      <p>Funkcją narządów limfatycznych jest produkowanie i magazynowanie komórek
        odpornościowych, a także ich przemieszczanie się w całym organizmie w celu
        zwalczania infekcji i chorób. Problemy z narządami limfatycznymi mogą prowadzić
        do chorób, takich jak choroba Hashimoto, autoimmunologiczna choroba tarczycy, czy chłoniaki.</p>
      <h1 id="cardiovascularDisease">Choroby układu krążenia</h1>
      <h3>Anemia</h3>
      <img src="https://sklep.alablaboratoria.pl/centrum-wiedzy/wp-content/uploads/2022/06/najczestsze-objawy-anemii-infografika.webp" alt="Anemia" width={500} />
      <p>Anemia to stan, w którym organizm ma zbyt mało czerwonych krwinek lub hemoglobiny,
        białka zawartego w czerwonych krwinkach, które pomagają przenosić
        tlen z płuc do innych tkanek i narządów.</p>
      <h3>Białaczka</h3>
      <img src="https://assets-eu-01.kc-usercontent.com/bed48093-082e-0109-4b5f-7bdadab5eedd/50f13057-c634-49f8-8a22-ab11eecc8a9c/Bia%C5%82aczka%20-%20charakterystyka%20choroby.png?w=1920&h=1225&auto=format&lossless=true&fit=crop" alt="Białaczka" width={500} />
      <p>Białaczka, zwana również białaczką krwi, to grupa chorób nowotworowych, w których dochodzi
        do niekontrolowanego wzrostu i namnażania się komórek krwiotwórczych w szpiku kostnym,
        które zwykle wytwarzają białe krwinki. Choroba ta prowadzi do tworzenia się niedojrzałych,
        niezdolnych do pełnienia funkcji krwinek, co z kolei prowadzi do osłabienia układu odpornościowego
        i zmniejszonej zdolności organizmu do zwalczania infekcji.</p>
      <h3>Udar mózgu</h3>
      <img src="https://neuroaid.pl/wp-content/uploads/2020/02/xUDARY-rodzaje-500x750.png.pagespeed.ic.vi-br__sJG.webp" alt="Udar mózgu" width={500} />
      <p>Udar mózgu, znany również jako udar apoplektyczny lub udar krwotoczny, jest
        nagłym wystąpieniem zaburzeń krążenia mózgowego, które prowadzi do uszkodzenia mózgu.</p>
      <h3>Nadciśnienie tętnicze</h3>
      <p>Nadciśnienie tętnicze, zwane także hipertensją, to stan, w którym ciśnienie krwi
        w tętnicach jest wyższe niż norma. W większości przypadków przyczyna hipertensji jest nieznana,
        ale czynniki ryzyka obejmują otyłość, palenie papierosów, brak aktywności fizycznej, dieta bogata
        w sól oraz dziedziczność.</p>
      <h1 id="resistance">Odporność</h1>
      <img src="https://cdn.galleries.smcloud.net/t/galleries/gf-qzgW-RqfJ-ZatT_dlaczego-spada-odpornosc-przyczyny-oslabienia-odpornosci-664x442-nocrop.jpg" alt="Odporność" width={500} />
      <h3>Odporność wrodzona</h3>
      <p>Odporność wrodzona to pierwsza linia obrony organizmu przed infekcjami i chorobami.
        Jest to szybka i nieswoista odpowiedź na infekcję, która chroni organizm przed patogenami,
        takimi jak wirusy, bakterie i grzyby. Odporność wrodzona obejmuje mechanizmy takie jak bariery
        fizyczne (np. skóra, śluz), fagocytoza, naturalne killer cells (komórki zabójcze), cytokiny,
        dopełniacz i interferony.</p>
      <p>Odporność nieswoista (innymi nazwami: niespecyficzna lub wczesna) jest reakcją organizmu na
        obecność patogenu i działa w ciągu kilku godzin lub dni po zakażeniu. Odporność nieswoista nie
        jest ukierunkowana na konkretny patogen, ale na ogólny typ patogenu. Dlatego też ten rodzaj odporności
        zapewnia ochronę przed szerokim spektrum patogenów.</p>
      <p>Odporność swoista (innymi nazwami: specyficzna lub późna) to reakcja organizmu na
        konkretne patogeny. Odporność ta rozwija się po kontakcie z patogenem i obejmuje
        produkcję przeciwciał i limfocytów B i T, które są zaprogramowane, aby atakować konkretny patogen.
        Odporność swoista jest długotrwała i zapewnia ochronę przed ponowną infekcją tym samym patogenem.</p>
      <h3>Odporność nabyta</h3>
      <p>Odporność nabyta to druga linia obrony organizmu przed infekcjami i chorobami.
        Jest to odpowiedź organizmu na patogeny, które udało się przedostać przez barierę
        obrony wrodzonej. Odporność nabyta dzieli się na odporność bierną i
        czynną oraz odporność naturalną i sztuczną.</p>
      <p>Odporność bierna jest uzyskiwana przez organizm poprzez podanie gotowych przeciwciał
        (np. surowicy) lub komórek odpornościowych (np. limfocytów T) z zewnątrz. Przeciwciała te
        lub komórki odpornościowe nie są produkowane przez organizm, a jedynie dostarczane z zewnątrz,
        przez co uzyskana odporność jest krótkotrwała i zanika po pewnym czasie.</p>
      <p>Odporność czynna jest uzyskiwana przez organizm poprzez stymulację układu odpornościowego
        do produkcji przeciwciał lub komórek odpornościowych w odpowiedzi na infekcję lub podanie
        szczepionki. W tym przypadku organizm samodzielnie produkuje przeciwciała lub komórki odpornościowe,
        co zapewnia długotrwałą ochronę.</p>
      <p>Odporność naturalna jest uzyskiwana przez organizm w naturalny sposób w wyniku ekspozycji na
        patogeny w środowisku, na przykład w wyniku infekcji wirusowej lub bakteryjnej. W tym przypadku
        organizm rozwija odporność nabytą w sposób naturalny.</p>
      <p>Odporność sztuczna jest uzyskiwana przez organizm poprzez podanie szczepionki,
        która stymuluje układ odpornościowy do produkcji przeciwciał lub komórek odpornościowych
        w odpowiedzi na określony patogen. Odporność sztuczna jest długotrwała i zapewnia ochronę
        przed daną chorobą bez konieczności przejścia przez ciężką infekcję.</p>
      <h1 id="aids">Aids → wirus hive</h1>
      <img src="https://fizjoterapeuty.pl/wp-content/uploads/2020/06/wirus-hiv.jpg.webp" alt="Aids → wirus hive" width={500} />
      <p>AIDS to choroba wywołana przez wirusa HIV. Wirus HIV atakuje komórki układu odpornościowego, w szczególności
        limfocyty T CD4+, które są niezbędne dla prawidłowego funkcjonowania układu odpornościowego. W wyniku infekcji
        wirusem HIV dochodzi do stopniowego osłabiania układu odpornościowego, co prowadzi do rozwoju AIDS.</p>
      <h1 id="alergy">Alergia</h1>
      <img src="https://polki.pl/foto/1_X_LARGE/objawy-alergii-2453343.jpg" alt="Alergia" width={500} />
      <p>Alergia to reakcja układu odpornościowego na zwykle nieszkodliwe substancje, nazywane alergenami.
        Przy alergii układ odpornościowy identyfikuje te substancje jako zagrożenie i zaczyna produkować
        przeciwciała, zwane IgE. Podczas kolejnej ekspozycji na ten sam alergen, IgE aktywują komórki układu
        odpornościowego, takie jak mastocyty i bazofile, powodując uwalnianie histaminy i innych
        mediatorów zapalnych. To prowadzi do objawów alergicznych, takich jak swędzenie, kichanie,
        kaszel, trudności z oddychaniem, pokrzywka i obrzęk.</p>
      <h1>Wstrząs anafilaktyczny</h1>
      <p>Wstrząs anafilaktyczny to poważna, nagła reakcja alergiczna, która może być groźna dla życia.
        Wstrząs anafilaktyczny występuje wtedy, gdy układ odpornościowy reaguje na alergen w sposób skrajny,
        prowadzący do szybkiego uwolnienia dużych ilości mediatorów zapalnych, takich jak histamina, które powodują
        rozszerzenie naczyń krwionośnych, obniżenie ciśnienia krwi i skurcz oskrzeli.</p>
      <h1>Przeszczepy</h1>
      <img src="https://lekarzifarmaceuta.pl/wp-content/uploads/2019/12/przeszczepy-blog-1-1024x663.png" alt="Przeszczepy" width={500} />
      <p>Przeszczepy to zabiegi, w których organy lub tkanki z jednego organizmu są wstawiane do innego.</p>
      <h1>Zgodność tkankowa</h1>
      <p>Zgodność tkankowa to zgodność między komórkami, które mają być przeszczepione, a komórkami docelowymi.</p>
      <h1>Choroby autoimmunologiczne</h1>
      <img src="https://krokdozdrowia.com/wp-content/uploads/2019/06/choroby-autoimmunologiczne.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe" alt="Choroby autoimmunologiczne" width={500} />
      <p>Choroby autoimmunologiczne to choroby, w których układ odpornościowy atakuje własne tkanki.</p>
      <h1>Immunosupresja</h1>
      <p>Immunosupresja to zaburzenie funkcjonowania układu odpornościowego, które prowadzi do osłabienia jego zdolności do walki z infekcjami.</p>
    </div>
  );
};

export default BiologyCirculatorySystem;
