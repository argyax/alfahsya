import { bisnis, hemat, strategi } from "../assets";
import { delivery, support, vector} from "../assets"
import { electronics, gym, furniture, cleaning } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Proses Kami",
    url: "#proses-kami",
  },
  {
    id: "1",
    title: "Kategori",
    url: "#kategori",
  },
  {
    id: "2",
    title: "FaQ",
    url: "#faq",
  },
  {
    id: "3",
    title: "Hubungi Kami",
    url: "#kontak",
    onlyMobile: true,
  },
];


export const services = [
  {
    id: "0",
    img: bisnis,
    title: "Sumber yang efisien dan dapat diandalkan solusi untuk bisnis Anda",
    text: "Layanan pengadaan kami mencakup semuanya mulai dari identifikasi pemasok hingga negosiasi dan pengiriman.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    img: strategi,
    title: "Strategi pengadaan yang disesuaikan dengan kebutuhan Anda",
    text: "Kami bekerja sama dengan tim Anda untuk memahami kebutuhan Anda dan mengembangkan strategi pengadaan yang efektif.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",  
  },
  {
    id: "2",
    img: hemat,
    title: "Solusi hemat biaya untuk proses pengadaan Anda",
    text: "Kami membantu Anda mengidentifikasi peluang penghematan biaya dan menerapkan praktik pengadaan yang efisien.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
];

export const proses = [
  {
    id: "0",
    icon: vector,
    title: "Mencari barang terbaik dengan harga bersaing",
    text: "Kami dengan cermat memilih pemasok dan menegosiasikan penawaran terbaik untuk memberi Anda barang berkualitas tinggi dengan harga bersaing.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    icon: delivery,
    title: "Pengiriman efisien sampai ke depan pintu Anda",
    text: "Proses pengiriman kami yang efisien memastikan barang Anda dikirim ke depan pintu Anda secara tepat waktu dan efisien.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "2",
    icon: support,
    title: "Dukungan pelanggan yang andal untuk semua pertanyaan Anda.",
    text: "Tim dukungan pelanggan kami yang berdedikasi tersedia 24/7 untuk membantu Anda dengan pertanyaan atau masalah apa pun yang mungkin Anda miliki.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
];

export const products = [
  {
    id: "0",
    image: furniture,
    title: "Furnitur",
    text: "Kami dengan cermat memilih pemasok dan menegosiasikan penawaran terbaik untuk memberi Anda barang berkualitas tinggi dengan harga bersaing.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    image: gym,
    title: "Alat Olahraga",
    text: "Proses pengiriman kami yang efisien memastikan barang Anda dikirim ke depan pintu Anda secara tepat waktu dan efisien.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "2",
    image: electronics,
    title: "Elektronik",
    text: "Tim dukungan pelanggan kami yang berdedikasi tersedia 24/7 untuk membantu Anda dengan pertanyaan atau masalah apa pun yang mungkin Anda miliki.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: "3",
    image: cleaning,
    title: "Alat Bersih-bersih",
    text: "Tim dukungan pelanggan kami yang berdedikasi tersedia 24/7 untuk membantu Anda dengan pertanyaan atau masalah apa pun yang mungkin Anda miliki.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
];

export const portfolio = [
  {
    id: "0",
    image: furniture,
    title: "Project name here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    hashtag1:"Tag One",
    hashtag2:"Tag Two",
    hashtag3:"Tag Three"
  },
  {
    id: "1",
    image: gym,
    title: "Project name here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    hashtag1:"Tag One",
    hashtag2:"Tag Two",
    hashtag3:"Tag Three"
  },
  {
    id: "2",
    image: electronics,
    title: "Project name here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    hashtag1:"Tag One",
    hashtag2:"Tag Two",
    hashtag3:"Tag Three"
  },
];

export const testimonies = [
  {
    id: "0",
    image: furniture,
    institution: "Universitas Mulawarman",
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    profilepic: "",
    profile: "John Doe",
    company: "Unmul",
  },
  {
    id: "1",
    image: gym,
    institution: "Universitas Mulawarman",
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    profilepic: "",
    profile: "John Doe",
    company: "Unmul",
  },
  {
    id: "2",
    image: electronics,
    institution: "Universitas Mulawarman",
    quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
    profilepic: "",
    profile: "John Doe",
    company: "Unmul",
  },
];
