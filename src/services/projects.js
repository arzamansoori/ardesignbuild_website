import diningView1 from "../assets/projects/dining-area/01-dining-view.jpg";
import diningView2 from "../assets/projects/dining-area/02-dining-view.jpeg";

import jewelleryEntryView from "../assets/projects/jewellery-store/01-entry-view.jpeg";
import jewelleryWaitingArea from "../assets/projects/jewellery-store/02-waiting-area.jpeg";
import jewelleryDisplays from "../assets/projects/jewellery-store/03-displays.jpeg";

import homeBedroom1 from "../assets/projects/warm-modern-home/01-bedroom-1.jpeg";
import homeBedroom2 from "../assets/projects/warm-modern-home/02-bedroom-2.jpeg";
import homeBedroom2Dressing from "../assets/projects/warm-modern-home/03-bedroom-2-dressing.jpeg";
import homeTvRoom from "../assets/projects/warm-modern-home/04-tv-room.jpeg";
import homePrayerRoom from "../assets/projects/warm-modern-home/05-prayer-room.jpeg";
import homePassage from "../assets/projects/warm-modern-home/06-passage.jpeg";
import homePantry from "../assets/projects/warm-modern-home/07-pantry.jpeg";
import homeSofa from "../assets/projects/warm-modern-home/09-sofa.jpeg";
import homeIndoorSwing from "../assets/projects/warm-modern-home/10-indoor-swing.jpeg";

import clinicReception from "../assets/projects/clinic/01-reception.jpg";
import clinicPharmacy from "../assets/projects/clinic/02-pharmacy.jpg";
import clinicWaitingArea from "../assets/projects/clinic/03-waiting-area.jpg";
import clinicDoctorOffice1 from "../assets/projects/clinic/04-doctor-office.jpg";
import clinicDoctorOffice2 from "../assets/projects/clinic/05-doctor-office.jpg";
import clinicDoctorOffice3 from "../assets/projects/clinic/06-doctor-office.jpg";

export const projects = [
  {
    id: "warm-modern-home",
    title: "A Warm & Modern Home",
    desc: "Full-home interior blending warm wood tones, brass accents, and soft floral textiles.",
    images: [
      {
        img: homeBedroom1,
        width: 1600,
        height: 1600,
        caption: "Primary bedroom with a tufted brown headboard and a floral-cushioned window seat.",
      },
      {
        img: homeBedroom2,
        width: 1600,
        height: 1600,
        caption: "Second bedroom pairs a navy headboard with soft blue floral wall art.",
      },
      {
        img: homeBedroom2Dressing,
        width: 1600,
        height: 1600,
        caption: "Same bedroom viewed toward the dressing mirror and floral wallpaper panel.",
      },
      {
        img: homeTvRoom,
        width: 1600,
        height: 1600,
        caption: "Living room with a wood-paneled TV wall and a sculptural globe chandelier.",
      },
      {
        img: homePrayerRoom,
        width: 1600,
        height: 1600,
        caption: "Open dining and kitchen area with a built-in mandir display nook.",
      },
      {
        img: homePassage,
        width: 1600,
        height: 1600,
        caption: "Passage lined with display shelving and a cozy orange window seat.",
      },
      {
        img: homePantry,
        width: 1600,
        height: 1600,
        caption: "Kitchen pantry corner with a glass display cabinet beside the fridge.",
      },
      {
        img: homeSofa,
        width: 1600,
        height: 1600,
        caption: "Sitting room anchored by a rust-orange sectional sofa and coastal wall art.",
      },
      {
        img: homeIndoorSwing,
        width: 1500,
        height: 1500,
        caption: "Hallway featuring a hanging swing bench overlooking the open living room.",
      },
    ],
  },
  {
    id: "clinic",
    title: "Urocare Kidney Clinic",
    desc: "Calm, clean medical clinic fit-out spanning reception, pharmacy, and doctors' offices.",
    images: [
      {
        img: clinicReception,
        width: 2500,
        height: 2500,
        caption: "Clinic reception desk beneath the Urocare Kidney Center signage wall.",
      },
      {
        img: clinicPharmacy,
        width: 2500,
        height: 2500,
        caption: "Reception desk opens onto a fully stocked in-house pharmacy counter.",
      },
      {
        img: clinicWaitingArea,
        width: 2500,
        height: 2500,
        caption: "Glass-walled waiting lounge with a navy sofa and magazine rack.",
      },
      {
        img: clinicDoctorOffice1,
        width: 2500,
        height: 2500,
        caption: "Doctor's glass-walled office with floral wallpaper shelving and a horse figurine.",
      },
      {
        img: clinicDoctorOffice2,
        width: 2500,
        height: 2500,
        caption: "Exam corner with a washbasin and motivational wall art nearby.",
      },
      {
        img: clinicDoctorOffice3,
        width: 2500,
        height: 2500,
        caption: "Consultation desk framed by certificates and floral wallpaper shelving.",
      },
    ],
  },
  {
    id: "dining-area",
    title: "Dining Area",
    desc: "Elegant dining room centered on a marble table beneath a statement floral chandelier.",
    images: [
      {
        img: diningView1,
        width: 1500,
        height: 1500,
        caption: "Marble dining table under a floral chandelier, framed by a forest mural.",
      },
      {
        img: diningView2,
        width: 1500,
        height: 1500,
        caption: "A closer view highlights the horse painting and glass display shelving nearby.",
      },
    ],
  },
  {
    id: "jewellery-store",
    title: "Jewellery Store",
    desc: "Boutique jewellery showroom pairing gold accents with a double-height, plant-filled entry.",
    upcoming: true,
    images: [
      {
        img: jewelleryEntryView,
        width: 1440,
        height: 1600,
        caption: "Double-height entry lobby with trailing greenery, gold trim, and blue lounge seating.",
      },
      {
        img: jewelleryWaitingArea,
        width: 1440,
        height: 1600,
        caption: "Storefront lounge with patterned navy armchairs, a sofa, and portrait wall art.",
      },
      {
        img: jewelleryDisplays,
        width: 1440,
        height: 1600,
        caption: "Jewellery counter with glass display cases beneath an ornate patterned ceiling.",
      },
    ],
  },
];

export const projectsById = Object.fromEntries(projects.map((project) => [project.id, project]));

export const projectsSummary = projects.map((project) => ({
  slug: project.id,
  img: project.images[0].img,
  title: project.title,
  desc: project.desc,
  upcoming: project.upcoming,
}));

export default projects;
