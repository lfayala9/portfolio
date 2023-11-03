import { FakeLogo, FakeAPILogo, ShopLogo, ShopLogoAPI, SketchLogo } from "./Logos";

const projects =  [
    {
        id: 1,
        name: 'Fake Social',
        description: 'Dummy social network with user authentication and post/user creation',
        github: 'https://github.com/lfayala9/fakeSocial',
        tech: ['React', 'Redux', 'TypeScript', 'Material UI', 'Vite'],
        logo: FakeLogo,
        isFront: true,
        url: 'https://fake-social.vercel.app/'
    },
    {
        id:2,
        name: 'Fake Social API',
        description: 'Social network backend with database connection and cloud service implementation',
        github: 'https://github.com/lfayala9/social-back',
        tech: ['NodeJS', 'Javascript', 'Express', 'MongoDB', 'Firebase', 'Socket.IO'],
        logo: FakeAPILogo,
        isFront: false
    },
    {
        id:3,
        name: 'A-Shop',
        description: 'Dummy Shop frontend project with user authentication, one of my first projects',
        github: 'https://github.com/lfayala9/shop-next',
        tech: ['React', 'Javascript', 'NextJS', 'Bootstrap', 'SASS'],
        logo: ShopLogo,
        isFront: true,
        url: 'https://shop-next-woad.vercel.app/'
    },
    {
        id:4,
        name: 'A-Shop API',
        description: 'Shop backend with database connection and ORM implementation',
        github: 'https://github.com/lfayala9/shop-nextBack',
        tech: ['NodeJS', 'Javascript', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
        logo: ShopLogoAPI,
        isFront: false
    },
    {
        id:4,
        name: 'Sketch Board',
        description: 'Simple Sketch board to draw, made with JS and CSS only. My first real project',
        github: 'https://github.com/lfayala9/sketch',
        tech: ['Javascript Vanilla', 'CSS', 'HTML', 'Github Pages'],
        logo: SketchLogo,
        isFront: true,
        url: 'https://lfayala9.github.io/sketch/'
    }
]

export default projects;