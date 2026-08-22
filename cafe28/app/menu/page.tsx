const menuGroups = [
  {
    title: "Coffee",
    items: ["Espresso", "Americano", "Cappuccino", "Latte", "Iced Coffee"],
  },
  {
    title: "Fresh Drinks",
    items: ["Matcha", "Smoothie", "Milkshake", "Mojito", "Fresh Juice"],
  },
  {
    title: "Bites",
    items: ["Toast", "Dessert", "Pastry", "Seasonal Plate"],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <section className="mx-auto max-w-5xl">
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
          Cafe 28
        </p>
        <h1 className="text-5xl font-bold text-coffee-dark mb-10">Menu</h1>

        <div className="grid gap-6 md:grid-cols-3">
          {menuGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border border-coffee/15 bg-white/70 p-6"
            >
              <h2 className="text-2xl font-semibold text-coffee-dark mb-4">
                {group.title}
              </h2>
              <ul className="space-y-3 text-coffee-dark/80">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
