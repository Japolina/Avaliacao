const estudante = {
    nome: "Yasmin",
    turma: "T1 - Tarde",
    nota1: 10,
    nota2: 9
}

 const media = (estudante.nota1 + estudante.nota2) / 2;
 console.log(estudante);
 console.log(`A média é ${media}`);

 if (media >= 7){
    console.log(`O(a) estudante ${estudante.nome} foi aprovado(a)!`);
 }else {
    console.log(`O(a) estudante ${estudante.nome} foi reprovado(a)!`);
 }
 
 //2º parte

 const estudantes = [
    {
        nome: "Érica",
        turma: "N2 - Noite",
        nota1: 5,
        nota2: 10
    },
    {
        nome: "Matheus",
        turma: "N2 - Noite",
        nota1: 6,
        nota2: 2
    }
 ]

 function calcularMedias (){
    for (let estudantesNoite of estudantes){

    const media2 = (estudantesNoite.nota1 + estudantesNoite.nota2) / 2;

    console.log(estudantesNoite);
    console.log(`A média do(a) ${estudantesNoite.nome} é ${media2}`);

    if ( media2 >= 7){
        console.log(`O(a) estudante ${estudantesNoite.nome} foi aprovado(a)!`);
     }else {
        console.log(`O(a) estudante ${estudantesNoite.nome} foi reprovado(a)!`);
     }
    }  
 }
 calcularMedias(estudantes);
