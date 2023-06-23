import { goldPercentage, silverPercentage, bronzePercentage } from './data.js';
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

  console.log("%", goldPercentage(medCount()));
  console.log("%", silverPercentage(medCount()));
  console.log("%", bronzePercentage(medCount()));