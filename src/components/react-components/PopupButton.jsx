import './css/popupbutton.css';
import { useState } from 'react';
import Modal from 'react-modal';

const PopupButton = () =>
{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // URL de tu evento de Calendly
    const calendlyURL = 'https://calendly.com/conectividad-global-mercadeo/agenda-una-reunion-con-nosotros';

    return (
        <div>
            <button className="popup-button titilante" onClick={openModal}>¡Reserva tu Cita!</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Calendly Popup"
                ariaHideApp={false}
                className="popup-modal"
            >
                <div>
                    <button className="x-button" onClick={closeModal}>X</button>
                    <iframe
                        title="Calendly Popup"
                        src={calendlyURL}
                        width="100%"
                        height="700"
                        frameBorder="0"
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default PopupButton;
