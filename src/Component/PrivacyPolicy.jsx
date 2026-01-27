import { Container } from "react-bootstrap";
import GameScreen from "./GameScreen";

const PrivacyPolicy = () => {
  return (
    <>
      <Container className=" bg-dark min-vh-100 text-light  m-0 min-vw-100">
        <div className=" d-flex">
          <GameScreen />
          <h1 className=" title-text text-center me-auto">Privacy Policy</h1>
        </div>

        <p className=" fw-bold">
          La presente Privacy Policy descrive come raccogliamo, utilizziamo e
          proteggiamo le informazioni personali degli utenti del nostro sito web
          in conformità con il Regolamento Generale sulla Protezione dei Dati
          (GDPR).
        </p>
        <h4>1. Titolare del trattamento</h4>
        <p>
          Il titolare del trattamento dei dati è il proprietario di questo sito
          web. Per qualsiasi informazione è possibile contattare il titolare
          tramite i canali indicati sul sito.
        </p>
        <h4>2. Tipologia di dati raccolti</h4>
        <p>
          Questo sito non raccoglie dati personali identificativi degli utenti.
          Possono essere raccolti dati di navigazione anonimi tramite strumenti
          di analisi statistica.
        </p>
        <h4>3. Google Analytics</h4>
        <p>
          Questo sito utilizza Google Analytics 4, un servizio di analisi web
          fornito da Google LLC. Google Analytics consente di raccogliere
          informazioni in forma aggregata e anonima, come:
          <ol className=" text-start">
            <li>numero di visitatori</li>
            <li>pagine visitate</li>
            <li>provenienza geografica approssimativa</li>
            <li>tipo di dispositivo e browser</li>
          </ol>
          Gli indirizzi IP degli utenti vengono anonimizzati prima della
          memorizzazione.
        </p>
        <h4>4. Base giuridica del trattamento</h4>
        <p>
          Il trattamento dei dati avviene esclusivamente previo consenso
          dell’utente, espresso tramite il banner cookie. In assenza di
          consenso, Google Analytics non viene attivato.
        </p>
        <h4>5. Cookie</h4>
        <p>
          Questo sito utilizza:
          <ol className=" text-start">
            <li>cookie tecnici necessari al funzionamento del sito</li>
            <li>
              cookie di terze parti (Google Analytics) solo previo consenso
            </li>
          </ol>
          L'utente può:
          <ol className=" text-start">
            <li>accettare o rifiutare i cookie tramite il banner</li>
            <li>
              modificare o revocare il consenso cancellando i dati di
              navigazione dal proprio browser
            </li>
          </ol>
        </p>
        <h4>6. Conservazione dei dati</h4>
        <p>
          I dati raccolti tramite Google Analytics sono conservati secondo le
          politiche di Google. Il titolare del sito non accede a dati personali
          identificativi e non effettua profilazione.
        </p>
        <h4>7. Trasferimento dei dati</h4>
        <p>
          I dati raccolti da Google Analytics possono essere trasferiti e
          trattati su server situati al di fuori dell’Unione Europea. Google
          garantisce adeguate misure di protezione dei dati in conformità al
          GDPR.
        </p>
        <h4>8. Diritti dell’utente</h4>
        <p>
          Ai sensi del Regolamento UE 2016/679 (GDPR), l’utente ha il diritto
          di:
          <ol className=" text-start">
            <li>ottenere informazioni sul trattamento dei dati</li>
            <li>revocare il consenso in qualsiasi momento</li>
          </ol>
        </p>
        <h4>9. Modifiche alla presente informativa</h4>
        <p>
          La presente Privacy Policy può essere aggiornata in qualsiasi momento.
          Si consiglia di consultarla periodicamente. Ultimo aggiornamento:
          Gennaio 2026.
        </p>
        <h4>10. Riferimenti esterni</h4>
        <p className=" m-0">
          Per maggiori informazioni sul trattamento dei dati da parte di Google:
          <a href="https://policies.google.com/privacy" className=" ms-1">
            Privacy Policy di Google
          </a>
        </p>
      </Container>
    </>
  );
};
export default PrivacyPolicy;
