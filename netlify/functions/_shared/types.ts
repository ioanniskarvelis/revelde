export interface MenuItem {
  id: string;
  category: "pizza" | "pasta" | "salads" | "appetizers" | "drinks";
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
}

export type CategoryKey = MenuItem["category"];

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  pizza: "Πίτσες",
  pasta: "Ζυμαρικά",
  salads: "Σαλάτες",
  appetizers: "Ορεκτικά",
  drinks: "Αναψυκτικά / Ποτά",
};

export const CATEGORY_ORDER: CategoryKey[] = [
  "pizza",
  "pasta",
  "salads",
  "appetizers",
  "drinks",
];
