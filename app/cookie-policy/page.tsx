import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie del sito Zero Web Lab. Il sito non utilizza cookie di profilazione né strumenti di tracciamento.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      label="/ Legale"
      title="Cookie Policy"
      lastUpdated="12 giugno 2026"
    >
      <p>
        Questa Cookie Policy spiega cosa sono i cookie e come vengono utilizzati
        sul sito <strong>zeroweblab.it</strong>, in conformità con il GDPR e con
        le Linee Guida del Garante per la protezione dei dati personali.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti web salvano sul
        dispositivo dell&apos;utente per memorizzare informazioni. Possono essere{" "}
        <strong>tecnici</strong> (necessari al funzionamento) o di{" "}
        <strong>profilazione</strong> (usati per tracciare l&apos;utente a fini
        pubblicitari o statistici).
      </p>

      <h2>2. I cookie usati da questo sito</h2>
      <p>
        Questo sito <strong>non utilizza cookie di profilazione</strong>, non
        impiega strumenti di analisi statistica (es. Google Analytics) né
        pixel di tracciamento di terze parti. Di conseguenza{" "}
        <strong>non è richiesto alcun banner di consenso</strong> ai cookie.
      </p>
      <p>
        Possono essere utilizzati esclusivamente <strong>cookie tecnici</strong>{" "}
        o tecnologie analoghe strettamente necessari a garantire la corretta
        navigazione e la sicurezza del sito, per i quali, ai sensi della
        normativa vigente, non è necessario il consenso preventivo
        dell&apos;utente.
      </p>

      <h2>3. Cookie di terze parti</h2>
      <p>
        Il sito è ospitato su <strong>Vercel</strong> e l&apos;invio del modulo
        contatti avviene tramite <strong>Web3Forms</strong>: questi fornitori
        possono impostare cookie tecnici necessari all&apos;erogazione del servizio.
        Nessuno di essi viene utilizzato per finalità di profilazione.
      </p>

      <h2>4. Gestione dei cookie dal browser</h2>
      <p>
        L&apos;utente può in ogni momento bloccare o eliminare i cookie tramite le
        impostazioni del proprio browser (Chrome, Firefox, Safari, Edge). La
        disabilitazione dei cookie tecnici potrebbe compromettere alcune
        funzionalità del sito.
      </p>

      <h2>5. Aggiornamenti</h2>
      <p>
        Qualora in futuro venissero introdotti strumenti di analisi o
        profilazione, questa Cookie Policy sarà aggiornata e verrà attivato un
        idoneo sistema di raccolta del consenso. Per qualsiasi domanda scrivi a{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>
      <p>
        Per maggiori informazioni sul trattamento dei dati personali consulta la{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
