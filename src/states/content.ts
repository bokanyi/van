import { BehaviorSubject } from "rxjs";

type Details ={
  title: string
  description: string
}

type Event = {
  date: string;
  dateShort: string;
  title: string;
  img: string;
  details: Details[];
  images: string[];
  artists: string[]

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
  motto: string[];
  events: Event[];
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
    `“-Veszprém városa 2023-ban elnyerte az Európa Kulturális Fővárosa címet. Ennek kapcsán
    született meg az ötlet, hogy a Veszprémben végzett generációmbeli, most pályakezdő
    fiatal zenészek, akik a világ számos pontjára jutottak el, gyökereiket el nem feledve
    visszatérjenek a kezdőponthoz, ahonnan elindultak, Veszprémbe. - kezdett bele Johanna, amikor a koncertsorozat mögött meghúzódó motivációkról kérdeztük.
    “-Ahányfelé jutottunk el a nagyvilágba, éppen olyan sokszínű a választék, mind a
    tekintetben, hogy ki, milyen hangszeren játszik, vagy milyen fajta zenei stílus képviselője.
    Változatos módokon, magas szinten foglalkozunk a zenével: van közöttünk komolyzenei szólóhangszeres, jazz-zenész, zenetudós. Szeretnénk ezt kihasználni, és szélesebb spektrumon bemutatni a komolyzenét fiataloknak, műkedvelőknek és főleg azoknak, akik eddig úgy gondolták, hogy a komolyzene unalmas.”`,
    `A koncertek 2023 őszén kerülnek megrendezésre, ebből négy az őszi hónapok utolsó hétvégéin, melynek a Veszprémi különböző koncertermei adnak majd otthont. A nehezebben emészthető zeneművek befogadhatóságát kiváló magyarországi zenetudósok narrációival segítik majd. Erről a veszprémi kötődésű Bolla Milán (Bartók Rádió) és Farkas Zoltán (Bartók Rádió, Bartók Emlékház, Zenetudományi Intézet Budapest) gondoskodnak. Ezenfelül a veszprémi kötödésű fiatalok klasszikus repertoáron gyakran szerepelt darabokon kívül minőségi, de mégis könnyedebb, populárisabb műfajokkal ( jazz, népzene és világzene)  szórakoztatják a közönséget.
    Az első koncert (szeptember 30.) tematikája a klasszikus zene és a jazz fúziójára épül.
    Eddig még nem próbált egyedi kamara formációk állnak össze erre az alkalomra.
    Az est első felében 19. és 20.századi hanszeres műveket hallhatunk,  az est második felében pedig  olyan zenészekkel találkozhatunk, akik zenei tanulmányaikat anno klasszikus zenészként kezdték Veszprémben, de mára elismert jazz zenészek.
    Sebestyén Patrik (trombita), Uher Bálint (szaxofon) saját kompozícióival, izgalmas hangszereléseivel találkozhatunk majd.`,
  ],
  motto: [
    `Érezted már úgy, hogy unalmas és nem érted a komolyzenét? Gyere el koncertsorozatunkra, ahol azt változatos műfajokban, kommentárral és izgalmas hangszerekkel bemutatjuk neked! Veszprémiek a Nagyvilágban, Classic+ koncertsorozat.`,
    `Veszprémi kötődésű zenészek idén ősszel, három alkalommal hazahozzák a világot, zenében. Változatos hangszereken és populárisabb műfajokon keresztül kívánják meggyőzni a közönséget arról, hogy lehet a komolyzene is érthető, szórakoztató.`,
  ],
  events: [
    {
      date: "2023. szeptember 30. szombat",
      dateShort: "23/09/30",
      title: "VAN Classic + Jazz",
      img: "/pexels_artist01.jpg",
      details:[
        {title:"Classic:",
        description: "Hartmann Domonkos (cselló), Kondorosi Karolina (hegedű), Sebestyén Patrik (trombita), Mitró Apolka"}, 
        {title: "Jazz:",
        description:" Sebestyén Patrik (trombita), Uher Bálint (szaxofon), Piller Balázs (zongora), Tasner Levente (ének), Román Iván (hegedű), Richter Ambrus (dob), Miskolczi Márk (nagybőgő)"}],
      images: ["01/hartmann.jpg", "01/kondorosi.jpg", "01/sebestyen.jpg", "01/mitro.jpeg","01/uher.jpg", "01/piller.jpg", "01/tasner.jpeg", "01/roman.jpg"],
      artists: ["Hartmann Domonkos", "Kondorosi Karolina", "Sebestyén Patrik", "Mitró Apolka","Uher Bálint", "Piller Balázs","Tasner Levente", "Román Iván"]
    },
    {
      date: "2023. október 27. péntek",
      dateShort: "23/10/27",
      title: "Bartók Előadás Farkas Zoltánnal",
      img: "/pexels_artist03.jpg",
      details:[{title:"",
      description:""}],
      images: [""],
      artists: [""],
    },
    {
      date: "2023. október 28. szombat",
      dateShort: "23/09/28",
      title: "VAN Classic + Népzene",
      img: "/pexels_artist02.jpg",
      details:[{title:"",
      description: ""}],
      images: [""],
      artists: [""],
    },
    {
      date: "2023. november 25. szombat",
      dateShort: "23/11/25",
      title: "VAN Classic + Világzene",
      img: "/pexels-cottonbro-studio-7095504.jpg",
      details:[{title:"",
      description: ""}],
      images: [""],
      artists: [""],
    },
  ],
};

export const $content = new BehaviorSubject<Content>(hungarian);
