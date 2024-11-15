import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ onConfirm, onCancel, isSubmitting, error, imageId, selectedImage }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Report</h2>
        
        {selectedImage && (
          <div className="modal-image-container">
            <img 
              src={selectedImage.json.download_link} 
              alt={`Image ${imageId}`}
              className="modal-image"
            />
          </div>
        )}
        
        <p>Are you sure you want to report image {imageId}?</p>
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="modal-buttons">
          <button 
            onClick={onConfirm} 
            disabled={isSubmitting}
            className="confirm-button"
          >
            {isSubmitting ? 'Submitting...' : 'Yes, Report'}
          </button>
          <button 
            onClick={onCancel} 
            disabled={isSubmitting}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal; 