const NightMode = document.querySelector("#night")

/*
NightMode.addEventListener("click",function() {
    body.style.backgroundColor = "dark";
})
*/

NightMode.addEventListener("click",function() {
    if (body.style.backgroundColor == "light") {
        body.style.backgroundColor = "dark" 
    }
    else {
        body.style.backgroundColor = "light"
    }

})


const grp_img = document.querySelector("#grp_img")
const projet = []

projet[0] = "Images/Accueil/Album AVA MAX.png"
projet[1] = "Images/Accueil/AVA MAX.png"
projet[2] = "Images/Accueil/Dessin Gilda Van Ahn.jpg"
projet[3] = "Images/Accueil/DessinGildaLauranna.jpg"
projet[4] = "Images/Accueil/Décor jeu vidéo.png"
projet[5] = "Images/Accueil/Liste AVA MAX.png"
projet[6] = "Images/Accueil/Lumière texturé.png"
projet[7] = "Images/Accueil/Lumière VF.png"
projet[8] = "Images/Accueil/Modélisation Lumière.png"
projet[9] = "Images/Accueil/Structure Lumière.png"

document.addEventListener("keypress",enter =>{
    let index = Math.floor(Math.random() * 10)
    if (enter.keyCode === 13 ){
        grp_img.src = projet[index]
    }
})

const lumière = document.querySelector("#lumière")

/*
lumière.addEventListener("click",function() {
    if (lumière.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Lumi%C3%A8re/Structure%20Lumi%C3%A8re.png"){
        lumière.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Lumi%C3%A8re/Mod%C3%A9lisation%20Lumi%C3%A8re.png"
    }
    else if (lumière.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Lumi%C3%A8re/Mod%C3%A9lisation%20Lumi%C3%A8re.png"){
        lumière.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Lumi%C3%A8re/Lumi%C3%A8re%20textur%C3%A9.png"
    }
    else {
        lumière.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Lumi%C3%A8re/Structure%20Lumi%C3%A8re.png"
    }
})

const shield = document.querySelector("#shield")

shield.addEventListener("click",function() {
    if (shield.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Bouclier/Bouclier%20structure.png"){
        shield.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Bouclier/Bouclier%20mod%C3%A9liser.png"
    }
    else if (shield.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Bouclier/Bouclier%20mod%C3%A9liser.png"){
        shield.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Bouclier/Bouclier%20texture.png"
    }
    else {
        shield.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Bouclier/Bouclier%20structure.png"
    }
})

const sword = document.querySelector("#sword")

sword.addEventListener("click",function() {
    console.log(sword.src)
    if (sword.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D//Ep%C3%A9e/Ep%C3%A9e%20structure.png"){
        sword.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Ep%C3%A9e/Ep%C3%A9e%20mod%C3%A9liser.png"
    }
    else if (sword.src === "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Ep%C3%A9e/Ep%C3%A9e%20mod%C3%A9liser.png"){
        sword.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D/Ep%C3%A9e/Ep%C3%A9e%20texture.png"
    }
    else {
        sword.src = "http://127.0.0.1:5500/Devoir%20%C3%A0%20rendre/Images/3D//Ep%C3%A9e/Ep%C3%A9e%20structure.png"
    }
})
*/



const rbw = document.querySelector("#rainbow")

document.addEventListener("keypress", zero =>{
    console.log(zero)
    if(zero.key === '0'){
        rbw.classList.toggle('rainbow')
        console.log("why")  
    }
})

const space = document.querySelector("#space")

document.addEventListener("keypress",spaceBar =>{
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const color = "rgb(" + red + "," + blue + "," + green + ")"
    if (spaceBar.keyCode === 32 ){
        space.style.backgroundColor = color
    }
})