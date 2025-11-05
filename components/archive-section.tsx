export function ArchiveSection() {
  const projects = [
    { id: 1, title: "Project 1", image: "/archive1-color.png" },
    { id: 2, title: "Project 2", image: "/archive2-color.png" },
    { id: 3, title: "Project 3", image: "/archive3-color.png" },
    /* { id: 4, title: "Project 4", image: "/website-design-on-laptop-screen.jpg" },
    { id: 5, title: "Project 5", image: "/punky-tech-logo-design.jpg" },
    { id: 6, title: "Project 6", image: "/sports-poster-design.jpg" }, */
  ]

  return (
    <section id="archive" className="min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-8 mb-12">
          <div className="flex-1 h-[2px] bg-black"></div>
          <h2 className="font-sans font-semibold text-5xl">ARCHIVE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-square overflow-hidden bg-gray-200 cursor-pointer group"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-103 transition-all duration-850 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}