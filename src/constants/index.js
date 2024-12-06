import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend nodejs Developer",
      icon: backend,
    },
    {
      title: "Software developer ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name:"figma",
      icon: figma,
    },
    {
      name:"git",
      icon: git,
    },
    {
      name:"tailwind",
      icon: tailwind,
    },
    {
      name:"sql",
      icon: sql
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Machine Learning",
      icon: typescript,
    },
    {
      name: "Artificial Intelligence",
      icon: redux,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Secondary High school",
      company_name: "Sri chaitanya",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2018 - March 2019",
      points: [
        "I completed my Primary High School with distinction, achieving a decent CGPA of 8.8.",
        
      ],
    },
    {
      title: "Intermediate education",
      company_name: "Aditya junior college",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2019 - March 2021",
      points: [
        "I completed my Secondary High School Science Stream with distinction, achieving a remarkable Percentage of 95.6",
        
      ],
    },
    {
      title: "Engineering-Btech",
      company_name: "SRM",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2021 - present",
      points: [
        "During my B.Tech education, I gained a solid foundation in core subjects such as Data Structures, Algorithms, Database Management Systems, and Operating Systems.",
        "These subjects equipped me with essential problem-solving skills and a strong understanding of computer science principles, preparing me for real-world challenges.",
        "d I've been maintaining a decent CGPA of 8.77 •This reflects my commitment to doing well academically and staying updated with technology."
       
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nutriton tracker",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };