import stumpyTrumpImage from "../assets/stumpyTrump.jpg";
import superPakoImage from "../assets/superPako.webp";
import getInspiredImage from "../assets/getInspired.webp";

const projectsData = {
  mobile: [
    {
      title: "Stumpy Trump (2016)",
      description:
        "An Android game designed and built for the Google Play Store.",
      technologies: "Unity",
      link: "link-to-google-play-store",
      image: stumpyTrumpImage,
    },
    {
      title: "SuperPako (2018)",
      description:
        "An educational game developed as a solution for peer violence, consisting of interactive stories that could happen in real life.",
      technologies: "Unity",
      link: "link-to-apk",
      awards:
        "1st place in a competition organized by SmartUp - Social Innovation Lab and UNICEF (November 18, 2018)",
      image: superPakoImage,
    },
    {
      title: "Get Inspired - Motivational Quotes (2021)",
      description:
        "An Android app that provides motivational quotes to inspire users. The app is designed to deliver daily quotes to keep users motivated and positive.",
      technologies: "Android Development",
      link: "link-to-apkpure",
      image: getInspiredImage,
    },
  ],
  web: [
    {
      title: 'Институт за фолклор "Марко Цепенков" - Скопје (2020 - Present)',
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "An institutional governmental website. Managed cPanel, VPS, and emails.",
      technologies: "WordPress (creating new theme and archive), Figma",
      link: "http://ifmc.ukim.mk",
    },
    {
      title: "agroglobal.mk (2021)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "A website for selling agriculture products. Managed cPanel, VPS, and emails.",
      technologies: "WordPress, Elementor, WooCommerce",
      link: "http://agroglobal.mk",
    },
    {
      title: "neatdollar.com (2021 - Present)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "A business website providing financial advice. Managed cPanel, VPS, and emails.",
      technologies: "WordPress, Elementor, Figma",
      link: "http://neatdollar.com",
    },
    {
      title: "alobushavko.mk (2021)",
      role: "UI/UX Designer, Developer",
      description:
        "Recreated, fixed bugs, and resolved hosting problems for a website by Megjashi.",
      technologies: "Joomla, Figma",
      link: "http://alobushavko.mk",
    },
    {
      title: "TAV Airport Admin Panel (2023)",
      role: "Front-End Developer",
      description:
        "Built the admin panel's front-end for the TAV airport in Skopje.",
      technologies: "React",
      link: "http://example.com/tav-admin-panel",
    },
    {
      title: "Invoice Management App (2023)",
      role: "UI/UX Designer, Developer",
      description:
        "Designed and programmed a desktop app for invoice management.",
      technologies: "Spring Boot, Java, JSP, MySQL",
    },
    {
      title: "Megjashi Archive and Library App (2024)",
      role: "UI/UX Designer, Developer",
      description:
        "Designed and programmed a desktop app for the First Children's Embassy in the world, Megjashi. The app serves as an archive and library.",
      technologies: "React Native, Node.js",
    },
    {
      title: "Vremezamene.mk (2020)",
      role: "Developer",
      description:
        "Programmed a platform for cosmetic salons to have a store page. This platform functions as a CMS with admin login, user login, registration, and appointment management.",
      technologies: "Spring Boot, Java, JSP, MySQL",
      status: "Platform is not currently available",
    },
    {
      title: "hipotomi.eu (2018)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "A website for Medical Equipments from Turkey in Macedonia. Managed cPanel, VPS, and emails.",
      technologies: "WordPress (Theme: Astra), Figma",
      status: "Not available currently",
    },
  ],
};

export default projectsData;
