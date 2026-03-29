import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "de" | "en";

type NavLink = {
  name: string;
  href: string;
};

type TranslationShape = {
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
    title: string;
    highlight: string;
    intro: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    cards: Array<{ title: string; text: string }>;
  };
  aviation: {
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    quote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    serviceTitle: string;
    focusTitle: string;
    focusItems: string[];
  };
  value: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    gainsTitle: string;
    gains: string[];
    objectiveTitle: string;
    objectiveText: string;
  };
  whyMarie: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    blocks: Array<{
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }>;
  };
  audience: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    companiesTitle: string;
    companies: string[];
    shortTitle: string;
    shortText: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    testimonials: Array<{ quote: string; author: string; role: string }>;
    featuredInterview: string;
    featuredInterviewTitle: string;
    featuredInterviewText: string;
    featuredInterviewCta: string;
    editorialFeature: string;
    editorialFeatureTitle: string;
    editorialFeatureText: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    options: {
      consulting: string;
      leadership: string;
      workshop: string;
      speaking: string;
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
    highlight: string;
    text: string;
    nextSteps: string;
    nextStepsList: string[];
    directContact: string;
    backHome: string;
  };
};

const translations: Record<Language, TranslationShape> = {
  de: {
    nav: {
      links: [
        { name: "Start", href: "#home" },
        { name: "Leistung", href: "#services" },
        { name: "Mehrwert", href: "#value" },
        { name: "Warum ich", href: "#why-marie" },
        { name: "Referenzen", href: "#references" },
        { name: "Kontakt", href: "#contact" },
      ],
      menuLabel: "Menü",
      languageLabel: "Sprache",
      brandAriaLabel: "Marie Lindner Consulting",
    },
    footer: {
      tagline: "Interkulturelle Persönlichkeits- und Unternehmensberatung mit klarem Fokus auf internationale Zusammenarbeit, Führungsstärke und kulturelle Kompetenz.",
      navigation: "Navigation",
      company: "Unternehmen",
      connect: "Kontakt",
      rights: "© {year} Marie Lindner Consulting. Alle Rechte vorbehalten.",
      values: "Klarheit • Vertrauen • kulturelle Kompetenz",
    },
    backToTop: {
      ariaLabel: "Nach oben scrollen",
    },
    hero: {
      badge: "Interkulturelle Persönlichkeits- und Unternehmensberatung",
      title: "Klarheit in internationalen",
      highlight: "Geschäftsbeziehungen",
      intro:
        "Internationale Zusammenarbeit scheitert selten an Strategie, sondern häufig an kulturellen Missverständnissen zwischen ihren Akteuren.",
      supporting:
        "Unterschiedliche Mentalitäten, Kommunikationsstile und Erwartungen führen im Geschäftsalltag oft zu Reibung, ineffizienten Prozessen oder sogar zum Verlust von Kunden und Partnerschaften. Hier setze ich an.",
      primaryCta: "Beratung anfragen",
      secondaryCta: "Mehr erfahren",
      cards: [
        {
          title: "Internationale Kommunikation",
          text: "Klare Kommunikation und wirksame Verhandlungsführung in anspruchsvollen internationalen Konstellationen.",
        },
        {
          title: "Kulturelles Feingefühl",
          text: "Verständnis für Mentalitäten, Erwartungen und geschäftliche Umgangsformen über Grenzen hinweg.",
        },
        {
          title: "Praxisnähe",
          text: "Strategien, die sich im Alltag tragen und Führungsteams sofort handlungsfähiger machen.",
        },
      ],
    },
    aviation: {
      eyebrow: "Aviation & Leadership",
      title: "Verantwortung beginnt dort, wo sie nicht delegiert werden kann –",
      highlight: "und genau dort entsteht Klarheit.",
      text:
        "Die Aviation-Erfahrung prägt den Blick auf Führung, Entscheidungen und internationale Zusammenarbeit bis heute: ruhig bleiben, Lagebilder einordnen, klar kommunizieren und unter Druck zuverlässig handeln.",
      quote: "Leadership beginnt dort, wo Verantwortung absolut wird.",
    },
    services: {
      eyebrow: "Meine Leistung",
      title: "Interkulturelle Beratung mit",
      highlight: "konkretem geschäftlichem Nutzen.",
      intro:
        "Ich unterstütze Unternehmen und Führungskräfte dabei, interkulturelle Kompetenz gezielt aufzubauen und strategisch einzusetzen.",
      serviceTitle: "Schwerpunkte meiner Beratung",
      focusTitle: "Unternehmerische Perspektive mit internationalem Realitätsbezug",
      focusItems: [
        "Internationale Kommunikation und Verhandlungsführung",
        "Verständnis kultureller Unterschiede im geschäftlichen Umgang",
        "Aufbau nachhaltiger Kunden- und Geschäftsbeziehungen",
        "Führung internationaler Teams",
        "Vermeidung typischer interkultureller Konflikte",
        "Entwicklung praxisnaher Strategien für den Umgang mit internationalen Märkten",
      ],
    },
    value: {
      eyebrow: "Ihr Mehrwert",
      title: "Mehr Sicherheit, mehr Klarheit,",
      highlight: "mehr Wirkung im internationalen Umfeld.",
      intro:
        "Durch meine Beratung gewinnen Sie und Ihr Team Sicherheit, Geschwindigkeit und Souveränität in internationalen Geschäftssituationen.",
      gainsTitle: "Durch meine Beratung gewinnen Sie und Ihr Team",
      gains: [
        "Sicherheit im Umgang mit internationalen Geschäftspartnern",
        "Schnellere, klarere Entscheidungsprozesse",
        "Stärkere Kundenbindung über kulturelle Grenzen hinweg",
        "Weniger Missverständnisse – mehr Effizienz",
        "Professionelles Auftreten in globalen Märkten",
      ],
      objectiveTitle: "Das Ziel",
      objectiveText:
        "Ihre Mitarbeiter sind in der Lage, selbstständig, souverän und respektvoll in internationalen Kontexten zu agieren – und dabei Mehrwerte zu schaffen. Steigern Sie Ihre interkulturelle Kompetenz.",
    },
    whyMarie: {
      eyebrow: "Warum ich",
      title: "Internationale Erfahrung, unternehmerische Praxis und",
      highlight: "echtes kulturelles Verständnis.",
      intro:
        "Ich verbinde persönliche Auslandserfahrung mit unternehmerischer Praxis und einem Blick auf internationale Zusammenarbeit, der nicht aus Theorie, sondern aus gelebter Erfahrung entstanden ist.",
      blocks: [
        {
          title: "Persönliche internationale Prägung",
          paragraphs: [
            "Mit 17 Jahren wanderte ich von Dresden nach Australien aus und lebte dort über ein Jahrzehnt – zunächst in Melbourne, sodann in Sydney.",
            "Das Eintauchen in einen anderen Kulturkreis und das Kennenlernen einer anderen Denk- und Lebensweise haben mich in besonderer Weise geprägt. Diese Erfahrung erlaubt es mir, auf viele Fragestellungen mit einem anderen Blick zu schauen und aktiv zur Lösung von Problemen beizutragen.",
          ],
          bullets: [
            "Ausbildung zur Verkehrspilotin",
            "Studium der Luftfahrt mit Abschluss im Oktober 2004",
            "Frühes Lernen, sich in einer neuen, nämlich australischen Kultur zurechtzufinden und Deutschland aus der Ferne neu einzuordnen",
          ],
        },
        {
          title: "Unternehmerische Erfahrung",
          paragraphs: [
            "Neben meiner internationalen Prägung bringe ich umfassende Erfahrung im Aufbau und in der Entwicklung von Geschäftsbeziehungen mit.",
            "Aus eigener beruflicher Tätigkeit bin ich vertraut mit dem Zugang auf neue Geschäftspartner, Vertrauen aufzubauen und kulturelle Unterschiede zu erkennen und mit ihnen verantwortungsvoll umzugehen, denn beruflicher Erfolg setzt wechselseitiges Verständnis und Respekt voraus.",
          ],
          bullets: [
            "Aufbau und Führung von Unternehmensstrukturen",
            "Arbeit mit unterschiedlichsten Kundengruppen – von Unternehmern bis Fachkräften",
            "Entwicklung langfristiger Kundenbindungen und Kooperationen",
          ],
        },
        {
          title: "Meine Kernkompetenz",
          paragraphs: [
            "Ich verfüge über das notwendige Feingefühl, mich in unterschiedliche Denk- und Verhaltensmuster hineinzuversetzen, und über die Fähigkeit, mögliche kulturelle Unterschiede im Umgang zu berücksichtigen, damit Missverständnisse nicht in Misserfolge einmünden.",
            "Ich zeige Ihnen, wie unterschiedliche Mentalitäten funktionieren, wie Sie Kommunikation gezielt anpassen, wie Sie respektvoll und gleichzeitig klar führen und wie Sie auch in anderen Systemen erfolgreich bleiben.",
          ],
        },
        {
          title: "Mein Ansatz",
          paragraphs: [
            "Kein abstraktes könnte, müsste, sollte oder vielleicht und keine wenig funktionalen Lehrbuchansätze.",
            "Sondern lebensnahe Erörterung von Praxisfällen, Trainieren und Meistern von häufig anzutreffenden Problemfeldern – auf Ihr Unternehmen zugeschnitten.",
            "Mein Ziel ist nicht kurzfristig verlaufendes Wissen, sondern ein belastbares Gespür zu entwickeln und dieses mit Kompetenzaufbau zu verbinden. Dies erlaubt die strategisch gut positionierte Vorbereitung auf Ihren Alltag.",
          ],
        },
      ],
    },
    audience: {
      eyebrow: "Für wen ist das relevant?",
      title: "Für Unternehmen, die international",
      highlight: "denken, handeln oder wachsen wollen.",
      intro:
        "Diese Beratung ist besonders relevant für Unternehmen, die internationale Beziehungen professionell gestalten und kulturelle Unterschiede als strategischen Vorteil nutzen möchten.",
      companiesTitle: "Für Unternehmen, die",
      companies: [
        "international tätig sind oder expandieren",
        "mit internationalen Kunden oder Partnern arbeiten",
        "Teams mit unterschiedlichen kulturellen Hintergründen führen",
        "ihre Marktposition im Ausland stärken möchten",
      ],
      shortTitle: "Kurz gesagt",
      shortText:
        "Ich helfe Ihnen dabei, den Mehrwert einer multinationalen Arbeits- und Geschäftswelt zu Ihrem Vorteil zu wenden. Kulturelle Unterschiede stellen bei aufmerksamem und respektvollem Umgang kein Risiko, sondern vielmehr eine Chance dar – dies gilt strategisch zu nutzen. Eine wettbewerblich ausgerichtete Wirtschaftsordnung verlangt, besser zu sein als die anderen. Sprechen Sie mich einfach an.",
    },
    gallery: {
      eyebrow: "Signature Moments",
      title: "Eine Geschichte aus Haltung, Klarheit und",
      highlight: "internationaler Perspektive.",
      intro:
        "Die Bilder dieser Seite stehen nicht für Inszenierung, sondern für Herkunft, Erfahrung und den Anspruch, Verantwortung mit Ruhe, Substanz und Präsenz zu verbinden.",
      items: [
        {
          title: "Clarity in conversation",
          text: "Vertrauen entsteht dort, wo Menschen sich verstanden fühlen und Führung gleichzeitig klar bleibt.",
        },
        {
          title: "Discipline under pressure",
          text: "Die Aviation-Perspektive hat Standards für Präzision, Vorbereitung und Entscheidungssicherheit gesetzt.",
        },
        {
          title: "Entrepreneurial presence",
          text: "Professionelles Auftreten und persönliche Glaubwürdigkeit sind gerade im internationalen Geschäft eng miteinander verbunden.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Referenzen & Außenperspektiven",
      title: "Vertrauen entsteht durch",
      highlight: "Wirkung, nicht Lautstärke.",
      intro:
        "Die Arbeit von Marie wird als klar, geerdet, vertrauensvoll und wirksam erlebt – besonders dort, wo internationale Zusammenarbeit, Verantwortung und kulturelle Sensibilität zusammenkommen.",
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
      featuredInterviewText: "Direkter Link zum bestehenden veröffentlichten Interview, auf das Marie verweist.",
      featuredInterviewCta: "Feature öffnen",
      editorialFeature: "Editorial Feature",
      editorialFeatureTitle: "Marie Lindner — A Self-Made Leader",
      editorialFeatureText: "Editorialer Hinweis auf Maries Geschichte, Perspektive und internationalen Führungsweg.",
    },
    contact: {
      eyebrow: "Kontakt & Anfragen",
      title: "Das Gespräch",
      highlight: "beginnen.",
      intro:
        "Für Beratungsanfragen rund um interkulturelle Zusammenarbeit, internationale Kommunikation, Workshops und ausgewählte Leadership-Themen.",
      placeholders: {
        name: "Ihr vollständiger Name",
        email: "ihr.name@unternehmen.com",
        company: "Unternehmen / Organisation (optional)",
        message: "Schildern Sie Marie kurz Ihre Situation, Ihr Ziel oder Ihr Anliegen.",
      },
      options: {
        consulting: "Interkulturelle Beratung",
        leadership: "Leadership & Kommunikation",
        workshop: "Workshop / Seminar",
        speaking: "Speaking / Vortrag",
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
      highlight: "erhalten.",
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
        { name: "Services", href: "#services" },
        { name: "Value", href: "#value" },
        { name: "Why Marie", href: "#why-marie" },
        { name: "References", href: "#references" },
        { name: "Contact", href: "#contact" },
      ],
      menuLabel: "Menu",
      languageLabel: "Language",
      brandAriaLabel: "Marie Lindner Consulting",
    },
    footer: {
      tagline: "Intercultural personal and business consulting with a clear focus on international collaboration, leadership strength and cultural competence.",
      navigation: "Navigation",
      company: "Company",
      connect: "Connect",
      rights: "© {year} Marie Lindner Consulting. All Rights Reserved.",
      values: "Clarity • trust • cultural competence",
    },
    backToTop: {
      ariaLabel: "Back to top",
    },
    hero: {
      badge: "Intercultural Personal and Business Consulting",
      title: "Clarity in international",
      highlight: "business relationships",
      intro:
        "International collaboration rarely fails because of strategy. More often, it breaks down because of cultural misunderstandings between the people involved.",
      supporting:
        "Different mentalities, communication styles and expectations often create friction in business, lead to inefficient processes or even cost companies customers and partnerships. This is where I come in.",
      primaryCta: "Request consulting",
      secondaryCta: "Learn more",
      cards: [
        {
          title: "International communication",
          text: "Clear communication and effective negotiation in demanding international settings.",
        },
        {
          title: "Cultural sensitivity",
          text: "Understanding mentalities, expectations and business etiquette across borders.",
        },
        {
          title: "Practical relevance",
          text: "Strategies that work in day-to-day business and make leadership teams more effective immediately.",
        },
      ],
    },
    aviation: {
      eyebrow: "Aviation & Leadership",
      title: "Responsibility begins where it can no longer be delegated –",
      highlight: "and that is where clarity is built.",
      text:
        "The aviation experience still shapes Marie’s perspective on leadership, decisions and international collaboration: stay calm, read the situation, communicate clearly and act reliably under pressure.",
      quote: "Leadership begins where responsibility becomes absolute.",
    },
    services: {
      eyebrow: "What I offer",
      title: "Intercultural consulting with",
      highlight: "clear business relevance.",
      intro:
        "I support companies and leaders in building intercultural competence deliberately and using it strategically.",
      serviceTitle: "Core areas of my consulting",
      focusTitle: "An entrepreneurial perspective grounded in international reality",
      focusItems: [
        "International communication and negotiation",
        "Understanding cultural differences in business interaction",
        "Building sustainable customer and business relationships",
        "Leading international teams",
        "Avoiding typical intercultural conflicts",
        "Developing practical strategies for dealing with international markets",
      ],
    },
    value: {
      eyebrow: "Your value",
      title: "More confidence, more clarity,",
      highlight: "more impact in international environments.",
      intro:
        "Through my consulting, you and your team gain confidence, speed and composure in international business situations.",
      gainsTitle: "Through my consulting, you and your team gain",
      gains: [
        "Confidence in dealing with international business partners",
        "Faster, clearer decision-making processes",
        "Stronger customer loyalty across cultural boundaries",
        "Fewer misunderstandings – more efficiency",
        "A professional presence in global markets",
      ],
      objectiveTitle: "The goal",
      objectiveText:
        "Your employees are able to act independently, confidently and respectfully in international contexts while creating real value. Strengthen your intercultural competence.",
    },
    whyMarie: {
      eyebrow: "Why me",
      title: "International experience, entrepreneurial practice and",
      highlight: "real cultural understanding.",
      intro:
        "I combine personal international experience with entrepreneurial practice and a perspective on collaboration that has grown from lived reality rather than theory.",
      blocks: [
        {
          title: "Personal international imprint",
          paragraphs: [
            "At the age of 17, I emigrated from Dresden to Australia and lived there for more than a decade – first in Melbourne and later in Sydney.",
            "Immersing myself in another culture and learning a different way of thinking and living shaped me deeply. It allows me to look at many questions from a different angle and actively contribute to solving problems.",
          ],
          bullets: [
            "Training as a commercial pilot",
            "Aviation studies completed in October 2004",
            "Early experience of learning how to find my way in a new, specifically Australian, culture while reassessing Germany from a distance",
          ],
        },
        {
          title: "Entrepreneurial experience",
          paragraphs: [
            "Alongside my international background, I bring extensive experience in building and developing business relationships.",
            "Through my own professional work, I am familiar with approaching new business partners, building trust and recognizing cultural differences while dealing with them responsibly, because professional success requires mutual understanding and respect.",
          ],
          bullets: [
            "Building and leading business structures",
            "Working with a wide range of client groups – from entrepreneurs to skilled professionals",
            "Developing long-term customer relationships and partnerships",
          ],
        },
        {
          title: "My core competence",
          paragraphs: [
            "I have the sensitivity needed to place myself in different patterns of thinking and behavior, and the ability to account for cultural differences in interaction so that misunderstandings do not turn into failure.",
            "I show you how different mentalities work, how to adapt communication deliberately, how to lead respectfully while remaining clear, and how to remain successful even in other systems.",
          ],
        },
        {
          title: "My approach",
          paragraphs: [
            "No abstract could, should, must or maybe — and no textbook concepts with little functional value.",
            "Instead: practical discussion of real situations, training and mastering recurring problem areas, tailored to your company.",
            "My goal is not short-lived knowledge, but the development of real instinct combined with capability building. That creates strong, strategically sound preparation for everyday business.",
          ],
        },
      ],
    },
    audience: {
      eyebrow: "Who is this relevant for?",
      title: "For companies that want to think, act or grow",
      highlight: "internationally.",
      intro:
        "This consulting is especially relevant for companies that want to shape international relationships professionally and use cultural differences as a strategic advantage.",
      companiesTitle: "For companies that",
      companies: [
        "operate internationally or are expanding",
        "work with international clients or partners",
        "lead teams with different cultural backgrounds",
        "want to strengthen their market position abroad",
      ],
      shortTitle: "In short",
      shortText:
        "I help you turn the value of a multinational working and business world to your advantage. When approached attentively and respectfully, cultural differences are not a risk but an opportunity — and they should be used strategically. In a competitive economic order, being better than others matters. Feel free to reach out.",
    },
    gallery: {
      eyebrow: "Signature moments",
      title: "A story built from stance, clarity and",
      highlight: "international perspective.",
      intro:
        "The imagery on this site is not about styling. It represents background, experience and the intention to combine responsibility with calm, substance and presence.",
      items: [
        {
          title: "Clarity in conversation",
          text: "Trust grows where people feel understood and leadership still remains clear.",
        },
        {
          title: "Discipline under pressure",
          text: "The aviation perspective established lasting standards for precision, preparation and decision quality.",
        },
        {
          title: "Entrepreneurial presence",
          text: "Professional presence and personal credibility are closely linked in international business.",
        },
      ],
    },
    socialProof: {
      eyebrow: "References & outside perspective",
      title: "Trust is built through",
      highlight: "impact, not volume.",
      intro:
        "Marie’s work is experienced as clear, grounded, trustworthy and effective — especially where international collaboration, responsibility and cultural sensitivity meet.",
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
      featuredInterview: "Featured interview",
      featuredInterviewTitle: "Interview with Nina Vélez-Troya Anquela",
      featuredInterviewText: "Direct link to the existing published interview feature referenced by Marie.",
      featuredInterviewCta: "Open feature",
      editorialFeature: "Editorial feature",
      editorialFeatureTitle: "Marie Lindner — A Self-Made Leader",
      editorialFeatureText: "Editorial note highlighting Marie’s story, perspective and international leadership path.",
    },
    contact: {
      eyebrow: "Contact & inquiries",
      title: "Start the",
      highlight: "conversation.",
      intro:
        "For consulting inquiries around intercultural collaboration, international communication, workshops and selected leadership topics.",
      placeholders: {
        name: "Your full name",
        email: "your.name@company.com",
        company: "Company / Organization (optional)",
        message: "Tell Marie a little about your situation, goals or request.",
      },
      options: {
        consulting: "Intercultural consulting",
        leadership: "Leadership & communication",
        workshop: "Workshop / seminar",
        speaking: "Speaking / keynote",
        other: "Other inquiry",
      },
      submit: "Send inquiry",
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
      highlight: "received.",
      text: "Thank you for reaching out. Marie personally reviews inquiries. You can expect a response within 24 to 48 hours.",
      nextSteps: "Next steps",
      nextStepsList: [
        "Review of your inquiry",
        "Assessment of fit and priorities",
        "Reply with a suitable next step",
      ],
      directContact: "Direct contact",
      backHome: "Back to home",
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationShape;
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

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
