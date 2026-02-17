import type { MenuItem, ComboOffer, BusinessInfo, MinimumOrderEntry } from "./types.ts";

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // Pizza
  { id: "p1", category: "pizza", name: "Margherita", description: "Σάλτσα ντομάτας, μοτσαρέλα, φρέσκος βασιλικός", price: 7.00, order: 1 },
  { id: "p2", category: "pizza", name: "Pepperoni", description: "Σάλτσα ντομάτας, μοτσαρέλα, πεπερόνι", price: 8.50, order: 2 },
  { id: "p3", category: "pizza", name: "BBQ Chicken", description: "BBQ sauce, μοτσαρέλα, φιλέτο κοτόπουλο, κρεμμύδι", price: 9.00, order: 3 },
  { id: "p4", category: "pizza", name: "Quattro Formaggi", description: "Μοτσαρέλα, gouda, παρμεζάνα, cheddar", price: 9.50, order: 4 },
  { id: "p5", category: "pizza", name: "Prosciutto e Rucola", description: "Σάλτσα ντομάτας, μοτσαρέλα, προσούτο, ρόκα, παρμεζάνα", price: 10.00, order: 5 },

  // Pizza 32cm
  { id: "p32-1", category: "pizza_32", name: "Μαργαρίτα", description: "Σάλτσα ντομάτας, gouda", price: 8.00, order: 1 },
  { id: "p32-2", category: "pizza_32", name: "Gustosa", description: "Ζαμπόν, μπέικον", price: 8.50, order: 2 },
  { id: "p32-3", category: "pizza_32", name: "4 τυριά", description: "Gouda, φέτα, παρμεζάνα, κεφαλοτύρι", price: 8.50, order: 3 },
  { id: "p32-4", category: "pizza_32", name: "Pepperonati", description: "Pepperoni", price: 9.00, order: 4 },
  { id: "p32-5", category: "pizza_32", name: "Special", description: "Ζαμπόν, μπέικον, πράσινη πιπεριά, φρέσκα μανιτάρια", price: 9.00, order: 5 },
  { id: "p32-6", category: "pizza_32", name: "Χωριάτικη", description: "Πράσινη πιπεριά, ελιές, φρέσκια ντομάτα, φέτα", price: 9.00, order: 6 },
  { id: "p32-7", category: "pizza_32", name: "BBQ Chicken", description: "Σάλτσα ντομάτας, gouda, 100% φιλέτο κοτόπουλο, πράσινη πιπεριά και BBQ σως", price: 9.50, order: 7 },
  { id: "p32-8", category: "pizza_32", name: "A La Cream", description: "Λευκή σάλτσα, gouda, ζαμπόν, μπέικον, φρέσκια μανιτάρια", price: 9.50, order: 8 },
  { id: "p32-9", category: "pizza_32", name: "Meat Lover's", description: "Σάλτσα ντομάτας, Gouda, ζαμπόν, λουκάνικο χωριάτικο, pepperoni", price: 9.50, order: 9 },
  { id: "p32-10", category: "pizza_32", name: "Vegan/Νηστίσιμη", description: "Σάλτσα ντομάτας, νηστίσιμο τυρί, πράσινη πιπεριά, ελιά, φρέσκια ντομάτα, φρέσκο μανιτάρι", price: 8.50, order: 10 },
  { id: "p32-11", category: "pizza_32", name: "Spicy Mexicana", description: "Σάλτσα ντομάτας, mix τυριών (Gouda, cheddar), μοσχαρίσιο κιμά, καλαμπόκι, πράσινη πιπεριά και chili sauce", price: 8.50, order: 11 },

  // Burger
  { id: "b1", category: "burger", name: "Classic Green Burger (120gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, φρέσκια ντομάτα, μαρούλι, πίκλα και κέτσαπ σε αφράτο ψωμάκι", price: 3.70, order: 1 },
  { id: "b2", category: "burger", name: "Classic Green Burger (200gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, φρέσκια ντομάτα, μαρούλι, πίκλα και κέτσαπ σε αφράτο ψωμάκι", price: 5.00, order: 2 },
  { id: "b3", category: "burger", name: "Classic Green Burger (2x120gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, φρέσκια ντομάτα, μαρούλι, πίκλα και κέτσαπ σε αφράτο ψωμάκι", price: 5.50, order: 3 },
  { id: "b4", category: "burger", name: "BBQ Burger (120gr)", description: "Ζουμερό μπιφτέκι, μπέικον, λιωμένο cheddar, ντομάτα μαρούλι, σως BBQ σε αφράτο ψωμάκι", price: 4.20, order: 4 },
  { id: "b5", category: "burger", name: "BBQ Burger (200gr)", description: "Ζουμερό μπιφτέκι, μπέικον, λιωμένο cheddar, ντομάτα μαρούλι, σως BBQ σε αφράτο ψωμάκι", price: 5.50, order: 5 },
  { id: "b6", category: "burger", name: "BBQ Burger (2x120gr)", description: "Ζουμερό μπιφτέκι, μπέικον, λιωμένο cheddar, ντομάτα μαρούλι, σως BBQ σε αφράτο ψωμάκι", price: 6.00, order: 6 },
  { id: "b7", category: "burger", name: "Chili & Bacon (120gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, μπέικον, καραμελωμένο κρεμμύδι και chili sauce σε αφράτο ψωμάκι", price: 4.20, order: 7 },
  { id: "b8", category: "burger", name: "Chili & Bacon (200gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, μπέικον, καραμελωμένο κρεμμύδι και chili sauce σε αφράτο ψωμάκι", price: 5.50, order: 8 },
  { id: "b9", category: "burger", name: "Chili & Bacon (2x120gr)", description: "Ζουμερό μπιφτέκι, λιωμένο cheddar, μπέικον, καραμελωμένο κρεμμύδι και chili sauce σε αφράτο ψωμάκι", price: 6.00, order: 9 },
  { id: "b10", category: "burger", name: "Philadelphia cheese burger (120gr)", description: "Ζουμερό μπιφτέκι, philadelphia, μαρούλι, ντομάτα, λιωμένο cheddar, κέτσαπ και μουστάρδα σε αφράτο ψωμάκι", price: 4.20, order: 10 },
  { id: "b11", category: "burger", name: "Philadelphia cheese burger (200gr)", description: "Ζουμερό μπιφτέκι, philadelphia, μαρούλι, ντομάτα, λιωμένο cheddar, κέτσαπ και μουστάρδα σε αφράτο ψωμάκι", price: 5.50, order: 11 },
  { id: "b12", category: "burger", name: "Philadelphia cheese burger (2x120gr)", description: "Ζουμερό μπιφτέκι, philadelphia, μαρούλι, ντομάτα, λιωμένο cheddar, κέτσαπ και μουστάρδα σε αφράτο ψωμάκι", price: 6.00, order: 12 },
  { id: "b13", category: "burger", name: "Chicken Burger", description: "Crispy κοτόπουλο, μαρούλι, ντομάτα, μαγιονέζα, συνοδευόμενο από τηγανιτές πατάτες", price: 5.50, order: 13 },
  { id: "b14", category: "burger", name: "Vegan/νηστίσιμο", description: "Μπιφτέκι λαχανικών, μαρούλι, ντομάτα, vegan μαγιονέζα κέτσαπ σε αφράτο ψωμάκι", price: 5.50, order: 14 },
  { id: "b15", category: "burger", name: "Πατάτες (προσθήκη με burger)", description: "Τα burger δεν περιέχουν πατάτες", price: 1.50, order: 15 },

  // Club Sandwich
  { id: "c1", category: "club_sandwich", name: "Club Sandwich αλλαντικών", description: "Φρυγανισμένο ψωμί του τοστ, ζαμπόν, gouda, μπέικον, μαρούλι, ντομάτα, μαγιονέζα, συνοδευόμενο από τηγανιτές πατάτες", price: 7.00, order: 1 },
  { id: "c2", category: "club_sandwich", name: "Club sandwich κοτόπουλο", description: "Φρυγανισμένο ψωμί του τοστ, τραγανό παναρισμένο κοτόπουλο, gouda, μπέικον, μαρούλι, ντομάτα, μαγιονέζα, συνοδευόμενο από τηγανιτές πατάτες", price: 7.00, order: 2 },

  // Pasta
  { id: "pa1", category: "pasta", name: "Napoli", description: "Σπαγγέτι, φρέσκια σάλτσα ντομάτας", price: 5.00, order: 1 },
  { id: "pa2", category: "pasta", name: "Al forno", description: "Σπαγγέτι, φρέσκια σάλτσα ντομάτας, ζαμπόν, φρέσκια μανιτάρια, πράσινη πιπεριά, λιωμένη gouda στο φούρνο", price: 6.50, order: 2 },
  { id: "pa3", category: "pasta", name: "PastaVodka", description: "Σπαγγέτι, vodka sauce, μπέικον, λιωμένη gouda στο φούρνο", price: 6.50, order: 3 },
  { id: "pa4", category: "pasta", name: "Milano", description: "Σπαγγέτι, λευκή σάλτσα, 100% φιλέτο κοτόπουλο, μπέικον, λιωμένη gouda στο φούρνο", price: 7.00, order: 4 },

  // Salads
  { id: "s1", category: "salads", name: "Chef", description: "Βάση πράσινης σαλάτας, ζαμπόν, gouda, ντομάτα, αγγούρι, αυγό και σως κοκτέιλ", price: 7.00, order: 1 },
  { id: "s2", category: "salads", name: "Ceasars", description: "Βάση πράσινης σαλάτας, φιλέτο κοτόπουλο, κρουτόν, παρμεζάνα, καλαμπόκι, μπέικον και Caesars sauce", price: 7.00, order: 2 },

  // Appetizers
  { id: "a1", category: "appetizers", name: "Πατάτες τηγανιτές", price: 3.50, order: 1 },
  { id: "a2", category: "appetizers", name: "Πατάτες με cheddar & bacon", description: "Με λιωμένο cheddar και ξεροψημένο bacon", price: 4.90, order: 2 },
  { id: "a3", category: "appetizers", name: "Κοτομπουκιές", description: "Συνοδευόμενες με τηγανιτές πατάτες", price: 7.00, order: 3 },
  { id: "a4", category: "appetizers", name: "Κασεροκροκέτες (10 τμχ)", description: "Με BBQ sauce", price: 5.00, order: 4 },
  { id: "a5", category: "appetizers", name: "Onion Rings (10 τμχ)", description: "Με BBQ sauce", price: 4.00, order: 5 },

  // Savory Crepes (Κρέπα αλμυρή)
  { id: "sc1", category: "savory_crepes", name: "Φύλλο κρέπας", price: 2.30, order: 1 },
  { id: "sc2", category: "savory_crepes", name: "Gouda", price: 1.00, order: 2 },
  { id: "sc3", category: "savory_crepes", name: "Φέτα", price: 1.10, order: 3 },
  { id: "sc4", category: "savory_crepes", name: "Μανούρι", price: 1.10, order: 4 },
  { id: "sc5", category: "savory_crepes", name: "Ροκφόρ", price: 1.10, order: 5 },
  { id: "sc6", category: "savory_crepes", name: "Cheddar", price: 1.30, order: 6 },
  { id: "sc7", category: "savory_crepes", name: "Ζαμπόν", price: 1.00, order: 7 },
  { id: "sc8", category: "savory_crepes", name: "Καπνιστή Γαλοπούλα", price: 1.10, order: 8 },
  { id: "sc9", category: "savory_crepes", name: "Φιλέτο Κοτόπουλο", price: 1.50, order: 9 },
  { id: "sc10", category: "savory_crepes", name: "Λουκάνικο ψητό", price: 1.50, order: 10 },
  { id: "sc11", category: "savory_crepes", name: "Μπέικον", price: 1.10, order: 11 },
  { id: "sc12", category: "savory_crepes", name: "Κοτομπουκιές", price: 1.50, order: 12 },
  { id: "sc13", category: "savory_crepes", name: "Pepperoni", price: 1.10, order: 13 },
  { id: "sc14", category: "savory_crepes", name: "Μανιτάρια", price: 0.70, order: 14 },
  { id: "sc15", category: "savory_crepes", name: "Μαρούλι", price: 0.40, order: 15 },
  { id: "sc16", category: "savory_crepes", name: "Πιπεριά Πράσινη", price: 0.50, order: 16 },
  { id: "sc17", category: "savory_crepes", name: "Καλαμπόκι", price: 0.50, order: 17 },
  { id: "sc18", category: "savory_crepes", name: "Ελιές", price: 0.50, order: 18 },
  { id: "sc19", category: "savory_crepes", name: "Ντομάτα", price: 0.50, order: 19 },
  { id: "sc20", category: "savory_crepes", name: "Αβγό βραστό", price: 0.70, order: 20 },
  { id: "sc21", category: "savory_crepes", name: "Τόνος", price: 1.90, order: 21 },
  { id: "sc22", category: "savory_crepes", name: "Πατάτες τηγανιτές", price: 0.60, order: 22 },
  { id: "sc23", category: "savory_crepes", name: "Πατατάκια Tsakiris", price: 0.50, order: 23 },
  { id: "sc24", category: "savory_crepes", name: "Philadelphia", price: 1.00, order: 24 },
  { id: "sc25", category: "savory_crepes", name: "Αγγουρομαγιονέζα", price: 0.60, order: 25 },
  { id: "sc26", category: "savory_crepes", name: "Μαγιονέζα", price: 0.60, order: 26 },
  { id: "sc27", category: "savory_crepes", name: "Ουγγαρέζα", price: 0.60, order: 27 },
  { id: "sc28", category: "savory_crepes", name: "Χτυπητή", price: 0.60, order: 28 },
  { id: "sc29", category: "savory_crepes", name: "Μουσταρδομαγιονέζα", price: 0.60, order: 29 },
  { id: "sc30", category: "savory_crepes", name: "Κρέμα γάλακτος", price: 0.60, order: 30 },

  // Sweet Crepes (Κρέπα γλυκιά)
  { id: "sw1", category: "sweet_crepes", name: "Φύλλο κρέπας", price: 2.30, order: 1 },
  { id: "sw2", category: "sweet_crepes", name: "Απλή πραλίνα", price: 1.30, order: 2 },
  { id: "sw3", category: "sweet_crepes", name: "Merenda", price: 1.60, order: 3 },
  { id: "sw4", category: "sweet_crepes", name: "Bueno", price: 1.70, order: 4 },
  { id: "sw5", category: "sweet_crepes", name: "Μπισκότο πτι-μπερ", price: 0.80, order: 5 },
  { id: "sw6", category: "sweet_crepes", name: "Μπισκότο OREO", price: 0.80, order: 6 },
  { id: "sw7", category: "sweet_crepes", name: "Τρούφα σοκολάτα", price: 0.70, order: 7 },
  { id: "sw8", category: "sweet_crepes", name: "Τρούφα πολύχρωμη", price: 0.70, order: 8 },
  { id: "sw9", category: "sweet_crepes", name: "Kinder Bueno", price: 1.30, order: 9 },
  { id: "sw10", category: "sweet_crepes", name: "Caprice", price: 1.00, order: 10 },
  { id: "sw11", category: "sweet_crepes", name: "M&M's", price: 1.30, order: 11 },
  { id: "sw12", category: "sweet_crepes", name: "Σιρόπι σοκολάτας", price: 0.40, order: 12 },
  { id: "sw13", category: "sweet_crepes", name: "Σιρόπι φράουλας", price: 0.40, order: 13 },
  { id: "sw14", category: "sweet_crepes", name: "Μπανάνα", price: 0.80, order: 14 },

  // Drinks
  { id: "d1", category: "drinks", name: "Αναψυκτικά 330ml", price: 2.00, order: 1 },
  { id: "d2", category: "drinks", name: "Αναψυκτικά 500ml", price: 2.50, order: 2 },
  { id: "d3", category: "drinks", name: "Αναψυκτικά 1.5L", price: 3.00, order: 3 },
  { id: "d4", category: "drinks", name: "Μπύρα κουτάκι 330ml", price: 2.50, order: 4 },
];

export const DEFAULT_OFFERS: ComboOffer[] = [
  {
    id: "o1",
    title: "3 πίτσες δώρο 1 Pepsi 1.5L",
    items: [],
    bundlePrice: 0,
    active: true,
  },
  {
    id: "o2",
    title: "Κάθε Τρίτη και Τετάρτη η 2η πίτσα στην μισή τιμή",
    items: [],
    bundlePrice: 0,
    active: true,
  },
];

export const DEFAULT_BUSINESS_INFO: BusinessInfo = {
  phone: "23920 91455",
  address: "Κ. Σχολάρι, Οχι 5",
  hours: "Τρίτη - Κυριακή 17:00 - 23:00",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8563626315936!2d23.02620497583847!3d40.43417937143677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a86b689b3117eb%3A0xf33e77d9ba74211f!2sRE%CE%92EL%CE%94E%20Rebelde%20espresso%20and%20cocktails!5e0!3m2!1sen!2sgr!4v1771347413554!5m2!1sen!2sgr",
};

export const DEFAULT_MINIMUM_ORDERS: MinimumOrderEntry[] = [
  { id: "mo1", area: "Κάτω σχολάρι", amount: 0, order: 1 },
  { id: "mo2", area: "Λάκκωμα", amount: 15, order: 2 },
  { id: "mo3", area: "Μεσημέρι", amount: 10, order: 3 },
];
