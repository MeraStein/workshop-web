import React from 'react';
import styles from './FloatingWhatsappButton.module.css';

const phoneNumber = '972508131618'; 

export const FloatingWhatsappButton = () => {
  const message = 'שלום! אשמח לברר לגבי סדנת תכנות';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלח הודעה בוואטסאפ"
    >
      <img
        src="/whatsapp.svg"
        alt="וואטסאפ"
        className={styles.whatsapp_icon}
      />
    </a>
  );
};
