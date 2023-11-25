import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Board } from './components/board/board'
import { Form } from './components/form/form'
import './App.css'
import { gameStatus, cpuPlayer } from '../logica'

const matrix = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]
function App() {
  const [infoForm, setInfoForm] = useState({
    name:'',
    code:''
  })
  const [isBoard, setIsBoard] = useState(false)
  const [gameEnds, setGameEnds] = useState(0)
  const [playerTurn,setPlayerTurn] = useState(false)
  const [winPlayer, setWinPlayer] = useState(false)
  const [winCpu, setWinCpu] = useState(false)
  const [draw, setDraw] = useState(false)
  
  const cpuTurn = () => {
    cpuPlayer(matrix)
    setPlayerTurn(false)
  }
  useEffect(() => {
    if(playerTurn){
      cpuTurn()
    }
  })


  const handleForm = (e) => {
    setInfoForm({...infoForm,
      [e.target.name]:e.target.value
    })
  }
  const handleClick = () =>{
    if(infoForm.name && infoForm.code){
      setIsBoard(true)
    }
  }
  const handlePlay = (index1,index2) => {
    if(matrix[index1][index2] !== 0 ) return
    matrix[index1][index2] = 1
    setPlayerTurn(true)
  }

  return (
    <>
      <h1>Juego 3 en linea</h1>
      {!isBoard ? <Form handleForm={handleForm} infoForm={infoForm} handleClick={handleClick}/>
      :<Board infoForm={infoForm} matrix={matrix} handlePlay={handlePlay} playerTurn={playerTurn} setWinPlayer={setWinPlayer} setWinCpu={setWinCpu} setDraw={setDraw} />}
      {(winPlayer || winCpu || draw) && <h1>Juego Finalizado</h1>}
    </>
  )
}

export default App
