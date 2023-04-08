import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import UploadExcel from './Components/UploadFile/UploadExcel';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <UploadExcel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
