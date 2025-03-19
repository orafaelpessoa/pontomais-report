import React from 'react';

function ReportList({ dados }) {
  if (dados.length === 0) {
    return <p>Sem dados para exibir.</p>;
  }

  return (
    <div>
      {dados.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <p><strong>Funcionário:</strong> {item.nome}</p>
          <p><strong>Data:</strong> {item.data}</p>
          <p><strong>Horário:</strong> {item.horario}</p>
        </div>
      ))}
    </div>
  );
}

export default ReportList;
