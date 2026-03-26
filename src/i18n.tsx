import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "de" | "en";

type NavLink = {
  name: string;
  href: string;
};

type Translations = {
  nav: {
    links: NavLink[];
    menuLabel: string;
    languageLabel: string;
    brandAriaLabel: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    company: string;
    connect: string;
    rights: string;
    values: string;
  };
  backToTop: {
    ariaLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    intro: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    cards: Array<{ title: string; text: string }>;
  };
  gallery: {
    title: string;
    text: string;
  };
  differentiator: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    pillars: Array<{ title: string; text: string }>;
    closing: string;
  };
  coaching: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    text: string;
    cta: string;
    offers: Array<{ title: string; subtitle: string; text: string }>;
    coreFocusEyebrow: string;
    coreFocusTitle: string;
    coreFocusText: string;
    typicalClients: string;
    clientList: string[];
  };
  consulting: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    intro: string;
    currentEngagement: string;
    currentEngagementText: string;
    cta: string;
    areas: Array<{ title: string; description: string }>;
  };
  speaking: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    cta: string;
    keynotes: Array<{ title: string; subtitle: string; outcomes: string[] }>;
  };
  about: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    paragraphs: string[];
    pilotLabel: string;
    perspectiveLabel: string;
    highlightsTitle: string;
    highlights: string[];
    foundationTitle: string;
    foundationText: string;
    whyTitle: string;
    whyText: string;
    aviationStoryEyebrow: string;
    aviationStoryTitle: string;
    aviationStoryTitleHighlight: string;
    aviationStoryParagraphs: string[];
    aviationStoryPoints: string[];
    aviationStoryClosing: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    items: Array<{ period: string; title: string; description: string }>;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    testimonials: Array<{ quote: string; author: string; role: string }>;
    featuredInterview: string;
    featuredInterviewTitle: string;
    featuredInterviewText: string;
    featuredInterviewCta: string;
    editorialFeature: string;
    editorialFeatureTitle: string;
    editorialFeatureText: string;
    editorialFeatureCta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    options: {
      coaching: string;
      consulting: string;
      speaking: string;
      workshop: string;
      other: string;
    };
    submit: string;
    helper: string;
    mailSubjectPrefix: string;
    mailBody: {
      fullName: string;
      email: string;
      company: string;
      primaryInterest: string;
      message: string;
      sentVia: string;
    };
  };
  thankYou: {
    title: string;
    titleHighlight: string;
    text: string;
    nextSteps: string;
    nextStepsList: string[];
    directContact: string;
    backHome: string;
  };
};

const translations: Record<Language, Translations> = {
  de: {
    nav: {
      links: [
        { name: "Start", href: "#home" },
        { name: "Coaching & Mentoring", href: "#coaching" },
        { name: "Consulting", href: "#consulting" },
        { name: "Speaking", href: "#speaking" },
        { name: "Über Marie", href: "#about" },
        { name: "Referenzen", href: "#references" },
        { name: "Kontakt", href: "#contact" },
      ],
      menuLabel: "Menü",
      languageLabel: "Sprache",
      brandAriaLabel: "Marie Lindner Coaching",
    },
    footer: {
      tagline:
        "Coaching, Mentoring, Speaking und ausgewählte internationale Projektberatungen.",
      navigation: "Navigation",
      company: "Unternehmen",
      connect: "Kontakt",
      rights: "© {year} Marie Lindner Coaching . Alle Rechte vorbehalten.",
      values: "Klarheit • Präsenz • Disziplin",
    },
    backToTop: {
      ariaLabel: "Nach oben scrollen",
    },
    hero: {
      badge: "Coaching • Mentoring • Internationale Projektberatung",
      titleLine1: "Klarheit für Menschen in Verantwortung.",
      titleHighlight: "Sicherheit in Bewegung.",
      intro:
        "Marie Lindner begleitet Unternehmerinnen und Unternehmer, Führungskräfte und ambitionierte Entscheidungsträger dabei, Komplexität zu navigieren, Führungskompetenz zu stärken und echte, nachhaltige Veränderung zu schaffen.",
      supporting:
        "Neben Coaching und Mentoring unterstützt sie ausgewählte internationale Beratungsmandate und ist aktuell in ein internationales IT-Projekt eingebunden. Ihr Aviation-Hintergrund prägt ihre Arbeitsweise bis heute: ruhige Urteilsfähigkeit, Struktur unter Druck und disziplinierte Umsetzung.",
      primaryCta: "Coaching entdecken",
      secondaryCta: "Gespräch anfragen",
      cards: [
        {
          title: "Coaching",
          text: "1:1 Coaching, Mentoring, Entwicklung in Kleingruppen und Executive Sparring.",
        },
        {
          title: "Consulting",
          text: "Projektbasierte internationale Arbeit mit Fokus auf Klarheit, Koordination und Umsetzung.",
        },
        {
          title: "Aviation",
          text: "Die Ausbildung zur Verkehrspilotin prägt Disziplin, Präzision und Entscheidungsstärke.",
        },
      ],
    },
    gallery: {
      title: "Ein Führungsprofil, geprägt durch Wirtschaft, Aviation und internationale Perspektive.",
      text:
        "Erfahrung über Branchen, Kulturen und Umfelder mit hoher Verantwortung hinweg hat einen ruhigen, strukturierten und entschlossenen Führungsstil geformt – mit Fokus auf Klarheit, Verantwortung und echte Wirkung.",
    },
    differentiator: {
      eyebrow: "Was Marie auszeichnet",
      title: "Eine seltene Kombination aus",
      titleHighlight: "Führung, Präsenz und Realitätssinn.",
      intro:
        "Marie verbindet unternehmerische Erfahrung, Führungsverantwortung, Coaching-Kompetenz und Aviation-Disziplin zu einer Arbeitsweise, die gleichzeitig klar, menschlich und wirkungsvoll ist.",
      pillars: [
        {
          title: "Unternehmerische Realität",
          text: "Erfahrung aus Aufbauarbeit, Verantwortung und echter operativer Führung statt rein theoretischer Perspektive.",
        },
        {
          title: "Ruhige Autorität",
          text: "Klare Kommunikation, Präsenz und eine strukturierte Haltung – gerade in anspruchsvollen Situationen.",
        },
        {
          title: "Aviation-Disziplin",
          text: "Standards in Präzision, Fokus und Entscheidungsqualität aus einem Umfeld, in dem Verantwortung nicht verhandelbar ist.",
        },
      ],
      closing:
        "Das Ergebnis ist eine Begleitung, die Vertrauen schafft, Orientierung gibt und Bewegung in komplexe Situationen bringt.",
    },
    coaching: {
      eyebrow: "Coaching & Mentoring",
      title: "Begleitung für Menschen mit",
      titleHighlight: "echter Verantwortung.",
      intro:
        "Marie arbeitet mit Unternehmerinnen und Unternehmern, Führungskräften und ambitionierten Persönlichkeiten in Momenten, die Klarheit, Resilienz, starke Kommunikation und geerdete Entscheidungen verlangen.",
      text:
        "Ihr Ansatz verbindet unternehmerische Erfahrung, Führungsrealität und professionelle Coaching-Methoden. Die Arbeit ist strukturiert, persönlich und ergebnisorientiert – mit dem Ziel, Klarheit, Sicherheit und nachhaltige Entwicklung zu schaffen.",
      cta: "Coaching anfragen",
      offers: [
        {
          title: "1:1 Coaching",
          subtitle: "Individuelle Begleitung für Führungskräfte und Entscheidungsträger",
          text: "Fokussiertes Coaching für Führungsklarheit, Entscheidungsqualität, Rollenverständnis, Kommunikation und persönliche Wirksamkeit – online oder vor Ort.",
        },
        {
          title: "Gruppenprogramme",
          subtitle: "Entwicklung in einem kuratierten Kleingruppen-Setting",
          text: "Kleine Formate für Reflexion, Wachstum und Austausch zu Resilienz, Selbstführung, innerer Sicherheit und Executive Presence.",
        },
        {
          title: "Workshops & Seminare",
          subtitle: "Gezielte Formate für Teams, Netzwerke und Organisationen",
          text: "Kompakte, hochwertige Workshops zu Führung, Kommunikation, mentaler Stärke und Veränderung – ideal für Unternehmen, Communities und Events.",
        },
        {
          title: "Exklusive Retreats",
          subtitle: "Intensive Entwicklungsformate in Europa",
          text: "Ausgewählte Retreat-Konzepte für tiefere Transformation und strategische Klarheit – in inspirierenden Settings wie Mallorca oder am Bodensee.",
        },
      ],
      coreFocusEyebrow: "Kernfokus",
      coreFocusTitle: "Führung, Entscheidungen und nachhaltige Veränderung.",
      coreFocusText:
        "Ob es um Druck in der Führungsrolle, einen strategischen Übergang, ein Kommunikationsthema oder stärkere Selbstführung geht: Im Zentrum steht immer, Menschen mit Klarheit und Integrität voranzubringen.",
      typicalClients: "Typische Klienten",
      clientList: [
        "Unternehmerinnen und Unternehmer",
        "Executives",
        "Managerinnen und Manager",
        "Founders",
        "Ambitionierte Menschen in Übergangsphasen",
      ],
    },
    consulting: {
      eyebrow: "Consulting",
      titleLine1: "Ausgewählte internationale Mandate –",
      titleHighlight: "projektbasiert und präzise.",
      intro:
        "Zusätzlich zu Coaching und Mentoring übernimmt Marie Lindner ausgewählte Beratungsmandate mit internationaler Ausrichtung. Diese Arbeit ist bewusst projektbasiert, vertraulich und stark auf Umsetzung ausgerichtet.",
      currentEngagement: "Aktuelles Mandat",
      currentEngagementText:
        "Marie ist aktuell in ein internationales IT-Projekt eingebunden. Details bleiben vertraulich, doch das Mandat steht exemplarisch für jene funktionsübergreifenden, internationalen Aufgaben mit hoher Verantwortung, die sie selektiv unterstützt.",
      cta: "Consulting anfragen",
      areas: [
        {
          title: "Projektbasierte Beratung",
          description:
            "Marie unterstützt ausgewählte Mandate dort, wo Struktur, Koordination, Kommunikation und disziplinierte Umsetzung entscheidend sind.",
        },
        {
          title: "Internationaler Fokus",
          description:
            "Ihre Beratungsarbeit ist international ausgerichtet und projektbezogen aufgebaut – mit klaren Erwartungen, definiertem Scope und hoher Diskretion.",
        },
        {
          title: "Zusammenarbeit mit Führungsteams",
          description:
            "Sie unterstützt Gründer, Führungsteams und Stakeholder dabei, Prioritäten auszurichten, Umsetzung zu stärken und Projekte mit Sicherheit voranzubringen.",
        },
      ],
    },
    speaking: {
      eyebrow: "Speaking",
      title: "Keynotes mit",
      titleHighlight: "Substanz und Präsenz.",
      intro:
        "Speaking ist Teil von Maries Arbeit – besonders dort, wo Führung, Verantwortung, Kommunikation und Entscheidungsfähigkeit aufeinandertreffen. Ihre Sessions sind reflektiert, klar und in echter Praxiserfahrung verankert.",
      cta: "Speaking anfragen",
      keynotes: [
        {
          title: "Leadership unter Druck",
          subtitle: "Entscheidungsqualität, ruhige Kommunikation und verantwortliches Handeln",
          outcomes: [
            "Wie Führungskräfte Klarheit zurückgewinnen, wenn Komplexität steigt",
            "Entscheiden unter Druck, ohne innere Ruhe zu verlieren",
            "Was Aviation-Disziplin über Führungsverantwortung lehrt",
          ],
        },
        {
          title: "Executive Presence & Kommunikation",
          subtitle: "Sicherheit, Klarheit und authentische Autorität",
          outcomes: [
            "Wie Führungskräfte Präsenz stärken, ohne sich zu verbiegen",
            "Strukturierte Kommunikation in sensiblen Situationen",
            "Vertrauen durch Klarheit, Ruhe und Konsistenz aufbauen",
          ],
        },
        {
          title: "Veränderung, Resilienz & Selbstführung",
          subtitle: "Übergänge mit Struktur und Fokus gestalten",
          outcomes: [
            "Auch in unsicheren Phasen handlungsfähig bleiben",
            "Resilienz und innere Stabilität gezielt stärken",
            "Reflexion in konkrete nächste Schritte übersetzen",
          ],
        },
      ],
    },
    about: {
      eyebrow: "Über Marie Lindner",
      titleLine1: "Unternehmerische Erfahrung.",
      titleHighlight: "Menschliche Klarheit.",
      paragraphs: [
        "Marie Lindner verbindet praktische unternehmerische Erfahrung mit Führungsverantwortung, strukturierter Coaching-Arbeit und einem Aviation-Hintergrund, der ihre Standards früh geprägt hat.",
        "Im Aufbau und in der Mitverantwortung eines Startups sammelte sie Hands-on-Erfahrung in Management, Organisation, strategischem Denken, Umsetzung und Kommunikation. Diese Arbeit schuf ein tiefes Verständnis dafür, wie Führung unter Druck tatsächlich funktioniert – und wo Klarheit am meisten gebraucht wird.",
        "Heute begleitet sie Unternehmerinnen und Unternehmer, Executives und ambitionierte Persönlichkeiten, die bessere Entscheidungen, stärkere Selbstführung, klarere Kommunikation und mehr geerdete Wirksamkeit wollen.",
      ],
      pilotLabel: "Commercial Pilot License (CPL)",
      perspectiveLabel: "Internationale Perspektive",
      highlightsTitle: "Professionelle Highlights",
      highlights: [
        "Gründerin und Managing Director der Marie Lindner Coaching",
        "Unternehmerische Erfahrung aus Startup-Aufbau, Management und Führungsverantwortung",
        "Commercial Pilot License (CPL) und Aviation-Ausbildung in Australien",
        "Führung, Kommunikation und Entscheidungen unter Druck",
        "Professionelle Coaching-Ausbildung mit Leadership-Fokus",
        "Internationaler Hintergrund mit Deutsch und Englisch auf hohem Niveau",
        "Starkes Netzwerk aus Unternehmern, Führungskräften und Business-Communities",
        "Strukturierte, vertrauensvolle Arbeit mit Menschen in Übergängen und Rollen mit hoher Verantwortung",
      ],
      foundationTitle: "Coaching-Fundament",
      foundationText:
        "Maries Arbeit ist geprägt von führungsorientierter Coaching-Ausbildung, Kommunikationspsychologie, persönlicher Entwicklung und resilienzorientierten Methoden – immer verbunden mit echter Business-Perspektive.",
      whyTitle: "Warum Klienten mit ihr arbeiten",
      whyText:
        "Weil die Kombination selten ist: professionelle Glaubwürdigkeit, ruhige Autorität, unternehmerisches Verständnis und eine Arbeitsweise, die gleichzeitig strukturiert und zutiefst menschlich ist.",
      aviationStoryEyebrow: "Aviation & Leadership",
      aviationStoryTitle: "Leadership beginnt dort, wo Verantwortung",
      aviationStoryTitleHighlight: "absolut wird.",
      aviationStoryParagraphs: [
        "Marie Lindner ist nicht nur Unternehmerin und Coach – sie ist auch ausgebildete Pilotin. Im Cockpit zählt keine Theorie, sondern Klarheit, Präzision und die Fähigkeit, in kritischen Momenten ruhig und entschlossen zu handeln.",
        "Diese Welt hat ihren Blick auf Führung nachhaltig geprägt: Verantwortung übernehmen, Verfahren beherrschen, unter Druck klar kommunizieren und auch dann Orientierung geben, wenn nicht alle Variablen kontrollierbar sind.",
      ],
      aviationStoryPoints: [
        "Entscheidungen unter Unsicherheit",
        "Verantwortung in Momenten mit hohem Druck",
        "Absolute Konzentration und disziplinierte Vorbereitung",
        "Vertrauen in Systeme, Standards und das eigene Urteil",
      ],
      aviationStoryClosing:
        "Genau diese Erfahrung prägt ihren Coaching-Ansatz bis heute – klar, ruhig, strukturiert und handlungsorientiert.",
    },
    timeline: {
      eyebrow: "Beruflicher Weg",
      title: "Ein Weg, geprägt durch",
      titleHighlight: "Verantwortung, Wachstum und Bandbreite.",
      intro:
        "Maries Arbeit steht heute auf mehreren Säulen: unternehmerische Praxis, Führungsverantwortung, Coaching-Entwicklung und ein Aviation-Hintergrund, der Klarheit, Disziplin und Urteilsfähigkeit geprägt hat.",
      items: [
        {
          period: "Unternehmerisches Fundament",
          title: "Startup-Aufbau, operative Verantwortung und Führungspraxis",
          description:
            "Marie war intensiv am Aufbau und an der Mitführung eines Startup-Umfelds beteiligt und sammelte praktische Erfahrung in Management, Organisation, strategischer Planung, Kommunikation und Umsetzung.",
        },
        {
          period: "Coaching-Entwicklung",
          title: "Professionelle Coaching-Ausrichtung mit Leadership-Fokus",
          description:
            "Parallel zur unternehmerischen Arbeit vertiefte sie ihre Coaching-Expertise in Führung, Kommunikation, Resilienz und persönlicher Entwicklung – und prägte damit die methodische Seite ihrer Arbeit heute.",
        },
        {
          period: "Aviation-Hintergrund",
          title: "Verkehrspilotinnen-Ausbildung in Australien",
          description:
            "Ihr Diploma in Applied Science – Aviation und die Commercial Pilot License verlangten Konzentration, Verantwortung, prozedurale Disziplin und Entscheidungssicherheit unter Druck.",
        },
        {
          period: "Heute",
          title: "Coaching, Mentoring und ausgewählte internationale Beratungsmandate",
          description:
            "Heute begleitet Marie Unternehmer, Führungskräfte und ambitionierte Persönlichkeiten durch Coaching und Mentoring und unterstützt daneben selektiv projektbasierte internationale Mandate.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Referenzen & Außenperspektiven",
      title: "Vertrauen entsteht durch",
      titleHighlight: "Wirkung, nicht Lautstärke.",
      intro:
        "Die Arbeit von Marie wird als klar, geerdet, vertrauensvoll und wirksam erlebt – besonders in Situationen, in denen Verantwortung, Übergänge oder hoher Druck den Rahmen bestimmen.",
      testimonials: [
        {
          quote:
            "Marie verbindet Ruhe, Klarheit und echte Präsenz auf eine Weise, die sofort Vertrauen schafft. Ihre Perspektive ist differenziert, stark und gleichzeitig sehr menschlich.",
          author: "Nina Vélez-Troya Anquela",
          role: "Interviewpartnerin / Medienumfeld",
        },
        {
          quote:
            "Sie arbeitet strukturiert, präsent und mit einem sehr klaren Gefühl für Verantwortung. Genau diese Kombination macht sie in anspruchsvollen Situationen so wertvoll.",
          author: "Projekt- und Business-Kontext",
          role: "Externe Perspektive",
        },
      ],
      featuredInterview: "Interview-Feature",
      featuredInterviewTitle: "Interview mit Nina Vélez-Troya Anquela",
      featuredInterviewText: "Direkter Link zum veröffentlichten Interview, auf das Marie verweist.",
      featuredInterviewCta: "Feature öffnen",
      editorialFeature: "Editorial Feature",
      editorialFeatureTitle: "Marie Lindner — A Self-Made Leader",
      editorialFeatureText:
        "Externer Artikel über Maries Geschichte, Perspektive und Führungsweg.",
      editorialFeatureCta: "Artikel lesen",
    },
    contact: {
      eyebrow: "Kontakt & Anfragen",
      title: "Das",
      titleHighlight: "Gespräch starten.",
      intro:
        "Für Coaching-, Mentoring-, Speaking- und ausgewählte Consulting-Anfragen. Marie prüft strategische Anfragen persönlich.",
      placeholders: {
        name: "Ihr vollständiger Name",
        email: "ihr.name@unternehmen.com",
        company: "Unternehmen / Organisation (optional)",
        message: "Schildern Sie Marie kurz Ihre Situation, Ihr Ziel oder Ihr Anliegen.",
      },
      options: {
        coaching: "Coaching & Mentoring",
        consulting: "Consulting",
        speaking: "Speaking",
        workshop: "Workshop / Seminar",
        other: "Sonstige Anfrage",
      },
      submit: "Anfrage senden",
      helper:
        "Das Formular öffnet Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht. Alternativ können Sie Marie auch direkt per E-Mail oder WhatsApp kontaktieren.",
      mailSubjectPrefix: "Anfrage",
      mailBody: {
        fullName: "Vollständiger Name",
        email: "E-Mail",
        company: "Unternehmen / Organisation",
        primaryInterest: "Anliegen",
        message: "Nachricht",
        sentVia: "Gesendet via marielindner.de",
      },
    },
    thankYou: {
      title: "Nachricht",
      titleHighlight: "erhalten.",
      text:
        "Vielen Dank für Ihre Nachricht. Marie prüft Anfragen persönlich. Sie können innerhalb von 24 bis 48 Stunden mit einer Rückmeldung rechnen.",
      nextSteps: "Nächste Schritte",
      nextStepsList: [
        "Prüfung Ihrer Anfrage",
        "Einschätzung von Passung und Prioritäten",
        "Rückmeldung mit einem passenden nächsten Schritt",
      ],
      directContact: "Direkter Kontakt",
      backHome: "Zurück zur Startseite",
    },
  },
  en: {
    nav: {
      links: [
        { name: "Home", href: "#home" },
        { name: "Coaching & Mentoring", href: "#coaching" },
        { name: "Consulting", href: "#consulting" },
        { name: "Speaking", href: "#speaking" },
        { name: "About", href: "#about" },
        { name: "References", href: "#references" },
        { name: "Contact", href: "#contact" },
      ],
      menuLabel: "Menu",
      languageLabel: "Language",
      brandAriaLabel: "Marie Lindner Coaching",
    },
    footer: {
      tagline: "Coaching, mentoring, speaking and selected project-based international consulting.",
      navigation: "Navigation",
      company: "Company",
      connect: "Connect",
      rights: "© {year} Marie Lindner Coaching. All Rights Reserved.",
      values: "Clarity • Presence • Discipline",
    },
    backToTop: {
      ariaLabel: "Back to top",
    },
    hero: {
      badge: "Coaching • Mentoring • International Project Consulting",
      titleLine1: "Clarity for leaders.",
      titleHighlight: "Confidence in motion.",
      intro:
        "Marie Lindner supports entrepreneurs, executives and ambitious decision-makers in navigating complexity, strengthening leadership capability and creating real, sustainable change.",
      supporting:
        "Alongside her coaching and mentoring work, she contributes to selected international consulting assignments and is currently involved in an international IT project. Her aviation background remains a defining strength: calm judgment, structure under pressure and disciplined execution.",
      primaryCta: "Explore Coaching",
      secondaryCta: "Request a Conversation",
      cards: [
        {
          title: "Coaching",
          text: "1:1 coaching, mentoring, small-group development and executive sparring.",
        },
        {
          title: "Consulting",
          text: "Project-based international work focused on clarity, coordination and execution.",
        },
        {
          title: "Aviation",
          text: "Commercial pilot training informs her discipline, precision and decision-making style.",
        },
      ],
    },
    gallery: {
      title: "A leadership profile shaped by business, aviation and international perspective.",
      text:
        "Experience across industries, cultures and high-responsibility environments has formed a calm, structured and decisive leadership style — focused on clarity, accountability and real impact.",
    },
    differentiator: {
      eyebrow: "What sets Marie apart",
      title: "A rare combination of",
      titleHighlight: "leadership, presence and grounded judgment.",
      intro:
        "Marie combines entrepreneurial experience, leadership responsibility, coaching expertise and aviation discipline into a way of working that is clear, human and highly effective.",
      pillars: [
        {
          title: "Entrepreneurial Reality",
          text: "Experience shaped by build-up, responsibility and real operational leadership rather than theory alone.",
        },
        {
          title: "Calm Authority",
          text: "Clear communication, strong presence and a structured mindset — especially in demanding situations.",
        },
        {
          title: "Aviation Discipline",
          text: "Standards of precision, focus and decision quality from a world where responsibility cannot be outsourced.",
        },
      ],
      closing:
        "The result is support that creates trust, brings orientation and moves complex situations forward.",
    },
    coaching: {
      eyebrow: "Coaching & Mentoring",
      title: "Support for people carrying",
      titleHighlight: "real responsibility.",
      intro:
        "Marie works with entrepreneurs, executives and ambitious individuals in moments that require clarity, resilience, strong communication and grounded decisions.",
      text:
        "Her approach combines entrepreneurial experience, leadership reality and professional coaching methods. The work is structured, personal and outcome-oriented — designed to create clarity, confidence and sustainable development.",
      cta: "Request Coaching Details",
      offers: [
        {
          title: "1:1 Coaching",
          subtitle: "Individual support for leaders and decision-makers",
          text: "Highly focused coaching for leadership clarity, decision-making, role definition, communication and personal effectiveness — online or in person.",
        },
        {
          title: "Group Programs",
          subtitle: "Development in a small-group environment",
          text: "Curated small-group formats designed for reflection, growth and exchange around resilience, confidence, self-leadership and executive presence.",
        },
        {
          title: "Workshops & Seminars",
          subtitle: "Targeted sessions for teams, networks and organizations",
          text: "Compact, high-value workshop formats on leadership, communication, mental strength and change — ideal for companies, communities and events.",
        },
        {
          title: "Exclusive Retreats",
          subtitle: "Immersive development formats in Europe",
          text: "Selected retreat concepts for deeper transformation and strategic clarity in inspiring settings such as Mallorca or Lake Constance.",
        },
      ],
      coreFocusEyebrow: "Core Focus",
      coreFocusTitle: "Leadership, decisions and sustainable change.",
      coreFocusText:
        "Whether the challenge is executive pressure, a strategic transition, a communication issue, or the need for stronger self-leadership, the work centers on one thing: helping people move forward with clarity and integrity.",
      typicalClients: "Typical Clients",
      clientList: [
        "Entrepreneurs",
        "Executives",
        "Managers",
        "Founders",
        "Ambitious individuals in transition",
      ],
    },
    consulting: {
      eyebrow: "Consulting",
      titleLine1: "Selected international work —",
      titleHighlight: "project-based and precise.",
      intro:
        "In addition to coaching and mentoring, Marie Lindner takes on selected consulting assignments with an international orientation. This work is positioned clearly as project-based, confidential and execution focused.",
      currentEngagement: "Current Engagement",
      currentEngagementText:
        "Marie is currently involved in an international IT project. Details remain confidential, but the work reflects the kind of high-responsibility, cross-functional, international assignments she selectively supports.",
      cta: "Inquire About Consulting",
      areas: [
        {
          title: "Project-Based Consulting",
          description:
            "Marie contributes to selected consulting assignments where structure, coordination, communication and disciplined delivery are essential.",
        },
        {
          title: "International Scope",
          description:
            "Her consulting work is positioned internationally and undertaken on a project basis, with discretion and clarity around scope and responsibilities.",
        },
        {
          title: "Executive Collaboration",
          description:
            "She supports founders, leadership teams and stakeholders in aligning priorities, improving execution and moving projects forward with confidence.",
        },
      ],
    },
    speaking: {
      eyebrow: "Speaking",
      title: "Keynotes that combine",
      titleHighlight: "substance and presence.",
      intro:
        "Speaking is part of Marie’s work — especially where leadership, responsibility, communication and decision-making meet. Her sessions are thoughtful, clear and grounded in real-world experience.",
      cta: "Inquire for Speaking",
      keynotes: [
        {
          title: "Leadership Under Pressure",
          subtitle: "Decision quality, calm communication and responsible action",
          outcomes: [
            "How leaders regain clarity when complexity increases",
            "Decision-making under pressure without losing composure",
            "What aviation discipline teaches about leadership responsibility",
          ],
        },
        {
          title: "Executive Presence & Communication",
          subtitle: "Confidence, clarity and authentic authority",
          outcomes: [
            "How leaders strengthen presence without forcing it",
            "Structured communication in sensitive situations",
            "Building trust through clarity, calm and consistency",
          ],
        },
        {
          title: "Change, Resilience & Self-Leadership",
          subtitle: "Navigating transition with structure and focus",
          outcomes: [
            "Maintaining direction in uncertain phases",
            "Strengthening resilience and internal stability",
            "Turning reflection into concrete next steps",
          ],
        },
      ],
    },
    about: {
      eyebrow: "About Marie Lindner",
      titleLine1: "Entrepreneurial experience.",
      titleHighlight: "Human clarity.",
      paragraphs: [
        "Marie Lindner combines practical entrepreneurial experience with leadership responsibility, structured coaching work and an aviation background that shaped her standards early on.",
        "As part of building and helping lead a startup, she gained hands-on experience in management, organization, strategic thinking, execution and communication. That work created a deep understanding of how leaders actually operate under pressure — and where they often need clarity most.",
        "Today, she supports entrepreneurs, executives and ambitious individuals who want stronger decision quality, greater self-leadership, clearer communication and more grounded effectiveness.",
      ],
      pilotLabel: "Commercial Pilot License (CPL)",
      perspectiveLabel: "International Perspective",
      highlightsTitle: "Professional Highlights",
      highlights: [
        "Founder & Managing Director of Marie Lindner Coaching",
        "Entrepreneurial experience through startup build-up, management and leadership responsibility",
        "Commercial Pilot License (CPL) and aviation training in Australia",
        "Leadership, communication and decision-making under pressure",
        "Professional coaching training with leadership focus",
        "International background with English and German fluency",
        "Strong network across entrepreneurs, executives and business communities",
        "Structured, high-trust work with leaders in transition and responsibility-heavy roles",
      ],
      foundationTitle: "Coaching Foundation",
      foundationText:
        "Marie’s work is informed by leadership-focused coaching training, communication psychology, personal development and resilience-oriented methods — always combined with real-world business perspective.",
      whyTitle: "Why clients work with her",
      whyText:
        "Because the combination is unusual: professional credibility, calm authority, entrepreneurial understanding and a way of working that is both structured and deeply human.",
      aviationStoryEyebrow: "Aviation & Leadership",
      aviationStoryTitle: "Leadership begins where responsibility becomes",
      aviationStoryTitleHighlight: "absolute.",
      aviationStoryParagraphs: [
        "Marie Lindner is not only an entrepreneur and coach — she is also a trained pilot. In the cockpit, theory alone is not enough. Clarity, precision and calm decision-making under pressure are what matter.",
        "That environment shaped her understanding of leadership in a lasting way: taking responsibility, mastering procedures, communicating clearly under pressure and creating orientation even when not every variable can be controlled.",
      ],
      aviationStoryPoints: [
        "Decisions under uncertainty",
        "Responsibility in high-pressure moments",
        "Absolute focus and disciplined preparation",
        "Trust in systems, standards and personal judgment",
      ],
      aviationStoryClosing:
        "These experiences continue to shape her coaching approach today — clear, calm, structured and action-oriented.",
    },
    timeline: {
      eyebrow: "Professional Story",
      title: "A path built through",
      titleHighlight: "responsibility, growth and range.",
      intro:
        "Marie’s work today stands on several foundations: entrepreneurial practice, leadership responsibility, coaching development and an aviation background that shaped her standards for clarity, discipline and sound judgment.",
      items: [
        {
          period: "Entrepreneurial Foundation",
          title: "Startup build-up, operational responsibility and leadership practice",
          description:
            "Marie was deeply involved in building and helping lead a startup environment, gaining practical experience across management, organization, strategic planning, communication and execution.",
        },
        {
          period: "Coaching Development",
          title: "Professional coaching direction with leadership focus",
          description:
            "Alongside entrepreneurial work, she deepened her coaching expertise in leadership, communication, resilience and personal development — shaping the methodical side of her work today.",
        },
        {
          period: "Aviation Background",
          title: "Commercial pilot training in Australia",
          description:
            "Her Diploma in Applied Science – Aviation and Commercial Pilot License required concentration, responsibility, procedural discipline and decision certainty under pressure.",
        },
        {
          period: "Today",
          title: "Coaching, mentoring and selected international consulting work",
          description:
            "Today, Marie supports entrepreneurs, executives and ambitious individuals through coaching and mentoring, while also contributing to selected project-based international assignments.",
        },
      ],
    },
    socialProof: {
      eyebrow: "References & Outside Perspective",
      title: "Trust is built through",
      titleHighlight: "impact, not noise.",
      intro:
        "Marie’s work is experienced as clear, grounded, trustworthy and effective — especially in situations shaped by responsibility, transition and pressure.",
      testimonials: [
        {
          quote:
            "Marie combines calm, clarity and real presence in a way that immediately creates trust. Her perspective is nuanced, strong and at the same time deeply human.",
          author: "Nina Vélez-Troya Anquela",
          role: "Interview partner / media context",
        },
        {
          quote:
            "She works in a structured way, with presence and a very clear sense of responsibility. That exact combination makes her so valuable in demanding situations.",
          author: "Project & business context",
          role: "External perspective",
        },
      ],
      featuredInterview: "Featured Interview",
      featuredInterviewTitle: "Interview with Nina Vélez-Troya Anquela",
      featuredInterviewText: "Direct link to the published interview feature referenced by Marie.",
      featuredInterviewCta: "Open Feature",
      editorialFeature: "Editorial Feature",
      editorialFeatureTitle: "Marie Lindner — A Self-Made Leader",
      editorialFeatureText:
        "External article spotlighting Marie’s story, perspective and leadership journey.",
      editorialFeatureCta: "Read Article",
    },
    contact: {
      eyebrow: "Contact & Inquiries",
      title: "Start the",
      titleHighlight: "conversation.",
      intro:
        "For coaching, mentoring, speaking and selected consulting inquiries. Marie personally reviews strategic requests.",
      placeholders: {
        name: "Your full name",
        email: "your.name@company.com",
        company: "Company / Organization (optional)",
        message: "Tell Marie a little about your situation, goals or request.",
      },
      options: {
        coaching: "Coaching & Mentoring",
        consulting: "Consulting",
        speaking: "Speaking",
        workshop: "Workshop / Seminar",
        other: "Other Inquiry",
      },
      submit: "Send Inquiry",
      helper:
        "The form opens your email app with a prefilled message. If preferred, you can also contact Marie directly via email or WhatsApp.",
      mailSubjectPrefix: "Inquiry",
      mailBody: {
        fullName: "Full Name",
        email: "Email",
        company: "Company / Organization",
        primaryInterest: "Primary Interest",
        message: "Message",
        sentVia: "Sent via marielindner.de",
      },
    },
    thankYou: {
      title: "Message",
      titleHighlight: "received.",
      text:
        "Thank you for reaching out. Marie personally reviews inquiries. You can expect a response within 24–48 hours.",
      nextSteps: "Next Steps",
      nextStepsList: [
        "Review of your inquiry",
        "Assessment of fit and priorities",
        "Reply with suggested next step",
      ],
      directContact: "Direct Contact",
      backHome: "Back to Home",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "de";
    const saved = window.localStorage.getItem("ml-language");
    return saved === "en" ? "en" : "de";
  });

  useEffect(() => {
    window.localStorage.setItem("ml-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}