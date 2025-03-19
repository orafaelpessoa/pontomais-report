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
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Carregando...' : 'Carregar Dados'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ReportList dados={dados} />
    </div>
  );
}

export default ReportFetcher;
