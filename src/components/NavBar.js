import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];
  return (
    <nav className="navBar">
      <p className="logo">
        Math
        <span className="logoSpan">Magician</span>
      </p>
      <ul>
        {links.map((list) => (
          <li key={list.text}>
            <NavLink to={list.path}>{list.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
