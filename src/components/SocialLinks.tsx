import insta from '../assets/instagram.png';
import mail from '../assets/mail.png';

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/liamflovideo"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img src={insta.src} alt="Instagram" />
      </a>
      <a href="mailto:liamflovideo@gmail.com" className="social-link">
        <img src={mail.src} alt="Email" />
      </a>
    </div>
  );
};
