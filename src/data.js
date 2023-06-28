//FILTRO PAIS
export function filterTeam (datos,pais) {
  const i = datos.filter((obj) => {
    return obj.team === pais;})
  return i
}

//FILTRO DEPORTE
export function filterSport(datos,deporte) {
  const g = datos.filter((obj) => {
    return obj.sport === deporte;})
  return g;
}

//FILTRO DEPORTE
//Filtrar por Gimnasia
export function filterGymnastics (datos) {
  const g = datos.filter((obj) => {
    return obj.sport === 'Gymnastics';})
    return g;
}

//Filtrar por natación
export function filterSwimming (datos) {
  const s = datos.filter((obj) => {
    return obj.sport === 'Swimming';})
    return s;
}

//Filtrar por Basketball
export function filterBasketball (datos) {
  const b = datos.filter((obj) => {
    return obj.sport === 'Basketball';})
    return b;
}

//Filtrar por volleyball
export function filterVolleyball (datos) {
  const v = datos.filter((obj) => {
    return obj.sport === 'Volleyball';})
    return v;
}

//Filtrar por football
export function filterFootball (datos) {
  const f = datos.filter((obj) => {
    return obj.sport === 'Football';})
    return f;
}

//FILTRO GENERO
export function filterGen (datos,genero) {
  const m = datos.filter((obj) => {
    return obj.gender === genero;})
  return m
}

//FILTRO MEDALLA
export function filterMedal (datos,medalla) {
  const g = datos.filter((obj) => {
    return obj.medal === medalla;})
  return g
}

//ORDEN
export const sortData = {
  //ordena los atletas por edad: Mayor a Menor
  sortbyAge1: (data) => {
    const newdata =data.slice().sort((a, b) => {
      if (b.age > a.age) {
        return 1;
      }
      if (b.age < a.age) {
        return -1;
      }
      return 0;
    })
    return newdata;
  },
  //ordena los atletas por edad: Menor a Mayor
  sortbyAge2: (data) => {
    const newdata = data.slice().sort((a, b) => {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    })
    return newdata;
  },
  //ordena los atletas por nombre A - Z
  sortbyNameAtoZ: (data) => {
    const newdata = data.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    })
    return newdata
  },
  //ordena los atletas por nombre Z - A
  sortbyNameZtoA: (data) => {
    const newdata = data.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameB > nameA) {
        return 1;
      }
      if (nameB < nameA) {
        return -1;
      }
      return 0;
    })
    return newdata
  },
  //ordena los datos por país A - Z
  sortbyCountryAtoZ:(data) => {
    const newdata = data.slice().sort((a, b) => {
      const teamA = a.team.toLowerCase();
      const teamB = b.team.toLowerCase();

      if (teamA > teamB) {
        return 1;
      }
      if (teamA < teamB) {
        return -1;
      }
      return 0;
    })
    return newdata
  },
  //ordena los datos por país Z - A
  sortbyCountryZtoA: (data) => {
    const newdata = data.slice().sort((a, b) => {
      const teamA = a.team.toLowerCase();
      const teamB = b.team.toLowerCase();

      if (teamB > teamA) {
        return 1;
      }
      if (teamB < teamA) {
        return -1;
      }
      return 0;
    })
    return newdata
  },
};

// estadistica
export function estadistica (medallas) {
  const suma = medallas.gold + medallas.silver + medallas.bronze
  const gold =  (medallas.gold * 100) / suma
  const silver = (medallas.silver * 100) / suma
  const bronze = (medallas.bronze * 100) / suma

  const porcentaje = {
    goldPorcent:gold,
    silverPorcent:silver,
    bronzePorcent:bronze,
  }
  return porcentaje
}


