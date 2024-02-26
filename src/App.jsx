import './App.css';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Gestor empleados</h1>

      <div className="d-flex flex-row justify-content-start">
        <button className="btn btn-success">Agregar un empleado</button>
      </div>

      <Table></Table>
    </div>
  );
}

export default App;
