import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header principal="React" subtitulo="Componentes" tercero="Funcionales y de Clase"/>
      <Form />
      <Footer email='thebridge@gmail.com' ciudad="Madrid" direccion="Paseo de Recoletos 15"/>
    </div>
  );
}

export default App;
