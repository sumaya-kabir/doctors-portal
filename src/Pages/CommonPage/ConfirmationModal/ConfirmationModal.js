import React from 'react';

const ConfirmationModal = ({title, message, closeModal, deleteAction, modalData, successBtnName}) => {
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="confirmation-modal"
                        onClick={() => deleteAction(modalData)}
                        className="btn btn-primary">{successBtnName}</label>
                        <button className="btn btn-outline" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;