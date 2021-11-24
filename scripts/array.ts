const filmesCategoria: (string | number)[] = ["Comédia", "Drama", "Terror", "Aventura"]

// filmesCategoria.push("Ficcao")
// filmesCategoria.push(1312)

const filmesAnos: Array<number | string> = []

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {

   filmesAnos.push(ano)

}

console.log(filmesAnos);