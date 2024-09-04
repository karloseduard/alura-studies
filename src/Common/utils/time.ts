export function tempoParaSegundos (tempo:string){

    const [hora = '0', minuto ='0', segundos='0'] = tempo.split(':')

    const horaEmSegundos = Number(hora) * 3600
    const minutosEmSegundos = Number(minuto) * 60
    return horaEmSegundos + minutosEmSegundos + Number(segundos)
}