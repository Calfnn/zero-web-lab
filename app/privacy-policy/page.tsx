import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali di Zero Web Lab ai sensi del Regolamento UE 2016/679 (GDPR).",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      label="/ Legale"
      title="Privacy Policy"
      lastUpdated="12 giugno 2026"
    >
      <p>
        La presente informativa descrive le modalità di trattamento dei dati
        personali degli utenti che consultano il sito <strong>zeroweblab.it</strong>{" "}
        e che interagiscono con i servizi offerti, ai sensi del Regolamento (UE)
        2016/679 (&laquo;GDPR&raquo;) e del D.Lgs. 196/2003 come modificato dal
        D.Lgs. 101/2018.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Il Titolare del trattamento è <strong>Zero Web Lab</strong>. Per qualsiasi
        richiesta relativa al trattamento dei dati personali è possibile
        contattare il Titolare all&apos;indirizzo email{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>

      <h2>2. Quali dati raccogliamo</h2>
      <p>Trattiamo i dati personali che ci fornisci volontariamente:</p>
      <ul>
        <li>
          <strong>Dati di contatto</strong> inviati tramite il modulo presente
          nella pagina Contatti: nome, indirizzo email, servizio di interesse e
          contenuto del messaggio.
        </li>
        <li>
          <strong>Dati di navigazione tecnici</strong> (es. indirizzo IP, tipo
          di browser) trattati automaticamente dai sistemi informatici per il
          solo funzionamento e la sicurezza del sito, senza essere associati a
          utenti identificati.
        </li>
      </ul>
      <p>
        Il sito <strong>non utilizza cookie di profilazione</strong> né strumenti
        di tracciamento pubblicitario. Per i dettagli consulta la{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>
          Rispondere alle richieste inviate tramite il modulo di contatto e
          fornire le informazioni richieste — base giuridica: esecuzione di
          misure precontrattuali e legittimo interesse (art. 6.1.b e 6.1.f
          GDPR).
        </li>
        <li>
          Garantire la sicurezza e il corretto funzionamento del sito — base
          giuridica: legittimo interesse (art. 6.1.f GDPR).
        </li>
        <li>
          Adempiere a obblighi di legge — base giuridica: obbligo legale (art.
          6.1.c GDPR).
        </li>
      </ul>

      <h2>4. Modalità del trattamento e invio del modulo</h2>
      <p>
        I dati inviati tramite il modulo di contatto sono trasmessi e recapitati
        via email al Titolare attraverso il servizio <strong>Web3Forms</strong>{" "}
        (Web3Forms / Statickit), che agisce in qualità di Responsabile del
        trattamento. Il fornitore può trattare i dati anche su server situati
        fuori dall&apos;Unione Europea, nel rispetto delle garanzie previste dagli
        artt. 44 e ss. del GDPR. I dati sono trattati con strumenti elettronici e
        misure di sicurezza adeguate a prevenire accessi non autorizzati.
      </p>

      <h2>5. Conservazione dei dati</h2>
      <p>
        I dati di contatto sono conservati per il tempo necessario a gestire la
        richiesta e per gli eventuali adempimenti successivi, e comunque non
        oltre <strong>24 mesi</strong> dall&apos;ultimo contatto, salvo diversi
        obblighi di legge.
      </p>

      <h2>6. Comunicazione dei dati</h2>
      <p>
        I dati non sono diffusi né ceduti a terzi per finalità di marketing.
        Possono essere comunicati esclusivamente a fornitori di servizi tecnici
        (es. hosting su Vercel, invio modulo tramite Web3Forms) nominati
        Responsabili del trattamento, e all&apos;autorità giudiziaria ove richiesto
        per legge.
      </p>

      <h2>7. I tuoi diritti</h2>
      <p>
        In qualità di interessato puoi esercitare in qualsiasi momento i diritti
        previsti dagli artt. 15-22 del GDPR:
      </p>
      <ul>
        <li>accesso ai tuoi dati personali;</li>
        <li>rettifica o cancellazione;</li>
        <li>limitazione od opposizione al trattamento;</li>
        <li>portabilità dei dati;</li>
        <li>
          proporre reclamo all&apos;Autorità Garante per la protezione dei dati
          personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).
        </li>
      </ul>
      <p>
        Per esercitare i tuoi diritti scrivi a{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>

      <h2>8. Modifiche alla presente informativa</h2>
      <p>
        Il Titolare si riserva di modificare o aggiornare questa informativa per
        adeguarla a novità normative o variazioni dei servizi. Le modifiche
        saranno pubblicate su questa pagina con indicazione della data di ultimo
        aggiornamento.
      </p>
    </LegalLayout>
  );
}
