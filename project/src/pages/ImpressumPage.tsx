import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';

const ImpressumPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Impressum | China Restaurant Lotus</title>
        <meta name="description" content="Impressum und rechtliche Informationen des China Restaurant Lotus in Hof." />
      </Helmet>

      {/* Header Background */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Impressum</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">China Restaurant Lotus</h2>
              <p className="mb-2">Inhaber: Pun Kee Man</p>
              <address className="not-italic mb-4">
                Ernst - Reuter - Str. 28<br />
                95032 Hof
              </address>
              <p className="mb-1">Tel: 09281 / 95066</p>
              <p className="mb-1">Email: icehandpun@web.de</p>
              <p className="mb-4">Internet: www.china-restaurant-lotus.de</p>
              <p className="mb-4">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                DE 228 528 265
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Gestaltung und Programmierung:</h2>
              <p>Advait Lanjekar</p>
            </section>

            <section className="mb-8">
              <p className="text-sm">
                Nach §28 Abs.3 Bundesdatenschutzgesetz wird der Nutzung oder Übermittlung unserer Daten für Werbezwecke oder für die Markt- und Meinungsforschung widersprochen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Haftungsausschluss</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">1. Inhalt des Onlineangebotes</h3>
                  <p className="text-sm">
                    Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">2. Verweise und Links</h3>
                  <p className="text-sm">
                    Bei direkten oder indirekten Verweisen auf fremde Webseiten ["Hyperlinks"], die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">3. Urheber- und Kennzeichenrecht</h3>
                  <p className="text-sm">
                    Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">4. Datenschutz</h3>
                  <p className="text-sm">
                    Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten [Emailadressen, Namen, Anschriften, Telefonnummern und ähnliches] besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist - soweit technisch möglich und zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie Emailadressen durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">5. Rechtswirksamkeit dieses Haftungsausschlusses</h3>
                  <p className="text-sm">
                    Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ImpressumPage;