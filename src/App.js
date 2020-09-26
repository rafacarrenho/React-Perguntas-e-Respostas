import React from "react";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [pergunta, setPergunta] = React.useState(0);
  const [pontos, setPontos] = React.useState(0);
  const [resposta, setResposta] = React.useState("");

  function handleClick(event) {
    if (validarQuestao()) {
      calcularPontos();
      setResposta("");
      setPergunta(pergunta + 1);
      console.log(pontos);
    }
  }

  function calcularPontos() {
    if (resposta == perguntas[pergunta].resposta) {
      setPontos(pontos + 1);
    }
  }

  function validarQuestao() {
    if (!resposta) return false;
    return true;
  }
  return (
    <>
      {pergunta < perguntas.length && (
        <Pergunta
          perguntas={perguntas[pergunta]}
          resposta={resposta}
          setResposta={setResposta}
          click={handleClick}
        />
      )}
      <Resposta pontos={pontos} />
    </>
  );
};

export default App;
