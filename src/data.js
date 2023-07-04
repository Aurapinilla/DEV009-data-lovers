// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

// estadistica
export function estadistica(medallas) {
  if (typeof medallas === 'object') {

    const suma = medallas.gold + medallas.silver + medallas.bronze
    const gold = (((medallas.gold * 100) / suma)).toFixed(2)
    const silver = (((medallas.silver * 100) / suma)).toFixed(2)
    const bronze = (((medallas.bronze * 100) / suma)).toFixed(2)
