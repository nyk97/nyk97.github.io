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
      link: "https://apkpure.net/stumpy-trump/com.crystalvision.StumpyTrump",
      image: stumpyTrumpImage,
    },
    {
      title: "SuperPako (2018)",
      description:
        "An educational game developed as a solution for peer violence, consisting of interactive stories that could happen in real life.",
      technologies: "Unity",
      link: "https://apkpure.com/%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BF%D0%B0%D0%BA%D0%BE/com.intc.heado.bullying",
      awards:
        "1st place in a competition organized by SmartUp - Social Innovation Lab and UNICEF (November 18, 2018)",
      image: superPakoImage,
    },
    {
      title: "Get Inspired - Motivational Quotes (2021)",
      description:
        "An Android app that provides motivational quotes to inspire users. The app is designed to deliver daily quotes to keep users motivated and positive.",
      technologies: "Android Development",
      link: "https://apkpure.com/get-inspired-motivation-quot/com.intc.myapplication/amp",
      image: getInspiredImage,
    },
  ],
  web: [
    {
      title: "Marko Cepenkov Institute of Folklore - Skopje (2020 - Present)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "An institutional governmental website. Managed cPanel, VPS, and emails.",
      technologies: "WordPress (creating new theme and archive), Figma",
      link: "http://ifmc.ukim.mk",
    },
    {
      title: "Agroglobal DOOEL SKOPJE (2021 - Present)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "A website for selling agriculture products. Managed cPanel, VPS, and emails.",
      technologies: "WordPress, Elementor, WooCommerce",
      link: "http://agroglobal.mk",
    },
    {
      title: "TAV Skopje International Airport (2023)",
      role: "Front-End Developer",
      description:
        "Built the  Admin Panel's front-end for the TAV airport in Skopje.",
      technologies: "React, TailwindCSS, Redux",
      link: "http://devtavadmin.mk-host.mk/",
    },
    {
      title: "NeatDollar Business Forum (2021 - Present)",
      role: "UI/UX Designer, Creator, and Manager",
      description:
        "A business website providing financial advice. Managed cPanel, VPS, and emails.",
      technologies: "WordPress, Elementor, Figma",
      link: "http://neatdollar.com",
    },
    {
      title:
        "Alobushavko - First Children's Embaassy in the World - Megjashi (2022 - Present)",
      role: "UI/UX Designer, Developer",
      description: "Recreated, fixed bugs, and resolved hosting problems.",
      technologies: "Joomla, Figma",
      link: "http://alobushavko.mk",
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
        "Designed and programmed a desktop app for the First Children's Embassy in the World - Megjashi. The app serves as an archive and library.",
      technologies: "React Native, Node.js",
      link: "https://shorturl.at/PEGj0",
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
      status: "Platform is not currently available",
    },
  ],
};

export default projectsData;
