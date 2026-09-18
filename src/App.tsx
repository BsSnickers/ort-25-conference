import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Conference25 } from './pages/Conference25';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Conference25 />
    </LanguageProvider>
  );
};

export default App;
