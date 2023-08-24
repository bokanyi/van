import { BehaviorSubject } from "rxjs";

type Details = {
  title: string;
  description: string;
};

type Event = {
  date: string;
  location: string;
  dateShort: string;
  title: string;
  img: string;
  description: string;
  details: Details[];
  images: string[];
  artists: string[];
  open: boolean;
};

type Content = {
  structure: {
    main: string;
    about: string;
    artists: string;
    events: string;
    contact: string;
  };
  story: string[];
  quotation: string[];
  motto: string[];
  events: Event[];
  contact:{
    text: string;
    email: string;
    facebook: string;
    info: string;
  }
};

type Faq = {
  question: string;
  answer: string;
};

const hungarian: Content = {
  structure: {
    main: "Főoldal",
    about: "Rólunk",
    artists: "Művészek",
    events: "Események",
    contact: "Kapcsolat",
  },
  story: [
    `Veszprémi kötődésű zenészek, akik pályafutásuk során messzire sodródtak a nagyvilágban, most hazatérnek, és négy alkalmas élménykoncertre invitálnak az őszi hónapokban`,
    `Veszprémben száz éves múltja van az alapfokú zenei képzésnek, továbbá 1987-től 35 éven át középfokú szakiskola is képzési lehetőséget adott a zenészi pályát választó fiataloknak. Ezen évek során rengeteg zenészt vagy a klasszikus zenével valamilyen szinten foglalkozó művészt taníttatott ki a város. Hordós Johanna zongoraművész, a grazi Zeneakadémia tanára és a koncertsorozat megálmodója is közéjük tartozik, aki nemcsak Veszprémben tanult, de itt is született.`,

    `A koncertek 2023 őszén kerülnek megrendezésre, ebből négy az őszi hónapok utolsó hétvégéin, melynek a Veszprémi különböző koncertermei adnak majd otthont. A nehezebben emészthető zeneművek befogadhatóságát kiváló magyarországi zenetudósok narrációival segítik majd. Erről a veszprémi kötődésű Bolla Milán (Bartók Rádió) és Farkas Zoltán (Bartók Rádió, Bartók Emlékház, Zenetudományi Intézet Budapest) gondoskodnak. Ezenfelül a veszprémi kötödésű fiatalok klasszikus repertoáron gyakran szerepelt darabokon kívül minőségi, de mégis könnyedebb, populárisabb műfajokkal ( jazz, népzene és világzene)  szórakoztatják a közönséget.`,
    `Az első koncert (szeptember 30.) tematikája a klasszikus zene és a jazz fúziójára épül.
    Eddig még nem próbált egyedi kamara formációk állnak össze erre az alkalomra.
    Az est első felében 19. és 20.századi hanszeres műveket hallhatunk,  az est második felében pedig  olyan zenészekkel találkozhatunk, akik zenei tanulmányaikat anno klasszikus zenészként kezdték Veszprémben, de mára elismert jazz zenészek.
    Sebestyén Patrik (trombita), Uher Bálint (szaxofon) saját kompozícióival, izgalmas hangszereléseivel találkozhatunk majd.`,
  ],
  quotation: [
    `Veszprém városa 2023-ban elnyerte az Európa Kulturális Fővárosa címet. Ennek kapcsán született meg az ötlet, hogy a Veszprémben végzett generációmbeli, most pályakezdő fiatal zenészek, akik a világ számos pontjára jutottak el, gyökereiket el nem feledve visszatérjenek a kezdőponthoz, ahonnan elindultak, Veszprémbe.`,
    `Ahányfelé jutottunk el a nagyvilágba, éppen olyan sokszínű a választék, mind a tekintetben, hogy ki, milyen hangszeren játszik, vagy milyen fajta zenei stílus képviselője.`,
    `Változatos módokon, magas szinten foglalkozunk a zenével: van közöttünk komolyzenei szólóhangszeres, jazz-zenész, zenetudós. Szeretnénk ezt kihasználni, és szélesebb spektrumon bemutatni a komolyzenét fiataloknak műkedvelőknek és főleg azoknak, akik eddig úgy gondolták, hogy a komolyzene unalmas.`,
  ],
  motto: [
    `Érezted már úgy, hogy unalmas és nem érted a komolyzenét? Gyere el koncertsorozatunkra, ahol azt változatos műfajokban, kommentárral és izgalmas hangszerekkel bemutatjuk neked! Veszprémiek a Nagyvilágban, Classic+ koncertsorozat.`,
    `Veszprémi kötődésű zenészek idén ősszel, három alkalommal hazahozzák a világot, zenében. Változatos hangszereken és populárisabb műfajokon keresztül kívánják meggyőzni a közönséget arról, hogy lehet a komolyzene is érthető, szórakoztató.`,
  ],
  events: [
    {
      date: "2023. szeptember 30. 18:30",
      location: "Megyeháza Szt. István terem",
      dateShort: "23/09/30",
      title: "VAN Classic + Jazz",
      img: "/pexels_artist01.jpg",
      description: `Eddig még nem próbált egyedi kamara formációk állnak össze erre az alkalomra. Az est első felében 19. és 20.századi hanszeres műveket hallhatunk,  az est második felében pedig  olyan zenészekkel találkozhatunk, akik zenei tanulmányaikat anno klasszikus zenészként kezdték Veszprémben, de mára elismert jazz zenészek. Sebestyén Patrik (trombita), Uher Bálint (szaxofon) saját kompozícióival, izgalmas hangszereléseivel találkozhatunk majd.`,
      details: [
        {
          title: "Classic:",
          description:
            "Alföldi Nelli (hegedű), Csabay Domonkos (zongora), Hartmann Domonkos (cselló), Kondorosi Karolina (hegedű), Sebestyén Patrik (trombita), Mitró Apolka (oboa)",
        },
        {
          title: "Jazz:",
          description:
            " Sebestyén Patrik (trombita), Uher Bálint (szaxofon), Piller Balázs (zongora), Tasner Levente (ének), Román Iván (hegedű), Richter Ambrus (dob), Miskolczi Márk (nagybőgő)",
        },
      ],
      images: [
        "01/alfoldi.jpg",
        "01/csabay.jpg",
        "01/hartmann.jpg",
        "01/kondorosi.jpg",
        "01/sebestyen.jpg",
        "01/mitro.jpeg",
        "01/uher.jpg",
        "01/piller.jpg",
        "01/tasner.jpeg",
        "01/roman.jpg",
      ],
      artists: [
        "Alföldi Nelli",
        "Csabay Domonkos",
        "Hartmann Domonkos",
        "Kondorosi Karolina",
        "Sebestyén Patrik",
        "Mitró Apolka",
        "Uher Bálint",
        "Piller Balázs",
        "Tasner Levente",
        "Román Iván",
      ],
      open: false,
    },
    {
      date: "2023. október 27. 18:00",
      location: "Hangvilla,\nMedelssohn Kamarazenekar Próbaterme",
      dateShort: "23/10/27",
      title: "Bartók Előadás Farkas Zoltánnal",
      img: "/pexels_artist03.jpg",
      description: "",
      details: [{
        title:"",
        description:"Magyarként sokat hallottál Bartók Béláról, de sosem értetted meg őt igazán? Tudtad, hogy Bartók több ezer népdalt gyűjtött, és abból több, mint 300-at fel is használt saját műveiben? Gyere el zenei kommentárokkal kiegészített zongorajáték estünkre, ahol Farkas Zoltán ( zenetudós, zenekritikus) narrációjával közelebb hozzuk hozzád Bartók Szabadban és Improvizációk magyar parasztdalokra c. zongoraciklusait. "
      },

        {
          title: "Farkas Zoltán (1964), zenetörténész, zenekritikus",
          description:
            " A budapesti Zeneakadémia zenetudományi tanszakán muzikológusi és zeneirodalomismeret-tanári diplomát szerzett. 1987-től 2006-ig az MTA Zenetudományi Intézet tudományos kutatójaként dolgozott, emellett a Magyar Nemzet, majd a Muzsika zenekritikusa volt. Kutatási területei a 18. századi magyarországi zene és a kortárs magyar zene. Ismeretterjesztő könyveket, kismonográfiákat publikált a bécsi klasszikáról, illetve magyar zeneszerzőkről (Istvánffy Benedek, Sári József, Fusz János), tanulmányokat írt többek közt Ligeti György, Szőllősy András, Kurtág György, Jeney Zoltán és Eötvös Péter zenéjéről. 2006-2010 között a Bartók Rádió főszerkesztője, 2011-2015 között intendánsa. 2009-ben alapította a Bartók Rádió Zenebeszéd című műsorát, amely azóta a 300. adásán is túljutott. 2015-2017 között a Reformáció 500 Emlékbizottság zenei referense volt, 2017-től a Bartók Béla Emlékház igazgatója.",
        },
        {
          title: "Hordós Johanna",
          description: `1993-ban Veszprémben született, a veszprémi Csermák Antal Zeneiskolában, majd a veszprémi Dohnányi Ernő Zeneművészeti Szakközépiskolában tanult zongora szakon.
          
Később Ausztriában végezte felsőfokú tanulmányait, zongora előadóművész szakon.Ezen kívül Olaszországban és Budapesten is részt vett zenei továbbképzéseken. ( Posztgraduális képzés Brescia, Kokas Klára Zenepedagógiai képzés Budapest) Olyan mesterektől tanulhatott, mint:Oleg Marshev, Libor Novacek, Ruben Dalibaltayan, Vásáry Tamás, Grigory Gruzmann, Natalia Trull, Natasha Vlassenko, Robert Levin, Boris Bloch, Andrei Ivanovitch
          
Számos koncertpódiumon,több országban fordult meg: Ausztriában ( Steinway Haus Linz,Kultur Quartier, Schloss Kremsegg, Schloß Wildon), Olaszországban ( San Daniele Piano Meeting, Liszt Intézet Róma) Franciaországban ( Francia Operaház), Csehországban( Jihlava, Mahler Koncertterem) és Magyarországon ( Budapest, Magyar Zene Háza,Veszprém, Hangvilla) is.

A koncertezés és tanítás mellett örömmel veszt rész koncertsorozatok, kulturális projektek
életrehívásában, szervezésében.( 2021 Kultúra és Európa Workshop, 2022 Erasmus + Projekt Zenei nevelés, hallás és komplex személyiségfejlesztés Kodály és Kokas zenei metodikái alapján, 2022 Veszprémiek a Nagyvilágban Magyar Zene Háza, 2023 VAN Classic +, EKF Programsorozat Veszprém).

Számos díj és ösztöndíj nyertese. 2013 Rotary Ösztöndíj 2014 Isidor Stögbauer Ösztöndíj, 2016 Forum Hungaricum Ösztöndíj, 2016 KUG Ösztöndíj, 2018 Gesellschaft der Freunde der KUG Ösztöndíj, 2019 ‘Classic concerto’ Díj - San Daniele Piano Meeting , 2020 Magyar Filharmónia Ösztöndíj, 2021 IASK Kutatási ösztöndíj 
Jelenleg a grazi Zeneakadémia tanára.`,
        },
        {
          title: "Füzesséry Zoltán",
          description:"Füzesséry Zoltán magyar zongoraművész 1979-ben született Budapesten. Első zongoraleckéit 6 évesen Akácsos Enikőtől kapta, majd Halmágyi Katalin osztályában tanult a budapesti Bartók Béla Zeneművészeti Szakközépiskolában. A fiatal magyar zongoraművész-generáció tehetségeként 14 évesen szerzett magának hírnevet, amikor megnyerte a Békés-tarhosi Országos Szakközépiskolai Zongoraversenyt. 1998-ban felvételt nyert a Grazi Zeneművészeti Egyetemre, ahol a híres orosz zongoraművész, Alexandr Satz osztályában tanulhatott. Mindössze két év után megnyerte a „GET WINGS II” nemzetközi zongoraversenyt, amelyet a bécsi Steinway-Haus rendezett. 2001-ben a Dortmundi Nemzetközi Schubert Zongoraverseny harmadik díját és a legfiatalabb versenyzőnek járó különdíját is elnyerte. A verseny zsűrijét világhírű művészek alkották, akiket mélyen meghatott a fiatal zongoraművész kifinomult, átszellemült zongorajátéka. A Giuliano Pecar Piano Interpretation Prize zongoraversenyén Goriziában második, az Ibizai Nemzetközi Zongoraversenyen pedig harmadik helyezést ért el. 2004 nyarán a Sydney-i Nemzetközi Zongoraversenyen majd a svájci Clara Haskil Zongoraversenyen is negyeddöntőbe jutott. Számos magyarországi, ausztriai, németországi, spanyolországi, olaszországi, törökországi, szlovéniai, belgiumi, kínai és tajvani szólókoncertjén kívül olyan neves zenekarokkal lépett fel, mint a Wupperthali Szimfonikusok, a Dortmundi Szimfonikusok, a Lublini Filharmonikusok, az Európai Ifjúsági Kamarazenekar, a Danubia Szimfonikus Zenekar, a Mendelssohn Kamarazenekar és a Győri Filharmonikus Zenekar. Kamarazenészként rangos hazai és nemzetközi partnerekkel koncertezik rendszeresen. 2006-tól 2012-ig a veszprémi Dohnányi Ernő Konzervatórium, majd 2012-től a Grazi Zeneművészeti Egyetem zongoratanára. Doktori fokozatát a Grazi Zeneművészeti Egyetemen 2014-ben szerezte."
        }
      ],
      images: [
        "02/farkas.jpg",
        "/hordos_johanna.jpg",
        "02/fuzessery.jpg",
      ],
      artists: ["Farkas Zoltán","Hordós Johanna", "Füzesséry Zoltán"],
      open: false,
    },
    {
      date: "2023. október 28. 18:00",
      location: "Csermák Antal Zeneiskola",
      dateShort: "23/10/28",
      title: "VAN Classic + Népzene",
      img: "/pexels_artist02.jpg",
      description: "",
      details: [{ title: "", description: "Veszprémi kötődésű fiatal zenészek harmadik koncertjén a magyar zene kerül fókuszba. Az est első felében magyar zeneszerzők művei csendülnek fel vonós hangszereken. A koncert második felében pedig a magyar népi rigmusoké lesz a főszerep, melyet a Pengő népi zenekar autentikus előadása biztosít majd. Ha szeretnéd zenei oldalról is tágítani a magyar-tudásod, akkor itt a helyed! " },
      {
        title:"Classic:",
        description:"Sándor József, Mézes Mátyás, Alföldi Nelli, Hartmann Domonkos"
      },
      {
        title:"Népzene:",
       description:"A pengő zenekar, céljuk a Kárpát–medence magyar hangszeres népzenéjének hiteles előadásmódja és terjesztése, néptáncegyüttesek és népdalkörök műsorának zenei kísérete, valamint saját koncertműsoruk előadása, fontos számukra a táncházi muzsikálás."
      },
      {
        title:"A Pengő zenekar jelenlegi tagjai:",
       description:"Gábor Klára (szólóének), Ág Zoltán (cimbalom, nagybőgő, kisbőgő, ének), Takács Péter (nagybőgő, ének), Czufoka Gábor (kontra, ének), Mézes Zsuzsanna (kontra, ének), Mézes Mátyás (hegedű, ének), Mézes Attila (furulya, klarinét), Mézes Árpád (hegedű, ének) – zenekarvezető"
      },
  ],
      images: [""],
      artists: [""],
      open: false,
    },
    {
      date: "2023. november 25. 18:30",
      location: "Veszprém",
      dateShort: "23/11/25",
      title: "VAN Classic + Világzene",
      img: "/pexels-cottonbro-studio-7095504.jpg",
      description: "",
      details: [{ title: "Hamarosan!", description: "" }],
      images: [""],
      artists: [""],
      open: false,
    },
  ],
  contact:{
    text:"Maradt még kérdésed?\nAz alábbi módokon érhetsz el minket:",
    email: "koncertvan@gmail.com",
    facebook: "https://www.facebook.com/veszpremiekanagyvilagban/",
    info: "A Veszprémiek a Nagyvilágban koncertsorozat Hordós Johanna és a veszprémi Csermák Antal Zeneiskola közös projectje. A koncertsorozat a Veszprém-Balaton 2023 Európa Kulturális Fővárosa program támogatásával jön létre."
  }
};

const faqs: Faq[] = [
  {
    question: "Hol tudok érdeklődni?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptas.",
  },
  {
    question: "Hol tudok jegyet venni?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptas.",
  },
  {
    question:
      "Mit tegyek, ha nem tudok elmenni a koncertre amire regisztráltam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptas.",
  },
  {
    question: "Mit tegyek, ha rossz e-mail címet adtam meg?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptas.",
  },
];


export const $content = new BehaviorSubject<Content>(hungarian);
export const $faqs = new BehaviorSubject<Faq[]>(faqs);
export const $cookieConfirm = new BehaviorSubject<boolean>(false);

export const confirm = () => {
  $cookieConfirm.next(true)
}