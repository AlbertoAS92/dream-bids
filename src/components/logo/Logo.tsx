import logo from '../../logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img className="Logo" src={logo} alt="logo" />
      <h1 className="text-xl text-white">Dream Bids</h1>
    </Link>
  );
};

export default Logo;
