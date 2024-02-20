import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    aws,
    calendar,
    contact,
    css,
    firebase,
    flutter,
    gcp,
    git,
    github,
    html,
    javascript,
    linkedin,
    logpose,
    mongodb,
    nextjs,
    nodejs,
    python,
    react,
    tailwindcss,
    turners,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud computing platform",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "firebase",
        type: "Cloud computing Platform",
    },
    {
        imageUrl: flutter,
        name: "flutter",
        type: "Cross Plattofrm App Dev"
    },
    {
        imageUrl: gcp,
        name: "gcp",
        type: "Cloud computing platform",
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
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/YoungmanCH',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/feed/?trk=onboarding-landing',
    }
];

export const projects = [
    {
        iconUrl: logpose,
        theme: 'btn-back-purple',
        name: 'Logpose App',
        description: 'Circle Logpose is designed for managing club activities.',
        link: 'https://github.com/AppTeam-for-WINC/Circle-Logpost',
    },
    {
        iconUrl: calendar,
        theme: 'btn-back-red',
        name: 'Calendar App',
        description: 'To manage calendar.',
        link: 'https://github.com/YoungmanCH/calendar_repo',
    },
    {
        iconUrl: turners,
        theme: 'btn-back-green',
        name: 'Turners HP',
        description: 'Circle HP to research Web3 and blockchain.',
        link: 'https://youngmanch.github.io/Turners_hp/',
    },
];