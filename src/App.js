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
     <Zoomit></Zoomit>
     <Zoomit></Zoomit>
     <Zoomit></Zoomit>
       
    </div>
  );
}

function Zoomit(){
  return (
   
    <div className='zoomit'>
       <h3>Employee </h3>
        <p><strong>Employee Id :</strong> {number} </p>
        <p><strong>Employee Name :</strong> Md Abdul Halim </p>
        <p><strong>Employee Designaiton :</strong> Software Engineer </p>
    </div>
  );
}
export default App;
