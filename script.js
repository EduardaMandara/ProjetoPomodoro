let foco = document.getElementById('foco')
let pausa = document.getElementsById('pausa')
let repeticoes = document.getElementsById('repeticoes')
let segundos 

var bell = new Audio("./audio/bell.mp3")
var volta = new Audio("./audio/volta.mp3")
var final = new Audio("./audio/final.mp3")

var play = document.getElementById('play')
var pause = document.getElementById('pause')

document.getElementById('timer').style.setProperty('display', 'none', 'important')

// Verificar se os campos foram preenchidos corretamente.

function iniciar() {

    if (foco.value == 0) {
       document.getElementById('erro_foco').innerHTML = "Antes de começar, adicione aqui os minutos que deseja."
       foco.focus()
    } else if (pausa.value == 0) {
       document.getElementById('erro_pausa').innerHTML = "Adicione aqui o tempo de pausa."
       pausa.focus()
    } else if (repeticoes.value == 0) {
       document.getElementById('erro_repeticoes').innerHTML = "De quantas repetições você precisa?."
       repeticoes.focus()
    } else {

// Adicionar ao localStorage em forma de String os valores inseridos nos inputs Foco, Pausa e Repetições

        localStorage.setItem('foco', String(foco.value))
        localStorage.setItem('pausa', String(pausa.value))
        localStorage.setItem('repeticoes', String(repeticoes.value))
  
     }
  
  }