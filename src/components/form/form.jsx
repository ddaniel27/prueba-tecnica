import styles from './form.module.scss'

export const Form = ({handleForm, infoForm, handleClick}) => {

    return (
        <div className={styles.container}>
            <form>
                <div className={styles.containerInput}>
                    <label htmlFor="">Nombre Jugador</label>
                    <input type="text" name='name' onChange={(e) => handleForm(e)} />
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="">Codigo</label>
                    <input type="number" name='code' onChange={(e) => handleForm(e)} />
                </div>
            </form>
            {infoForm.name && infoForm.code && <button onClick={handleClick}>Empezar</button>}
        </div>
    );
  }