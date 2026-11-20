import test from "node:test";

export enum ServiceTypeEnum {
    MINDFULNESS, BREATH, CREATIVITY, BODY, WOMENS
}

export interface ServiceTypeConfig {
    title: string,
    description: string,
    image: string
}

export const ServicesTypeConfigData: {[key in ServiceTypeEnum]: ServiceTypeConfig} = {
    [ServiceTypeEnum.MINDFULNESS]: {
        title: "Uważność",
        description: "Praktyka, która pomaga zatrzymać się, zauważać to, co dzieje się w Tobie i wokół Ciebie oraz bardziej świadomie odpowiadać na codzienne doświadczenia.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.BREATH]: {
        title: "Oddech",
        description: "Sposób, w jaki oddychasz, ma znaczenie dla zdrowia i samopoczucia. Możesz lepiej poznać swój oddech i uczyć się korzystać z niego świadomie.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.CREATIVITY]: {
        title: "Kreatywność",
        description: "Przestrzeń do swobodnego tworzenia, eksperymentowania z kolorem i podążania za własną intuicją. Bez potrzeby umiejętności malarskich i bez gotowego pomysłu na efekt.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.BODY]: {
        title: "Ciało i Ruch",
        description: "Różne sposoby bycia w ruchu i w kontakcie z ciałem - od spokojnej jogi yin po swobodne, spontaniczne po-ruszenie.",
        image: "service_1.jpeg"
    },
    [ServiceTypeEnum.WOMENS]: {
        title: "Strefa Kobiet",
        description: "Spotkania i wyjazdy dla kobiet, w których  jest czas na rozmowę, wspólne doświadczenie, praktykę, twórczość i po prostu bycie razem.",
        image: "service_1.jpeg"
    }
}

export interface ServiceConfig {
    title: string,
    serviceType: ServiceTypeEnum,
    image?: string;
    url: string;
    content?: Content[];

    button?: ServiceButton;
}

export interface Content {
    text: string;
    bold?: boolean;
    italic?: boolean;
    link?: string;
    list?: boolean;
    title?: boolean;
    inline?: boolean;
}

export interface ServiceButton {
    text: string;
    mail?: string;
    path?: string; 
}

export const ServicesConfigList: ServiceConfig[] = [
    {
        title: "8 tygodniowe kursy uważności",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: "8-tygodniowy-kurs-uwaznosci-mbct",
        image: 'service_1.jpeg',
        button: {
            text: "Sprawdź najbliższą edycję",
            path: "/wydarzenia"
        },
        content: [
            { 
                bold: true, 
                text: '8 tygodniowy kurs uważności to osiem tygodni regularnej praktyki uważności, podczas których uczysz się lepiej rozumieć siebie oraz rozpoznawać swoje myśli, emocje i nawykowe sposoby reagowania.'
            },
            {
                text: 'MBCT (Mindfulness-Based Cognitive Therapy) to program łączący praktykę uważności ze współczesną psychologią. Od ponad 20 lat wspiera ludzi w rozwijaniu większej świadomości siebie i budowaniu bardziej życzliwej relacji z własnym doświadczeniem.'
            },
            {
                text: 'Program MBCT został opracowany przez prof. Marka Williamsa, prof. Johna Teasdale`a i prof. Zindela Segala. Początkowo powstał jako wsparcie dla osób z nawracającą depresją. Z czasem na jego podstawie rozwinął się program MBCT-L  (Uważność w życiu) kierowany szerzej do osób, które chcą lepiej radzić sobie ze stresem, napięciem, trudnymi emocjami oraz wyzwaniami codziennego życia.'
            },
            {
                title: true,
                text: 'Jak wygląda kurs?'
            },
            {
                text: 'Kurs obejmuje osiem cotygodniowych spotkań, Dzień Uważności oraz codzienną praktykę pomiędzy zajęciami. Każdy kolejny tydzień rozwija to, czego doświadczyliśmy wcześniej, a praktyka pomiędzy spotkaniami pozwala wprowadzać uważność w codzienności.'
            },
            {
                text: 'Każde spotkanie łączy formalną praktykę uważności, krótkie ćwiczenia oraz rozmowę o tym, jak doświadczenia z praktyki odnajdują się w codziennym życiu.'
            },
            {
                text: 'Podczas kursu będziesz praktykować między innymi:'
            },
            {
                list: true,
                text: 'medytacje prowadzone,'
            },
            {
                list: true,
                text: 'skanowanie ciała,'
            },
            {
                list: true,
                text: 'różne warianty trójstopniowej pauzy na oddech,'
            },
            {
                list: true,
                text: 'uważny ruch i świadome chodzenie,'
            },
            {
                list: true,
                text: 'ćwiczenia rozwijające życzliwość i wdzięczność,'
            },
            {
                list: true,
                text: 'sposoby wprowadzania uważności do codziennych sytuacji.'
            },
            {
                title: true,
                text: 'Czy MBCT jest terapią?'
            },
            {
                text: 'Kurs MBCT jest ustrukturyzowanym treningiem uważności łączącym praktykę mindfulness z elementami podejścia poznawczo-behawioralnego. Udział w kursie nie zastępuje psychoterapii ani leczenia, jeśli są one potrzebne.'
            },
            {
                title: true,
                text: 'Co pokazują badania?'
            },
            {
                text: 'MBCT jest jednym z najlepiej przebadanych programów opartych na uważności. Szczególnie dobrze udokumentowana jest jego skuteczność w zapobieganiu nawrotom depresji. Badania wskazują również na ich znaczenie we wspieraniu radzenia sobie ze stresem i trudnymi emocjami.'
            },
            {
                title: true,
                text: 'Czy ten kurs jest dla Ciebie?'
            },
            {
                text: 'Każdy osoba przychodzi na ten kurs z innym doświadczeniem i z innego miejsca w swoim życiu.'
            },
            {
                text: 'Być może od dłuższego czasu towarzyszy Ci napięcie, natłok myśli, przewlekły ból lub trudne emocje. Możliwe, że przechodzisz przez zmianę, stratę albo doświadczenie, z którym trudno Ci być. A może coraz częściej masz poczucie, że chcesz lepiej rozumieć siebie i swoje reakcje.'
            },
            {
                text: 'Są też osoby, które przychodzą bez konkretnego problemu - z ciekawości, potrzeby rozwoju lub chęci pogłębiania praktyki uważności.'
            },
            {
                text: 'Niezależnie od tego, z jakiego miejsca przychodzisz, kurs stwarza przestrzeń do zatrzymania, praktyki i uważnego przyglądania się własnemu doświadczeniu. Z życzliwością i ciekawością możesz poznawać swoje reakcje, nawyki i sposoby radzenia sobie z tym, co pojawia się w codziennym życiu.'
            },
            {
                text: 'Jeśli czujesz, że to dobry moment, zapraszam Cię do kolejnej edycji kursu.'
            },
            {
                title: true,
                text: 'Chcesz dowiedzieć się więcej?'
            },
            {
                text: 'Jeśli  chcesz dowiedzieć się więcej o badaniach nad MBCT i uważnością, poniżej znajdziesz materiały Uniwersytetu Oksfordzkiego oraz Oxford Mindfulness'
            },
            {
                bold: true,
                link: 'https://www.psych.ox.ac.uk/research/research-groups/mindfulness',
                text: 'University of Oxford - Mindfulness Research Centre'
            },
            {
                bold: true,
                link: 'https://oxfordmindfulness.org/resources/mindfulness-mbct-resources-from-professor-willem-kuyken',
                text: 'Oxford Mindfulness - MBCT Resources'
            },
            {
                bold: true,
                link: 'https://oxfordmindfulness.org/resources',
                text: 'Oxford Mindfulness - Resources & Publications'
            },
            {
                title: true,
                text: 'Najbliższa edycja kursu'
            },
            {
                text: 'Aktualny termin, szczegóły najbliższej edycji oraz informacje o zapisach znajdziesz w zakładce Wydarzenia'
            }
        ]
    },
    {
        title: "Warsztaty i treningi uważności",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: "warsztaty-i-treningi-uwaznosci",
        image: 'service_1.jpeg',
        button: {
            text: "Zapytaj o warsztat",
            mail: "mailto:przystanoddechu@gmail.com?subject=Warsztaty uważności"
        },
        content: [
            {
                title: true,
                text: 'Uważność, którą możesz przenieść do codziennego życia'
            },
            {
                text: 'Uważność jest dla mnie sposobem bycia bliżej tego, co naprawdę dzieje się w życiu - w ciele, myślach, emocjach i relacjach. To praktyka świadomego kierowania uwagi i uczenia się, jak być z własnym doświadczeniem z większą otwartością i życzliwością.'
            },
            {
                text: 'Dla mnie jest również głębokim wyrazem miłości i szacunku do życia, do siebie i do tego, co wokół.'
            },
            {
                text: 'Uważności uczymy się przede wszytskim poprzez doświadczenie. Dlatego podczas warsztatów dużo praktykujemy: zatrzymujemy się, kierujemy uwagę na ciało i oddech, obserwujemy myśli i emocje, przyglądamy się swoim reakcjom i temu, jak funkcjonujemy na co dzień.'
            },
            {
                text: 'Podczas warsztatów pracujemy między innymi z:'
            },
            {
                list: true,
                text: 'świadomością ciała i oddechu,'
            },
            {
                list: true,
                text: 'stresem i automatycznymi reakcjami,'
            },
            {
                list: true,
                text: 'myślami i emocjami,'
            },
            {
                list: true,
                text: 'uważnością w codziennym życiu i relacjach,'
            },
            {
                list: true,
                text: 'rozwijaniem bardziej świadomego kontaktu ze sobą.'
            },
            {
                text: 'Spotkania łączą praktyki mindfulness, elementy psychoedukacji oraz przestrzeń na refleksję i dzielenie się doświadczeniem. Prowadzę zarówno pojedyncze spotkania, jak i cykle dla grup.'
            },
            {
                bold: true,
                text: 'Jeśli chcesz wziąć udział w warsztacie lub zorganizować spotkanie dla swojej grupy, napisz od mnie. Wspólnie ustalimy temat i formę spotkania.'
            }
        ]
    },
    {
        title: "Medytacje",
        serviceType: ServiceTypeEnum.MINDFULNESS,
        url: "medytacje",
        image: 'service_1.jpeg',
        button: {
            text: "Sprawdź aktualne spotkania",
            path: "/wydarzenia"
        },
        content: [
            {
                text: 'Medytacja jest praktyką obecną w różnych tradycjach od tysięcy lat. Dziś korzystamy z niej zarówno w jej tradycyjnych formach, jak i we współczesnych podejściach opartych na uważności.'
            },
            {
                text: 'Dla mnie medytacja jest przede wszystkim przestrzenią zatrzymania i spotkania z tym, co jest. Z ciałem, oddechem, myślami, emocjami, ciszą. Z czasem pozwala coraz wyraźniej zauważać własne reakcje i nawykowe sposoby działania oraz wnosić więcej świadomości w codzienne życie.'
            },
            {
                text: 'Szczególnie bliska jest mi medytacja ciszy - prosta praktyka pozostawania w ciszy bez prowadzenia. Praktykuję i prowadzę również medytacje uważności oraz medytacje związane z oddechem.'
            },
            {
                text: 'Regularna praktyka medytacyjna jest dziś szeroko badana. Badania wskazują m.in. na jej możliwy związek z:'
            },
            {
                list: true,
                text: 'lepszą regulacją stresu i emocji,'
            },
            {
                list: true,
                text: 'większą zdolnością kierowania uwagą,'
            },
            {
                list: true,
                text: 'mniejszą reaktywnością na trudne doświadczenia,'
            },
            {
                list: true,
                text: 'rozwijaniem samoświadomości i bardziej życzliwego stosunku do siebie,'
            },
            {
                list: true,
                text: 'zmianami w funkcjonowaniu obszarów mózgu związanych m.in. z uwagą, emocjami i reakcją na stres.'
            },
            {
                inline: true,
                text: 'Badania opisują pewien wymiar medytacji. '
            },
            {
                bold: true, inline: true,
                text: ' Sama praktyka jest jednak doświadczeniem, które trudno zamknąć wyłącznie w mierzalnych efektach. '
            },
            {
                text: 'Dla wielu osób ważne stają się cisza, większa przestrzeń wewnętrzna, kontakt ze sobą czy inny sposób odnoszenia się do tego, co przynosi życie.'
            },
            {
                text: 'Medytacji uczymy się poprzez doświadczenie. Czasem jest spokojna, czasem spotykamy w niej niepokój, natłok myśli czy emocje. Zamiast dążyć do określonego stanu, uczymy się zauważać to, co właśnie się pojawia.'
            },
            {
                bold: true,
                text: 'Prowadzę medytacje w grupach oraz spotkania indywidualne, stacjonarnie i online. Pracuję również z firmami i organizacjami.'
            }
        ]
    },

    {
        title: "Metoda Butejki",
        serviceType: ServiceTypeEnum.BREATH,
        url: "metoda-butejki",
        image: 'service_1.jpeg',
        button: {
            text: "Umów się na spotkanie",
            mail: "mailto:przystanoddechu@gmail.com?subject=Metoda Butejki"
        },
        content: [
            {
                title: true,
                text: 'Metoda Butejki - funkcjonalny oddech na co dzień'
            },
            {
                text: 'Oddychamy przez całą dobę, najczęściej zupełnie o tym nie myśląc. Organizm robi to za nas. Oddech ma jednak szczególną właściwość - choć przebiega automatycznie, możemy również świadomie zmieniać jego tempo, rytm i głębokość. A sposób, w jaki oddychamy, ma znaczenie dla funkcjonowania naszego organizmu.'
            },
            {
                text: 'Z czasem mogą utrwalać się nawyki oddechowe, które przestają odpowiadać temu, czego w danym momencie potrzebuje ciało - oddychanie przez usta, częste wzdychanie, nabieranie dużych oddechów czy nadmiernie intensywne oddychanie.'
            },
            {
                bold: true,
                text: 'Metoda Butejki jest praktycznym treningiem, który pomaga zauważać te nawyki i uczyć się bardziej funkcjonalnego sposobu oddychania.'
            }, 
            {
                inline: true, 
                text: 'Pracujemy między innymi z oddychaniem przez nos, rytmem i objętością oddechu oraz spokojną pracą przepony.'
            },
            {
                title: true,
                text: 'Dlaczego sposób oddychania ma znaczenie?'
            },
            {
                text: 'Funkcjonalny oddech nie oznacza, że zawsze mamy oddychać wolno i spokojnie. Podczas wysiłku oddech naturalnie przyspiesza, a podczas odpoczynku zwalnia. Chodzi o jego '
            },
            {
                inline: true, bold: true,
                text: 'adekwatność do potrzeb organizmu.'
            },
            {
                text: 'Jednym z podstawowych elementów jest oddychanie przez nos. Nos ogrzewa, nawilża i filtruje wdychane powietrze, zanim trafi ono do dalszych dróg oddechowych. Dlatego w Metodzie Butejki uczymy się wracać do oddychania nosowego wszędzie tam, gdzie jest ono naturalne i możliwe.'
            },
            {
                text: 'Nie chodzi jednak o oddychanie nosem za wszelką cenę ani o osiągnięcie „idealnego oddechu”. Chodzi o lepsze rozpoznawanie własnego wzorca i zdobycie narzędzi, dzięki którym można świadomie z nim pracować.'
            },
            {
                title: true,
                text: 'Dla kogo?'
            },
            {
                text: 'Warto przyjrzeć się swojemu oddechowi, jeśli:'
            },
            {
                list: true,
                text: 'masz astmę i szukasz dodatkowych narzędzi wspierających kontrolę objawów,'
            },
            {
                list: true,
                text: 'szybko pojawia się u Ciebie zadyszka i chcesz nauczyć się lepiej pracować z oddechem podczas wysiłku,'
            },
            {
                list: true,
                text: 'zdarza Ci się mieć poczucie braku powietrza i potrzebę nabierania kolejnych dużych oddechów,'
            },
            {
                list: true,
                text: 'często oddychasz przez usta i chcesz wrócić do swobodniejszego oddychania przez nos,'
            },
            {
                list: true,
                text: 'często wzdychasz, ziewasz lub masz potrzebę brania głębokich oddechów,'
            },
            {
                list: true,
                text: 'stres i napięcie wyraźnie zmieniają Twój sposób oddychania i trudno Ci później wrócić do spokojniejszego rytmu,'
            },
            {
                list: true,
                text: 'chcesz po prostu lepiej poznać swój oddech i nauczyć się konkretnych sposobów pracy z nim.'
            },
            {
                bold: true,
                text: 'Nie trzeba czekać na poważne trudności z oddychaniem. '
            },
            {
                inline: true,
                text: 'To, czego uczysz się podczas treningu, możesz wykorzystywać w codziennym życiu - podczas odpoczynku, pracy, ruchu czy w sytuacjach napięcia.'
            },
            {
                title: true,
                text: 'Butejko a astma'
            },
            {
                text: 'Astma jest jednym z najlepiej przebadanych zastosowań Metody Butejki. Badania wskazują, że stosowana jako uzupełnienie standardowego leczenia może wspierać lepszą kontrolę objawów astmy.'
            },
            {
                text: 'Metoda Butejki nie zastępuje leczenia zaleconego przez lekarza. Daje natomiast dodatkowe, praktyczne narzędzia do pracy z własnym sposobem oddychania.'
            },
            {
                title: true,
                text: 'Jak wygląda spotkanie?'
            },
            {
                text: 'Zaczynamy od przyjrzenia się temu, jak oddychasz i jakie nawyki oddechowe towarzyszą Ci na co dzień. Na tej podstawie dobieram ćwiczenia odpowiednie do Twojego sposobu oddychania, możliwości i celu, z którym przychodzisz.'
            },
            {
                text: 'Uczysz się obserwować oddech, pracować z jego rytmem i objętością, oddychaniem przez nos oraz spokojną pracą przepony. Ważną częścią Metody Butejki jest regularność, dlatego otrzymujesz również praktyki do wykonywania pomiędzy spotkaniami.'
            },
            {
                text: 'Celem jest to, żeby z czasem '
            },
            {
                inline: true, bold: true,
                text: 'coraz lepiej rozumieć własny oddech i umieć samodzielnie z nim pracować.'
            },
            {
                title: true,
                text: 'Metoda Butejki czy coaching oddechowy?'
            },
            {
                text: 'Obie formy wykorzystują oddech, ale ich cel jest inny.'
            },
            {
                bold: true,
                text: 'Metoda Butejki '
            },
            {
                inline: true,
                text: 'koncentruje się przede wszystkim na funkcjonalnym sposobie oddychania i zmianie nawyków oddechowych poprzez konkretny trening.'
            },
            {
                text: ''
            },
            {
                bold: true,
                text: 'Coaching oddechowy '
            },
            {
                inline: true,
                text: 'jest pracą bardziej doświadczeniową - oddech służy w nim do kontaktu z ciałem, odczuciami, napięciami, emocjami i tym, co pojawia się podczas sesji.'
            },
            {
                text: 'Jeśli nie wiesz, która forma będzie dla Ciebie odpowiedniejsza, możemy ustalić to przed pierwszym spotkaniem.'
            },
            {
                bold: true,
                text: 'Spotkanie indywidualne trwa około 1,5 godziny. Cena: 250 zł.'
            }
        ]
    },
    {
        title: "Coaching oddechowy",
        serviceType: ServiceTypeEnum.BREATH,
        url: "coaching-oddechowy",
        image: 'service_1.jpeg',
        button: {
            text: "Umów się na spotkanie",
            mail: "mailto:przystanoddechu@gmail.com?subject=Coaching oddechowy"
        },
        content: [
            {
                text: 'Coaching oddechowy to indywidualne spotkanie, w którym oddech staje się sposobem na uważny kontakt z ciałem i tym, co w danym momencie jest obecne.'
            },
            {
                text: 'Każda sesja wygląda inaczej. Zaczynamy od tego, z czym przychodzisz, ale nie realizujemy gotowego scenariusza. Poprzez oddech i uważność kierujemy uwagę do ciała, zauważając pojawiające się odczucia, napięcia, emocje i reakcje.'
            },
            {
                title: true,
                text: 'Oddech jako sposób słuchania ciała'
            },
            {
                text: 'Podczas sesji pracujemy najczęściej w pozycji leżącej. Nie próbujemy wywoływać określonych doświadczeń. Obserwujemy oddech i pozwalamy, aby uwaga podążała za tym, co staje się wyraźne w ciele.'
            },
            {
                text: 'W trakcie takiej pracy mogą pojawić się emocje, wspomnienia, obrazy, skojarzenia lub doświadczenia, którym trudno od razu nadać znaczenie. Jest na nie miejsce - możemy je zauważyć i pozostać przy nich z uważnością, bez konieczności ich oceniania czy wyjaśniania.'
            },
            {
                text: 'W pracy wykorzystuję oddech, uważność, rozmowę, a czasami również dotyk - zawsze za Twoją zgodą.'
            },
            {
                title: true,
                text: 'Indywidualny proces'
            },
            {
                text: 'Nie zakładam z góry, dokąd ma doprowadzić spotkanie. Jedna sesja może być przede wszystkim doświadczeniem kontaktu z ciałem, podczas innej na pierwszy plan mogą wyjść emocje, napięcie albo konkretna historia, z którą przychodzisz.'
            },
            {
                text: 'Możemy również spotkać się z doświadczeniami, które wymykają się prostym wyjaśnieniom. Nie musimy rozstrzygać, czym są ani skąd pochodzą. Ważniejsze jest to, jak są przez Ciebie doświadczane i co zauważasz w kontakcie z nimi.'
            },
            {
                bold: true,
                text: 'Sesja trwa około 1,5 godziny. Cena: 250 zł.'
            },
            {
                bold: true,
                text: 'Jeśli chcesz umówić się na spotkanie lub zapytać, czy ta forma pracy będzie dla Ciebie odpowiednia zapraszam do kontaktu.'
            }
        ]
    },
    {
        title: "Warsztaty oddechowe",
        serviceType: ServiceTypeEnum.BREATH,
        url: "warsztaty-oddechowe",
        image: 'service_1.jpeg',
        button: {
            text: "Skontaktuj się",
            mail: "mailto:przystanoddechu@gmail.com?subject=Warsztaty oddechowe"
        },
        content: [
            {
                text: 'Oddech towarzyszy nam przez cały czas, a sposób, w jaki oddychamy, zmienia się pod wpływem wysiłku, stresu, emocji czy utrwalonych nawyków. Podczas warsztatów przyglądamy się własnemu oddechowi i uczymy się świadomie z nim pracować.'
            },
            {
                text: 'W swojej pracy korzystam z różnych podejść. Jestem trenerką metody Butejki oraz coachem oddechu. Łączę wiedzę o fizjologii oddychania z uważnością i doświadczeniem ciała.'
            },
            {
                text: 'W zależności od charakteru spotkania możemy pracować m.in. z obserwacją oddechu, oddychaniem przez nos, pracą przepony, tempem i objętością oddechu oraz rozpoznawaniem własnych nawyków oddechowych. W pracy doświadczeniowej oddech staje się również sposobem kontaktowania się z tym, co dzieje się w ciele, z napięciem i emocjami.'
            },
            {
                bold: true,
                text: 'Nie ma jednego sposobu oddychania dobrego na każdą sytuację.'
            },
            {
                inline: true,
                text: 'Ważniejsze jest poznawania własnego oddechu i uczenie się jak świadomie z niego korzystać w różnych sytuacjach.'
            },
            {
                text: 'Warsztaty mają przede wszystkim charakter praktyczny. Jest czas na krótkie wyjaśnienia, ćwiczenia, obserwację własnych reakcji i doświadczenie różnych sposobów pracy z oddechem.'
            },
            {
                bold: true,
                text: 'Prowadzę warsztaty oddechowe dla grup oraz pracuję indywidualnie.'
            }
        ]
    },

    {
        title: "Malarstwo intuicyjne Vedic Art",
        serviceType: ServiceTypeEnum.CREATIVITY,
        url: "malarstwo-intuicyjne-vedic-art",
        image: 'service_1.jpeg',
        button: {
            text: "Najbliższe spotkanie Vedic Art",
            path: "/wydarzenia"
        },
        content: [
            {
                title: true,
                text: 'praVedic Art - malowanie intuicyjne'
            },
            {
                text: 'Vedic Art to metoda twórcza, w której malowanie staje się sposobem odkrywania własnej kreatywności. Nie chodzi o stworzenie „dobrego obrazu” ani o nauczenie się określonej techniki. Ważniejsze są ciekawość, eksperymentowanie i podążanie za tym, co pojawia się podczas tworzenia.'
            },
            {
                bold: true,
                text: 'Nie musisz umieć malować. '
            },
            {
                inline: true,
                text: 'Nie potrzebujesz doświadczenia artystycznego ani pomysłu na to, co ma powstać. Możesz po prostu zacząć.'
            },
            {
                text: ''
            },
            {
                text: 'Sercem metody jest '
            },
            {
                inline: true, bold: true,
                text: '17 Zasad Vedic Art'
            },
            {
                inline: true, 
                text: ', które uczestnicy poznają kolejno podczas kursu. Są one punktem wyjścia do pracy z obrazem, ale także zaproszeniem do spotkania z własną twórczością w sposób wolny od oceniania i porównywania.'
            },
            {
                text: ''
            },
            {
                text: 'Vedic Art stworzył szwedzki artysta '
            },
            {
                inline: true, bold: true,
                text: 'Curt Källman'
            },
            {
                inline: true,
                text: '. W 1974 roku poznał od Maharishiego Mahesh Yogi nazwy 17 Zasad, wywodzących się z ustnej tradycji filozofii wedyjskiej. Stały się one dla niego źródłem inspiracji do stworzenia metody, którą rozwijał w kolejnych latach. Vedic Art zostało założone w Szwecji w 1988 roku.'
            },
            {
                title: true,
                text: 'Tworzenie bez oceniania'
            },
            {
                text: 'W Vedic Art nie porównujemy prac i nie oceniamy ich w kategoriach „ładne”, „brzydkie”, „dobre” czy „złe”. Nie ma też wzoru, do którego trzeba dążyć. Każdy może znaleźć swój sposób pracy z kolorem, formą i płótnem.'
            },
            {
                text: 'Po 10 latach prowadzenia warsztatów, widzę, że jednym z największych wyzwań bywa właśnie pozwolenie sobie na taką swobodę. Często chcemy od razu wiedzieć, co namalujemy, jak powinno to wyglądać i czy robimy to „dobrze”. Stopniowe puszczanie tych oczekiwań pozwala bardziej zaufać temu, co dzieje się na płótnie.'
            },
            {
                text: 'Możesz próbować, zmieniać kierunek, nakładać kolejne warstwy, zamalowywać, wracać do obrazu i pozwalać mu się zmieniać. Czasem rezultat może zaskoczyć także Ciebie.'
            },
            {
                title: true,
                text: 'Kurs Vedic Art'
            },
            {
                text: 'Podczas kursu poznajesz 17 Zasad Vedic Art oraz towarzyszące im ćwiczenia twórcze. Większość czasu przeznaczona jest na malowanie.'
            },
            {
                text: 'Zapewniam materiały potrzebne do pracy: farby, pędzle, sztalugi i inne akcesoria. Podobrazie możesz przynieść własne lub kupić na miejscu.'
            },
            {
                bold: true,
                text: 'Prowadzę kursy Vedic Art I i II stopnia w kameralnych grupach.'
            },
            {
                bold: true,
                text: 'Najbliższe terminy znajdziesz w aktualnych wydarzeniach.'
            }
        ]
    },
    {
        title: "Medytuję i maluję",
        serviceType: ServiceTypeEnum.CREATIVITY,
        url: "medytuje-i-maluje",
        image: 'service_1.jpeg',
        button: {
            text: "Sprawdź najbliższy termin",
            path: "/wydarzenia"
        },
        content: [
            {
                text: 'Spotkanie zaczynamy od medytacji. To czas na uspokojenie tempa, skierowanie uwagi do siebie i tego, co jest obecne właśnie teraz. Z tego miejsca przechodzimy do malowania intuicyjnego.'
            },
            {
                text: 'Nie pracujemy nad techniką ani nad stworzeniem „ładnego obrazu”. Temat spotkania jest inspiracją i punktem wyjścia, ale każdy może pójść za nim we własnym kierunku. Kolor, kształt czy ruch pędzla mogą stać się sposobem wyrażenia tego, co czasem trudno pomieścić w słowach.'
            },
            {
                text: 'W tym malowaniu '
            },
            {
                inline: true, bold: true,
                text: 'nie ma jednej właściwej drogi'
            },
            {
                inline: true,
                text: '. Można wyjść poza linię, zmienić kierunek, zamalować to, co już powstało, użyć koloru „nie tak, jak trzeba” albo zostawić obraz niedokończony. To okazja, żeby na chwilę odłożyć znane „tak się robi” i sprawdzić, co pojawi się, kiedy pozwolimy sobie zrobić po swojemu.'
            },
            {
                text: 'Czasami dopiero patrząc na to, co powstało, zauważamy coś, czego wcześniej nie potrafiliśmy nazwać albo widzimy to z innej perspektywy. A czasami niczego nie trzeba odkrywać ani rozumieć.'
            },
            {
                text: 'Nie oceniamy tego, co powstaje, i nie dążymy do konkretnego efektu. Ważniejsza jest droga niż gotowy obraz - a czasem obraz wcale nie musi powstać.'
            },
            {
                text: 'Nie trzeba umieć malować ani mieć żadnego wcześniejszego doświadczenia - ani w malowaniu, ani w medytacji.'
            },
            {
                bold: true,
                text: 'Spotkania odbywają się w ustalonych wcześniej terminach, zwykle raz w miesiącu. Informacje o najbliższym spotkaniu znajdziesz w zakładce Wydarzenia.'
            }
        ]
    },

    {
        title: "Joga Yin",
        serviceType: ServiceTypeEnum.BODY,
        url: "joga-yin",
        image: 'service_1.jpeg',
        button: {
            text: "Zapisuje się",
            mail: "mailto:przystanoddechu@gmail.com?subject=Joga Yin"
        },
        content: [
            {
                title: true,
                text: 'Joga yin - spokojna praktyka w kontakcie z ciałem'
            }, 
            {
                text: 'Joga yin to spokojna forma jogi, w której pozostajemy w pozycjach przez kilka minut. Dłuższe, łagodne rozciąganie oddziałuje na mięśnie i tkanki łączne, w tym powięź, a regularna praktyka może wspierać zakres ruchu.'
            },
            {
                text: 'W yin nie chodzi o to, żeby wejść w pozycję jak najgłębiej. Szukamy takiego ułożenia, w którym możemy zmniejszyć zbędne napięcie mięśniowe i pozwolić ciału stopniowo się rozluźniać. Korzystamy z wałków, klocków, koców i poduszek, dzięki czemu pozycję można dostosować do własnego ciała i do tego, jak czujemy się danego dnia.'
            },
            {
                text: 'Dłuższe pozostawanie w pozycji daje czas, żeby zauważyć, co dzieje się w ciele: gdzie pojawia się napięcie, gdzie możemy trochę odpuścić, a gdzie potrzebujemy zmienić ułożenie.'
            },
            {
                bold: true,
                text: 'Nie trzeba być rozciągniętym ani mieć wcześniejszego doświadczenia w jodze.'
            },
            {
                text: 'Wiele osób po zajęciach mówi o wyraźnym wyciszeniu i poczuciu spokoju. To doświadczenie, które często towarzyszy tej spokojnej, niespiesznej formie praktyki.'
            },
            {
                title: true,
                text: 'Zajęcia regularne'
            },
            {
                bold: true,
                text: 'Środa, 16:00-17:00\n'
            },
            {
                inline: true,
                text: 'Galeria Jogi, Elbląg'
            },
            {
                text: ''
            },
            {
                bold: true,
                text: 'Karnet: 160 zł / 4 wejścia\n'
            },
            {
                inline: true,
                text: 'Karnet jest do wykorzystania w danym miesiącu.'
            },
            {
                text: ''
            },
            {
                bold: true,
                text: 'Na zajęcia obowiązują wcześniejsze zapisy.'
            }
        ]
    },
    {
        title: "Spontaniczne po-ruszenie",
        serviceType: ServiceTypeEnum.BODY,
        url: "spontaniczne-po-ruszenie",
        content: [
            {
                text: `Ciało wie.
                Zanim pojawią się słowa, zanim myśli zaczną formować obraz - ono już coś czuje.
                Drży, pulsuje, tęskni za ruchem, za ciszą, za zatrzymaniem.`
            },
            {
                bold: true,
                text: 'Spontaniczne po-ruszenie '
            },
            {
                inline: true,
                text: `to przestrzeń, w której możesz po prostu być.
                Bez przymusu. Bez oczekiwań. Bez choreografii.
                Tu nie chodzi o to, by robić coś „dobrze”.
                Chodzi o to, by `
            },
            {
                inline: true, bold: true,
                text: 'pozwolić sobie na bycie w pełni'
            },
            {
                inline: true,
                text: ' - w ciele, w oddechu, w ruchu, w ciszy.'
            },
            {
                text: `Nie prowadzi Cię żaden schemat.
                Jest tylko muzyka, która otwiera drzwi, i przestrzeń, która daje wolność.
                Na początku zapraszam Cię kilkoma słowami - a potem zostawiam Cię z sobą.
                Z Twoimi odczuciami. Z tym, co w Tobie żywe.`
            },
            {
                text: `Nie ma złych ruchów.
                Każdy jest wyrazem tego, co w Tobie teraz chce się ujawnić.
                Czasem to będzie łagodne kołysanie, czasem wybuch energii, czasem milczące zatrzymanie.
                Każdy ruch jest zaproszeniem do pełni - do tego, co w Tobie najprawdziwsze.`
            },
            {
                text: `To przestrzeń, w której możesz:
                - poczuć, co Twoje ciało chce wyrazić,
                - zrzucić napięcia, które nosisz,
                - poruszyć to, co stłumione, zamknięte, nieużywane,
                - poczuć, jak to jest być w pełni sobą, bez roli, bez definicji.`
            },
            {
                bold: true,
                text: 'Spontaniczne po-ruszenie '
            },
            {
                text: `to zaproszenie do tego, by dać sobie przestrzeń do bycia.
                Tu nie musisz niczego kontrolować. Nie musisz dążyć do celu.
                Wystarczy, że pozwolisz ciału prowadzić Cię w tym, co naturalne.
                Reszta przyjdzie sama - w swoim czasie, w swoim rytmie.`
            }
        ]
    },

    {
        title: "Spotkania stacjonarne",
        serviceType: ServiceTypeEnum.WOMENS,
        url: "spotkannia-stacjonarne",
        content: [
            {
                text: `
                To miejsce, w którym nie trzeba niczego udowadniać.
                Spotykamy się po prostu po to, żeby być. Ze sobą. Z innymi. Ze sobą nawzajem.
                Bez masek i zbędnych słów - tylko z tym, co prawdziwe.

                Tu nie rozmawiamy o pogodzie (chyba że przyniosła nam tęczę w sercu).
                Przychodzimy, jeśli chcemy dotknąć tego, co w nas żywe - radości, wzruszeń, czasem zmęczenia, czasem zachwytu. Czasem wszystkiego naraz.

                Każde spotkanie to zaproszenie - by poczuć głębsze połączenie: ze sobą, z innymi kobietami, z tym, co większe od nas.
                Tworzymy przestrzeń, w której można mówić - ale nie trzeba. Można śmiać się do łez albo milczeć, trzymając kubek ciepłej herbaty.
                Wszystko jest mile widziane, byle było prawdziwe.

                Nie musisz wiedzieć, po co przychodzisz. Nie musisz niczego planować ani mieć gotowych odpowiedzi.
                Wystarczy, że jesteś. Tak po prostu. Z tym, co masz w sercu.

                W tej przestrzeni buduje się wspólnota - czuła, naturalna, wspierająca.
                Kobiety, które się widzą. Które nie oceniają, tylko słuchają. Które śmieją się razem i czasem razem płaczą.

                To, co się dzieje podczas spotkań, zostaje między nami.
                Jesteśmy jak krąg - bezpieczny, uważny, otulający.
                \n\n
                Za nami już wiele wspólnych doświadczeń - cykle spotkań, takie jak 7 kroków czy 4 pory roku, jednodniowe warsztaty uważności oraz tematyczne przestrzenie, jak Droga do mamy.

                Towarzyszy nam natura - o każdej porze roku. Czasem śpimy pod gołym niebem, tańczymy boso w trawie, siedzimy razem przy ogniu, patrząc w tańczące iskry.

                Tworzymy. Malujemy. Medytujemy. Zatrzymujemy się przy tym, co porusza - co trudne, co ważne, co chce być zobaczone. Poszerzamy się wzajemnie o siebie - z uważnością, bez pośpiechu.

                Podróżujemy też w głąb. Do siebie. Do własnych historii.
                A czasem dalej - poza to, co znane. O tych wyprawach możesz przeczytać w kolejnej zakładce.

                To właśnie jest dla mnie prawdziwa magia - spotykać Kobiety, które mają odwagę być sobą. Autentyczne. Uważne. Piękne w swojej Prawdzie.

                Niektóre spotkania są otwarte tylko dla tych, które już dołączyły do tej kobiecej przestrzeni nie publikuje ich nigdzie.Jeśli czujesz, że to przestrzeń także dla Ciebie - jesteś mile widziana.
                Napisz do mnie. Z radością Cię zaproszę na kolejne spotkanie.🌿`
            }
        ]
    },
    {
        title: "Wspólne wyjazdy",
        serviceType: ServiceTypeEnum.WOMENS,
        url: "wspolne-wyjazdy",
        content: [
            {
                text: `
                Nasze wyjazdy dla kobiet to czas, który łączy wszystko, czego potrzebujemy, by poczuć pełnię życia: ciszę, wyzwania, ruch, odpoczynek.
                Każdy wyjazd to inna historia, inny rytm, inne doświadczenie – ale zawsze głębokie, prawdziwe i pełne mocy.
                Wspólnie spędzany czas to przestrzeń, w której możemy odkrywać siebie na nowo, otwierając się na nowe możliwości i konfrontując się z tym, co nas blokuje.

                Niezależnie od tego, czy wyjazd jest krótki, czy dłuższy, każda chwila jest okazją, by zanurzyć się w głębi doświadczeń, które pozwalają na oddech, ale i na działanie.
                To czas, w którym można połączyć głęboką ciszę z pełnym ruchem ciała i umysłu – we własnym rytmie.
                Bez przymusu, bez oczekiwań. Otwarte serca i przestrzeń na to, co w nas najprawdziwsze.

                Te spotkania to zaproszenie do doświadczenia autentyczności – czasami w spokoju, czasami w wyzwaniu.
                Chcemy, byś poczuła się wolna, byś mogła spojrzeć na siebie z nową perspektywą, zarówno w chwilach komfortu, jak i w tych, które wymagają od nas odwagi.
                Z naszych wyjazdów powstaje społeczność – kobieca, wspierająca się nawzajem, pełna zaufania i otwartości.

                Zdjęcia i historie, które dzielimy, zachowują pełną anonimowość. To, co przeżywamy, pozostaje naszymi przeżyciami, bez konieczności pokazywania światu.
                Niektóre wyjazdy są tylko dla kobiet, które już tworzą tę wspólnotę.
                Jeśli chcesz dołączyć do przestrzeni, w której kobiety wspierają się i dają sobie wolność bycia sobą, napisz do mnie.
                Z radością otworzę przed Tobą drzwi tej wyjątkowej podróży.`
            }
        ]
    },
]