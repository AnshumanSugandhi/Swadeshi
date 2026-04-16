import { Smartphone, QrCode, Video, Shield } from "lucide-react";

export function DigitalPassport() {
  return (
    <section className="py-20 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto lg:ml-0">
              {/* Phone Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 border-8 border-gray-900">
                <div className="bg-gradient-to-br from-[#c1543a] to-[#a8442f] rounded-2xl p-8 aspect-[9/16]">
                  <div className="flex flex-col items-center justify-center h-full text-white">
                    <QrCode className="w-32 h-32 mb-6" />
                    <div className="text-center">
                      <p className="text-sm opacity-90 mb-2">Scanning QR Code...</p>
                      <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-white rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-bounce">
                <Video className="w-8 h-8 text-[#c1543a]" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-bounce delay-300">
                <Shield className="w-8 h-8 text-[#10a37f]" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 bg-[#10a37f]/10 text-[#10a37f] px-4 py-2 rounded-full mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm">New Feature</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Your Digital<br />Authenticity Passport
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Scan your handmade souvenir to see the artisan's video story, 
              verify its origin, and prove your impact. Each piece comes with 
              a unique QR code linking directly to the master who created it.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c1543a]/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-[#c1543a]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Watch Their Story</h4>
                  <p className="text-gray-600">Personal video message from your artisan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c1543a]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#c1543a]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Verify Authenticity</h4>
                  <p className="text-gray-600">Blockchain-backed certificate of origin</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c1543a]/10 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-5 h-5 text-[#c1543a]" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Track Your Impact</h4>
                  <p className="text-gray-600">See exactly how your purchase helped the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
