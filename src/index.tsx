import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';
import CandidateLogin from './features/candidate/pages/Login/CandidateLogin';
import CandidateRegister from './features/candidate/pages/Register/CandidateRegister';
import CandidateProfile from './features/candidate/pages/Profile/CandidateProfile';
import EmployerDashboard from './features/employer/pages/Dashboard/EmployerDashboard';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>

        {/*Candidate endpoints*/}
        <Route path='/candidate/login' Component={CandidateLogin}/>
        <Route path='/candidate/register' Component={CandidateRegister}/>
        <Route path='/candidate/profile' Component={CandidateProfile} />

        {/*Employer endpoints*/}
        <Route path='/employer/dashboard' Component={EmployerDashboard}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

