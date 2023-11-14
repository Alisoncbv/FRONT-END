import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/Login';
import Form from './components/form/Form';
import RegisterA from './components/affiliate/registerA/RegisterA';
import ModifyA from './components/affiliate/modifyA/ModifyA';
import RegisterN from './components/novelty/registerN/RegisterN';
import ModifyN from './components/novelty/modifyN/ModifyN';
import RegisterC from './components/contract/registerC/RegisterC';
import ModifyC from './components/contract/modifyC/ModifyC';
import Pay from './components/payOrder/pay/Pay';
import RegisterPO from './components/payOrder/registerPO/RegisterPO';
import ModifyPO from './components/payOrder/modifyPO/ModifyPO';
import Sidebar from './components/sidebar/Sidebar';
import TableA from './components/affiliate/tableA/TableA';
import TableC from './components/contract/tableC/TableC';
import TableN from './components/novelty/tableN/TableN';
import TableO from './components/payOrder/tableO/TableO';
import Reports from './components/reports/Reports';
import CardPay from './components/payOrder/cardPay/CardPay';
import Card from './components/payOrder/card copy/Card';

import Alerta from './alert/alert';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/registerA' element={<RegisterA />}></Route>
          <Route path='/modifyA' element={<ModifyA />}></Route>
          <Route path='/registerN' element={<RegisterN />}></Route>
          <Route path='/modifyN' element={<ModifyN />}></Route>
          <Route path='/registerC' element={<RegisterC />}></Route>
          <Route path='/modifyC' element={<ModifyC />}></Route>
          <Route path='/pay' element={<Pay />}></Route>
          <Route path='/registerPO' element={<RegisterPO />}></Route>
          <Route path='/modifyPO' element={<ModifyPO />}></Route>
          <Route path='/cardPay' element={<CardPay />}></Route>
          <Route path='/card' element={<Card />}></Route>
          <Route path='/sidebar' element={<Sidebar />}></Route>
          <Route path='/tableA' element={<TableA />}></Route>
          <Route path='/tableC' element={<TableC />}></Route>
          <Route path='/tableN' element={<TableN />}></Route>
          <Route path='/tableO' element={<TableO />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
          <Route path='/alerta' element={<Alerta />}></Route>

        </Routes>


      </div>
    </Router>
    </>
  );
}

export default App;
