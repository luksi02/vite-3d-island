import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "TBD",
        company_name: "TBD",
        icon: null,
        iconBg: "#accbe1",
        date: "TBD",
        points: [
            "TBD",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/luksi02',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lukasz-gniewek/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-orange',
        name: '3D-Portfolio',
        description: 'A website portfolio of completed projects, with basic 3D animations using the ThreeJS, ReactJS, and TailwindCSS libraries.',
        link: 'https://vite-3d-island.vercel.app/',
        githubLink: 'https://github.com/luksi02/vite-3d-island'
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://luksi02-carhub.vercel.app/',
        githubLink: 'https://github.com/luksi02/luksi02_carhub'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'CS50',
        description: 'Harvard University’s introduction to the intellectual enterprises of computer science and the art of programming.',
        // link: 'https://github.com/luksi02/CS50',
        githubLink: 'https://github.com/luksi02/CS50'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'MERN_Memories',
        description: 'Meta’s Threads clone - an social media communicator. Uses React and Tailwind CSS for frontend, and Next.js, Node.js and MongoDB as backend. Also uses Clerk.js for user authentication. App in development.',
        // link: 'https://github.com/luksi02/mern_memories',
        githubLink: 'https://github.com/luksi02/mern_memories'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Meta’s Threads clone - an social media communicator. Uses React and Tailwind CSS for frontend, and Next.js, Node.js and MongoDB as backend. Also uses Clerk.js for user authentication. App in development.',
        // link: 'https://github.com/luksi02/luksi02_threads_clone',
        githubLink: 'https://github.com/luksi02/luksi02_threads_clone'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'MERN_Image_Generator',
        description: 'An Midjourney/DALL-E AI image generator (using OpenAIs DALL-E API), written in React with Tailwind CSS (frontend) and Express.js, Node.js and MongoDB as backend.',
        link: 'https://mern-image-generator.vercel.app/',
        githubLink: 'https://github.com/luksi02/MERN_Image_Generator'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'MOVIE_APP',
        description: 'Internet film base created in React framework, that uses Redux Toolkit for app state managment, film database from OMBD (through API).',
        // link: 'https://github.com/luksi02/React-Redux-Toolkit_Movie_App',
        githubLink: 'https://github.com/luksi02/React-Redux-Toolkit_Movie_App'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'AGONY',
        description: 'Simple, text based RPG game, built using Django framework and databses. Game is still in development, I inted to upgrade it with JavaScript elements (frontend) and AI-based text generator (OpenAI, as in-game narrator) and perhaps AI-based graphic generator (DALL-E)',
        // link: 'https://github.com/luksi02/AGONy',
        githubLink: 'https://github.com/luksi02/AGONy'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'FAKESHOP',
        description: 'Web app for viewing and purchasing products. Created in React, uses Redux for apps state managment and uses Fake Store API as store database.',
        // link: 'https://github.com/luksi02/JS_React_Redux_Fakeshop',
        githubLink: 'https://github.com/luksi02/JS_React_Redux_Fakeshop'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'THE ROOM',
        description: 'Web app for conference room reservation/managment (Django framework).',
        // link: 'https://github.com/luksi02/The_Room',
        githubLink: 'https://github.com/luksi02/The_Room'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'JEDZONKO - SCURMLAB',
        description: 'Web app built in 5-person team while working on two-week long sprint developing app for creation of daily (weekly) nutrition plans, using Scrum methodology for progress managment.',
        // link: 'https://github.com/luksi02/Jedzonko---ScrumLab',
        githubLink: 'https://github.com/luksi02/Jedzonko---ScrumLab'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'ODDAM W DOBRE RĘCE',
        description: 'Web app for easy reporting items for donations to charity organisations (Django framework).',
        // link: 'https://github.com/luksi02/oddam_w_dobre_rece',
        githubLink: 'https://github.com/luksi02/oddam_w_dobre_rece'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'REACT_REDUX_JAVASCRIPT',
        description: 'Repository consisting of various, simple scripts written in React-Redux, React and pure JS.',
        // link: 'https://github.com/luksi02/React_Redux_JavaScript',
        githubLink: 'https://github.com/luksi02/React_Redux_JavaScript'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'DRF',
        description: 'Web app to manage/add images using Django REST Framework.',
        // link: 'https://github.com/luksi02/DRF',
        githubLink: 'https://github.com/luksi02/DRF'
    },
];
