export interface MenuItem {
  id: string;
  category:
    | "pizza_32"
    | "burger"
    | "club_sandwich"
    | "pasta"
    | "salads"
    | "appetizers"
    | "savory_crepes"
    | "sweet_crepes"
    | "rofimata"
    | "chymoi"
    | "anapsyktika"
    | "kryo_tsai"
    | "dromos_tou_tsaiou"
    | "smoothies"
    | "granites"
    | "myres"
    | "krasia"
    | "pota"
    | "rtds"
    | "cocktail";
  name: string;
  description?: string;
  priceDelivery: number;
  priceInStore: number;
  order: number;
}

export interface ComboOffer {
  id: string;
  title: string;
  items: { menuItemId: string; menuItemName: string; quantity: number }[];
  bundlePrice: number;
  active: boolean;
}

export interface BusinessInfo {
  phone: string;
  address: string;
  hours: string;
  mapsEmbedUrl?: string;
}

export interface MinimumOrderEntry {
  id: string;
  area: string;
  amount: number;
  order: number;
}

export type CategoryKey = MenuItem["category"];

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  pizza_32: "Πίτσα 32cm",
  burger: "Burger",
  club_sandwich: "Club Sandwich",
  pasta: "Ζυμαρικά",
  salads: "Σαλάτες",
  appetizers: "Ορεκτικά",
  savory_crepes: "Κρέπα αλμυρή",
  sweet_crepes: "Κρέπα γλυκιά",
  rofimata: "Ροφήματα",
  chymoi: "Χυμοί",
  anapsyktika: "Αναψυκτικά",
  kryo_tsai: "Κρύο τσάι",
  dromos_tou_tsaiou: "Δρόμος του τσαϊού",
  smoothies: "Smoothies",
  granites: "Γρανίτες",
  myres: "Μπύρες",
  krasia: "Κρασιά",
  pota: "Ποτά",
  rtds: "RTDs",
  cocktail: "Cocktail",
};

export const CATEGORY_ORDER: CategoryKey[] = [
  "pizza_32",
  "burger",
  "club_sandwich",
  "pasta",
  "salads",
  "appetizers",
  "savory_crepes",
  "sweet_crepes",
  "rofimata",
  "chymoi",
  "anapsyktika",
  "kryo_tsai",
  "dromos_tou_tsaiou",
  "smoothies",
  "granites",
  "myres",
  "krasia",
  "pota",
  "rtds",
  "cocktail",
];
