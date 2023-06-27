import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Diagramador',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Capista',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Editor',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Comercial',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Diretoria',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Financeiro',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'SAC',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() }])
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime} 
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
