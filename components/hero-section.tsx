export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-4">
              <span className="text-[#6b1f1f]">TOMÁS</span>
              <br />
              <span className="text-[#6b1f1f]">CEBALLOS</span>
            </h1>
            <div className="w-full max-w-[360px] h-1 bg-[#6b1f1f] mb-8"></div>
            <div className="space-y-2 text-xl md:text-2xl font-normal tracking-wide">
              <p>JR GRAPHIC DESIGNER</p>
              <p>UX/UI DESIGNER</p>
              <p>EDITOR</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-[400px] h-[400px] rounded-full overflow-hidden bg-gray-200">
              <img src="/professional-portrait.png" alt="Tomás Ceballos" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
