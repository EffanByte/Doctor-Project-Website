import React, { useEffect, useRef } from "react";
import "./Home.css";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomePricing from "../../Components/HomePricing/HomePricing";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomeServices from "../../Components/HomeServices/HomeServices";
import AboutUs from "../../../AboutUs/AboutUs";
import Satisfaction from "../../Components/SatisfactionDetail/Satisfaction";
import PlanDetail from "../../Components/PlanDetail/PlanDetail";
export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInLeft"); // Add animation class on intersect
        }
      },
      {
        threshold: 0.5, // This means the animation triggers when 50% of the item is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up for the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="homecontainer">
        <HomeSlider />
       <PlanDetail/>
        <HomeServices />
        {/* <div class="section-title">
            <h2>Features</h2>
            <p>Check our Features</p>
        </div> */}
        {/* <div className="features slide-in-elliptic-top-fwd">
          <HomeFeatures />
        </div> */}
        <div class="section-title" style={{marginTop:"2rem"}}>
            <h2>Plans</h2>
            <p>Check our Plans</p>
        </div>
        <div className="features">
          <HomePricing />
        </div>
        <Satisfaction />
        <AboutUs />
      </div>



      {/* <div ref={ref} className="elementToAnimate">
        <div className="features">
          <HomePricing />
        </div>
      </div> */}
    </>
  );
}
