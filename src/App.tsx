import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
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
      </Routes>
    </div>
  );
}

export default App;
