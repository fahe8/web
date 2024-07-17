export const data = [
  {
    nombre: "Ana",
    apellido: "Roldan",
    DNI: "137-01-8141",
    edad: 79,
    fechaNacimiento: "2002-01-23",
    fechaExpiracion: "2102-01-23",
    lugarNacimiento: "Almería",
  },
  {
    nombre: "Vicenta",
    apellido: "Zabaleta",
    DNI: "976-24-7347",
    edad: 60,
    fechaNacimiento: "1964-08-25",
    fechaExpiracion: "2064-08-25",
    lugarNacimiento: "Asturias",
  },
  {
    nombre: "Paca",
    apellido: "Ferrando",
    DNI: "596-85-8305",
    edad: 23,
    fechaNacimiento: "1977-04-17",
    fechaExpiracion: "2077-04-17",
    lugarNacimiento: "Lleida",
  },
  {
    nombre: "Francisco Jose",
    apellido: "Bautista",
    DNI: "225-89-2958",
    edad: 57,
    fechaNacimiento: "1979-06-18",
    fechaExpiracion: "2079-06-18",
    lugarNacimiento: "Cuenca",
  },
  {
    nombre: "Conrado",
    apellido: "Araujo",
    DNI: "139-04-7146",
    edad: 60,
    fechaNacimiento: "1945-05-18",
    fechaExpiracion: "2045-05-18",
    lugarNacimiento: "Toledo",
  },
];

export function buscarUsuarioPorDNI(DNI) {
  return data.find(usuario => usuario.DNI === DNI);
}


