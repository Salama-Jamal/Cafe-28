export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream/80 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-xl text-cream">Cafe 28</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cafe 28. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
