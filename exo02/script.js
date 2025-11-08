'use strict'; 


function f1() {
    //array of strings : slide 38
  const students = ["Etudiant1", "Etudiant2", "Etudiant3"];
  console.log(students); 
}

function f2() {
    //object : slide 38
  const student = {
    nom: 'John',
    prenom: 'Doe',
    age: 30
  };
  console.log(student);  
}


function f3() {
    //table of objects: slide 40
  const students = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  
  students.forEach(student => {
    //for each loop :slide 44
    console.log(`${student.nom}-${student.prenom}-${student.age}`);
  });
}