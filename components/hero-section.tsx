export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-block group">
              <h1 className="font-sans text-6xl md:text-8xl leading-none mb-4">
                <span className="text-[#6b1f1f]">TOMÁS</span>
                <br />
                <span className="text-[#6b1f1f] font-extralight">CEBALLOS</span>
              </h1>
              <div className="h-1 mb-8">
                <div className="h-1 bg-[#6b1f1f] w-[180px] md:w-[360px] transition-[width] duration-700 ease-in-out group-hover:w-full" />
              </div>
            </div>
            <div className="font-sans font-semibold space-y-2 text-3xl md:text-4xl tracking-wide mt-2">
              <p>JR GRAPHIC DESIGNER</p>
              <p>UX/UI DESIGNER</p>
              <p>EDITOR</p>
            </div>
          </div>
          <div className="shrink-0">
            <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
              <img src="/profile.png" alt="Tomás Ceballos" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
