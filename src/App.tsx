import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIData from './pages/apidata';

function App() {
  return (
    <div className="text-center">
      <h2 className='m-3 text-center text-capitalize'>Get Data Through API</h2>
      <div className="d-flex justify-content-center align-items-center">
      <APIData />
      </div>
      </div>
  );
}

export default App;
