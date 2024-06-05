import React from "react";
import Image from "next/image";

const VisionMission = () => {
  return (
    <section className="p-8 mission-vision-section">
      <h2 className="text-2xl font-bold mb-4 section-title">
        Our <span className="sub-title-section">Vision and Mission</span>
      </h2>

      <div className="component-holder">
        <div className="flex space-x-4">
          <div className="p-4 flex-1 mis-vis-comp" id="missionImage">
            <Image
              className="image-mis-vis"
              src="/goal.png"
              alt="Banner Image"
              width={200}
              height={175}
            />
            <p>
              Our vision is to enable individuals to realize their educational
              aspirations by offering transparent and affordable loans, free
              from hidden charges and collateral requirements.
            </p>
          </div>
          <div className="p-4 flex-1 mis-vis-comp" id="visionImage">
            <Image
              className="image-mis-vis"
              src="/vision.png"
              alt="Banner Image"
              width={200}
              height={175}
            />
            <p>
              <span className="sub-title-section" style={{fontSize : "17px", fontWeight : "500"}}>EpiCred</span> is committed to
              making education financing accessible to all, ensuring that every
              student can pursue their academic dreams without financial
              barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
