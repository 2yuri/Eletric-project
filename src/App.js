import React, { useState } from "react";

import "./style.css";

function App() {
  const [req, setReq] = useState({});

  const handleChange = event => {
    const auxValues = { ...req };

    auxValues[event.target.name] = event.target.value;
    setReq(auxValues);
    console.log(auxValues);
  };
  const handleSubmit = event => {
    event.preventDefault();

    const { r1, r2, r3, type, fonte } = req;

    let resultado;
    let corrente; //corrente = tensao/resistencia
    let potencia; //valor da fonte * corrente
    let t1, t2, t3;
    let p1, p2, p3;

    switch (type) {
      case "1":
        console.log("Serie");
        resultado = parseInt(r1) + parseInt(r2) + parseInt(r3);
        corrente = fonte / resultado;
        t1 = r1 * corrente;
        t2 = r2 * corrente;
        t3 = r3 * corrente;
        p1 = corrente * t1;
        p2 = corrente * t2;
        p3 = corrente * t3;
        potencia = fonte * corrente;
        alert(`Resistencia equivalente: ${resultado.toFixed(2)} Ω\n
               Corrente: ${corrente.toFixed(2)}A\n
               Tensão r1: ${t1.toFixed(2)}V\n
               Tensão r2: ${t2.toFixed(2)}V\n
               Tensão r3: ${t3.toFixed(2)}V\n
               Potencia1: ${p1.toFixed(2)}\n
               Potencia2: ${p2.toFixed(2)}\n
               Potencia3: ${p3.toFixed(2)}\n
               PotenciaTotal: ${potencia.toFixed(2)}
               `);
        break;

      case "2":
        console.log("Paralela");
        resultado =
          1 / (1 / parseInt(r1) + 1 / parseInt(r2) + 1 / parseInt(r3));
        corrente = fonte / resultado;
        t1 = r1 * corrente;
        t2 = r2 * corrente;
        t3 = r3 * corrente;
        p1 = corrente * t1;
        p2 = corrente * t2;
        p3 = corrente * t3;
        potencia = fonte * corrente;
        alert(`Resistencia equivalente: ${resultado.toFixed(2)} Ω\n
                 Corrente: ${corrente.toFixed(2)}A\n
                 Tensão r1: ${t1.toFixed(2)}V\n
                 Tensão r2: ${t2.toFixed(2)}V\n
                 Tensão r3: ${t3.toFixed(2)}V\n
                 Potencia1: ${p1.toFixed(2)}\n
                 Potencia2: ${p2.toFixed(2)}\n
                 Potencia3: ${p3.toFixed(2)}\n
                 PotenciaTotal: ${potencia.toFixed(2)}
                 `);
        break;

      case "3":
        console.log("Mista");
        resultado = 1 / (1 / parseInt(r1) + 1 / parseInt(r2)) + parseInt(r3);
        corrente = fonte / resultado;
        t1 = r1 * corrente;
        t2 = r2 * corrente;
        t3 = r3 * corrente;
        p1 = corrente * t1;
        p2 = corrente * t2;
        p3 = corrente * t3;
        potencia = fonte * corrente;
        alert(`Resistencia equivalente: ${resultado.toFixed(2)} Ω\n
               Corrente: ${corrente.toFixed(2)}A\n
               Tensão r1: ${t1.toFixed(2)}V\n
               Tensão r2: ${t2.toFixed(2)}V\n
               Tensão r3: ${t3.toFixed(2)}V\n
               Potencia1: ${p1.toFixed(2)}\n
               Potencia2: ${p2.toFixed(2)}\n
               Potencia3: ${p3.toFixed(2)}\n
               PotenciaTotal: ${potencia.toFixed(2)}
               `);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Informe os valores dos resistores</h2>
          <input
            type="number"
            name="r1"
            placeholder="Resistor 1"
            required
            min="0"
            max="100000"
            onChange={handleChange}
          />
          <input
            type="number"
            name="r2"
            placeholder="Resistor 2"
            required
            min="0"
            max="100000"
            onChange={handleChange}
          />
          <input
            type="number"
            name="r3"
            placeholder="Resistor 3"
            required
            min="0"
            max="100000"
            onChange={handleChange}
          />
          <h2>Selecione o tipo de associação</h2>
          <select name="type" required onChange={handleChange}>
            <option hidden>Selecione</option>
            <option value="1">Série</option>
            <option value="2">Paralela</option>
            <option value="3">Mista</option>
          </select>
          <br />
          <h2>Informe o valor da tensão</h2>
          <input
            type="number"
            name="fonte"
            placeholder="Digite o valor da tensão"
            required
            min="0"
            max="12"
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Calcular</button>
        </form>
      </div>
    </>
  );
}

export default App;
