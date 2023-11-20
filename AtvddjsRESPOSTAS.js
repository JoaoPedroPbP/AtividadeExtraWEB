//1 
var numero1 = 83;
var numero2 = 205;
var numero3 = 77;

var resultado;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    resultado = true;
} else {
    resultado = false;
}

console.log(resultado);


//2 
var fatorialDez = 1;

for (var i = 10; i > 1; i--) {
    fatorialDez *= i;
}

console.log("Fatorial de 10:", fatorialDez);


//3
var n = 50;

for (var i = 0; i < n; i++) {
    var linha = "";
    for (var j = 0; j < n; j++) {
        linha += "*";
    }
    console.log(linha);
}


//4
const school = {
    lessons: [
    {
    course: 'Python',
    students: 20,
    professor: 'Carlos Patrício',
    shift: 'Manhã',
    },
    {
    course: 'Kotlin',
    students: 10,
    professor: 'Gabriel Oliva',
    shift: 'Noite',
    },
    {
    course: 'JavaScript',
    students: 738,
    professor: 'Gustavo Caetano',
    shift: 'Tarde',
    },
    {
    course: 'MongoDB',
    students: 50,
    shift: 'Noite',
    },
    ]
   };
   

function somaEstudantes(dados) {
    var soma = 0;
    for (var lesson of dados.lessons) {
        if (lesson.students) {
            soma += lesson.students;
        }
    }
    return soma;
}

console.log("Soma do número total de estudantes:", somaEstudantes(school));


//5
const school = {
    lessons: [
    {
    course: 'Python',
    students: 20,
    professor: 'Carlos Patrício',
    shift: 'Manhã',
    },
    {
    course: 'Kotlin',
    students: 10,
    professor: 'Gabriel Oliva',
    shift: 'Noite',
    },
    {
    course: 'JavaScript',
    students: 738,
    professor: 'Gustavo Caetano',
    shift: 'Tarde',
    },
    {
    course: 'MongoDB',
    students: 50,
    shift: 'Noite',
    },
    ]
   };

   
function trocaTurno(dados, nomeCurso) {
    for (let lesson of dados.lessons) {
        if (lesson.course === nomeCurso) {
            lesson.shift = 'Noite';
            console.log(`Turno alterado para noite no curso de ${nomeCurso}`);
            return;
        }
    }
    console.log(`Curso ${nomeCurso} não encontrado`);
}

alterarTurnoParaNoite(school, 'Python');

console.log(school);