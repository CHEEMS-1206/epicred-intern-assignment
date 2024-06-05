import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="p-8 services-section">
      <h2 className="text-2xl font-bold mb-4 section-title">
        Our <span className="sub-title-section">Services</span>
      </h2>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="p-4 services-images-container r">
          <Image
            className="services-image"
            src="/cash.png"
            alt="Service 1"
            width={120}
            height={120}
          />
          <h2>Hassle free loans</h2>
        </div>
        <div className="p-4 services-images-container g">
          <Image
            className="services-image"
            src="/bank.png"
            alt="Service 2"
            width={120}
            height={120}
          />
          <h2>Wide lenders network</h2>
        </div>
        <div className="p-4 services-images-container y" >
          <Image
            className="services-image"
            src="/verified.png"
            alt="Service 3"
            width={120}
            height={120}
          />
          <h2>Personalised expert assistance</h2>
        </div>
        <div className="p-4 services-images-container b ">
          <Image
            className="services-image"
            src="/clear.png"
            alt="Service 4"
            width={120}
            height={120}
          />
          <h2>No hidden charges</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 services-images-container b">
          <Image
            className="services-image"
            src="/less-interest.png"
            alt="Service 5"
            width={120}
            height={120}
          />
          <h2>Low interest rates</h2>
        </div>
        <div className="p-4 services-images-container y">
          <Image
            className="services-image"
            src="/housing.png"
            alt="Service 6"
            width={120}
            height={120}
          />
          <h2>Loan without colateral</h2>
        </div>
        <div className="p-4 services-images-container g">
          <Image
            className="services-image"
            src="/collateral.png"
            alt="Service 7"
            width={120}
            height={120}
          />
          <h2>Disbursement guarantee</h2>
        </div>
        <div className="p-4 services-images-container r">
          <Image
            className="services-image"
            src="/documents.png"
            alt="Service 8"
            width={120}
            height={120}
          />
          <h2>Documents pickup</h2>
        </div>
      </div>
    </section>
  );
};

export default Services;
