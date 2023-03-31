import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getLocation = () => {
    const pathname = location.pathname;
    if (pathname == '/') {
      return 'home';
    }

    return pathname.slice(1);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="form">Form</NavLink>
        </div>

        <p>
          <b>{getLocation()}</b>
        </p>
      </div>
    </header>
  );
};

export default Header;
