import { goldPercentage, silverPercentage, bronzePercentage, goldAthletes, silverAthletes, bronzeAthletes } from './data.js';
import data from './data/athletes/athletes.js';

//llamar a los datos de Athletes
const dataArr = Object.values(data.athletes)

//Extraer el conteo de medallas ganadas por jugador, indicando el tipo de medalla 
function medCount(){
    const athletes = dataArr.map((athlete) => {
      const { name, medal } = athlete; //Para que el resultado lo devuelva en forma de objeto
      const medalCount = {
        Gold: 0,
        Silver: 0,
        Bronze: 0
      };
      if (medal === "Gold") {
        medalCount.Gold = 1;
      } else if (medal === "Silver") {
        medalCount.Silver = 1;
      } else if (medal === "Bronze") {
        medalCount.Bronze = 1;
      }
      return { name, ...medalCount }; //los ... se usan para copiar todas las propiedades de medalCount (gold, silver, bronze)
    });
    return athletes;
  }console.log("meed", medCount());
// En esta constante se almacena el resultado de la función para poder trabajar con esto después
const medalsArr = medCount();

//Se agregan los % correspondientes por cada tipo de medalla
  document.getElementById("gold%").innerHTML = goldPercentage(medCount()) + " %";
  document.getElementById("silver%").innerHTML = silverPercentage(medCount()) + " %";
  document.getElementById("bronze%").innerHTML = bronzePercentage(medCount()) + " %";

//Estas constantes almacenan los nombres de los atletas por medalla y el espacio en el HTML donde se va a crear la lista con el contenido
const goldNames = goldAthletes(medalsArr);
const goldNamesList = document.getElementById("goldNames");
const silverNames = silverAthletes(medalsArr);
const silverNamesList = document.getElementById("silverNames");
const bronzeNames = bronzeAthletes(medalsArr);
const bronzeNamesList = document.getElementById("bronzeNames");

function athLists () {
  goldNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    goldNamesList.appendChild(listItem);
  });

  silverNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    silverNamesList.appendChild(listItem);
  });

  bronzeNames.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    bronzeNamesList.appendChild(listItem);
  });

};
athLists();


  //funcion if for each para que pase por la posicion [0] y si es >1 que traiga el nombre

  console.log("03", medalsArr.length);

  console.log("yas", goldAthletes(medalsArr));

/*function nombresAth(){
  for (let i=0; i<medalsArr.length; i++){
    if (medalsArr[i].Gold > 0){
      return medalsArr[i].name;
    }
  }
}
console.log("asap", nombresAth());*/