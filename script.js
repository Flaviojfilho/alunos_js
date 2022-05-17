const students = [
  {
    name: 'Pedro',
    number1: 5,
    number2: 10
  },
  {
    name: 'Carla',
    number1: 3,
    number2: 9
  },
  {
    name: 'Joana',
    number1: 2,
    number2: 6
  },
  {
    name: 'João',
    number1: 6,
    number2: 10
  },
  {
    name: 'Maria',
    number1: 1,
    number2: 9
  }
]

function Media(notas) {
  let soma = Number(notas.number1 + notas.number2) / 2

  if (soma <= 6) {
    alert(`
A nota do(a) aluno(a) ${notas.name} foi de ${soma}. \nNão foi dessa vez, ${notas.name}! Tente novamente! 
  `)
  } else {
    alert(`
A nota do(a) aluno(a) ${notas.name} foi de ${soma}. \nParabéns, ${notas.name}! Você foi aprovado(a) no concurso!
  `)
  }
}

for (let notas of students) {
  Media(notas)
}
