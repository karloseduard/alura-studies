import styles from './Relogio.module.scss'

interface RelogioProps{
    tempo: number| undefined
}

export default function Relogio({tempo = 0}:RelogioProps) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0') 
    const [segundosDezena, segundosUnidade] = String(segundos).padStart(2, '0') 
    return (
        <>
            <span className={styles.relogioNumero}>{minutoDezena}</span>
            <span className={styles.relogioNumero}>{minutoUnidade}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundosDezena}</span>
            <span className={styles.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}