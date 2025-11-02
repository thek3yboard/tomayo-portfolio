export function ArchiveSection() {
  const projects = [
    { id: 1, title: "Project 1", image: "/graphic-design-project-with-letter-n-and-botanical.jpg" },
    { id: 2, title: "Project 2", image: "/catalog-design-mockup-on-desk.jpg" },
    { id: 3, title: "Project 3", image: "/waschbar-logo-design.jpg" },
    { id: 4, title: "Project 4", image: "/website-design-on-laptop-screen.jpg" },
    { id: 5, title: "Project 5", image: "/punky-tech-logo-design.jpg" },
    { id: 6, title: "Project 6", image: "/sports-poster-design.jpg" },
  ]

  return (
    <section id="archive" className="min-h-screen py-16">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-8 mb-12">
          <div className="flex-1 h-[2px] bg-black"></div>
          <h2 className="text-5xl md:text-6xl font-bold">ARCHIVE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-square overflow-hidden bg-gray-200 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
