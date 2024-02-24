// PopularCourses helper functions and data

import { CourseFilter, CoursesList } from "./PopularCourses.types";

export const popularCategories: CourseFilter[] = [
  "Ui/Ux Design",
  "Frontend development",
  "Backend Development",
  "Testing",
  "All Programme",
];

export const coursesList: CoursesList = {
  "Ui/Ux Design": [
    {
      id: 1,
      name: "Complete Web Design: from Figma to Webflow",
      description:
        "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
      price: 500,
      discount: 10,
      period: "1 - 30 July 2023",
      students: 2000,
      image:
        "https://cdn.pixabay.com/photo/2020/01/26/21/57/computer-4796017_1280.jpg",
    },
    {
      id: 2,
      name: "Complete Web & Mobile Designer in 2023: UI/UX, Figma",
      description:
        "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
      price: 700,
      discount: 0,
      period: "1 - 30 October 2023",
      students: 400,
      image:
        "https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg",
    },
    {
      id: 3,
      name: "Figma UI UX Design Essentials",
      description:
        "Use Figma to get a job in UI Design, User Interface, User Experience design, UX Design & Web Design",
      price: 490,
      discount: 20,
      period: "1 - 30 September 2023",
      students: 1500,
      image:
        "https://cdn.pixabay.com/photo/2021/01/09/23/28/mobile-5903726_1280.png",
    },
    {
      id: 4,
      name: "User Experience Design Essentials - Adobe XD UI UX Design",
      description:
        "Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design",
      price: 600,
      discount: 5,
      period: "15 - 30 July 2023",
      students: 250,
      image:
        "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",
    },
  ],
  "Frontend development": [
    {
      id: 5,
      name: "React - The Complete Guide 2023",
      description:
        "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!",
      price: 800,
      discount: 25,
      period: "1 - 30 September 2023",
      students: 20000,
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      name: "Vue - The Complete Guide",
      description:
        "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
      price: 400,
      discount: 10,
      period: "1 - 30 July 2023",
      students: 100,
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 7,
      name: "Angular - The Complete Guide",
      description:
        "Master Angular and build awesome, reactive web apps with the successor of Angular.js",
      price: 640,
      discount: 10,
      period: "1 - 30 October 2023",
      students: 500,
      image:
        "https://cdn.pixabay.com/photo/2017/09/05/10/20/business-2717066_1280.jpg",
    },
    {
      id: 8,
      name: "Complete Next.js Developer in 2023: Zero to Mastery",
      description:
        "Master NextJS and build enterprise level fullstack ReactJS apps. Taught by industry expert, using modern best practices",
      price: 200,
      discount: 0,
      period: "1 - 30 July 2023",
      students: 20000,
      image:
        "https://cdn.pixabay.com/photo/2019/05/31/09/16/business-4241792_1280.jpg",
    },
  ],
  "Backend Development": [
    {
      id: 9,
      name: "The Complete Python Bootcamp From Zero to Hero in Python",
      description:
        "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
      price: 400,
      discount: 10,
      period: "1 - 30 July 2023",
      students: 20300,
      image:
        "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 10,
      name: "NodeJS - The Complete Guide",
      description:
        "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
      price: 700,
      discount: 20,
      period: "1 - 30 December 2023",
      students: 30000,
      image:
        "https://cdn.pixabay.com/photo/2017/11/16/09/32/matrix-2953869_1280.jpg",
    },
    {
      id: 11,
      name: "Beginning C++ Programming ",
      description:
        "Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17 covered. C++20 info see below.",
      price: 500,
      discount: 10,
      period: "1 - 30 July 2023",
      students: 2000,
      image:
        "https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 12,
      name: "Fundamentals of Backend Engineering",
      description:
        "Understand backend communication design patterns, protocols, execution and proxying",
      price: 200,
      discount: 0,
      period: "1 - 30 October 2023",
      students: 100,
      image:
        "https://images.unsplash.com/photo-1641156803026-0b819059b04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
  ],
  Testing: [
    {
      id: 13,
      name: "The Complete 2023 Software Testing Bootcamp",
      description: "Everything you need to learn about software testing.",
      price: 500,
      discount: 10,
      period: "1 - 30 July 2023",
      students: 2000,
      image:
        "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 14,
      name: "Practical Software Testing 2023-Manual+JIRA+API",
      description:
        "Practical Manual Testing | Bug Reporting and Task Management with JIRA | Database Testing | Selenium with Python",
      price: 200,
      discount: 0,
      period: "1 - 30 October 2023",
      students: 200,
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80",
    },
    {
      id: 15,
      name: "MasterClass Software Testing with Jira & Agile -Be a QA Lead",
      description:
        "2023 BEST job oriented Software Manual Testing course on real time Project+Interview ques+Resume Prep+ Lifetime Support",
      price: 700,
      discount: 50,
      period: "1 - 30 December 2023",
      students: 20000,
      image:
        "https://images.unsplash.com/photo-1606146485711-5d99036d3544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 16,
      name: "Software Testing Masterclass",
      description:
        "Learn software testing and become QA Engineer/Agile Tester. Mobile/Backend/Web/QA testing. JIRA, TestRail & much more!",
      price: 100,
      discount: 0,
      period: "1 - 30 July 2023",
      students: 200,
      image:
        "https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ],
};
