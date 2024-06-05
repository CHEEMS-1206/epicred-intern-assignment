import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="text-white text-center py-20 banner-section">
      <div>
        <h1 className="text-4xl font-bold">Your Trusted Partner In</h1>
        <span id="edu-fin">Educational Finance</span>
      </div>
      <Image
        src="/banner-image.png"
        alt="Banner Image"
        width={400}
        height={372}
      />
    </section>
  );
};

export default Banner;
