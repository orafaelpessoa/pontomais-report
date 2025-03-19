import React from 'react';
import ReportFetcher from './ReportFetcher';

function App() {
  return (
    <div className="min-h-screen bg-customGray flex flex-col items-center justify-center p-4">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl text-center text-black mb-6">Relatórios de Pontos</h1>
        
        <ReportFetcher />
      </div>
    </div>
  );
}

export default App;
