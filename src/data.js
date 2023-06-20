export const example = {
paisAtlethes: (datos) => {
     const name = datos.filter( objeto => objeto.team === Italia)
     return name
}
}

export const sortData = {
     //ordena los atletas por edad: Mayor a Menor
     sortbyAge1: (data) => {
       data.sort((a, b) => {
         if (b.age > a.age) {
           return 1;
        }
         if (b.age < a.age) {
           return -1;
        }
        return 0;
       })
     },
     //ordena los atletas por edad: Menor a Mayor
     sortbyAge2: (data) => {
      data.sort((a, b) => {
        if (a.age > b.age) {
          return 1;
       }
        if (a.age < b.age) {
          return -1;
       }
       return 0;
      })
     },
     //ordena los atletas por nombre A - Z
     sortbyNameAtoZ: (data) => {
      data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
       }
        if (a.name < b.name) {
          return -1;
       }
       return 0;
      })
     },
     //ordena los atletas por nombre Z - A
     sortbyNameZtoA: (data) => {
      data.sort((a, b) => {
        if (b.name > a.name) {
          return 1;
       }
        if (b.name < a.name) {
          return -1;
       }
       return 0;
      })
     },
     //ordena los datos por país A - Z
     sortbyCountryAtoZ:(data) => {
      data.sort((a, b) => {
        if (a.team > b.team) {
          return 1;
       }
        if (a.team < b.team) {
          return -1;
       }
       return 0;
      })
     },
     //ordena los datos por país Z - A
     sortbyCountryZtoA: (data) => {
      data.sort((a, b) => {
        if (b.team > a.team) {
          return 1;
       }
        if (b.team < a.team) {
          return -1;
       }
       return 0;
      })
     },
   };