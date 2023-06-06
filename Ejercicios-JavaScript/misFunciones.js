/**
 * convierte una unidad a otras entre metros, pulgadas, pies y yardas
 * @method convertirUnid
 * @param {string} id - id del elemento input de html
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */
function convertirUnid(id,valor){
    let met, pul, pie, yar;
    if (valor.includes(",")){
        valor=valor.replace(",", ".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met=" ";
        pul=" ";
        yar=" ";
        pie=" ";
    } else if (id=="metro"){
        met=valor;
        pul=valor*39.3701;
        pie=valor*3.28084;
        yar=valor*1.09361;
    } else if (id=="pulgada"){
        pul=valor;
        met=valor*0.254;
        pie=valor*0.0833333;
        yar=valor*0.2777778;
    }else if (id=="pie"){
        pie=valor;
        pul=valor*12;
        met=valor*0.3048;
        yar=valor*0.33333;
    }else if (id=="yardas"){
        yar=valor;
        pul=valor*36;
        pie=valor*3;
        met=valor*0.9144;
    }
    document.unidades.unid_pulgada.value=Math.round(pul*100)/100;
    document.unidades.unid_pie.value=Math.round(pie*100)/100;
    document.unidades.unid_pie.value=Number(pie).toFixed(2);
    document.unidades.unid_yarda.value=Number(yar).toFixed(2);

}

/**
 * convierte una unidad a otras entre grados y radianes
 * @method converGR
 * @param {string} id - id del elemento input de html
 */

converGR=(id)=>{
    let gr, rad;

    if (id=="grados"){
        gr=document.getElementById("grados").value;
        if(isNaN(gr)){
            gr=" ";
        }
        document.getElementById("radianes").value=(gr*Math.PI)/180;
    }else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        if(isNaN(rad)){
            rad=" ";
        }
        document.getElementById("grados").value=(rad*180)/Math.PI;
    }
}
/**
 * muestra u oculta un div
 * @method mostrar_ocultar
 * @param {string} id - id del elemento input de html
 */

let mostrar_ocultar = (id)=> {
    if(id=="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display='block';
    }else{
        document.getElementsByName("unDiv")[0].style.display='none';
    }
}

/**
 * suma dos inputs introducidos por el usuario
 * @method sumar
 */

let sumar=()=> {
    let res, s1, s2;
    s1=Number(document.operacionesMat.sum_num1.value);
    s2=Number(document.operacionesMat.sum_num2.value);
    res= s1 + s2;
    document.getElementById("totalS").innerHTML=res;
    document.operacionesMat.sum_total.value = res;
}

/**
 * resta dos inputs introducidos por el usuario
 * @method restar
 */

let restar=()=>{
    let res, r1, r2;
    r1=Number(document.operacionesMat.res_num1.value);
    r2=Number(document.operacionesMat.res_num2.value);
    res= r1 + r2;
    document.getElementById("totalR").innerHTML = res;
    document.operacionesMat.res_total.value = res;
}

/**
 * Multiplica dos inputs introducidos por el usuario
 * @method multiplicar
 */

let multiplicar = () =>{
    let res, m1, m2;
    m1=Number(document.operacionesMat.mul_num1.value);
    m2=Number(document.operacionesMat.mul_num2.value);
    res=m1*m2;
    document.getElementById("totalM").innerHTML=res;
    document.operacionesMat.mul_total.value=res;
}

/**
 * divide dos inputs introducidos por el usuario
 * @method dividir
 */

let dividir = () =>{
    let res, d1, d2;
    d1=Number(document.operacionesMat.div_num1.value);
    d2=Number(document.operacionesMat.div_num2.value);
    res= d1/d2;
    document.getElementById("totalD").innerHTML=res;
    document.operacionesMat.div_total=res;
}

/**
 * si el campo contiene una letra, blanquea el campo
 * @method verLetra
 * @param {string} id-Id del elemento input del html
 * @param {number/string} value- Contiene el valor del imput que ingreso el usuario
 */

let verLetra=(id,value)=>{
    if(siNaN(value)){
        document.getElementById(id).value=" ";
    }
}

/**
 * genera URL para ir a la segunda web
 * @method generarURL
 */
let generarUrl = ()=>{
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * carga el valor de la distancia y la unidad
 * @method cargarValor
 */


let cargarValor=()=>{
    let urlCompleta=window.location.href;
    console.log(urlCompleta);
    urlCompleta=urlCompleta.split("#");

    const distancia=urlCompleta[1];
    const unidad=urlCompleta[2];
    document.getElementById("dist").value=`${distancia} ${unidad}`;
}

let guardarLS = () =>{
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    window.open("web2.html");
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
}

let cargarLS = () =>{
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle = "#333";
    //Dibujar rectangulo
    let margen = 15;
    ctx.fillRect(0+margen, yMax-120-margen, 130, 120);

    //Dibujar circulo
    ctx.arc(xMax/2, yMax/2, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}


var bandera;
let dibujar = (event) => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

let dibujarCuadriculado=()=>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchoMax=canvas.width;
    const alturaMax=canvas.height;
    const paso= 20;
    let ejeX = -24;
    let ejeY=-14;
    //lineas verticales
    for(let i =paso; i<anchoMax; i+=paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#838383";
        ctx.stroke();
        ctx.font="15px Arial";
        ctx.fillStyle="#333";
        ctx.fillText(ejeX, i, alturaMax/2);
        ejeX++;
        ctx.closePath();

    }
    for(let i =paso; i<alturaMax; i+=paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#838383";
        ctx.stroke();
        ctx.font="15px Arial";
        ctx.fillStyle="#333";
        ctx.fillText(ejeY, anchoMax/2, i);
        ejeY++;
        ctx.closePath();
    }
   //eje x
        ctx.beginPath();
        ctx.moveTo(0, alturaMax/2);
        ctx.lineTo(anchoMax, alturaMax/2);
        ctx.strokeStyle = "#b20707";
        ctx.stroke();
        ctx.closePath();

        //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo((anchoMax/2), alturaMax);
    ctx.strokeStyle = "#b20707";
    ctx.stroke();
    ctx.closePath();
}

let dibujarImagen = (posX, posY)=>{
    const canvas=document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax=canvas.width;
    const alturaMax=canvas.height;

    canvas.width=canvas.width;

    console.log (posX, posY);
    let img=new Image();
    img.src= "images/auto.png";
    if(posX<0||posY<0 || posX>=anchoMax || posY>=alturaMax){
        openDialog();
    }else {
        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }
}

let cerrarDialog=()=> {
    const dialog =document.getElementById("myDialog");
    dialog.close();
}

let openDialog=()=>{
    const dialog =document.getElementById("myDialog");
    dialog.showModal();
}


let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    var x = 0;
    var dx = 2;

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += dx;
    console.log("La coordenada X es: " +x);
    if(x>canvas.width){ //reseteando la variable, no toma valores tan grandes
        x = 0;
    }


}