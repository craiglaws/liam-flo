import { Form } from './Form';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

export const App: React.FC = () => {
  return (
    <>
      <div className="main-content">
        <Logo />
        <h1 className="text-center">Liam Florence Video</h1>
        <p className="section">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <video className="section" autoPlay muted playsInline>
          <source src="wedding.mp4" />
        </video>

        <Form />
        <SocialLinks />
      </div>
    </>
  );
};
