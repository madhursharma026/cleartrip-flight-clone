import './Homepage.css'
import Homepage from './Hompage';
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlightDetails from './FlightDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Homepage />} />
          <Route path="/FlightDetails" element={<FlightDetails />} />
          <Route path="*" element={<><Header /> <h1 style={{ textAlign: 'center', marginTop: '20%' }}>No Page Found!</h1></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
