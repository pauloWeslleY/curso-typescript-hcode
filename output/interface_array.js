"use strict";
const frontEnd = {
    nome: "Front-End",
    id: 1
};
const backEnd = {
    nome: "Back-End",
    id: 2
};
let menu = {
    categorias: [frontEnd, backEnd]
};
let mytask;
mytask = [
    "Estudar TypeScript",
    "Estudar JavaScript",
    "Estudar PHP8",
    20,
    true,
    frontEnd,
    {
        nome: "JavaScript",
        id: 3,
        categoriaPai: frontEnd
    }
];
console.log(mytask[0]);
//# sourceMappingURL=interface_array.js.map