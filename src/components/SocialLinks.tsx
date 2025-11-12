import insta from '../assets/instagram.png';
import mail from '../assets/mail.png';
import tiktok from '../assets/tiktok.png';

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
      <a
        href="https://www.tiktok.com/@liamflo.video"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <img src={tiktok.src} alt="TikTok" />
      </a>
    </div>
  );
};
