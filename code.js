/*let valor = prompt ("informe um numero inteiro")
let valor1= prompt ("informe o segundo numero inteiro")
let resultado = valor*valor1

if(resultado <50){
alert("Seu resultado foi divido por 2 :"+resultado/2)

}else {
    alert("seu resultado sem divisão é:" + resultado)
}
*/



function multiplicar() {
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var resultado = document.querySelector('#resultado')

    resultado.innerHTML = parseInt(n1) * parseInt(n2)

}
function somar() {
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var resultado = document.querySelector('#resultado')

    resultado.innerHTML = parseInt(n1) + parseInt(n2)

}
function subtrair() {
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var resultado = document.querySelector('#resultado')

    resultado.innerHTML = parseInt(n1) + parseInt(n2)

}
function divisao() {
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var resultado = document.querySelector('#resultado')

    resultado.innerHTML = parseInt(n1) + parseInt(n2)

}