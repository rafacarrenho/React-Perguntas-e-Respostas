import React from "react";

const Pergunta = ({ perguntas, resposta, setResposta, click }) => {
  return (
    <>
      <h1>{perguntas.pergunta}</h1>
      {perguntas.options.map((option, i) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name={perguntas.id}
              checked={option === resposta}
              value={option}
              onChange={({ target }) => setResposta(target.value)}
            />
            {option}
          </label>
        </div>
      ))}
      <br />
      <button onClick={click}>Próxima</button>
    </>
  );
};

export default Pergunta;
