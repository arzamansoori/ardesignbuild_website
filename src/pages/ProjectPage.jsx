import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import { FaExpand } from "react-icons/fa6";
import * as projectsService from "../services/projects";
import useDocumentHead from "../hooks/useDocumentHead";
import { BUSINESS_NAME, PROJECT_TABS } from "../utils/constants";

const BACK_LINK = { to: "/#projects", label: "Projects" };

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projectsService.projectsById[slug];
  const [openIndex, setOpenIndex] = useState(null);
  const [openDeliveredIndex, setOpenDeliveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(PROJECT_TABS.MOCKUPS);

  const hasDelivered = Boolean(
    project?.delivered &&
      (project.delivered.images?.length > 0 || project.delivered.video)
  );

  useEffect(() => {
    document.body.style.overflow =
      openIndex !== null || openDeliveredIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex, openDeliveredIndex]);

  useDocumentHead({
    title: project
      ? `${project.title} | ${BUSINESS_NAME}`
      : `Project not found | ${BUSINESS_NAME}`,
    description: project
      ? project.desc
      : "We couldn't find the project you're looking for.",
    path: `/project/${slug}`,
    noindex: !project,
  });

  if (!project) {
    return (
      <div>
        <Header backLink={BACK_LINK} />
        <div className="section-top px-8 pb-20 text-center">
          <h1 className="text-3xl font-bold text-cream mb-4">
            Project not found
          </h1>
          <p className="text-muted mb-8">
            We couldn't find the project you're looking for.
          </p>
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
          <h1 className="heading-section flex items-center justify-center gap-3">
            {project.title}
            {project.upcoming && (
              <span className="bg-accent text-surface text-xs font-semibold px-2 py-1 rounded-md align-middle">
                UPCOMING
              </span>
            )}
          </h1>
          <p className="text-muted text-base md:text-lg">{project.desc}</p>
        </div>

        {hasDelivered && (
          <div className="flex justify-center pb-10">
            <div className="relative flex w-64 rounded-full bg-surface-dark p-1">
              <div
                className="absolute top-1 bottom-1 left-1 rounded-full bg-accent transition-transform duration-300 ease-out"
                style={{
                  width: "calc(50% - 0.25rem)",
                  transform:
                    activeTab === PROJECT_TABS.DELIVERED
                      ? "translateX(100%)"
                      : "translateX(0)",
                }}
              />
              <button
                type="button"
                onClick={() => setActiveTab(PROJECT_TABS.MOCKUPS)}
                className={`tab-pill ${
                  activeTab === PROJECT_TABS.MOCKUPS
                    ? "text-surface"
                    : "text-muted"
                }`}
              >
                Mock-ups
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(PROJECT_TABS.DELIVERED)}
                className={`tab-pill ${
                  activeTab === PROJECT_TABS.DELIVERED
                    ? "text-surface"
                    : "text-muted"
                }`}
              >
                Delivered
              </button>
            </div>
          </div>
        )}

        {(!hasDelivered || activeTab === PROJECT_TABS.MOCKUPS) && (
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {project.images.map((item, index) => (
              <div key={index}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="relative group overflow-hidden rounded-xl block w-full cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={`${project.title} ${index + 1}`}
                    title={project.title}
                    loading="eager"
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto rounded-xl"
                  />
                  <span
                    className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-black/30 text-cream"
                    aria-hidden="true"
                  >
                    <FaExpand className="text-xs" />
                  </span>
                </button>
                <p className="text-muted text-sm pt-3 text-center">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        )}

        {hasDelivered && activeTab === PROJECT_TABS.DELIVERED && (
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-12">
              {project.delivered.video && (
                <div>
                  <video
                    src={project.delivered.video.src}
                    width={project.delivered.video.width}
                    height={project.delivered.video.height}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-auto rounded-xl"
                  />
                  <p className="text-muted text-sm pt-3 text-center">
                    {project.delivered.video.caption}
                  </p>
                </div>
              )}

              {project.delivered.images.map((item, index) => (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenDeliveredIndex(index)}
                    className="relative group overflow-hidden rounded-xl block w-full cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={`${project.title} delivered ${index + 1}`}
                      title={project.title}
                      loading="lazy"
                      decoding="async"
                      width={item.width}
                      height={item.height}
                      className="w-full h-auto rounded-xl"
                    />
                    <span
                      className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-black/30 text-cream"
                      aria-hidden="true"
                    >
                      <FaExpand className="text-xs" />
                    </span>
                  </button>
                  <p className="text-muted text-sm pt-3 text-center">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />

      {openIndex !== null && (
        <ImageViewer
          images={project.images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}

      {openDeliveredIndex !== null && (
        <ImageViewer
          images={project.delivered.images}
          index={openDeliveredIndex}
          onClose={() => setOpenDeliveredIndex(null)}
        />
      )}
    </div>
  );
};

export default ProjectPage;
