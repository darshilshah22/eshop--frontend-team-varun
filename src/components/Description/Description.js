import React from "react";
import { features } from "../Constants/constants";
import { otherFeatures } from "../Constants/constants";

const Description = () => {
  return (
    <div
      className="border border-secondary-subtle rounded my-4 px-4 py-4"
      style={{ background: "white" }}
    >
      <p className="fw-semibold fs-6">Description</p>
      {features.map((f) => (
        <div className="row">
          <div className="col-4 fw-semibold mt-2">{f.name}</div>
          <div className="col-4 mt-2">{f.value}</div>
        </div>
      ))}
      <hr className="m-0 mt-4" />
      <p className="fw-semibold fs-6 mt-4">About this item</p>
      <p>
        Specification{" "}
        <span className="fw-semibold">Super Zeplin M26 (2022) - GG726XM :</span>
      </p>
      <ul className="m-0">
        {otherFeatures.map((b) => (
          <li>
            {b.name}: {b.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;