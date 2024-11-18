const getDateNowTz  = () => {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Formatear los componentes de la fecha y hora
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // Formato final: YYYY-MM-DDTHH:MM:SS
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

module.exports = getDateNowTz ;
