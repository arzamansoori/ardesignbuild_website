import { ImageDesc } from "../utils/constants";
import { projects } from "./projects";

const portfolioImages = ImageDesc.map((item) => ({
  img: item.img,
  caption: `${item.title} — ${item.desc}`,
}));

const projectImages = projects.flatMap((project) =>
  project.images.map((image) => ({
    img: image.img,
    width: image.width,
    height: image.height,
    caption: image.caption,
  }))
);

const deliveredImages = projects.flatMap((project) =>
  (project.delivered?.images ?? []).map((image) => ({
    img: image.img,
    width: image.width,
    height: image.height,
    caption: image.caption,
  }))
);

const deliveredVideos = projects.flatMap((project) =>
  project.delivered?.video
    ? [
        {
          video: project.delivered.video.src,
          width: project.delivered.video.width,
          height: project.delivered.video.height,
          caption: project.delivered.video.caption,
        },
      ]
    : []
);

export const galleryImages = [...portfolioImages, ...projectImages];

export const galleryMedia = [
  ...galleryImages,
  ...deliveredImages,
  ...deliveredVideos,
];

export default galleryImages;
