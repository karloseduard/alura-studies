import styles from './Botao.module.scss'

interface BptaoProps{
    children:string
    onClick?:()=>void
}

export default function Botao ({children,onClick}:BptaoProps){
    return(
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )
}