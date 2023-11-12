import React from "react";

const FeatureSliceMobile = ({ features = [], active }) => {
  const feature = features[active - 1];
  return (
    <div className="md:hidden">
      <ul className="mb-3">
        <li className=" mb-2.5 text-[20px] ">
          <h2 className="font-bold tracking-n-5">{feature?.title}</h2>
          <p className="tracking-n-3 leading-[134%] text-[15px] max-w-[217px]">
            {feature?.content}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeatureSliceMobile;
