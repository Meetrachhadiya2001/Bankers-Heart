import gallery1 from "@/public/gallery/img1.png";
import gallery2 from "@/public/gallery/img2.png";
import gallery3 from "@/public/gallery/img3.png";
import gallery4 from "@/public/gallery/img4.png";
import gallery5 from "@/public/gallery/img5.png";
import gallery6 from "@/public/gallery/img6.png";
import gallery7 from "@/public/gallery/img7.png";
import doctor1 from "@/public/expertDoctors/Doctor1.png";
import doctor2 from "@/public/expertDoctors/Doctor2.png";
import doctor3 from "@/public/expertDoctors/Doctor3.png";
import doctor4 from "@/public/expertDoctors/Doctor4.png";
import blog1 from "@/public/blogs/blog1.png";
import blog2 from "@/public/blogs/blog2.png";
import blog3 from "@/public/blogs/blog3.png";
import blogProfile from "@/public/blogs/blogProfile.png";
import HeroImage from "@/public/hero-image.png";

export const headerData1 = [
  {
    id: 1,
    title: "Specialties",
  },
  {
    id: 2,
    title: "About Us",
  },
  {
    id: 3,
    title: "Emergency",
  },
  {
    id: 4,
    title: "Treatments & Services",
  },
];

export const headerData2 = [
  {
    id: 5,
    title: "Online Consultation",
  },
  {
    id: 6,
    title: "Health Packages",
  },
  {
    id: 7,
    title: "Health Tips",
  },
  {
    id: 8,
    title: "Contact Us",
  },
];

export const galleryData = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
];

export const expertDoctors = [
  {
    id: 1,
    img: doctor1,
    name: "Dr. Rajesh Sharma",
    specialization: "Cardiology",
  },
  {
    id: 2,
    img: doctor2,
    name: "Dr. Meera Singh",
    specialization: "Dermatology",
  },
  {
    id: 3,
    img: doctor3,
    name: "Dr. Anil Verma",
    specialization: "Orthopedics",
  },
  {
    id: 4,
    img: doctor4,
    name: "Dr. Karan Patel",
    specialization: "Gynecology",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "How to Detect Early Signs of Heart Disease",
    description:
      "Spotting symptoms early can save lives. Find out what to watch for.",
    image: blog1,
    author: {
      name: "Dr. Rajesh Patel",
      image: blogProfile,
    },
    date: "Nov 20, 2024",
  },
  {
    id: 2,
    title: "Heart-Friendly Foods You Must Include in Your Diet",
    description: "Discover 10 superfoods that promote a healthy heart.",
    image: blog2,
    author: {
      name: "Nutritionist Priya Verma",
      image: blogProfile,
    },
    date: "Nov 15, 2024",
  },
  {
    id: 3,
    title: "The Role of Exercise in Cardiac Health",
    description:
      "Learn how regular physical activity can strengthen your heart.",
    image: blog3,
    author: {
      name: "Dr. Anil Kumar",
      image: blogProfile,
    },
    date: "Nov 10, 2024",
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Dedicated Human Touch",
    subtitle: "Best Medical Services in 1 Place",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna, tortor pulvinar dolor rhoncus.Tristique sit eros consectetur adipiscing elit.",
    image: HeroImage,
  },
  {
    id: 2,
    title: "Advanced Healthcare Solutions",
    subtitle: "Cutting-Edge Medical Technology",
    description:
      "Experience state-of-the-art medical care with our advanced diagnostic and treatment facilities, ensuring precise and effective healthcare solutions.",
    image: HeroImage,
  },
  {
    id: 3,
    title: "Compassionate Care",
    subtitle: "Your Health, Our Priority",
    description:
      "Our team of dedicated healthcare professionals is committed to providing personalized care and support throughout your medical journey.",
    image: HeroImage,
  },
];
