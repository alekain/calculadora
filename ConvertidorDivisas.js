import React, { useState } from 'react';
import './ConvertidorDivisas.css';

const ConvertidorDivisas = () => {
  const [paises] = useState([
    { nombre: 'Peso Boliviano', codigo: 'BOB', tasa: 6.96 },
    { nombre: 'Pesos Chilenos', codigo: 'CLP', tasa: 10 },
    { nombre: 'Pesos Argentinos', codigo: 'ARS', tasa: 30 },
    { nombre: 'Soles Peruanos', codigo: 'PEN', tasa: 4 },
    { nombre: 'Pesos Colombianos', codigo: 'COP', tasa: 3500 },
    { nombre: 'Reales Brasileños', codigo: 'BRL', tasa: 5 },
    { nombre: 'Guaraníes Paraguayos', codigo: 'PYG', tasa: 7000 },
    { nombre: 'Pesos Uruguayos', codigo: 'UYU', tasa: 50 },
  ]);

  const [seleccionadoOrigen, setSeleccionadoOrigen] = useState('');
  const [seleccionadoDestino, setSeleccionadoDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSeleccionPaisOrigen = (e) => {
    setSeleccionadoOrigen(e.target.value);
  };

  const handleSeleccionPaisDestino = (e) => {
    setSeleccionadoDestino(e.target.value);
  };

  const handleConversion = () => {
    const tasaOrigen = paises.find((pais) => pais.codigo === seleccionadoOrigen)?.tasa || 1;
    const tasaDestino = paises.find((pais) => pais.codigo === seleccionadoDestino)?.tasa || 1;

    const resultadoConversion = (parseFloat(monto) / tasaOrigen) * tasaDestino;
    setResultado(resultadoConversion.toFixed(2));
  };

  return (
    <div className="convertidor-container">
      <h1>Convertidor de Divisas Sudamericanas</h1>
      <label htmlFor="pais-origen">Selecciona un país de origen:</label>
      <select id="pais-origen" className="select-box" onChange={handleSeleccionPaisOrigen}>
        <option value="">Selecciona un país</option>
        {paises.map((pais, index) => (
          <option key={index} value={pais.codigo}>
            {pais.nombre}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="pais-destino">Selecciona un país de destino:</label>
      <select id="pais-destino" className="select-box" onChange={handleSeleccionPaisDestino}>
        <option value="">Selecciona un país</option>
        {paises.map((pais, index) => (
          <option key={index} value={pais.codigo}>
            {pais.nombre}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="monto-origen">Ingresa el monto en la moneda de origen:</label>
      <input
        type="number"
        id="monto-origen"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />
      <br />
      <button onClick={handleConversion} className="convert-button">
        Convertir
      </button>
      <br />
      {resultado && (
        <div className="resultado-container">
          <h3>Resultado:</h3>
          <p>{resultado} {seleccionadoDestino}</p>
        </div>
      )}
    </div>
  );
};

export default ConvertidorDivisas;