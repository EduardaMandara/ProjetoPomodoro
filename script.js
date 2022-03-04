let foco = document.getElementById('foco')
let pausa = document.getElementById('pausa')
let repeticoes = document.getElementById('repeticoes')
let segundos

// var bell = new Audio("./audio_bell.mp3")
// var volta = new Audio("./audio_volta.mp3")
// var final = new Audio("./audio_final.mp3")

// var play = document.getElementById('play')
// var pause = document.getElementById('pause')

// Verificar se os campos foram preenchidos corretamente

function iniciar() {
   if (foco.value == 0) {
      document.getElementById('erro_foco').innerHTML = "Adicione os minutos"
      foco.focus()
   } 
   
   if (pausa.value == 0) {
      document.getElementById('erro_pausa').innerHTML = "Adicione a pausa"
      pausa.focus()
   } 
   
   if (repeticoes.value == 0) {
      document.getElementById('erro_repeticoes').innerHTML = "Adicione as sessões"
      repeticoes.focus()
   } else {

      localStorage.setItem('foco', String(foco.value))
      localStorage.setItem('pausa', String(pausa.value))
      localStorage.setItem('repeticoes', String(repeticoes.value))

      document.getElementById('config').style.setProperty('display', 'none', 'important')
      document.getElementById('timer').style.setProperty('display', 'block', 'important')

   }
}