import bedroom from "../assets/bedroom.png"
import LivingRoom1 from "../assets/LivingRoom1.jpg"
import kitchen from "../assets/kitchen.png"
import DiningRoom from "../assets/DiningRoom.png"
import resortInterior from "../assets/resortInteriors.png"
import jewelleryshop from "../assets/jewelleryshop.png"
import LivingRoom from "../assets/LivingRoom.png"
import GuestBedroom from "../assets/GuestBedroom.jpg"

export const ImageDesc = [
  {
    img: LivingRoom1,
    title: "Modern Living Space",
    desc: "Contemporary design with clean lines and warm accents",
  },
  {
    img: bedroom,
    title: "Serene Bedroom",
    desc: "Peaceful retreat with natural materials and soft textures",
  },
  {
    img: kitchen,
    title: "Gourmet Kitchen",
    desc: "Functional elegance meets culinary inspiration",
  },
  {
    img: DiningRoom,
    title: "Dining Room",
    desc: "Sophisticated space for memorable gatherings",
  },
  {
    img: resortInterior,
    title: "Resort Interiors",
    desc: "Luxurious sanctuary blending comfort, nature, and refined elegance",
  },
  {
    img: jewelleryshop,
    title: "Jewellery Shop",
    desc: "Timeless elegance crafted to shine",
  },
];

export const ProjectGalleries = {
  "lakeside-villa-renovation": {
    title: "Lakeside Villa Renovation",
    desc: "Full interior overhaul for a modern lakeside family home",
    images: [
      {
        img: DiningRoom,
        caption: "A lakeside dining nook pairs a long wooden table with soft ambient lighting for relaxed family dinners.",
      },
      {
        img: LivingRoom,
        caption: "The renovated living room features large windows framing the lake, paired with warm neutral furnishings throughout.",
      },
      {
        img: kitchen,
        caption: "An open kitchen island connects to the dining space, finished in light wood tones and brushed brass hardware.",
      },
    ],
  },
  "downtown-loft-kitchen": {
    title: "Downtown Loft Kitchen",
    desc: "Sleek open-concept kitchen for a contemporary city loft",
    images: [
      {
        img: kitchen,
        caption: "This downtown loft kitchen combines matte cabinetry with a marble waterfall island for a sleek, modern look.",
      },
      {
        img: DiningRoom,
        caption: "Just off the kitchen, a compact dining nook keeps the open floor plan feeling connected and uncluttered.",
      },
      {
        img: GuestBedroom,
        caption: "A guest bedroom nearby mirrors the loft's industrial palette with soft textiles that soften the exposed brick walls.",
      },
    ],
  },
  "hillside-retreat": {
    title: "Hillside Retreat",
    desc: "Warm, minimalist living spaces framed by natural light",
    images: [
      {
        img: LivingRoom1,
        caption: "The main living space opens to the hillside view through floor-to-ceiling glass, filled with natural light.",
      },
      {
        img: LivingRoom,
        caption: "A secondary lounge area offers a quieter retreat, furnished with warm textures and understated, minimalist detailing.",
      },
      {
        img: bedroom,
        caption: "The primary bedroom uses natural materials and soft lighting to create a calm, restful hillside sanctuary.",
      },
    ],
  },
  "coastal-resort-suites": {
    title: "Coastal Resort Suites",
    desc: "Boutique hospitality interiors inspired by the shoreline",
    images: [
      {
        img: resortInterior,
        caption: "This boutique resort suite blends coastal textures with breezy, open layouts inspired by the nearby shoreline.",
      },
      {
        img: LivingRoom1,
        caption: "A shared lounge area invites guests to unwind, featuring rattan furniture and soft, sun-washed color tones.",
      },
      {
        img: DiningRoom,
        caption: "The resort's communal dining space overlooks the water, offering guests a relaxed setting for shared meals.",
      },
    ],
  },
  "urban-master-suite": {
    title: "Urban Master Suite",
    desc: "Cozy, textured bedroom design for a downtown apartment",
    images: [
      {
        img: bedroom,
        caption: "This cozy master suite layers rich textiles and warm lighting to create an inviting downtown retreat.",
      },
      {
        img: GuestBedroom,
        caption: "An adjoining guest room mirrors the suite's warm palette, offering visitors a comfortable and stylish stay.",
      },
      {
        img: LivingRoom1,
        caption: "A small sitting area near the bedroom offers a quiet nook for reading, framed by soft ambient light.",
      },
    ],
  },
  "heritage-boutique-fit-out": {
    title: "Heritage Boutique Fit-Out",
    desc: "Elegant retail interior blending tradition with modern flair",
    images: [
      {
        img: jewelleryshop,
        caption: "The heritage boutique fit-out balances traditional detailing with modern display cases to showcase fine jewellery pieces.",
      },
      {
        img: kitchen,
        caption: "A small back-of-house kitchen area supports staff breaks, finished with the same warm wood tones as the shop front.",
      },
      {
        img: DiningRoom,
        caption: "A private consultation room doubles as a dining-style meeting space for discussing custom orders with clients.",
      },
    ],
  },
};

export const ProjectsDesc = Object.entries(ProjectGalleries).map(([slug, project]) => ({
  slug,
  img: project.images[0].img,
  title: project.title,
  desc: project.desc,
}));

export const BUSINESS_NAME = "AR Design & Build"
