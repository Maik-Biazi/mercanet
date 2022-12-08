import Image from 'next/image';

import ReactMarkdown from 'react-markdown';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';

import closeModal from '@/assets/Modal/close-modal.png';

interface BoxProps {
  title: string;
  width: string;
  height: string;
  description: string;
  subDescription: string;
  icon: string;
  iconWhite: string;
}

export const Feature = ({ ...props }: BoxProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    const value = window.screen.width;

    if (value < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Container>
      <div className="box" onClick={handleModal}>
        {isMobile ? (
          <Image
            src={props.icon}
            layout="fixed"
            width={props.width}
            height={props.height}
            alt={props.description}
          />
        ) : (
          <Image
            src={props.icon}
            layout="fixed"
            width={props.width}
            height={props.height}
            alt={props.description}
          />
        )}
        <div className="info">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModal}
            ariaHideApp={false}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <div className="close__modal" onClick={handleModal}>
              <Image src={closeModal} alt="Close modal" />
            </div>

            <div className="react-modal-info">
              <div className="img">
                <Image
                  src={props.icon}
                  width={props.width}
                  height={props.height}
                  alt={props.description}
                />
              </div>
              <div className="react-modal-text">
                <h2>{props.title}</h2>
                <ReactMarkdown>{props.subDescription}</ReactMarkdown>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </Container>
  );
};
