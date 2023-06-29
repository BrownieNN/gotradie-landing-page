import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const VideoThumbnail = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9998
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "800px", // Set your desired maximum width here
            border: "none",
            borderRadius: "8px",
            padding: 0,
            overflow: "visible"
          }
        }}
      >
        <ModalContentWrapper>
          <StyledReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
          />
        </ModalContentWrapper>
        
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </Modal>
    </div>
  );
};

export default VideoThumbnail;

const ModalContentWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  color: #ffffff;
`;