import React, { useState } from 'react';
import axios from 'axios';
import ReportList from './ReportList';

function ReportFetcher() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const token = 'token do ponto'; 
    const url = 'URL_DA_API_PONTOMAIS'; 

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setDados(response.data); 
    } catch (err) {
      setError('Erro ao carregar dados da API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      
      <button
        onClick={fetchData}
        disabled={loading}
        className="bg-customGreen text-white px-6 py-3 rounded-lg hover:bg-customGreenDark focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6"
      >
        {loading ? 'Carregando...' : 'Carregar Dados'}
      </button>

     
      {error && <p className="text-red-600">{error}</p>}

     
      <ReportList dados={dados} />
    </div>
  );
}

export default ReportFetcher;
