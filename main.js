const primeiranota = document.getElementById ("primeiranota")
const segundanota = document.getElementById ("segundanota")
const terceiranota = document.getElementById ("terceiranota")

function Medias() {

        const nota1 = parseFloat(document.getElementById('primeiranota').value)
        const nota2 = parseFloat(document.getElementById('segundanota').value)
        const nota3 = parseFloat(document.getElementById('terceiranota').value)
        const media = (nota1 + nota2 + nota3) / 3
    
        let situaçao
        if (media < 4) {
            situaçao = "reprovado"
        } else if (media < 40) {
            situaçao = "reprovado"    
        } else if (media < 6.9) {
            situaçao = "em recuperação"
        } else if (media < 69) {
            situaçao = "em recuperação"
        } else {
            situaçao = "aprovado"
        }
        document.getElementById('resultado').innerText = `Sua média é: ${media.toFixed(1)} - Você está ${situaçao}`
        document.getElementById('nota1').value = ''
        document.getElementById('nota2').value = ''
        document.getElementById('nota3').value =''
}


