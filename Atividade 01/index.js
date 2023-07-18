let media = []
let ponderada = []
let mediana = []
let moda = []

// Calculo média
const valMedia = document.getElementById('media')
const resultMedia = document.getElementById('final')

document.getElementById('enviar-nota').addEventListener("click", ()=>{
    let nota = parseFloat(valMedia.value)
    media.push(nota)
    valMedia.value = ''
})

document.getElementById('calculate-media').addEventListener("click", ()=>{
    let soma = 0

    for(let i = 0; i < media.length; i++){
        soma = media[i] + soma
    }

    soma = soma / media.length

    resultMedia.value = soma
})

// Calculo Média Ponderada

const valor = document.getElementById('valor')
const peso = document.getElementById('peso')
const resultPonderada = document.getElementById('resultado-ponderada')

document.getElementById('enviar-valores').addEventListener("click", ()=>{
    let nota = parseFloat(valor.value)
    let pesoNota = parseFloat(peso.value)

    ponderada.push({nota, pesoNota})

    valor.value = ''
    peso.value = ''
})

document.getElementById('calculate-ponderada').addEventListener("click", ()=>{
    let pesos = ponderada.map(peso =>{ 
       return parseFloat( peso.pesoNota )
    })
    let somaPeso = 0
    let calculo = 0

    for(let i = 0; i < ponderada.length; i++) {
        calculo = (ponderada[i].nota * ponderada[i].pesoNota) + calculo
    }

    for(let i = 0; i < pesos.length; i++) {
        somaPeso = pesos[i] + somaPeso
    }
    
    resultPonderada.value = calculo / somaPeso
})

// Calculo Mediana
const valMediana = document.getElementById('mediana')
const resultMediana = document.getElementById('result-mediana')

document.getElementById('valor-mediana').addEventListener("click", ()=>{
    let valor = parseFloat(valMediana.value)
    mediana.push(valor)
    valMediana.value = ''
})

document.getElementById('calculate-mediana').addEventListener("click",()=>{
    function ordenacao(a,b){
        return (a - b )
    }
    
    mediana.sort(ordenacao)
    let teste = mediana.length / 2

    if(Number.isInteger(teste)) {
        let soma = (mediana[teste - 1] + mediana[teste]) / 2
        resultMediana.value = soma
    } else {
        teste = Math.round(teste)
        resultMediana.value = mediana[teste - 1]
    }
})





