let ppt = ["pedra", "papel", "tesoura"]
let ale = Math.floor(Math.random()* ppt.length)
let pedra = document.querySelector(".pedra")
let papel = document.querySelector(".papel")
let tesoura = document.querySelector(".tesoura")
let divJogador = document.querySelector(".jogador")
let divMaquina = document.querySelector(".maquina")
let res = document.querySelector(".res")
let resM = document.querySelector(".resM")


pedra.addEventListener("click", ()=>{
    res.innerHTML = ppt[0]
    resM.innerHTML = ale
    if(ale == 0){
        resM.innerHTML = ppt[0]
    }
    if(ale == 1){
        resM.innerHTML = ppt[1]
    }
    if(ale == 2){
        resM.innerHTML = ppt[2]
    }
})
papel.addEventListener("click", ()=>{

    res.innerHTML = ppt[1]
    resM.innerHTML = ale
    if(ale == 0){
        resM.innerHTML = "pedra"
    }
    if(ale == 1){
        resM.innerHTML = "papel"
    }
    if(ale == 2){
        resM.innerHTML = "tesoura"
    }
})
tesoura.addEventListener("click", ()=>{

    res.innerHTML = ppt[2]
    resM.innerHTML = ale
    if(ale == 0){
        resM.innerHTML = "pedra"
    }
    if(ale == 1){
        resM.innerHTML = "papel"
    }
    if(ale == 2){
        resM.innerHTML = "tesoura"
    }
})
