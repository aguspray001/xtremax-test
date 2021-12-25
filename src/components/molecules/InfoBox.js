import React from "react";
import InfoItem from "../atoms/InfoItem";

function InfoBox({ data, onShow, onClose}) {
  
  return (
    <div className={`infobox-container ${(onShow || data.length === 0)&& "hidden"}`}>
      <div className="image-container">
        <figure className="image-wrapper">
          <img className="img-cover" src={require(`src/assets/img/singapore.jpg`)} alt="info-city" />
          <div className="close" onClick={onClose}>Close</div>
        </figure>
        <div className="tag">
          <span>{data?.place}</span>
        </div>
      </div>
      <div className="info-content">
        <div className="paragraph">{data?.desc}</div>
        <div className="detail-item">
          {data?.details?.length > 0 &&
            data?.details?.map((data, key) => (
              <InfoItem
                key={`${data?.type}-${key}`}
                info={data?.info}
                type={data?.type}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
