import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main description="Christopher Celaya's personal website. El Paso based">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About Myself</Link></h2>
          <p> </p>
        </div>
      </header>
      <p>
        I am Christopher Celaya, a results-driven and innovative engineer deeply immersed in the
        fascinating world of computer science, artificial intelligence, and mechatronics. Based in
        the vibrant city of El Paso, Texas, I have dedicated my career to blending the meticulous
        world of software development with the dynamic realm of industrial technology. With
        extensive experience under my belt, I have had the privilege of contributing to cutting-edge
        projects and tackling challenging roles, from a Data Center Technician at T5 Data Centers
        to a hands-on Mechatronics Technician at CN Wire.
      </p>
      <p>
        My journey in technology began with a passion for understanding how things work, leading me
        to explore various fields of engineering and programming. I have attended courses in
        Electronics Engineering Technology and dabbled in Electrical Engineering & Computer
        Science, always eager to expand my knowledge and apply it to real-world challenges. Whether
        it is developing software solutions or maintaining and repairing industrial machinery, my
        goal has always been to enhance efficiency, reliability, and safety in every project I
        undertake.
      </p>
      <p>
        As a self-taught programmer proficient in languages like C, Python, and JavaScript, I have
        developed a knack for creating innovative solutions that bridge the gap between digital and
        physical worlds. My hands-on experience with pneumatic, hydraulic, water, and electrical
        systems has equipped me with a versatile skill set, enabling me to manage and maintain
        complex systems with ease. Beyond technical skills, I value communication, collaboration,
        and creativity, believing that these qualities are essential in driving projects to success
        and pushing the boundaries of what is possible.
      </p>
      <p>
        Learn more about my professional work <a href="https://www.chriscelaya.xyz/resume">www.chriscelaya.xyz</a>. I am
        constantly on the lookout for new challenges and opportunities to apply my skills towards
        the growth and success of forward-thinking organizations.
      </p>
    </article>
  </Main>
);

export default Index;
