import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const times = [
    {
      nome: 'Diagramador',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Capista',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Editor',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Comercial',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Diretoria',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Financeiro',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'SAC',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

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

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Minha organização</h1>
        {times.map((time, indice) => 
          <Time
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
