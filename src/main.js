import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const b = document.getElementById('bronze%')
const btot = estadistica(extraermedal(dataArr))
b.innerHTML = (btot.bronzePorcent) + "%"

//URLs con imagenes atletas del top 10
function obtenerUrlImagen(index) {
  const urlsImgs = [
    "https://mui.fitness/__export/1679075847873/sites/muifitness/img/2023/03/17/simone-biles-gettyimages-1332234925.jpg_264374142.jpg",
    "https://talibah4.github.io/Goggles/images/nathan-adrian-rio.png",
    "https://d2a3o6pzho379u.cloudfront.net/120449.jpg",
    "https://cdn.britannica.com/10/224310-050-C338430A/Usain-Bolt-gold-medal-4-x-100-meter-relay-Rio-de-Janeiro-Olympics-2016.jpg",
    "https://s.yimg.com/ny/api/res/1.2/uTD9wvqRDYMrI.mHx6Ya5Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkzMg--/https://media.zenfs.com/en/us_magazine_896/c9613d03275bf0289de9816b8d2472a1",
    "https://img.olympicchannel.com/images/image/private/t_1-1_300/f_auto/primary/ga3itwpv5ifebmda7wjz",
    "https://calbears.com/images/2017/9/5/Kathleen_Baker_20170901_130556_1518_CAL_Womens_Swimming_Diving_NP.jpg",
    "https://img.bekia.es/galeria/96000/96643_mireia-belmonte-garcia-mostrando-bronce-despues-compteicion-metros-juegos-olimpicos-rio.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/David_Belyavskiy_2021.jpg",
    "https://olympic.ca/wp-content/uploads/2019/06/MEAGHAN_BENFEITO.jpg?quality=100&resize=350,522",
  ];
  return urlsImgs[index];
}