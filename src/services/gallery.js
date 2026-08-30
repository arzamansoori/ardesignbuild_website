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

export const galleryImages = [...portfolioImages, ...projectImages];

export default galleryImages;
