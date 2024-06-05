import React from "react";

const ImpactNumbers = () => {
  return (
    <section className="p-8 flex imp-num-section">
      <h2 className="text-2xl font-bold mb-4 section-title">
        Impactful numbers of <span className="sub-title-section">Epicred</span>
      </h2>

      <div className="flex-1 num-container">
        <div className="p-4">
          <p className="numberVal">15.5+</p>
          <h2 className="number-val-title">Crores</h2>
          <p className="number-val-desc">Total loan amount disbursed</p>
        </div>
        <div className="p-4">
          {" "}
          <p className="numberVal">99.9%</p>
          <h2 className="number-val-title">Success Rate</h2>
          <p className="number-val-desc">Total loan amount disbursed</p>
        </div>
        <div className="p-4">
          {" "}
          <p className="numberVal">4.8+</p>
          <h2 className="number-val-title">Rating</h2>
          <p className="number-val-desc">On google and other apps.</p>
        </div>
        <div className="p-4">
          {" "}
          <p className="numberVal">12+</p>
          <h2 className="number-val-title">Countries</h2>
          <p className="number-val-desc">Where our students are studying</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
