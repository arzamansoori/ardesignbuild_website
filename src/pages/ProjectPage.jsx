import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import * as projectsService from "../services/projects";

const BACK_LINK = { to: "/#projects", label: "Projects" };

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projectsService.projectsById[slug];
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

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
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="overflow-hidden rounded-xl block w-full cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={`${project.title} ${index + 1}`}
                  title={project.title}
                  className="w-full h-72 sm:h-96 img-hover-zoom"
                />
              </button>
              <p className="text-muted text-sm pt-3 text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {openIndex !== null && (
        <ImageViewer
          images={project.images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
};

export default ProjectPage;
