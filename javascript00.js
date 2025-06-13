// Diccionario de palabras
// palabra - significado
// Python - diccionario
// JavaScript - Map 
// Recordar que los diccionario siguen el esquema clave-valor
const diccionario = {
  "Python": "Lenguaje de programación de alto nivel, interpretado y orientado a objetos.",
  "JavaScript": "Lenguaje de programación interpretado, basado en prototipos y multiparadigma.",
  "Java": "Lenguaje de programación de propósito general, concurrente, orientado a objetos y basado en clases.",
  "C++": "Lenguaje de programación de propósito general, con soporte para programación orientada a objetos.",
  "Ruby": "Lenguaje de programación interpretado, reflexivo y orientado a objetos.",
};

// Para obtener el significado de una palabra
diccionario["C#"]
diccionario.get("JavaScript");

// Ejemplo de diccionario con información de una persona
const personas = {
    "164444": {nombre: "Juan", edad: 30, ciudad: "Madrid"},
    "164445": {nombre: "Ana", edad: 25, ciudad: "Barcelona"},
    "164446": {nombre: "Luis", edad: 28, ciudad: "Valencia"},
};

personas["164445"]
personas.get("164445");

