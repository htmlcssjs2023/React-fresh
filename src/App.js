import logo from './logo.svg';
import './App.css';
import './custom.css';

const number = 28373;
const singer = {name: 'Jihad', job:'Nai', address:'B.Baria'};
const singer2 = {name:'Jihad Hasan', job: 'IT Engineer'};

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
        <FullName name = 'Abdul Halim' stn_id = '8283'></FullName>
        <p general_id = '93939'></p>
    </div>
  );
}

function FullName(props){
  return (
    <div>
         <h1>Full Name : {props.name}</h1>
         <h1>Id : {props.stn_id}</h1>
    </div>

  );
}
/**
 * 1. pass dynamic data to component
 * solution : props receive component attribute and convert these data into object of attribute. {name: 'Halim'}
 * props get data from component and send this data .
 */




export default App;
