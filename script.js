let arrayPirata = ["¿Cuál es la bebida deseada por todo buen marino, bajo toda circunstancia, amada sobre todas las cosas?",
    "Paraíso soñado por todo pirata respetable (y no tan respetable) lleno de todos los placeres imaginados:",
    "Completa la canción:\n'Cupido me ha flechado, la riqueza me da igual\nSolo ha de consolarme...':",
    "Criatura capaz de destrozar naves enteras, devorar hombres, cuya existencia se limita a WhiteCap Bay:",
    "Explicación más logica ante un suceso imposible de haber ocurrido:"];
let respuestasPirata = [["Wisky", "Jugo de Cactus", "Aqua de Vida", "Ron"], ["Tortuga", "St Martin", "Bahia del Naufragio", "Bahia del Verdugo"],
["Mi Pirata Magistral", "Mi Marino Audaz Jovial", "Mi Botella sin Igual", "Mi Travesía Ideal"],
["Kraken", "Tiburón Zombie", "Sirena", "Caníval Pelegosto"],
["Tortugas Marinas", "Kalipso", "Los Franceses", "Piratas"]];
let arrayZelda = ["¿Cuál es el nombre del Caballo que acompaña a nuestro héroe en sus aventuras?",
    "¿Cuál es el nombre del poderoso artefacto forjado para vencer al mal, el cual nuestro héroe empuña?",
    "¿Cuál es la procedencia del escudo más icónico portado por nuestro héroe a travez de la saga?",
    "Infernales animales a los que nuestro héroe se enfrenta cuando necesita llegar a lugares altos, por medio del vuelo:",
    "¿Cuál de las siguientes no corresponde a una bebida para aportar Salud a nuestro héroe?:"];
let respuestasZelda = [["Romani", "Epona", "Saria", "Zelda"],
["Espada Sagrada", "Espada Kokiri", "Espada Maestra", "Espada Suprema"],
["Escudo Hylian", "Escudo Deku", "Escudo Espejo", "Escudo Maestro"],
["Chuchus", "Bokoblin", "Skulltulas", "Cucos"],
["Poción Roja", "Poción Dorada", "Poción Verde", "Sopita de la Abuela"]];
let correctasPirata = ["Ron", "Tortuga", "Mi Marino Audaz Jovial", "Sirena", "Tortugas Marinas"];
let correctasZelda = ["Epona", "Espada Maestra", "Escudo Hylian", "Cucos", "Poción Verde"];
let imagesZelda=["images/link1.jpg","images/link2.jpg", "images/link3.jpg","images/link4.jpg","images/link5.jpg"];
let imagesPirata=["images/pi1.jpg","images/pi2.jpg", "images/pi3.jpg","images/pi4.jpg","images/pi5.jpg"];






//-------------
const nombre = document.getElementById("nombre");
const btn = document.querySelector("#enviar");
const bienvenidaDiv = document.getElementById("bienvenida");
const opcionesDiv = document.getElementById("opciones");
const pirateDiv = document.getElementById("trivia1");
const zeldaDiv = document.getElementById("trivia2");
const preguntasDiv = document.getElementById("preguntas");
const imagenDiv = document.getElementById("imagen");
const preguntaDiv = document.getElementById("pregunta");
const respuestasDiv = document.getElementById("respuestas");
const saludo= document.getElementById("usuario");
var parrafo=document.getElementById("parrafoSeleccion");


//Queremos saber qué trivia es, por el momento solo tenemos dos
const arrayTrivia = ["1", "2"]
let trivia = 0, contador = -1, puntos = 0;

//funciones para poder volver a jugar, sin introducir de nuevo el usuario
function porDefecto(){
bienvenidaDiv.style.display="block";
opcionesDiv.style.display = "none";
preguntasDiv.style.display = "none";
trivia = 0, 
contador = -1 
puntos = 0;
}
porDefecto();

function intentarDeNuevo(cadena){
    preguntasDiv.style.display="none";
    porDefecto();
    bienvenidaDiv.style.display="none";
    saludo.innerText=cadena;
    parrafo.innerText=""
    opcionesDiv.style.display="block";

}


//Event Listener para las zonas en las que se espera el usuario de click
btn.addEventListener("click", function (e) {
    e.preventDefault();

    datos.innerHTML = '<button type="button"  id="btnSalir" class="btnEstandar" onclick="location.reload();">'+("Usuario: " + nombre.value + " (Salir)")+'</button>';
    bienvenidaDiv.style.display = "none";
    saludo.innerText="¡Hola "+nombre.value+"!";
    opcionesDiv.style.display = "block";

});

///////Sección Pirata
pirateDiv.addEventListener("click", function () {
    opcionesDiv.style.display = "none";
    preguntasDiv.style.display = "block";
    preguntasDiv.style.backgroundColor = "brown";
    trivia = arrayTrivia[0];
    //llamar una funcion que muestre las preguntas
    lanzarTrivia(trivia);
});

////////Sección Zelda

zeldaDiv.addEventListener("click", function () {
    opcionesDiv.style.display = "none";
    preguntasDiv.style.display = "block";
    preguntasDiv.style.backgroundColor = "#3BB817";
    trivia = arrayTrivia[1];
    //llamar una funcion que muestre las preguntas
    lanzarTrivia(trivia);
});

//Cada vez que se llama, lanza la trivia con la pregunta numero Contador, vuelve visibles y ocultas algunos div
function lanzarTrivia(trivia) {
    let arrayPregunta = [], arrayRespuestas = [], cadenaImagen="";
    contador++;

    if (contador < 5) {
        let color;
        //Imprime los valores de la pregunta, respuesta e imagen segun la trivia seleccionada
        if (trivia == 1) {
            //Trivia Pirata
            arrayPregunta = arrayPirata;
            arrayRespuestas = respuestasPirata;
            preguntaDiv.style.backgroundColor="#8C5A60";
            color="#C88A6F";
            cadenaImagen+='url("'+imagesPirata[contador]+'")';
            imagenDiv.style.backgroundImage=cadenaImagen;
        }
        else if (trivia == 2) {
            //Trivia Zelda
            arrayPregunta = arrayZelda;
            arrayRespuestas = respuestasZelda;
            preguntaDiv.style.backgroundColor="#1F9531";
            color="#78DA5B";
            cadenaImagen+='url("'+imagesZelda[contador]+'")';
            imagenDiv.style.backgroundImage=cadenaImagen;
        }
        preguntaDiv.innerText = arrayPregunta[contador];
        let cadena = "";

        for (let i = 0; i < arrayRespuestas[contador].length; i++) {
            cadena += '<div class="radios" style="background-color:'+color+'"><input type="radio" class="ruedas" name="opcion" id="radio' + (i + 1) + '" value=' + ((arrayRespuestas[contador][i]).replace(/ /g, "")).toLowerCase() + ' onclick="radiosCorrectos();"  ><label for="radio' + (i + 1) + '" >' + arrayRespuestas[contador][i] + '</label></div>';

        }
        
        respuestasDiv.innerHTML = cadena;


    }
    else {
        //Zona de puntajes
        let resultados="";

        if (puntos <= 1) {
            if (trivia==1) {
                
                    resultados="¿Seguro que la sangre pirata corre por tus venas? Toma un poco de ron e Intentalo de nuevo\n";
                  
            }else{
                    resultados="¡Por Hylia! Los grande héroes de antaño lloran tu derrota. Se Valiente e intentalo de nuevo\n";
                    
            }
        } else if (puntos <= 3) {
            if (trivia == 1) {

                resultados="Conoces de estas aguas maestre, ningún mar en calma hizo experto a un marinero... ¡Sigue intentando!\n";

            } else {
                resultados="Resuenan voces que empiezan a contar tus hazañas... Sigue intentándolo y que las diosas te acompañen\n";

            }

        } else if (puntos == 4) {
            if (trivia == 1) {

                resultados="Muy bien hecho Marinero! Talvez tu nombre sí quede escrito en la historia... ¡Felicidades!\n";

            } else {
                resultados="Los grandes sabios ahora se regocijan contigo, tú sí sabes de estas cosas ¡Muy bien hecho!\n";

            }
        } else {
            
            if (trivia == 1) {
                resultados="No hay pirata que se te compare, ¡ni quien se cruce en tu camino! ¡Excelente! Pirata Siempre...\n";
            } else {
                resultados="¡Los Cuatro Mundos descansan en paz, sabiendo que hay un grande poder en ti! ¡Excelente, Guerrero!\n";

            }
        }
        
    resultados+="Puntos obtenidos: "+ puntos+"/5";
    const texto=resultados;
        if(resultados.value!=""){
            intentarDeNuevo(resultados);
        }

        

    }
}

//funcion para averiguar qué radio marcó, y si es la respuesta correcta
function radiosCorrectos() {

    var type = document.getElementsByName("opcion");

    let arrayRespuestas = [];
    for (let i = 0; i < 4; i++) {

        if (type[i].checked) {

            var valor = type[i].value;
            if (trivia == 1) {
                arrayRespuestas = correctasPirata;

            }
            else if (trivia == 2) {
                arrayRespuestas = correctasZelda;
            }
            for (let j = 0; j < arrayRespuestas.length; j++) {
                if (valor == ((arrayRespuestas[j]).replace(/ /g, "")).toLowerCase()) {

                    puntos++;
                }

            }
        }
    }
    if (1) {
        lanzarTrivia(trivia);
    }
}






