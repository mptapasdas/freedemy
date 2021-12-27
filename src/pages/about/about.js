import React, { useEffect } from "react";
import "./about.css";
import whyReadImage from "../../assets/why-read.png";

// let sampleCourse = {
//   code: 0,
//   title: "Flutter Tutorial for Beginners",
//   instructor: "The Net Ninja",
//   description:
//     "Hey gang, in this Flutter tutorial for beginners, I'll give you a quick introduction to the course and Flutter itself, a preview of what we'll be building & finally show you how to install Flutter on your computer.",
//   imageurl: "https://img.youtube.com/vi/1ukSR1GRtMU/maxresdefault.jpg",
//   courseurl:
//     "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
//   tags: ["flutter", "dart"],
// };

const About = () => {
  useEffect(() => {
    document.title = "Freedemy | About";
  });
  return (
    <div className='h-100'>
      <div className='about-container'>
        <p className='about-para-1'>
          Learn any course from a ton of free courses
        </p>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <img src={whyReadImage} className='why-read-image' alt='' />
            </div>
            <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <p className='about-para-2'>
                Every course provided here are handpicked, are of best quality
                and from best instructors all over internet.
                <br />
                Enhance your skills to the fullest without spending a single
                penny. Mark your favourite course from all the courses and learn
                them at your pace.
              </p>
            </div>
          </div>
        </div>
        <p className='about-para-2 mt-auto'>
          Please note that the app is still in development phase and this is not
          the final product
        </p>
      </div>
    </div>
  );
};

export default About;
