import { Page } from "../components/Page";

export const Summery = () => {
  return (
    <div>
      <Page custom="bg-orange px-10 pt-56 sm:pt-32 md:pt-40 min-h-[320px] sm:min-h-[500px] lg:min-h-[800px]">
        <div className="flex max-w-4xl max-height-[500px] items-center  justify-center">
          <iframe
            className="border:none overflow-hidden
       absolute w-80 sm:w-[500px] lg:w-[896px] lg:h-[500px] grow
      "
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fhordos.johanna%2Fvideos%2F909207774541866%2F&show_text=false&width=560&t=0"
            width="800"
            height="314"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </Page>

      <Page
        custom={
          "min-h-screen bg-light-rose flex-col  px-10 md:py-40 m-auto items-center"
        }
      >
        <div className="max-w-4xl">
          <p>
            {" "}
            <b>{`
          Veszprém 2023-as pezsgése hazahozta fellépni azokat a veszprémi kötődésű fiatal zenészeket is, akik pályafutásuk során messzire sodródtak a nagyvilágban. A Veszprémiek a Nagyvilágban - Classic+ című sorozat az Európa Kulturális Fővárosa program keretében négy alkalmas dupla élménykoncertre invitálta a közönséget az őszi hónapokban.`}</b>
          </p>
          <p>
            {`
          Hordós Johanna zongoraművész, a grazi Zeneakadémia zongoratanára és a koncertsorozat megálmodója is azok közé tartozik, akik nemcsak Veszprémben tanultak, de itt is születtek. „Veszprém elnyerte 2023-ban az Európa Kulturális Fővárosa címet. Ennek kapcsán született meg az ötlet, hogy a városban végzett, generációmhoz tartozó, most pályakezdő fiatal zenészek, akik a világ számos pontjára jutottak el, gyökereiket el nem feledve, visszatérjenek a kezdőponthoz, ahonnan elindultak, Veszprémbe.`}
          </p>
          <p>
            <i>
              {`
         "Amilyen sokfelé jutottunk el a nagyvilágba, éppen olyan sokszínű a választék, mind atekintetben, hogy ki, milyen hangszeren játszik, vagy hogy milyen fajta zenei stílus képviselője. Változatos módokon, magas szinten foglalkozunk a zenével: van közöttünk komolyzenei szólóhangszeres, jazz-zenész, zenetudós. Szerettük volna ezt kihasználni, és szélesebb spektrumon bemutatni a komolyzenét fiataloknak, műkedvelőknek és főleg azoknak, akik eddig úgy gondolták, hogy a komolyzene unalmas."`}
            </i>{" "}
            – mondja Hordós Johanna a koncertsorozat mögött meghúzódó
            motivációkról.
          </p>
          <p>
            {`
          A sokszínűség az eseménysorozat egyik főprofilja volt: a koncertek során klasszikus zenei repertoárhoz más zenei stílus, vagy kiegészítő tematika lett párosítva, megszólítva minden korosztályt, a gyerekektől az idősebbekig, innen kapta a sorozat a Classic + elnevezést. Szeptemberben a Jazzé, októberben a Népzenéé és a novemberi utolsó koncerten a Világzenéé volt a főszerep.`}
          </p>
          <p>
            {`
          A fent említett sokszínűség mellett - mely műsorválasztásban, és a fellépő művészek sokoldalúságában is megmutatkozott - a másik lényegi elem az ismeretterjesztés volt, melynek célja a fiatal, zene iránt érdeklődő közönség megszólítása és edukációja. A szervezők ennek megfelelően alakították a social felületeiket és a koncertek strukturáját, ugyanis a nehezebben érthető zeneművek befogadhatóságát kiváló magyarországi zenetudósok narrációi segítették: a veszprémi kötődésű Bolla Milán (Bartók Rádió) és Farkas Zoltán (Bartók Rádió, Bartók Emlékház, Zenetudományi Intézet Budapest) voltak az estek házigazdái.`}
          </p>
          <p>
            {`
          Az őszi hónapok utolsó hétvégéin rendezett Classic + koncertsorozat négy alkalmat ölelt fel, melyek mindegyike dupla, kétrészes koncert volt, melyek több, mint két órában zajlottak le Veszprém két különböző koncerttermében, az épp felújított és átadott Deák Ferenc utcai Rendezvényközpontban és a Hangvilla egyik kamaratermében. A szeptember végi koncert egyúttal a Deák Ferenc utcai Rendezvényközpont első rendezvénye, mondhatni a helyszín felavatása volt.`}
          </p>
          <p>
            {`
          A négy dupla-koncertből három telházas volt, több, mint 30 fellépő mutathatta meg önmagát és képviselve a kultúrát, számos európai országból érkezve Veszprémbe. \nA közönség több, mint 15 különböző hangszerrel ismerkedhetett meg, a hagyományosnak számító (zongora, hegedű, cselló) hangszereken kívül a közönség hallhatott népi hangszereket, szaxofont, fingerstyelos gitározást és afrikai dobolást is.`}
          </p>
          <p>
            {` 
          A SÉD kulturális periodikában jelentek meg pozitív hangú kritikák a szeptemberi és októberi koncertekről.Összefoglaló kisfilm is készült, a Digitalexpress cégnek köszönhetően, Mely elérhető a sorozat FB oldalán, és honlapján is. (www.vankoncert.hu) A szervezők reményei és a közönség pozitív visszajelzései szerint ebből az ötletből egy állandó hagyomány teremtődhet és új zenei színfolt kerülhet fel Veszprém zenei térképére.
          `}
          </p>
        </div>
      </Page>
    </div>
  );
};
