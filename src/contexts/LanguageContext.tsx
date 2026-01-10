import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ge' | 'en' | 'de';

interface Translations {
  [key: string]: {
    ge: string;
    en: string;
    de: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { ge: 'მთავარი', en: 'Home', de: 'Startseite' },
  'nav.about': { ge: 'ჩვენს შესახებ', en: 'About', de: 'Über uns' },
  'nav.products': { ge: 'პროდუქცია', en: 'Products', de: 'Produkte' },
  'nav.contact': { ge: 'კონტაქტი', en: 'Contact', de: 'Kontakt' },
  
  // Hero
  'hero.title': { 
    ge: 'გერმანული რბოლის რადიატორები', 
    en: 'German Racing Radiators', 
    de: 'Deutsche Rennsport-Kühler' 
  },
  'hero.subtitle': { 
    ge: 'მაღალი ხარისხის გაგრილების სისტემები თქვენი ავტომობილისთვის. გერმანული ინჟინერია, საქართველოში.', 
    en: 'High-performance cooling systems for your vehicle. German engineering, in Georgia.', 
    de: 'Hochleistungs-Kühlsysteme für Ihr Fahrzeug. Deutsche Technik, in Georgien.' 
  },
  'hero.cta': { ge: 'უფასო კონსულტაცია', en: 'Free Consultation', de: 'Kostenlose Beratung' },
  'hero.call': { ge: 'დაგვირეკეთ', en: 'Call Us', de: 'Rufen Sie uns an' },
  
  // About
  'about.title': { ge: 'RACING ბრენდის შესახებ', en: 'About RACING Brand', de: 'Über die Marke RACING' },
  'about.description': { 
    ge: 'RACING არის გერმანული პრემიუმ ბრენდი, რომელიც სპეციალიზირებულია მაღალი ხარისხის რადიატორების წარმოებაში. ჩვენ ვართ ოფიციალური დისტრიბუტორი საქართველოში და გთავაზობთ ორიგინალ გერმანულ პროდუქციას პირდაპირი იმპორტით.', 
    en: 'RACING is a German premium brand specializing in high-quality radiator manufacturing. We are the official distributor in Georgia, offering original German products through direct import.', 
    de: 'RACING ist eine deutsche Premium-Marke, die sich auf die Herstellung hochwertiger Kühler spezialisiert hat. Wir sind der offizielle Vertriebspartner in Georgien und bieten originale deutsche Produkte durch Direktimport an.' 
  },
  'about.badge1': { ge: 'გერმანული ხარისხი', en: 'German Quality', de: 'Deutsche Qualität' },
  'about.badge2': { ge: 'ოფიციალური დისტრიბუტორი', en: 'Official Distributor', de: 'Offizieller Vertrieb' },
  'about.badge3': { ge: 'გარანტია', en: 'Warranty', de: 'Garantie' },
  
  // Features
  'features.title': { ge: 'რატომ RACING რადიატორები?', en: 'Why Choose RACING Radiators?', de: 'Warum RACING-Kühler?' },
  'features.aluminum.title': { ge: 'მაღალი სიმკვრივის ალუმინი', en: 'High-Density Aluminum', de: 'Hochdichtes Aluminium' },
  'features.aluminum.desc': { ge: 'პრემიუმ ხარისხის ალუმინის შენადნობი მაქსიმალური გამძლეობისთვის', en: 'Premium quality aluminum alloy for maximum durability', de: 'Premium-Aluminium-Legierung für maximale Haltbarkeit' },
  'features.cooling.title': { ge: 'მაქსიმალური გაგრილება', en: 'Maximum Cooling', de: 'Maximale Kühlung' },
  'features.cooling.desc': { ge: 'ოპტიმიზებული დიზაინი უმაღლესი გაგრილების ეფექტურობისთვის', en: 'Optimized design for superior cooling efficiency', de: 'Optimiertes Design für überlegene Kühleffizienz' },
  'features.versatile.title': { ge: 'უნივერსალური გამოყენება', en: 'Versatile Use', de: 'Vielseitige Nutzung' },
  'features.versatile.desc': { ge: 'იდეალურია როგორც რბოლისთვის, ასევე ყოველდღიური მართვისთვის', en: 'Perfect for both racing and daily driving', de: 'Perfekt für Rennsport und Alltagsfahrten' },
  'features.tested.title': { ge: 'ექსტრემალური ტესტირება', en: 'Extreme Testing', de: 'Extremtests' },
  'features.tested.desc': { ge: 'გამოცდილი ყველაზე მძიმე პირობებში', en: 'Tested under the most demanding conditions', de: 'Unter härtesten Bedingungen getestet' },
  'features.warranty.title': { ge: 'გარანტია', en: 'Warranty', de: 'Garantie' },
  'features.warranty.desc': { ge: 'სრული გარანტია ყველა პროდუქტზე', en: 'Full warranty on all products', de: 'Volle Garantie auf alle Produkte' },
  'features.support.title': { ge: 'ტექნიკური მხარდაჭერა', en: 'Technical Support', de: 'Technischer Support' },
  'features.support.desc': { ge: 'პროფესიონალური კონსულტაცია და დახმარება', en: 'Professional consultation and assistance', de: 'Professionelle Beratung und Unterstützung' },
  
  // Products
  'products.title': { ge: 'ჩვენი პროდუქცია', en: 'Our Products', de: 'Unsere Produkte' },
  'products.compatible': { ge: 'თავსებადი', en: 'Compatible with', de: 'Kompatibel mit' },
  'products.performance': { ge: 'მაღალი წარმადობა', en: 'High Performance', de: 'Hochleistung' },
  
  // Contact Form
  'contact.title': { ge: 'მოითხოვეთ კონსულტაცია', en: 'Request Consultation', de: 'Beratung anfordern' },
  'contact.name': { ge: 'სახელი', en: 'Name', de: 'Name' },
  'contact.phone': { ge: 'ტელეფონი ან ელ-ფოსტა', en: 'Phone or Email', de: 'Telefon oder E-Mail' },
  'contact.car': { ge: 'ავტომობილის მოდელი', en: 'Car Model', de: 'Automodell' },
  'contact.engine': { ge: 'ძრავის ტიპი', en: 'Engine Type', de: 'Motortyp' },
  'contact.message': { ge: 'შეტყობინება', en: 'Message', de: 'Nachricht' },
  'contact.submit': { ge: 'გაგზავნა', en: 'Send Request', de: 'Anfrage senden' },
  'contact.success': { ge: 'შეტყობინება გაგზავნილია!', en: 'Message sent successfully!', de: 'Nachricht erfolgreich gesendet!' },
  
  // Footer
  'footer.address': { ge: 'თბილისი, საქართველო', en: 'Tbilisi, Georgia', de: 'Tiflis, Georgien' },
  'footer.hours': { ge: 'ორშ-შაბ: 10:00 - 19:00', en: 'Mon-Sat: 10:00 AM - 7:00 PM', de: 'Mo-Sa: 10:00 - 19:00' },
  'footer.rights': { ge: 'ყველა უფლება დაცულია', en: 'All rights reserved', de: 'Alle Rechte vorbehalten' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ge');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
