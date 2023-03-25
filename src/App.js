import logo from './logo.svg';
import './App.css';
import './custom.css';

const persons = [
  {name: 'Abdul Halim', age: 11, address: 'Dhaka'},
  {name: 'Rakib', age: 10, address: 'Dhaka'},
  {name: 'Tamjid Vai', age: 12, address: 'Dhaka'},
  {name: 'Asraf Vai', age: 17, address: 'Dhaka'},

]

const names = ['Halim', 'Rahim', 'Kabir'];

function App() {
  
  return (
    <div className="App">
        {/* {names.map(n => <li> Name : {n}</li>)} */}
        {persons.map(person => <Person name = {person.name} age = {person.age} address = {person.address}></Person>)}

        {names.map(na => <Name na = {na}></Name>)}
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
         <p> <strong>Name :</strong> {props.name}</p>
         <p><strong>Age : </strong>{props.age}</p>
         <p><strong>Address : </strong> {props.address}</p>
    </div>

  );
}

function Name(props){
  return (

    <div className="name">
        <p>{props.na}</p>
    </div>
  );
}
/**
 * 1. pass dynamic data to component
 * solution : props receive component attribute and convert these data into object of attribute. {name: 'Halim'}
 * props get data from component and send this data .
 */

export default App;
