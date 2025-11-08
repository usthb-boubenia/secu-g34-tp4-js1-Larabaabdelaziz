'use strict';

const students = [
    //table of objects: slide 40
  { id: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { id: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];


function B(moyenne) {
    // function slide : 46
  return moyenne >= 10;
}

function A() {
  students.forEach(student => {
    //for each loop :slide 44
    
    const moyenne = (student.note1 + student.note2) / 2 + 5;
    
    const isAdmis = B(moyenne);
    
    const results = isAdmis ? "ADMIS" : "AJOURNE";
    console.log(`${student.id}: ${results}`);
  });
}