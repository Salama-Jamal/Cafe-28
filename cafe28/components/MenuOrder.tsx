"use client";

import { Minus, MessageCircle, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

const phoneNumber = "212636035661";

type MenuItem = {
  name: string;
  price: number;
};

const menuGroups = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: 20 },
      { name: "Americano", price: 20 },
      { name: "Moroccan Coffee", price: 25 },
      { name: "Latte", price: 30 },
      { name: "Cappuccino", price: 30 },
      { name: "Macchiato", price: 30 },
      { name: "Cortado", price: 30 },
      { name: "Mocha", price: 30 },
      { name: "Spanish Latte", price: 40 },
      { name: "Afogato", price: 40 },
    ],
  },
  {
    title: "Iced Coffee",
    items: [
      { name: "Iced Americano", price: 30 },
      { name: "Cold Brew Coffee", price: 35 },
      { name: "Shakerato", price: 35 },
      { name: "Iced Latte", price: 35 },
      { name: "Oreo Latte", price: 35 },
      { name: "Cocoa Latte", price: 35 },
      { name: "Iced Macchiato", price: 40 },
      { name: "Iced Spanish Latte", price: 40 },
      { name: "Iced Mocha", price: 40 },
      { name: "Biscoff Latte", price: 40 },
    ],
  },
  {
    title: "Smoothie & Milkshake",
    items: [
      { name: "Strawberry Banana Smoothie", price: 30 },
      { name: "Peach Banana Smoothie", price: 30 },
      { name: "Banana Smoothie", price: 30 },
      { name: "Banana Coffee Smoothie", price: 30 },
      { name: "Peach Smoothie", price: 30 },
      { name: "Vanilla Milkshake", price: 30 },
      { name: "Chocolate Milkshake", price: 30 },
      { name: "Strawberry Milkshake", price: 30 },
      { name: "Oreo Milkshake", price: 30 },
      { name: "Bumble Drink", price: 30 },
      { name: "Glow Up", price: 30 },
      { name: "Ruby Ginger", price: 40 },
      { name: "Pina Hibiscus", price: 40 },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Coca-Cola", price: 20 },
      { name: "Coca-Cola Sugarfree", price: 20 },
      { name: "Sprite", price: 20 },
      { name: "Poms", price: 20 },
      { name: "Red Bull", price: 30 },
      { name: "Sun Miguel", price: 35 },
      { name: "Corona Cero", price: 40 },
      { name: "Bavaria", price: 40 },
      { name: "Heineken", price: 45 },
    ],
  },
  {
    title: "Matcha",
    items: [
      { name: "Matcha Latte", price: 50 },
      { name: "Iced Matcha Latte", price: 50 },
      { name: "Mango Matcha Latte", price: 60 },
      { name: "Coconut Matcha Latte", price: 60 },
      { name: "Honey Matcha Latte", price: 60 },
      { name: "Rose Matcha Latte", price: 60 },
      { name: "Chocolate Matcha Latte", price: 60 },
      { name: "Strawberry Matcha Latte", price: 60 },
    ],
  },
  {
    title: "Taro",
    items: [
      { name: "Taro Latte", price: 50 },
      { name: "Iced Taro Latte", price: 50 },
      { name: "Taro Coconut Latte", price: 60 },
      { name: "Taro Strawberry Latte", price: 60 },
      { name: "Taro Matcha Latte", price: 60 },
      { name: "Taro Chocolate Latte", price: 60 },
      { name: "Taro Biscoff Latte", price: 60 },
      { name: "Taro Pistachio Latte", price: 60 },
      { name: "Taro Cream Latte", price: 60 },
    ],
  },
  {
    title: "Ube",
    items: [
      { name: "Ube Latte", price: 50 },
      { name: "Iced Ube Latte", price: 50 },
      { name: "Ube Coconut Latte", price: 60 },
      { name: "Ube Strawberry Latte", price: 60 },
      { name: "Ube Chocolate Latte", price: 60 },
      { name: "Ube Cream Latte", price: 60 },
      { name: "Ube Pistachio Latte", price: 60 },
      { name: "Ube Taro Latte", price: 70 },
      { name: "Ube Matcha Latte", price: 70 },
    ],
  },
  {
    title: "Thai Tea",
    items: [
      { name: "Thai Tea Latte", price: 45 },
      { name: "Iced Thai Tea", price: 45 },
      { name: "Thai Green Tea", price: 55 },
      { name: "Thai Tea Coconut", price: 55 },
      { name: "Thai Tea Vanilla", price: 55 },
      { name: "Thai Tea Caramel", price: 55 },
      { name: "Thai Tea Chocolate", price: 50 },
      { name: "Thai Tea Strawberry", price: 50 },
      { name: "Thai Tea Boba", price: 50 },
      { name: "Thai Tea Cream", price: 50 },
      { name: "Thai Tea Mango", price: 60 },
      { name: "Thai Tea Matcha", price: 60 },
      { name: "Thai Tea Taro", price: 70 },
    ],
  },
  {
    title: "Tea & Iced Tea",
    items: [
      { name: "Moroccan Tea", price: 20 },
      { name: "Moroccan Mint Tea", price: 20 },
      { name: "Hibiscus Tea", price: 30 },
      { name: "Iced Moroccan Tea", price: 30 },
      { name: "Iced Hibiscus Tea", price: 30 },
      { name: "Peach Iced Tea", price: 30 },
      { name: "Strawberry Hibiscus Tea", price: 30 },
      { name: "Mango Green Tea", price: 30 },
      { name: "Blueberry Lemon Tea", price: 30 },
      { name: "Pineapple Mint Tea", price: 30 },
    ],
  },
  {
    title: "Fruit Sparkling",
    items: [
      { name: "Mango Sparkling", price: 30 },
      { name: "Strawberry Sparkling", price: 30 },
      { name: "Pineapple Sparkling", price: 30 },
      { name: "Blueberry Sparkling", price: 30 },
      { name: "Peach Sparkling", price: 30 },
      { name: "Hibiscus Sparkling", price: 30 },
      { name: "Lychee Sparkling", price: 30 },
      { name: "Lemon & Mint Sparkling", price: 30 },
      { name: "Blue Lemon Soda", price: 35 },
      { name: "Strawberry & Hibiscus Sparkling", price: 35 },
      { name: "Peach & Passion Fruit Sparkling", price: 35 },
      { name: "Pineapple & Hibiscus Sparkling", price: 40 },
      { name: "Red Honey Lemon Soda", price: 40 },
      { name: "Rainbow Rush", price: 50 },
    ],
  },
  {
    title: "Ayran",
    items: [
      { name: "Classic Ayran", price: 20 },
      { name: "Mint Ayran", price: 20 },
      { name: "Cucumber Mint Ayran", price: 20 },
      { name: "Lemon Mint Ayran", price: 20 },
      { name: "Garlic Ayran", price: 20 },
      { name: "Spicy Ayran", price: 20 },
      { name: "Cucumber Ayran", price: 20 },
      { name: "Sparkling Ayran", price: 20 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Classic Waffle", price: 20 },
      { name: "Nutella Waffle", price: 20 },
      { name: "Biscoff Waffle", price: 20 },
      { name: "Banana Waffle", price: 30 },
      { name: "Banana Chocolate Waffle", price: 30 },
      { name: "Cream Cheese", price: 30 },
      { name: "Biscoff Base", price: 30 },
      { name: "Vanilla Cheesecake", price: 35 },
      { name: "Tiramisu", price: 40 },
      { name: "Waflita", price: 50 },
    ],
  },
  {
    title: "Crunch Bowl",
    items: [
      { name: "Granola", price: 25 },
      { name: "Gold Corn", price: 30 },
      { name: "Flacons D'avoine", price: 30 },
      { name: "Choco Shells", price: 30 },
      { name: "Corn Flakes & Honey", price: 35 },
      { name: "Corn Flakes & Banana", price: 40 },
      { name: "Corn Flakes & Strawberry", price: 40 },
      { name: "Corn Flakes & Nutella", price: 40 },
      { name: "Corn Flakes & Biscoff", price: 45 },
    ],
  },
  {
    title: "Sweet Toast",
    items: [
      { name: "Nutella Toast", price: 20 },
      { name: "Honey Toast", price: 20 },
      { name: "Jam Toast", price: 20 },
      { name: "Caramel Banana Toast", price: 30 },
      { name: "Lotus Banana Toast", price: 30 },
      { name: "Tuna Melt Toast", price: 30 },
      { name: "Choco Berry Toast", price: 35 },
      { name: "Mexican Avocado Toast", price: 40 },
    ],
  },
  {
    title: "Mojitos",
    items: [
      { name: "Classic", price: 30 },
      { name: "Pineapple", price: 30 },
      { name: "Strawberry", price: 30 },
      { name: "Blue Lagoon", price: 30 },
      { name: "Peach", price: 30 },
      { name: "Mango", price: 30 },
      { name: "Fruit", price: 30 },
    ],
  },
  {
    title: "Water",
    items: [
      { name: "Still Water 33cl", price: 5 },
      { name: "Still Water 50cl", price: 10 },
      { name: "Still Water 1.5cl", price: 15 },
      { name: "Sparkling Water", price: 15 },
    ],
  },
] satisfies { title: string; items: MenuItem[] }[];

const menuItemsByName = new Map(
  menuGroups.flatMap((group) => group.items.map((item) => [item.name, item]))
);

type Cart = Record<string, number>;

export default function MenuOrder() {
  const [cart, setCart] = useState<Cart>({});

  const selectedItems = useMemo(
    () => Object.entries(cart).filter(([, quantity]) => quantity > 0),
    [cart]
  );
  const totalItems = selectedItems.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = selectedItems.reduce((sum, [item, quantity]) => {
    return sum + (menuItemsByName.get(item)?.price ?? 0) * quantity;
  }, 0);

  function addItem(item: string) {
    setCart((current) => ({
      ...current,
      [item]: (current[item] ?? 0) + 1,
    }));
  }

  function removeItem(item: string) {
    setCart((current) => {
      const nextQuantity = (current[item] ?? 0) - 1;
      if (nextQuantity <= 0) {
        const next = { ...current };
        delete next[item];
        return next;
      }

      return { ...current, [item]: nextQuantity };
    });
  }

  function clearCart() {
    setCart({});
  }

  const orderMessage = encodeURIComponent(
    [
      "Hello Cafe 28, I would like to order:",
      ...selectedItems.map(([item, quantity]) => {
        const price = menuItemsByName.get(item)?.price ?? 0;
        return `- ${quantity} x ${item} (${price * quantity} MAD)`;
      }),
      `Total: ${totalPrice} MAD`,
    ].join("\n")
  );

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-28 lg:grid-cols-[1fr_360px]">
      <div>
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
          Cafe 28
        </p>
        <h1 className="text-5xl font-bold text-coffee-dark mb-10">Menu</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {menuGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border border-coffee/15 bg-white/75 p-5"
            >
              <h2 className="text-2xl font-semibold text-coffee-dark mb-5">
                {group.title}
              </h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-md bg-cream/70 p-3 text-coffee-dark"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium">{item.name}</span>
                      <span className="text-sm text-coffee-dark/65">
                        {item.price} MAD
                      </span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => removeItem(item.name)}
                        className="grid h-9 w-9 place-items-center rounded-full border border-coffee/20 text-coffee-dark transition-colors hover:border-gold hover:text-gold"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="min-w-6 text-center font-semibold">
                        {cart[item.name] ?? 0}
                      </span>
                      <button
                        type="button"
                        onClick={() => addItem(item.name)}
                        className="grid h-9 w-9 place-items-center rounded-full bg-gold text-coffee-dark transition-colors hover:bg-coffee-dark hover:text-cream"
                        aria-label={`Add ${item.name}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <aside className="h-fit rounded-lg border border-coffee/15 bg-white/85 p-5 shadow-sm lg:sticky lg:top-24">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-coffee-dark">
            <ShoppingBag className="text-gold" />
            <h2 className="text-2xl font-semibold">Order</h2>
          </div>
          {totalItems > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="grid h-9 w-9 place-items-center rounded-full text-coffee-dark/70 transition-colors hover:bg-coffee/10 hover:text-coffee-dark"
              aria-label="Clear order"
            >
              <Trash2 size={17} />
            </button>
          )}
        </div>

        {selectedItems.length === 0 ? (
          <p className="rounded-md bg-cream/80 p-4 text-coffee-dark/70">
            Add items from the menu to start an order.
          </p>
        ) : (
          <ul className="mb-5 space-y-3">
            {selectedItems.map(([item, quantity]) => (
              <li
                key={item}
                className="flex items-center justify-between gap-3 text-coffee-dark"
              >
                <span>
                  <span className="block">{item}</span>
                  <span className="text-sm text-coffee-dark/65">
                    {menuItemsByName.get(item)?.price ?? 0} MAD each
                  </span>
                </span>
                <span className="font-semibold">
                  x{quantity} - {(menuItemsByName.get(item)?.price ?? 0) * quantity} MAD
                </span>
              </li>
            ))}
          </ul>
        )}

        {selectedItems.length > 0 && (
          <div className="mb-5 flex items-center justify-between border-t border-coffee/15 pt-4 text-coffee-dark">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-bold">{totalPrice} MAD</span>
          </div>
        )}

        <a
          href={
            selectedItems.length > 0
              ? `https://wa.me/${phoneNumber}?text=${orderMessage}`
              : undefined
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={selectedItems.length === 0}
          className={`flex h-12 items-center justify-center gap-2 rounded-md font-semibold transition-colors ${
            selectedItems.length > 0
              ? "bg-coffee-dark text-cream hover:bg-gold hover:text-coffee-dark"
              : "pointer-events-none bg-coffee/15 text-coffee-dark/50"
          }`}
        >
          <MessageCircle size={19} />
          Order on WhatsApp
        </a>
      </aside>
    </section>
  );
}
