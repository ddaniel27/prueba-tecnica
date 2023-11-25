import { useEffect, useState } from 'react'
import styles from './board.module.scss'
import { gameStatus } from '../../../logica'

export const Board = ({matrix, handlePlay, infoForm, playerTurn, setWinCpu, setWinPlayer, setDraw}) => {

    useEffect(() => {
        if(gameStatus(matrix) === 0) return
        else if(gameStatus(matrix) === 1) {
            setWinPlayer(true)
        }
        else if(gameStatus(matrix) === 2) {
            setWinCpu(true)
        }
        else if(gameStatus(matrix) === 3) {
            setDraw(true)
        }
    },[playerTurn])
    return(
        <div className={styles.container}>
            <div className={styles.containerInfoGame}>
                <div className={styles.containerPlayer}>
                    <h4>{infoForm.name}</h4>
                    <p>0</p>
                </div>
                <p>Vs</p>
                <div className={styles.containerPlayer}>
                    <h4>CPU</h4>
                    <p>0</p>
                </div>
            </div>
            <div className={styles.containerInfoBoard}>
                <h4>Turno : {playerTurn?'CPU':infoForm.name}</h4>
                <h4>Partidas Jugadas</h4>
            </div>
            <div className={styles.containerBoard}>
                <div onClick={() => handlePlay(0,0)} className={styles.square}>
                    {matrix[0][0] === 1 && <h1>X</h1>}
                    {matrix[0][0] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(0,1)} className={styles.square}>
                    {matrix[0][1] === 1 && <h1>X</h1>}
                    {matrix[0][1] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(0,2)} className={styles.square}>
                    {matrix[0][2] === 1 && <h1>X</h1>}
                    {matrix[0][2] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(1,0)} className={styles.square}>
                    {matrix[1][0] === 1 && <h1>X</h1>}
                    {matrix[1][0] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(1,1)} className={styles.square}>
                    {matrix[1][1] === 1 && <h1>X</h1>}
                    {matrix[1][1] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(1,2)} className={styles.square}>
                    {matrix[1][2] === 1 && <h1>X</h1>}
                    {matrix[1][2] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(2,0)} className={styles.square}>
                    {matrix[2][0] === 1 && <h1>X</h1>}
                    {matrix[2][0] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(2,1)} className={styles.square}>
                    {matrix[2][1] === 1 && <h1>X</h1>}
                    {matrix[2][1] === 2 && <h1>O</h1>}
                </div>
                <div onClick={() => handlePlay(2,2)} className={styles.square}>
                    {matrix[2][2] === 1 && <h1>X</h1>}
                    {matrix[2][2] === 2 && <h1>O</h1>}
                </div>
            </div>
        </div>
    )
}

