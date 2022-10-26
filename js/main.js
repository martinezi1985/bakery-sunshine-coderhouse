const bienvenida = () => {
    alert("Bienvenido a Pastelería Sunshine!");
}

const ingreso = () => {for (i = 1; i <= 1; i++) {
    let seleccion = parseInt(prompt("Elija la promocion entre la 1 y la 5:\n 1- Tortas de chocolate y frutillas\n 2- Tortas de crema y dulce de leche\n 3- Tortas de dulce de leche y merengue\n 4- Tortas de crema y frutillas\n 5- tortas de chocolate y merengue"));
    
    if (seleccion <=1) {
        alert("Eligió las tortas de chocolate y frutillas, su promo es de $ " + promocion(1500, 1750));
    } else if (seleccion <=2) {
        alert("Eligió las tortas de crema y dulce de leche, su promo es de $ " + promocion(1250, 2000));
    } else if (seleccion <=3) {
        alert("Eligió las tortas de dulce de leche y merengue, su promo es de $ " + promocion(2000, 1350));
    } else if (seleccion <=4) {
        alert("Eligió las tortas de crema y frutillas, su promo es de $ " + promocion(1250, 1750));
    } else if(seleccion <=5) {
        alert("Eligió las tortas de chocolate y merengue, su promo es de $ " + promocion(1500, 1350));
    } else {
        alert("Por favor elija entre las tortas 1 a la 5");
        }
    }
}

const promocion = (num1, num2) => {
    return ((num1 + num2) * 0.21) / 0.30
}

bienvenida()


let tortas = parseInt(prompt("Qué torta busca?\n 1- Chocolate\n 2- Frutillas\n 3- Torta de crema\n 4- Torta de dulce de leche\n 5- Torta de merengue"));

    if (tortas <= 1) {
        alert("Eligió la torta de chocolate y cuesta $1500 pesos");
} else if (tortas <= 2) {
    alert("Eligió la torta de frutillas y cuesta $1750 pesos");
} else if (tortas <= 3) {
    alert("Eligió la torta de crema y cuesta $1250 pesos");
} else if (tortas <= 4) {
    alert("Eligió la torta de dulce de leche y cuesta $2000 pesos");
} else if (tortas <= 5) {
    alert("Eligió la torta de merengue y cuesta $1350 pesos");
} else {
    alert("Debe escoger entre el 1 al 5 para poder comprar su torta");
}

alert("Llevando dos tortas, tiene un precio con descuento más iva");


ingreso();


let lleva = parseInt((prompt("Lleva una promocion o prefiere una torta?\n 1- Promoción\n 2- Una torta")));

if (lleva <= 1) {
    alert("Lleva la promoción, muchas gracias por su compra!");
} else if (lleva <=2) {
    alert("Lleva una torta, muchas gracias por su compra!");
} else {
    alert("Debe escoger entre 1 o 2");
}

function propiedades (peso, tipo, precio) {
    this.peso = peso,
    this.tipo = tipo,
    this.precio = precio,
    this.enviar = function () {alert("Acorde a la torta que elijas y su precio, te hacemos un envío, por la de " + this.tipo) 
                            alert("Por el precio de $ " + this.precio)
}
}

const envio1 = new propiedades (1500, "frutillas", 1750);
const envio2 = new propiedades (2000, "dulce de leche", 2000)
const envio3 = new propiedades (2150, "chocolate", 1500)

envio1.enviar();
envio2.enviar();
envio3.enviar();