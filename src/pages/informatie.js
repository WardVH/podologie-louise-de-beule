import React from "react";
import Title from "../components/title";
import Paragraph from "../components/paragraph";

const InfoPage = () =>
  (
    <div className="container test">
      <div>
        <Title value={"Informatie"} />
        <Paragraph title={"Terugbetaling"}>
          <div>
            <p>Terugbetaling voor pedicurebehandeling verschilt per mutualiteit. Diabetespatiënten die onder een
              voortraject of zorgtraject (vroegere conventie/diabetespas) vallen, hebben recht op een verhoogde
              terugbetaling van het Riziv mits voorschrift van de huisarts of specialist.</p>
            <p>Terugbetaling van steunzolen hangt af van de mutualiteit waarbij u aangesloten bent. (Kijk zeker na of
              hiervoor een voorschrift van de huisarts vereist is)</p>
          </div>
        </Paragraph>
        <Paragraph title={"Wat mee te brengen"}>
          <p>Volgende zaken neemt u best mee naar het onderzoek:</p>
          <ol>
            <li>Dagdagelijkse schoenen, werkschoenen</li>
            <li>Sport-specifiek schoeisel (vb. loopschoenen, voetbalschoenen,…)</li>
            <li>Eventueel oude steunzolen</li>
            <li>Eventueel voorafgaande onderzoeksgegevens (verwijsbrief, medische beeldvorming)</li>
          </ol>
          <p>Terugbetaling van steunzolen hangt af van de mutualiteit waarbij u aangesloten bent. (Kijk zeker na of
            hiervoor een voorschrift van de huisarts vereist is)</p>
        </Paragraph>

        <Paragraph title={"Betaalwijze"}>
          <p><b>Het is niet mogelijk met bancontact te betalen in de praktijk.</b></p>
        </Paragraph>
      </div>
      <div>

        <h2></h2>
        <div>

        </div>
      </div>
      <div>
        <h2></h2>
        <div>

        </div>
      </div>
    </div>
  );

export default InfoPage;