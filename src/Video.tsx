// import React from "react";

// const Video = () => {
//     return(
//         <div>Video</div>
//     )
// }
// export default Video;

import React from "react";
import "./All.css";

// Importing the images
import image1 from "./assets/p.jpg";
import image2 from "./assets/pic.jpg";
import image3 from "./assets/y.png";
import image4 from "./assets/t.jpg";
import image5 from "./assets/w.webp";
import image6 from "./assets/o.webp";
import image7 from "./assets/m.webp";
import image8 from "./assets/j.webp";
import image9 from "./assets/f.webp";
import image10 from "./assets/j.webp";
import image11 from "./assets/o.webp";


const All: React.FC = () => {
  return (
    <div>
      <div className="image-grid">
     
        <img src={image9} alt="f" className="image-item" />
          <img src={image10} alt="j" className="image-item" />
          <img src={image11} alt="o" className="image-item" />
          <img src={image3} alt="y" className="image-item" />
      </div>
      <div>
        <div className="image-grid">
          <img src={image5} alt="w" className="image-item" />
          <img src={image6} alt="o" className="image-item" />
          <img src={image7} alt="m" className="image-item" />
          <img src={image8} alt="j" className="image-item" />
        </div>
      </div>
      <div>
      <div className="image-grid">
          <img src={image5} alt="ya" className="image-item" />
          <img src={image2} alt="pic" className="image-item" />
          <img src={image8} alt="j" className="image-item" />
          <img src={image3} alt="y" className="image-item" />

         
        </div>
        </div>
        
          <div> 
          <div className="image-grid">
          <img src={image1} alt="p" className="image-item" />
        <img src={image2} alt="pic" className="image-item" />
        <img src={image3} alt="y" className="image-item" />
        <img src={image4} alt="t" className="image-item" />

         
        </div>
          </div>

    </div>
  );
};

export default All;

