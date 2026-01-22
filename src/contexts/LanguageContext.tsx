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
  'nav.shop': { ge: 'მაღაზია', en: 'Shop', de: 'Shop' },
  'nav.contact': { ge: 'კონტაქტი', en: 'Contact', de: 'Kontakt' },
  
  // Hero
  'hero.title': { ge: 'გერმანული რბოლის რადიატორები', en: 'German Racing Radiators', de: 'Deutsche Rennsport-Kühler' },
  'hero.subtitle': { ge: 'მაღალი ხარისხის გაგრილების სისტემები თქვენი ავტომობილისთვის. გერმანული ინჟინერია, საქართველოში.', en: 'High-performance cooling systems for your vehicle. German engineering, in Georgia.', de: 'Hochleistungs-Kühlsysteme für Ihr Fahrzeug. Deutsche Technik, in Georgien.' },
  'hero.cta': { ge: 'მაღაზია', en: 'Shop Now', de: 'Jetzt kaufen' },
  'hero.call': { ge: 'დაგვირეკეთ', en: 'Call Us', de: 'Rufen Sie uns an' },
  
  // About
  'about.title': { ge: 'RACING ბრენდის შესახებ', en: 'About RACING Brand', de: 'Über die Marke RACING' },
  'about.description': { ge: 'RACING არის გერმანული პრემიუმ ბრენდი, რომელიც სპეციალიზირებულია მაღალი ხარისხის რადიატორების წარმოებაში. ჩვენ ვართ ოფიციალური დისტრიბუტორი საქართველოში და გთავაზობთ ორიგინალ გერმანულ პროდუქციას პირდაპირი იმპორტით.', en: 'RACING is a German premium brand specializing in high-quality radiator manufacturing. We are the official distributor in Georgia, offering original German products through direct import.', de: 'RACING ist eine deutsche Premium-Marke, die sich auf die Herstellung hochwertiger Kühler spezialisiert hat. Wir sind der offizielle Vertriebspartner in Georgien und bieten originale deutsche Produkte durch Direktimport an.' },
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
  
  // Shop
  'shop.title': { ge: 'მაღაზია', en: 'Shop', de: 'Shop' },
  'shop.subtitle': { ge: 'აირჩიეთ თქვენი ავტომობილისთვის იდეალური რადიატორი', en: 'Choose the perfect radiator for your vehicle', de: 'Wählen Sie den perfekten Kühler für Ihr Fahrzeug' },
  'shop.search': { ge: 'მოძებნეთ პროდუქტი...', en: 'Search products...', de: 'Produkte suchen...' },
  'shop.addToCart': { ge: 'კალათაში', en: 'Add to Cart', de: 'In den Warenkorb' },
  'shop.cart': { ge: 'კალათა', en: 'Cart', de: 'Warenkorb' },
  'shop.emptyCart': { ge: 'კალათა ცარიელია', en: 'Your cart is empty', de: 'Ihr Warenkorb ist leer' },
  'shop.total': { ge: 'ჯამი', en: 'Total', de: 'Gesamt' },
  'shop.checkout': { ge: 'შეკვეთის გაფორმება', en: 'Checkout', de: 'Zur Kasse' },
  'shop.noProducts': { ge: 'პროდუქტი ვერ მოიძებნა', en: 'No products found', de: 'Keine Produkte gefunden' },
  
  // Checkout
  'checkout.title': { ge: 'შეკვეთის გაფორმება', en: 'Checkout', de: 'Kasse' },
  'checkout.fullName': { ge: 'სრული სახელი', en: 'Full Name', de: 'Vollständiger Name' },
  'checkout.fullNamePlaceholder': { ge: 'გიორგი გიორგაძე', en: 'John Doe', de: 'Max Mustermann' },
  'checkout.phone': { ge: 'ტელეფონი', en: 'Phone', de: 'Telefon' },
  'checkout.address': { ge: 'მისამართი', en: 'Delivery Address', de: 'Lieferadresse' },
  'checkout.addressPlaceholder': { ge: 'ქალაქი, ქუჩა, შენობის ნომერი...', en: 'City, Street, Building number...', de: 'Stadt, Straße, Hausnummer...' },
  'checkout.notes': { ge: 'დამატებითი შენიშვნები', en: 'Additional Notes', de: 'Zusätzliche Hinweise' },
  'checkout.notesPlaceholder': { ge: 'სპეციალური ინსტრუქციები...', en: 'Special instructions...', de: 'Besondere Anweisungen...' },
  'checkout.orderSummary': { ge: 'შეკვეთის დეტალები', en: 'Order Summary', de: 'Bestellübersicht' },
  'checkout.quantity': { ge: 'რაოდენობა', en: 'Qty', de: 'Menge' },
  'checkout.placeOrder': { ge: 'შეკვეთის გაგზავნა', en: 'Place Order', de: 'Bestellung aufgeben' },
  'checkout.processing': { ge: 'მუშავდება...', en: 'Processing...', de: 'Verarbeitung...' },
  'checkout.success': { ge: 'შეკვეთა მიღებულია!', en: 'Order Received!', de: 'Bestellung eingegangen!' },
  'checkout.successMessage': { ge: 'მალე დაგიკავშირდებით.', en: 'We will contact you shortly.', de: 'Wir werden Sie in Kürze kontaktieren.' },
  'checkout.orderComplete': { ge: 'შეკვეთა წარმატებით გაფორმდა!', en: 'Order Complete!', de: 'Bestellung abgeschlossen!' },
  'checkout.orderCompleteMessage': { ge: 'თქვენი შეკვეთა მიღებულია. მალე დაგიკავშირდებით დეტალების შესათანხმებლად.', en: 'Your order has been received. We will contact you shortly to confirm details.', de: 'Ihre Bestellung ist eingegangen. Wir werden Sie in Kürze kontaktieren.' },
  'checkout.continueShopping': { ge: 'შოპინგის გაგრძელება', en: 'Continue Shopping', de: 'Weiter einkaufen' },
  'checkout.backToShop': { ge: 'მაღაზიაში დაბრუნება', en: 'Back to Shop', de: 'Zurück zum Shop' },
  'checkout.goToShop': { ge: 'მაღაზიაში გადასვლა', en: 'Go to Shop', de: 'Zum Shop' },
  
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
  
  // Home Products Carousel
  'homeProducts.pro.name': { ge: 'RACING Pro Series', en: 'RACING Pro Series', de: 'RACING Pro Series' },
  'homeProducts.pro.desc': { ge: 'მაღალი წარმადობის ალუმინის რადიატორი რთული პირობებისთვის', en: 'High-performance aluminum radiator for demanding applications', de: 'Hochleistungs-Aluminiumkühler für anspruchsvolle Anwendungen' },
  'homeProducts.sport.name': { ge: 'RACING Sport Series', en: 'RACING Sport Series', de: 'RACING Sport Series' },
  'homeProducts.sport.desc': { ge: 'სარბოლო გაგრილება ტრეკისა და ყოველდღიური გამოყენებისთვის', en: 'Competition-grade cooling for track and street use', de: 'Wettkampfkühlung für Rennstrecke und Straße' },
  'homeProducts.elite.name': { ge: 'RACING Elite Series', en: 'RACING Elite Series', de: 'RACING Elite Series' },
  'homeProducts.elite.desc': { ge: 'პრემიუმ ორმაგი გამავლობის დიზაინი მაქსიმალური გაგრილებისთვის', en: 'Premium dual-pass design for maximum heat dissipation', de: 'Premium-Doppeldurchgang-Design für maximale Wärmeableitung' },
  'homeProducts.cap1.name': { ge: 'RACING Pro Cap', en: 'RACING Pro Cap', de: 'RACING Pro Cap' },
  'homeProducts.cap1.desc': { ge: 'პრემიუმ მეტალის რადიატორის ხუფი მაღალი წნევის დალუქვით', en: 'Premium metal radiator cap with high-pressure seal', de: 'Premium-Metallkühlerdeckel mit Hochdruckdichtung' },
  'homeProducts.cap2.name': { ge: 'რადიატორის პლასტმასის ნაწილები', en: 'RADIATOR PLASTIC PARTS', de: 'KÜHLKUNSTSTOFFTEILE' },
  'homeProducts.cap2.desc': { ge: 'ზუსტი პლასტმასის კავშირის დეტალი გაგრილების სისტემისთვის', en: 'OEM radiator plastic housings / tank covers for multiple models', de: 'OEM-Kühlerkunststoffgehäuse / Tankabdeckungen für verschiedene Modelle' },
  'homeProducts.cap3.name': { ge: 'გაფართოების ავზის ხუფი', en: 'Expansion Tank Cap', de: 'Ausgleichsbehälterdeckel' },
  'homeProducts.cap3.desc': { ge: 'ხარისხიანი წნევის გამანთავისუფლებელი გაფართოების ავზის ხუფი', en: 'High-quality pressure release expansion tank cap', de: 'Hochwertige Druckentlastungs-Ausgleichsbehälterkappe' },
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
