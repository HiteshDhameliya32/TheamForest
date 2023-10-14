import React from 'react';
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

function Modalvideo(props) {
    return (
      <div className="d-flex justify-content-center align-items-center" id="section1">
        <div>
          <ModalVideo
            channel="youtube"
            youtube={{
              mute: 1,
              autoplay: true,
              controls: 0,
              loop: "",
              modestbranding: 1,
              title: false,
            }}
            isOpen={props.modal}
            videoId="SZEflIVnhH8"
            onClose={() => props.setOpen(false)} 
          />
        </div>
      </div>
    );
  }

export default Modalvideo;
