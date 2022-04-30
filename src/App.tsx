import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Calculator } from './components/Calculator/Calculator';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MoleInHole from './components/MoleInHole/MoleInHole';
import Numbers from './components/Numbers/Numbers';
import YesOrNo from './components/YesOrNo/YesOrNo';

function App() {



  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/yesorno" element={<YesOrNo />} />
        <Route path="/moleInHole" element={<MoleInHole />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
