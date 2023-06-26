import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Diagramador',
      cor: '#57C278'
    },
    {
      nome: 'Capista',
      cor: '#82CFFA'
    },
    {
      nome: 'Editor',
      cor: '#A6D157'
    },
    {
      nome: 'Comercial',
      cor: '#E06B69'
    },
    {
      nome: 'Diretoria',
      cor: '#DB6EBF'
    },
    {
      nome: 'Financeiro',
      cor: '#FFBA05'
    },
    {
      nome: 'SAC',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[0].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[1].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[2].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[3].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[4].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
    {
      nome: 'WILLIAN MACIEL',
      cargo: 'Advogado e aspirante de dev.',
      imagem: 'https://www.github.com/wilmaciel.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('Deletando um Colaborador');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Minha organização</h1>
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
