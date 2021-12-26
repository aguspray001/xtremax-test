import React from "react";
// component
import InfoItem from "../atoms/InfoItem";
// assets
import singapore from "src/assets/img/singapore.jpg";
import clark from "src/assets/img/clark.jpg";
import chinatown from "src/assets/img/chinatown.jpg";
import flyer from "src/assets/img/flyer.jpg";
import fort from "src/assets/img/fort.jpg";
import garden from "src/assets/img/garden.jpg";
import orchard from "src/assets/img/orchard.jpg";
import marina from "src/assets/img/marina.jpg";
import museum from "src/assets/img/museum.jpg";

function InfoBox({ data, onShow, onClose }) {
  const [imageSource, setImageSource] = React.useState(null);

  React.useEffect(() => {
    const switchImages = (path) => {
      switch (path) {
        case "singapore.jpg":
          setImageSource(singapore);
          break;
        case "clark.jpg":
          setImageSource(clark);
          break;
        case "chinatown.jpg":
          setImageSource(chinatown);
          break;
        case "flyer.jpg":
          setImageSource(flyer);
          break;
        case "fort.jpg":
          setImageSource(fort);
          break;
        case "garden.jpg":
          setImageSource(garden);
          break;
        case "orchard.jpg":
          setImageSource(orchard);
          break;
        case "marina.jpg":
          setImageSource(marina);
          break;
        default:
          setImageSource(museum);
          break;
      }
    }
    switchImages(data?.imgSource);
  }, [data]);

  return (
    <div
      className={`infobox-container ${
        (onShow || data.length === 0) && "hidden"
      }`}
    >
      <div className="image-container">
        <figure className="image-wrapper">
          {imageSource && (
            <img className="img-cover" src={imageSource} alt="info-city" />
          )}
          <div className="close" onClick={onClose}>
            Close
          </div>
        </figure>
        <div className="tag">
          <p>{data?.place}</p>
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
