import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './assets/Logo.png';

function App() {
  return (
    <>
      <Header>
        <img src={logo} width="194px" height="52px" alt="logo"/>
        <Nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>

          </ul>
        </Nav>
      </Header>
      <Main></Main>
      <Footer>
        <img src={logo} width="194px" height="52px" alt="logo"/>
        <div>
          Navigation
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div>
          Contact
          <ul>
            <p id="address"></p>
            <p id="phone-number"></p>
            <p id="email"></p>
          </ul>
        </div>
        <div>
          Social Media Links
          <ul>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </Footer>
    </>
  );
}

export default App;
