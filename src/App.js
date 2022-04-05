import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='titulo-contenedor'>
        <h2 className='titulo'>Lista de tareas con React</h2>
      </div>
      <div className='tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
