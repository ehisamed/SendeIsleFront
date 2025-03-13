/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import GuestHome from './features/guest/Home/GuestHome';
import CandidateHome from './features/candidate/pages/Home/CandidateHome';
import EmployerHome from './features/employer/pages/Home/EmployerHome';
import './styles/main.scss'

const App: React.FC = () => {
  const [user, setUser ] = useState<{ role: string } | null>(null);

  const renderHome = (): React.ReactElement | null => {
    if (!user) {
      return <GuestHome />;
    } else if (user.role === 'candidate') {
      return <CandidateHome />;
    } else if (user.role === 'employer') {
      return <EmployerHome />;
    }
    return null;
  };

  return (
    <>
      {renderHome()}
    </>
  );
}

export default App;