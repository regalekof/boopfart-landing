import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Twitter, Sparkles, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2d3653] to-[#1a202e] text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="BoopFart Logo" width={48} height={48} className="animate-pulse" />
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            BoopFart
          </span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#about" className="font-medium hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="#roadmap" className="font-medium hover:text-blue-500 transition-colors">
            Roadmap
          </Link>
          <Link href="#community" className="font-medium hover:text-blue-500 transition-colors">
            Community
          </Link>
        </nav>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Buy $BOOPF
        </Button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="relative mb-8">
            <Image src="/images/logo.png" alt="BoopFart Logo" width={200} height={200} className="animate-bounce" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            BoopFart
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            The internet's silliest meme coin that doesn't take itself too seriously. Just a{" "}
            <span className="font-bold text-blue-500">BOOP</span> and a{" "}
            <span className="font-bold text-purple-500">FART</span>!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Buy $BOOPF <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              What is BoopFart?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              BoopFart ($BOOPF) is a revolutionary meme coin that combines the "boop" from boopdotfun with "fart" to
              create something truly magical. We're not here to change the world - we're here to make you laugh while
              maybe making some gains.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                <div className="bg-blue-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-blue-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Meme-Powered</h3>
                <p className="text-gray-300">Fueled by internet humor and the collective power of fart jokes.</p>
              </div>
              <div className="bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                <div className="bg-purple-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-purple-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Community-Driven</h3>
                <p className="text-gray-300">Built by pranksters, for pranksters. The sillier, the better.</p>
              </div>
              <div className="bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-gradient-to-r from-blue-500 to-purple-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Absolutely Useless</h3>
                <p className="text-gray-300">No utility, no purpose, just vibes. And that's the beauty of it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Roadmap to Nowhere
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center">
              We have no idea where we're going, but we promise it'll be fun!
            </p>

            <div className="space-y-12">
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-1 flex md:justify-end">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-bold text-white bg-blue-500 rounded-md px-2 py-1 mb-1">
                        PHASE 1:
                      </span>
                      <span className="text-sm font-bold text-white bg-purple-500 rounded-md px-2 py-1">
                        THE BIG BOOP
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• Launch website and social media channels</li>
                      <li>• Create the most ridiculous memes the internet has ever seen</li>
                      <li>• Deploy smart contract</li>
                      <li>• Initial liquidity pool setup</li>
                      <li>• First 1,000 holders celebration (free digital fart sounds)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-1 flex md:justify-end">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-bold text-white bg-blue-500 rounded-md px-2 py-1 mb-1">
                        PHASE 2:
                      </span>
                      <span className="text-sm font-bold text-white bg-purple-500 rounded-md px-2 py-1">
                        THE BIG FART
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• CoinGecko and CoinMarketCap listings</li>
                      <li>• Community growth initiatives</li>
                      <li>• Partnerships with other silly projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-1 flex md:justify-end">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-bold text-white bg-blue-500 rounded-md px-2 py-1 mb-1">
                        PHASE 3:
                      </span>
                      <span className="text-sm font-bold text-white bg-purple-500 rounded-md px-2 py-1">
                        THE BOOPFART TAKEOVER
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-4 bg-[#2d3653]/50 p-6 rounded-xl shadow-lg">
                    <ul className="space-y-2 text-gray-300">
                      <li>• CEX listings (maybe, if they have a sense of humor)</li>
                      <li>• Secret surprise that will blow your mind (and other things)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="container mx-auto px-4 py-20 bg-[#2d3653]/30 rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Join the BoopFart Community
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Connect with fellow pranksters and meme enthusiasts. The more, the merrier!
            </p>

            <div className="grid grid-cols-2 gap-6">
              <a
                href="https://x.com/theboopfart"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d3653]/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Twitter className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <p className="font-bold">Twitter</p>
              </a>
              <a
                href="https://t.me/BOOPFART"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d3653]/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg className="h-8 w-8 text-blue-500 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.22-1.13 6.93-.14.71-.42 1.34-.9 1.54-.46.18-1.12.03-1.72-.46-.95-.78-1.42-1.27-2.35-2.03-1.04-.85-.37-1.32.23-2.08.16-.19 2.78-2.56 2.83-2.78.01-.05.01-.23-.08-.32-.09-.1-.23-.07-.34-.04-.14.04-2.42 1.55-6.85 4.55-.65.45-1.23.67-1.75.66-.58-.01-1.7-.33-2.53-.6-.1-.03-1.02-.41-1.01-1.16.01-.41.25-.76.67-1.05 3.91-2.51 6.52-4.16 7.82-4.96 3.72-2.3 4.49-2.7 4.99-2.71.11 0 .37.02.54.21.17.17.16.41.16.41-.01.07-.02.16-.02.26z" />
                </svg>
                <p className="font-bold">Telegram</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Join the BoopFart Revolution?</h2>
            <p className="text-xl text-white/90 mb-8">Don't miss out on the internet's silliest meme coin adventure!</p>
            <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-50">
              Buy $BOOPF Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Image src="/images/logo.png" alt="BoopFart Logo" width={32} height={32} />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            BoopFart
          </span>
        </div>
        <p className="text-gray-400 mb-6">$BOOPF — The silliest meme coin on the internet</p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://x.com/theboopfart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/BOOPFART"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.22-1.13 6.93-.14.71-.42 1.34-.9 1.54-.46.18-1.12.03-1.72-.46-.95-.78-1.42-1.27-2.35-2.03-1.04-.85-.37-1.32.23-2.08.16-.19 2.78-2.56 2.83-2.78.01-.05.01-.23-.08-.32-.09-.1-.23-.07-.34-.04-.14.04-2.42 1.55-6.85 4.55-.65.45-1.23.67-1.75.66-.58-.01-1.7-.33-2.53-.6-.1-.03-1.02-.41-1.01-1.16.01-.41.25-.76.67-1.05 3.91-2.51 6.52-4.16 7.82-4.96 3.72-2.3 4.49-2.7 4.99-2.71.11 0 .37.02.54.21.17.17.16.41.16.41-.01.07-.02.16-.02.26z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 BoopFart. All rights reserved. This is not financial advice. DYOR.
        </p>
      </footer>
    </div>
  )
}
