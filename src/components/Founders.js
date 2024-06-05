import React from "react";
import Image from "next/image";

const Founders = () => {
  return (
    <section className="p-8 founders-section">
      <h2
        className="text-2xl font-bold mb-4 section-title"
        style={{ color: "white" }}
      >
        Meet Our <span className="sub-title-section"> Founders</span>
      </h2>
      <div className="flex space-x-4 founder-image-holder">
        <div className="p-4">
          <Image
            src="/founder-1.jpg"
            alt="Founder 1"
            width={400}
            height={450}
            className="founder-image"
          />
        </div>
        <div className="p-4">
          <Image
            src="/founder-2.jpg"
            alt="Founder 2"
            width={400}
            height={450}
            className="founder-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
