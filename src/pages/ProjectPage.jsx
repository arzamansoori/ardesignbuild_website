import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProjectGalleries } from "../utils/constants";

const BACK_LINK = { to: "/#projects", label: "Projects" };

const ProjectPage = () => {
  const { slug } = useParams();
  const project = ProjectGalleries[slug];

  if (!project) {
    return (
      <div>
        <Header backLink={BACK_LINK} />
        <div className="section-top px-8 pb-20 text-center">
          <h1 className="text-3xl font-bold text-cream mb-4">Project not found</h1>
          <p className="text-muted mb-8">We couldn't find the project you're looking for.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header backLink={BACK_LINK} />
      <div className="section-top px-8 pb-20">
        <div className="max-w-3xl mx-auto text-center pb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
            {project.title}
          </h1>
          <p className="text-muted text-base md:text-lg">
            {project.desc}
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {project.images.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={`${project.title} ${index + 1}`}
                  title={project.title}
                  className="w-full h-72 sm:h-96 img-hover-zoom"
                />
              </div>
              <p className="text-muted text-sm pt-3 text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
