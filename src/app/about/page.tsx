import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
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

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-[#c9a96e]/50 block mb-4">Our Story</span>
          <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-white/90 mb-6">
            Born from the Earth
          </h1>
          <p className="text-white/30 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            What began as a deep fascination with the natural world has grown into a curated collection of the earth's most extraordinary treasures.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {/* The Beginning */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-12 h-[1px] bg-[#c9a96e]/30" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]/60">The Beginning</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-4">
                Doucet Collective was founded on a simple belief — that the beauty hidden within the earth deserves to be discovered, appreciated, and shared. Every crystal tells a story millions of years in the making, shaped by pressure, heat, and time into something truly remarkable.
              </p>
              <p className="text-white/50 leading-relaxed">
                What started as a personal collection quickly became a passion for connecting people with pieces that resonate with them. Each specimen in our collection is hand-selected, not mass-produced or bulk-ordered, because we believe every collector deserves something genuinely special.
              </p>
            </div>

            {/* The Philosophy */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-12 h-[1px] bg-[#c9a96e]/30" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]/60">Our Philosophy</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-4">
                We don't just sell crystals — we curate experiences. Every piece that enters our collection goes through a careful selection process. We look for exceptional color, clarity, formation, and energy. If it doesn't stop us in our tracks, it doesn't make the cut.
              </p>
              <p className="text-white/50 leading-relaxed">
                From rare fluorite clusters to polished citrine towers, from delicate freeforms to powerful cathedral geodes — our collection spans the full spectrum of what the mineral world has to offer. We source ethically and work with trusted suppliers who share our respect for the earth.
              </p>
            </div>

            {/* The Promise */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block w-12 h-[1px] bg-[#c9a96e]/30" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#c9a96e]/60">Our Promise</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-4">
                Every crystal you receive from Doucet Collective is exactly what you see — we photograph each piece individually under natural lighting so you know precisely what's coming to your door. No stock photos, no surprises.
              </p>
              <p className="text-white/50 leading-relaxed">
                We pack every order with meticulous care because we know these pieces are more than products — they're additions to your personal collection, your sacred space, your home. They deserve to arrive perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block font-display text-3xl md:text-4xl text-[#c9a96e]">108+</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 mt-2 block">Unique Pieces</span>
            </div>
            <div>
              <span className="block font-display text-3xl md:text-4xl text-[#c9a96e]">5.0</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 mt-2 block">Etsy Rating</span>
            </div>
            <div>
              <span className="block font-display text-3xl md:text-4xl text-[#c9a96e]">9</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 mt-2 block">Categories</span>
            </div>
            <div>
              <span className="block font-display text-3xl md:text-4xl text-[#c9a96e]">100%</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 mt-2 block">Hand Selected</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-[0.1em] uppercase text-white/90 mb-4">
            Find Your Piece
          </h2>
          <p className="text-white/30 text-sm mb-8">
            Explore our full collection and discover something that speaks to you.
          </p>
          <Link
            href="/shop"
            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.25em] uppercase overflow-hidden border border-[#c9a96e] text-[#c9a96e] hover:text-[#0a0a0a] transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-[#c9a96e] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative">Browse Collection</span>
          </Link>
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
