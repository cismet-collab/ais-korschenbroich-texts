import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import cismetLogo from "./assets/cismetSignet2k.png";
import pecherLogo from "./assets/pecher.png";
import klasLogo from "./assets/Signet_AIS_RZ.png";
import customerLogo from "./assets/sek_logo.jpg";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = ({ email }) => {
  return (
    <GenericModalMenuSection
      sectionKey="kontakt"
      sectionTitle="Kontakt"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Für telefonische Auskünfte zum Umgang mit dem Auskunfts- und
            Informationssystem Starkregen (AIS) stehen Ihnen die
            Mitarbeiterinnen und Mitarbeiter der Stadt Korschenbroich/SEK zur Verfügung.
          </p>
          <p>
            Weitere Informationen zum Thema „Schutz vor Starkregen“ finden Sie
            auf der Homepage der Stadt Korschenbroich.
          </p>

          <p style={{ display: "flex" }}>
            <div>
              Stadt Korschenbroich
              <br />
              Städtischer Entsorgungsbetrieb Korschenbroich
              <br />
              Wankelstraße 21
              <br />
              41352 Korschenbroich
              <br />
              Telefon: 02182/5702-0
              <br />
              E-Mail: <a href="mailto:{email)}">{email}</a>
              <br />
            </div>
            <img
              style={{ marginBottom: 10, marginLeft: 20 }}
              target="_contacts"
              alt="Logo Auftraggeber"
              height="150"
              src={customerLogo}
            />
          </p>

          <table width="100%" style={{ marginTop: 50 }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <strong>Bearbeitung des Starkregenrisikomanagement</strong>
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <strong>
                    Aufbau und Bereitstellung AIS Starkregenvorsorge
                  </strong>
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <strong>Konzeption des AIS Starkregenvorsorge</strong>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_contacts"
                    alt="Logo Pecher AG"
                    height="40"
                    src={pecherLogo}
                  />
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_contacts"
                    alt="Logo cismet GmbH"
                    height="40"
                    src={cismetLogo}
                  />
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_contacts"
                    alt="Logo KLAS Bremen"
                    height="40"
                    src={klasLogo}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "bottom" }}>
                  Dr. Pecher AG
                  <br />
                  Klinkerweg 5<br />
                  40699 Erkrath
                  <br />
                  Telefon: 02104 93 96-0
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:mail.erkrath@pecher.de">
                    mail.erkrath@pecher.de
                  </a>
                </td>
                <td style={{ verticalAlign: "bottom" }}>
                  cismet GmbH
                  <br />
                  <br />
                  Tholey ▪️ Saarbrücken <br />
                  Telefon: 0681 965 901-20
                  <br />
                  <a href="https://cismet.de/" title={"and it just works"}>
                    https://cismet.de/
                  </a>
                </td>
                <td style={{ verticalAlign: "bottom" }}>
                  <a href="https://www.klas-bremen.de/">
                    https://www.klas-bremen.de/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    />
  );
};
export default Component;
