// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <NavBar></NavBar>
  );
}

function NavBar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children } </ul>
    </nav>
  );
}

function NavItems() {

}



export default App;
