import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Foreword</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
         I am currently pursuing a B.Sc. in Information Systems at Kongu Engineering College, where I have maintained an impressive academic record with 
                    a GPA of 8.5%. I completed my schooling at Sri Vidhya Mandhir Matric Higher Secondary School, achieving a score of 8.4%. 
                    My passion for technology drives me to explore 
                    various fields, including Figma, Spring Boot, and Operating Systems.I am committed to expanding 
                    my technical knowledge and skills by continuously seeking new learning opportunities. Recently, 
                    I completed a mini project focused on a School Management System using MySQL and developed a simple web application with Spring Boot.My participation in ideathons, hackathons, and coding contests has provided me with valuable exposure and hands-on experience in collaborative problem-solving and innovative thinking. I am excited about the future and eager to continue exploring and contributing to the ever-evolving tech landscape.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
