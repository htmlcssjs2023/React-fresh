import logo from './logo.svg';
import './App.css';
import './custom.css';

const name = 'Abdul Halim';
const singer = {name: 'Jihad', job:'Nai', address:'B.Baria'};
const singer2 = {name:'Jihad Hasan', job: 'IT Engineer'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude React ! {name}</h3>
          <div className="music">
              <p>{singer.name} {singer.job} {singer.address}</p>
              <p>{singer2.name} {singer2.job} {singer2.address}</p>
              <h1 style={singerStyle}>Smell code</h1>
          </div>
        </div>
        <p>
           <code>Welcome to  React</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
