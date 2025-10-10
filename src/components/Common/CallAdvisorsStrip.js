"use client";

import styles from "@/styles/Common/CallAdvisorsStrip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ADVISOR_CONTACT = "9004005382";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/connectingdotshrcourse",
    icon: faFacebookF,
    label: "Facebook",
    className: styles.iconFacebook,
  },
  {
    href: "https://wa.me/919004002941",
    icon: faWhatsapp,
    label: "WhatsApp",
    className: styles.iconWhatsapp,
  },
  {
    href: "https://youtube.com/@connectingdotserp?si=hSKEiEg3MdytdEe_",
    icon: faYoutube,
    label: "YouTube",
    className: styles.iconYoutube,
  },
  {
    href: "https://in.linkedin.com/in/connecting-dots-erp-043039171",
    icon: faLinkedinIn,
    label: "LinkedIn",
    className: styles.iconLinkedIn,
  },
  {
    href: "https://www.instagram.com/connecting_dots_sap_training?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: faInstagram,
    label: "Instagram",
    className: styles.iconInstagram,
  },
];

const CallAdvisorsStrip = () => {
  return (
    <div className={styles.callAdvisorsStrip}>
      <div className={styles.rightStripContent}>
        <div className={styles.socialIconsStrip}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={social.className}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.leftStripContent}>
        <span className={styles.phoneIcon}>
          <FontAwesomeIcon icon={faPhone} />
        </span>
        <span className={styles.advisorText}>Get Free Career Counselling:</span>
        <a href={`tel:${ADVISOR_CONTACT}`} className={styles.advisorNumber}>
          {ADVISOR_CONTACT}
        </a>
      </div>
    </div>
  );
};

export default CallAdvisorsStrip;
