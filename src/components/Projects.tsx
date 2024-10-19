
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  {  
    id: 0,
    title: "Static Interactive Resume ",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/static Resume.jpg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },  
  {  
    id: 1,
    title: "Dynamic Resume",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/Dynamic Resume.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {  
    id: 2,
    title: "Project # 3 ",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/Project 3.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {  
    id: 3,
    title: "Project # 4 ",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/Project 4.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {  
    id: 4,
    title: "Project # 5 ",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/Project 5.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {  
    id: 5,
    title: "Project # 6 ",
    desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing user to showcase their skills dynamicslly",
    img: "/Project 6.jpeg",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
         
];

const Projects = () =>  {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
