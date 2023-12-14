import React from 'react';
import './ImageModal.css';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  isOpen: boolean;
  closeModal: () => void; // Adicionando a função closeModal como prop
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, altText, isOpen, closeModal }) => {

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={imageUrl} alt={altText} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
