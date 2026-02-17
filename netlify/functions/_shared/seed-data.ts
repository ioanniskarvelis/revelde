import type { MenuItem, ComboOffer, BusinessInfo, MinimumOrderEntry } from "./types.ts";

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // Pizza
  { id: "p1", category: "pizza", name: "Margherita", description: "Σάλτσα ντομάτας, μοτσαρέλα, φρέσκος βασιλικός", price: 7.00, order: 1 },
  { id: "p2", category: "pizza", name: "Pepperoni", description: "Σάλτσα ντομάτας, μοτσαρέλα, πεπερόνι", price: 8.50, order: 2 },
  { id: "p3", category: "pizza", name: "BBQ Chicken", description: "BBQ sauce, μοτσαρέλα, φιλέτο κοτόπουλο, κρεμμύδι", price: 9.00, order: 3 },
  { id: "p4", category: "pizza", name: "Quattro Formaggi", description: "Μοτσαρέλα, gouda, παρμεζάνα, cheddar", price: 9.50, order: 4 },
  { id: "p5", category: "pizza", name: "Prosciutto e Rucola", description: "Σάλτσα ντομάτας, μοτσαρέλα, προσούτο, ρόκα, παρμεζάνα", price: 10.00, order: 5 },

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
