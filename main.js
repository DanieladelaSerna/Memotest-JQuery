let contadorInt = $("#int")
let dificultad = $("#p1")
let cantidadIntentos = $("#p2")
let contador = 0;
let cantidadPares = 0;
let img = [];
let nivel = ""
let intentos = 0
let arrayImg = [
    {
        img: "imagenes/nena.jpg",
        dataId: 0,
    },
    {
        img: "imagenes/nena.jpg",
        dataId: 1,
    },
    {
        img: "imagenes/peces.jpg",
        dataId: 2,
    },
    {
        img: "imagenes/peces.jpg",
        dataId: 3,
    },
    {
        img: "imagenes/zapas.jpg",
        dataId: 4,
    },
    {
        img: "imagenes/zapas.jpg",
        dataId: 5,
    },
    {
        img: "imagenes/epelante.jpg",
        dataId: 6,
    },
    {
        img: "imagenes/epelante.jpg",
        dataId: 7,
    },
    {
        img: "imagenes/unichancho.jpg",
        dataId: 8,
    },
    {
        img: "imagenes/unichancho.jpg",
        dataId: 9,
    },
    {
        img: "imagenes/alce.jpg",
        dataId: 10,
    },
    {
        img: "imagenes/alce.jpg",
        dataId: 11,
    },


];
function shuffle(cardsArray) {
    var j
    var x
    var i
    for (i = cardsArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cardsArray[i].dataId;
        cardsArray[i].dataId = cardsArray[j].dataId;
        cardsArray[j].dataId = x;
    }
    return cardsArray;
}

shuffle(arrayImg);

$(".span-validar").hide();
$(".btn").submit(function (e) {
    e.preventDefault();
    let taskValue = $("#inputTask").val();
    console.log(taskValue)
    if (taskValue.length <= 0) {
        $(".span-validar").show();

    }
    if (taskValue != "") {
        $(".main-box").hide();
        $(".box2").show();
    }

    $("#span").text("Hola " + taskValue)

});
$("#btn1").click(function () {
    dificultad.text("Encontrá todos los pares en menos de 18 intentos");
    cantidadIntentos.text("Nivel Facil");
    intentos = 18;
    nivel = " Nivel Facil";

});

$("#btn2").click(function () {
    dificultad.text("Encontrá todos los pares en menos de 12 intentos");
    cantidadIntentos.text("Nivel Intermedio");
    intentos = 12;
    nivel = " Nivel Intermedio";

});

$("#btn3").click(function () {
    dificultad.text("Encontrá todos los pares en menos de 9 intentos");
    cantidadIntentos.text("Nivel Experto");
    intentos = 9;
    nivel = " Nivel Experto";


});

$(".box-img").click(function (e) {
    let contadorInt = $("#int")
    const tapadaEvent = e.target.attributes[0].value;
    for (let i = 0; i < arrayImg.length; i++) {
        if (tapadaEvent == arrayImg[i].dataId) {
            e.target.src = arrayImg[i].img
        }
    }
    let obj = {
        src: "",
        id: ""
    }
    if (img.length == 2) {
        img = [];


    } if (img.length <= 1) {
        obj = {
            src: e.target.attributes[3].value,
            id: e.target.attributes[0].value
        }

    }
    img.push(obj);

    let firstImg = img[0].src;
    let secondImg = img[1].src;
    if (firstImg == secondImg && img.length == 2) {
        contador++
        cantidadPares++
        contadorInt.text("Intentos: " + contador)

    } if (firstImg != secondImg && img.length == 2) {
        setTimeout(function () {
            e.target.src = "imagenes/tapada.jpg"
            let id = img[0].id + ""
            let varId = document.getElementById(id + "")
            varId.src = "imagenes/tapada.jpg"
        }, 500);
        contador++
        contadorInt.text("Intentos: " + contador)

    }

    let background = $("#background");
    let box = $("#final-box");
    let spanFinal = $("#final")

    if (contador <= intentos && cantidadPares == 6) {
        box.removeClass("hide");
        background.removeClass("hide")
        spanFinal.text("Ganaste con " + contador + " intentos")
    } if (contador > intentos && cantidadPares < 6) {
        box.removeClass("hide");
        background.removeClass("hide")
        spanFinal.text("PERDISTE")

    }


});
function reload() {
    location.reload();
}











































