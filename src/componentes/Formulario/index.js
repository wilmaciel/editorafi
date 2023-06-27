import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSubmeter = (evento) => {
    evento.preventDefault()

    if (!validarCampos()) {
      return
    }

    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    })

    limparCampos()
  }

  const validarCampos = () => {
    if (!nome || !cargo || !imagem || !time) {
      alert('Preencha todos os campos obrigatórios.')
      return false
    }

    if (!validarFormatoImagem(imagem)) {
      alert('A imagem deve ser uma URL válida.')
      return false
    }

    return true
  }

  const validarFormatoImagem = (url) => {
    // Expressão regular para validar o formato da imagem (URL)
    const regex = /^(http(s)?:\/\/)([^\s/.]+\.([^\s]{2,}|[a-z]{2,})(\/[^\s]*)?)$/
    return regex.test(url)
  }

  const limparCampos = () => {
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar Colaborador" />
      </form>
      <form className="formulario" onSubmit={(evento) => {
        evento.preventDefault()
        cadastrarTime({nome: nomeTime, cor: corTime })
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          obrigatorio
          label="Nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio
          placeholder="#******"
          label="Cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao texto="Criar um novo time" />
      </form>
    </section>
  )
}

export default Formulario