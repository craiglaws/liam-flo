import { TextField } from '@mui/material';
import { Form } from './Form';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';

export const App: React.FC = () => {
  return (
    <>
      <Logo />
      <div className="main-content">
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <video src="/wedding.mp4" autoPlay={true} />
        <Form />
        <SocialLinks />
      </div>
    </>
  );
};
