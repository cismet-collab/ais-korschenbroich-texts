import React from "react";
import {
  Help05Introduction,
  //   Help20Karteninhalt,
  Help80ModellfehlerMelden,
  //   Help90Haftungsausschluss,
  Help99Footer,
} from "@cismet-collab/rainhazardmaps-base-texts";

import Help10AllgemeineHinweise from "./help/Help10AllgemeineHinweise";
import Help15Datengrundlage from "./help/Help15Datengrundlage";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help50WasserstandAbfragen from "./help/Help50WasserstandAbfragen";
import Help60SimulierteSzenarien from "./help/Help60SimulierteSzenarien";
import Help70AussagekraftDerSimulationen from "./help/Help70AussagekraftDerSimulationen";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import Help98Kontakt from "./help/Help98Kontakt";

const getCollabedHelpComponentConfig = ({
  version,
  versionString,
  reactCismapRHMVersion,
  footerLogoUrl,
  email,
}) => {
  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help10AllgemeineHinweise key="AllgemeineHinweise" />,
    <Help15Datengrundlage key="Datengrundlage" />,
    <Help20Karteninhalt key="Karteninhalt" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help50WasserstandAbfragen key="WasserstandAbfragen" />,
    <Help60SimulierteSzenarien key="SimulierteSzenarien" />,
    <Help70AussagekraftDerSimulationen key="AussagekraftDerSimulationen" />,
    <Help80ModellfehlerMelden key="ModellfehlerMelden" email={email} />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
    <Help98Kontakt key="Kontakt" email={email} />,
  ];
  const menuFooter = (
    <Help99Footer
      hintergrundkartenText="Basiskarte © GeoBasis-DE/BKG | DOP © Geobasis NRW | Stadtkarte 2.0 © RVR | DTK Sammeldienst © Geobasis NRW"
      taglineModelling={
        <div>
          <b>Modellierung und AIS Starkregenvorsorge</b> (Version 1.0 | 2/2024):{" "}
          <a target="_korschenbroich" href="https://korschenbroich.de/">
            Stadt Korschenbroich
          </a>{" "}
          |{" "}
          <a target="_pecher" href="https://www.pecher.de/">
            Dr. Pecher AG (Gelsenkirchen/Erkrath)
          </a>
        </div>
      }
      version={version}
      versionString={versionString}
      reactCismapRHMVersion={reactCismapRHMVersion}
      logoUrl={footerLogoUrl}
    />
  );
  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter,
  };
};

export { getCollabedHelpComponentConfig };
