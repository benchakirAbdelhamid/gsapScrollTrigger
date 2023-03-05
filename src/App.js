import React, { useEffect, useRef } from "react";
import './App.css';
import bg from './img/bg.jpg'
import man from './img/man.png'
import clouds_1 from './img/clouds_1.png'
import clouds_2 from './img/clouds_2.png'
import mountain_left from './img/mountain_left.png'
import mountain_right from './img/mountain_right.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef(null);
  const bgImg = useRef(null);
  const manImg = useRef(null);
  const mountain_leftGsap = useRef(null);
  const mountain_rightGsap = useRef(null);
  const cloud1Gsap = useRef(null);
  const cloud2Gsap = useRef(null);
  const textGsap = useRef(null);
  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(bgImg.current, { scrollTrigger: { scrub: 1 }, scale: 1.5, duration: 2 });
    gsap.to(manImg.current, { scrollTrigger: { scrub: 1 }, scale: 0.5, duration: 2 });
    gsap.to(mountain_leftGsap.current, { scrollTrigger: { scrub: 1 }, x: -500, duration: 3 });
    gsap.to(mountain_rightGsap.current, { scrollTrigger: { scrub: 1 }, x: 500, duration: 3 });
    gsap.to(cloud1Gsap.current, { scrollTrigger: { scrub: 1 }, x: 200, duration: 3 });
    gsap.to(cloud2Gsap.current, { scrollTrigger: { scrub: 1 }, x: -200, duration: 3 });
    gsap.to(textGsap.current, { scrollTrigger: { scrub: 1 }, y: 500, duration: 3 });
  }, []);

  return (
    <>
      <section>
        <img ref={bgImg} src={bg} id='bg' alt='' />
        <h2 ref={textGsap} id='text'>Hello word</h2>
        <img ref={manImg} src={man} id='man' alt='' />
        <img ref={cloud1Gsap} src={clouds_1} id='clouds_1' alt='' />
        <img ref={cloud2Gsap} src={clouds_2} id='clouds_2' alt='' />
        <img ref={mountain_leftGsap} src={mountain_left} id='mountain_left' alt='' />
        <img ref={mountain_rightGsap} src={mountain_right} id='mountain_right' alt='' />
      </section>

      <div className='sec'>
        <h2>ScrollTrigger is Awesome</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error corporis sapiente assumenda amet est, adipisci mollitia, voluptate culpa quaerat natus labore, enim officiis ad esse reiciendis blanditiis aliquid nemo cupiditate at ex in obcaecati laudantium nobis. Recusandae deserunt cum iusto commodi dolor, ipsa nihil, tenetur quia voluptas aliquid quasi? Consequuntur, deserunt eius modi repellat, veritatis molestiae doloremque culpa inventore cumque harum, earum magni voluptatibus maxime nemo quod nesciunt aperiam ea illum sint odio provident illo? Pariatur id et totam tempora rem quasi fugiat, officia, architecto voluptate sed dolore corrupti officiis quas exercitationem? Impedit in minus, nesciunt ducimus laborum voluptatum?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error corporis sapiente assumenda amet est, adipisci mollitia, voluptate culpa quaerat natus labore, enim officiis ad esse reiciendis blanditiis aliquid nemo cupiditate at ex in obcaecati laudantium nobis. Recusandae deserunt cum iusto commodi dolor, ipsa nihil, tenetur quia voluptas aliquid quasi? Consequuntur, deserunt eius modi repellat, veritatis molestiae doloremque culpa inventore cumque harum, earum magni voluptatibus maxime nemo quod nesciunt aperiam ea illum sint odio provident illo? Pariatur id et totam tempora rem quasi fugiat, officia, architecto voluptate sed dolore corrupti officiis quas exercitationem? Impedit in minus, nesciunt ducimus laborum voluptatum?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error corporis sapiente assumenda amet est, adipisci mollitia, voluptate culpa quaerat natus labore, enim officiis ad esse reiciendis blanditiis aliquid nemo cupiditate at ex in obcaecati laudantium nobis. Recusandae deserunt cum iusto commodi dolor, ipsa nihil, tenetur quia voluptas aliquid quasi? Consequuntur, deserunt eius modi repellat, veritatis molestiae doloremque culpa inventore cumque harum, earum magni voluptatibus maxime nemo quod nesciunt aperiam ea illum sint odio provident illo? Pariatur id et totam tempora rem quasi fugiat, officia, architecto voluptate sed dolore corrupti officiis quas exercitationem? Impedit in minus, nesciunt ducimus laborum voluptatum?
        </p>

      </div>

    </>
  );
}

export default App;
