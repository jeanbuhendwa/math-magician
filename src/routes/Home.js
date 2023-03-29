import HomeBg from '../assets/home-bg.svg';

const HomePage = () => (
  <>
    <div className="HomeContainer">
      <div className="aboutHome">
        <p>
          Welcome to Math Magician, the online calculator that helps you solve
          complex math problems with ease!
          <br />
          Whether you are a student, a professional, or just someone who loves
          numbers, Math Magician is the perfect tool for you. With its simple
          and intuitive interface, you can easily perform basic arithmetic
          operations like addition, subtraction, multiplication, and division.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Calculator</li>
          <li>Random Motivation Quote</li>
        </ul>
      </div>
      <div className="imgHome">
        <img src={HomeBg} alt="Home Background" />
      </div>
    </div>
  </>
);

export default HomePage;
