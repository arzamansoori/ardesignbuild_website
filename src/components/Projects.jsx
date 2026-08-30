import { Link } from "react-router-dom";
import * as projectsService from "../services/projects"

const Projects = () => {
  return (
    <div className="section-top px-8" id="projects">

      <div className="text-center pb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
          Our Projects
        </h2>
        <p className="text-muted text-base md:text-lg">
          A look at some of our recent design and build projects, delivered
          with care from concept to completion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projectsService.projectsSummary.map((item, index) => (
          <Link
            key={index}
            to={`/project/${item.slug}`}
            className="overflow-hidden rounded-xl mt-4 block"
          >
            <img
              src={item.img}
              alt={item.title}
              title={item.title}
              loading="eager"
              fetchPriority="low"
              decoding="async"
              className="w-full h-56 sm:h-60 img-hover-zoom"
            />
            <h2 className="pt-3 pb-1 font-semibold text-lg text-cream flex items-center gap-2">
              {item.title}
              {item.upcoming && (
                <span className="bg-accent text-surface text-xs font-semibold px-2 py-1 rounded-md">
                  UPCOMING
                </span>
              )}
            </h2>
            <p className="text-muted text-sm">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Projects
