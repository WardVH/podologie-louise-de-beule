import React from "react";
import Paragraph from "../components/paragraph";
import Title from "../components/title";
import Group from "../components/group";

const Podologie = () =>
  (
    <div className="container">
      <Title value={"Podologie"} />
      <Group imageLeft={true} imageUrl={"https://www.pulseheadlines.com/wp-content/uploads/2016/12/jejeje-1.jpg"}>
        <Paragraph
          title={"Instrumentele behandeling"}
          anchor={"instrumentale-behandeling"}
        >
          <div>
            <p>Onder instrumentele behandeling valt alles met betrekking tot gespecialiseerde voetverzorging. Zowel
              probleem specifieke behandeling (likdoorns, ingegroeide nagels,…) als algemene voetverzorging.
              Afhankelijk van de klacht kunnen er bijkomende behandelingstechnieken toegepast worden zoals het
              vervaardigen van:</p>
            <ul>
              <li>Nagelbeugels: ter behandeling van ingegroeide nagels (ten gevolge van de vorm van de nagel).</li>
              <li>Silicone-orthesen: ter correctie van scheefstand van tenen of ter ontlasting van plaatsen waar
                overdruk pijnklachten veroorzaakt.
              </li>
              <li>Vilttherapie: ter drukontlasting om wonden te genezen.</li>
            </ul>
          </div>
        </Paragraph>
      </Group>
      <Group imageLeft={false} imageUrl={"https://www.pulseheadlines.com/wp-content/uploads/2016/12/jejeje-1.jpg"}>
        <Paragraph
          title={"Biomechanisch onderzoek en ganganalyse"}
          anchor={"biomechanisch-onderzoek-ganganalyse"}
        >
          <div>
            <p>Door middel van een uitgebreid onderzoek wordt er gezocht naar de oorzaak van eventuele
              voet-/knie-/rug-/… klachten. Hierna wordt gekeken welke behandeling moet worden opgestart om deze klachten
              te kunnen verhelpen. Tijdens een gang-/loopanalyse wordt het bewegingspatroon nagekeken door middel van
              dynamische opnames.</p>
          </div>
        </Paragraph>
      </Group>
      <Group imageLeft={true} imageUrl={"https://www.pulseheadlines.com/wp-content/uploads/2016/12/jejeje-1.jpg"}>
        <Paragraph
          title={"Zooltherapie en schoenadvies"}
          anchor={"zooltherapie-schoenadvies"}
        >
          <div>
            <p>Uit het biomechanisch onderzoek of de ganganalyse kan blijken dat u baat heeft bij het dragen van
              podologische steunzolen. Indien dit het geval is zal er een maatname/scan uitgevoerd worden. Hierbij wordt
              een vervolgafspraak ingepland om de zolen op te halen. Op deze afspraak zullen de zolen worden ingepast in
              de schoen.</p>
            <p>Bij het geven van schoenadvies worden de bestaande schoenen nagekeken op slijtage, pasvorm, stevigheid,…
              Verder worden er aandachtpunten aangehaald die kunnen worden toegepast bij de aankoop van nieuwe
              (dagdagelijkse-/sport specifieke) schoenen.</p>
          </div>
        </Paragraph>
      </Group>
    </div>
  );

export default Podologie;