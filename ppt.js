let ppt = ["pedra", "papel", "tesoura"]
let pedra = document.querySelector(".pedra")
let papel = document.querySelector(".papel")
let tesoura = document.querySelector(".tesoura")
let divJogador = document.querySelector(".jogador")
let divMaquina = document.querySelector(".maquina")
let res = document.querySelector(".res")
let resM = document.querySelector(".resM")
let vencedor = document.querySelector(".resultado")
let vitoriaJ = document.querySelector(".vitoriaJ")
let vitoriaM = document.querySelector(".vitoriaM")    
let vitJ= 0
let vitM = 0

function atualizar(){
    let ale = Math.floor(Math.random()* ppt.length)
    let pptAle = ppt[ale]
    resM.innerHTML = pptAle
}
pedra.addEventListener("click", ()=>{
    res.innerHTML = ppt[0]
    atualizar()
    if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[2]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[1] && resM.innerHTML == ppt[0]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[2] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[2]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(res.innerHTML == ppt[1] && resM.innerHTML == ppt[0]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(res.innerHTML == ppt[2] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
})
papel.addEventListener("click", ()=>{
    res.innerHTML = ppt[1]
    atualizar() 
    if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[2]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[1] && resM.innerHTML == ppt[0]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[2] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(resM.innerHTML == ppt[0] && res.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[0] && res.innerHTML == ppt[2]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[1] && res.innerHTML == ppt[0]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[2] && res.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }   
})
tesoura.addEventListener("click", ()=>{

    res.innerHTML = ppt[2]
    atualizar()  
    if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[0] && resM.innerHTML == ppt[2]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[1] && resM.innerHTML == ppt[0]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(res.innerHTML == ppt[2] && resM.innerHTML == ppt[1]){
    vencedor.innerHTML = "jogador venceu!"
    vitJ++
    vitoriaJ.innerHTML = vitJ
   }
   if(resM.innerHTML == ppt[0] && res.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[0] && res.innerHTML == ppt[2]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[1] && res.innerHTML == ppt[0]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   }
   if(resM.innerHTML == ppt[2] && res.innerHTML == ppt[1]){
    vencedor.innerHTML = "maquina venceu!"
    vitM++
    vitoriaM.innerHTML = vitM
   } 
    
})
