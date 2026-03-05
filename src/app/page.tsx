import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0a0a0a]/70 backdrop-blur-md border border-white/5 rounded-full px-6 py-2 flex items-center gap-8">
        <Link href="/" className="font-display text-lg tracking-[0.35em] uppercase text-[#c9a96e]">
          Doucet Collective
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            Shop
          </Link>
          <Link href="/about" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a96e] transition-colors duration-300">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.5) 40px,
              rgba(255,255,255,0.5) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.5) 40px,
              rgba(255,255,255,0.5) 41px
            )`
          }}
        />
        {/* Gold gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)"
          }}
        />

        <div className="relative z-10 text-center px-6 animate-fadeIn">
          <div className="mb-6">
            <span className="inline-block w-16 h-[1px] bg-[#c9a96e]/40 mr-4 align-middle" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/70">Curated Collection</span>
            <span className="inline-block w-16 h-[1px] bg-[#c9a96e]/40 ml-4 align-middle" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase mb-6 leading-tight">
            <span className="block text-white/90">Doucet</span>
            <span className="block text-[#c9a96e]">Collective</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/40 text-lg md:text-xl leading-relaxed mb-12 font-light">
            Hand-selected crystals and rare minerals, curated for those who appreciate the extraordinary beauty of the earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.25em] uppercase overflow-hidden border border-[#c9a96e] text-[#c9a96e] hover:text-[#0a0a0a] transition-colors duration-500"
            >
              <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Explore Collection</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.25em] uppercase border border-white/10 text-white/50 hover:border-white/30 hover:text-white/80 transition-all duration-500"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20">
            <path d="M8 4L8 20M8 20L2 14M8 20L14 14" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/50 block mb-4">Discover</span>
            <h2 className="font-display text-3xl md:text-5xl tracking-[0.1em] uppercase text-white/90">
              Our Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Spheres", count: 14, icon: "◯" },
              { name: "Towers", count: 19, icon: "△" },
              { name: "Carvings", count: 25, icon: "◇" },
              { name: "Specimens", count: 10, icon: "⬡" },
              { name: "Cathedrals", count: 4, icon: "▽" },
              { name: "Freeforms", count: 13, icon: "◠" },
              { name: "Skulls", count: 9, icon: "☽" },
              { name: "Wands", count: 3, icon: "│" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name.toLowerCase()}`}
                className="group relative p-8 border border-white/5 hover:border-[#c9a96e]/30 transition-all duration-500 bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <span className="block text-3xl mb-4 text-white/10 group-hover:text-[#c9a96e]/30 transition-colors duration-500">
                  {category.icon}
                </span>
                <h3 className="text-sm tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
                <span className="text-xs text-white/20 mt-1 block">
                  {category.count} pieces
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e]/40 group-hover:w-full transition-all duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Value Proposition */}
      <section className="relative py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="group">
              <div className="w-12 h-12 mx-auto mb-6 border border-[#c9a96e]/20 flex items-center justify-center group-hover:border-[#c9a96e]/50 transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-3">Hand Selected</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs mx-auto">
                Every crystal is personally chosen for its unique energy, clarity, and natural beauty.
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 mx-auto mb-6 border border-[#c9a96e]/20 flex items-center justify-center group-hover:border-[#c9a96e]/50 transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-3">Ethically Sourced</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs mx-auto">
                Responsibly sourced from trusted miners and suppliers around the world.
              </p>
            </div>
            <div className="group">
              <div className="w-12 h-12 mx-auto mb-6 border border-[#c9a96e]/20 flex items-center justify-center group-hover:border-[#c9a96e]/50 transition-colors duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M2 12H22" />
                  <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" />
                </svg>
              </div>
              <h3 className="text-sm tracking-[0.25em] uppercase text-white/80 mb-3">Worldwide Shipping</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs mx-auto">
                Carefully packaged and shipped with care to collectors everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Etsy Social Proof */}
      <section className="relative py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e" className="opacity-80">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <p className="text-white/30 text-sm tracking-widest uppercase mb-2">5.0 Rating on Etsy</p>
          <p className="text-white/20 text-xs tracking-wider">Trusted by collectors • 21+ sales and growing</p>

          <a
            href="https://www.etsy.com/shop/DoucetCollectiveCo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 text-xs tracking-[0.25em] uppercase text-white/40 border border-white/10 hover:border-[#c9a96e]/30 hover:text-[#c9a96e] transition-all duration-500"
          >
            Visit our Etsy Shop
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-lg tracking-[0.3em] uppercase text-[#c9a96e] mb-4">
                Doucet Collective
              </h3>
              <p className="text-white/25 text-sm leading-relaxed">
                Curated crystals and rare minerals for the discerning collector.
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Navigate</h4>
              <div className="flex flex-col gap-2">
                <Link href="/shop" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Shop</Link>
                <Link href="/about" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">About</Link>
                <Link href="/contact" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://www.etsy.com/shop/DoucetCollectiveCo" target="_blank" rel="noopener noreferrer" className="text-sm text-white/25 hover:text-[#c9a96e] transition-colors duration-300">
                  Etsy
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/15 text-xs tracking-widest">
              © {new Date().getFullYear()} Doucet Collective. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
