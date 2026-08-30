const btnavc = document.getElementById("button-avancar");
const btnvta = document.getElementById("button-voltar");
const slide = document.getElementsByClassName("slider-images");
const images = document.getElementsByClassName("card-images");

let sliderAtual=0;

for(let i=4;i<images.length;i++){
    images[i].classList.add("off");
    }

function esconderSlideAtual(){
   images[sliderAtual].classList.add("off");
   

}

function esconderSlideUltimo(){
   images[sliderAtual+3].classList.add("off");
   

}

function mostrarSlideUltimo(){
   images[sliderAtual+3].classList.remove("off");

}
function mostrarSlideAnterior(){
    images[sliderAtual-1].classList.remove("off")
}


function avancar(){
    if(sliderAtual>images.length-5){
        return
    }
    esconderSlideAtual();
    sliderAtual++;
    mostrarSlideUltimo();

}

function voltar(){
    if(sliderAtual===0){
        return
    }
    esconderSlideUltimo();
    mostrarSlideAnterior();
    sliderAtual--;

}


btnavc.addEventListener('click',()=>{
    console.log('click')
    avancar();
})

btnvta.addEventListener('click',()=>{
    console.log('click')
    voltar();
})


//
const b1 = document.getElementById("banner-1");
const b2 = document.getElementById("banner-2");

    
const imagesDemonstraca=[
    "/src/images/demostracaoProdutos/demonstracao1.png",
    "/src/images/demostracaoProdutos/demonstracao2.png",
    "/src/images/demostracaoProdutos/demonstracao3.png",
    "/src/images/demostracaoProdutos/demonstracao4.png",
    "/src/images/demostracaoProdutos/demonstracao5.png",
    "/src/images/demostracaoProdutos/demonstracao6.png"
];

let indice=0;
function trocarImagen(){
    indice++;
    if(indice>=imagesDemonstraca.length){
        indice=0;
    }
    b1.src = imagesDemonstraca[indice];

let proximo = indice + 1;

if (proximo >= imagesDemonstraca.length) {
    proximo = 0;
}

b2.src = imagesDemonstraca[proximo];
console.log(b1.naturalWidth, b1.naturalHeight);
console.log(b2.naturalWidth, b2.naturalHeight);
    

}

setInterval(trocarImagen, 3500);





