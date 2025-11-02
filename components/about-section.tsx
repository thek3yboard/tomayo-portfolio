export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="mb-12">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-5xl md:text-6xl font-bold">ABOUT</h2>
            <div className="flex-1 h-[2px] bg-black"></div>
          </div>
          <p className="text-lg leading-relaxed max-w-[1200px]">
            I'm a proactive and extremely curious person, always looking for new and exciting things to do or learn.
            Professionally, I've consistently stood out for my strong work ethic and ability to learn quickly, which has
            led to short and effective training periods. My skills and competencies are further enhanced by my
            proficiency in graphic design software such as Adobe Photoshop and Illustrator, prototyping in Figma, as
            well as technical drawing in AutoCAD.
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex flex-col items-center pt-2">
              <div className="w-4 h-4 rounded-full bg-[#6b1f1f]"></div>
              <div className="w-[2px] flex-1 bg-[#6b1f1f] mt-2"></div>
            </div>
            <div className="flex-1 pb-12">
              <div className="mb-4">
                <h3 className="text-xl font-bold">
                  Jr Graphic Designer <span className="font-normal italic">in Fabricaciones Militares</span>
                </h3>
                <p className="text-base italic text-gray-600">jan. 2023 - jul. 2024</p>
              </div>
              <p className="text-base leading-relaxed mb-4">
                In the field of Communications and Institutional Relations, I was responsible for designing and
                producing graphic materials such as social media posts, press articles, and internal communications, as
                well as brochures, catalogs, and flyers for conventions and corporate meetings.
              </p>
              <p className="text-base italic text-gray-600">
                Photoshop | Illustrator | Project management | Coorporative Relations
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center pt-2">
              <div className="w-4 h-4 rounded-full bg-[#6b1f1f]"></div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold">
                  Administrative Assistant <span className="font-normal italic">in Fabricaciones Militares</span>
                </h3>
                <p className="text-base italic text-gray-600">oct. 2021 - jan. 2023</p>
              </div>
              <p className="text-base leading-relaxed">
                In the Architecture and Infrastructure field, I carried out administrative tasks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
