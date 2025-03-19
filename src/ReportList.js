import React from 'react';

function ReportList({ dados }) {
  if (dados.length === 0) {
    return <p className="text-center text-gray-500">Sem dados para exibir.</p>;
  }

  return (
    <div className="space-y-4 mt-6">
      {dados.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          style={{ marginBottom: '20px' }}
        >
          <p className="text-lg font-semibold text-gray-700">
            <strong>Funcionário:</strong> {item.nome}
          </p>
          <p className="text-md text-gray-600">
            <strong>Data:</strong> {item.data}
          </p>
          <p className="text-md text-gray-600">
            <strong>Horário:</strong> {item.horario}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReportList;
