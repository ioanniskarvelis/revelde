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
    | "drinks";
  name: string;
  description?: string;
  price: number;
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
  drinks: "Αναψυκτικά / Ποτά",
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
  "drinks",
];
