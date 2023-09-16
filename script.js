const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
     data.forEach(person => {
      if (person.profession === "developer") {
        console.log(person.name);
      }
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
  
    const newData = { name, age, profession };
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "dummy1", age: 30, profession: "developer" },
      { name: "dummy2", age: 35, profession: "admin" },
    ];
  
    const concatenatedArray = data.concat(dummyArray);
    console.log(concatenatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average age:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    console.log("At least one person above 25:", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = data.map(person => person.profession);
    const uniqueProfessions = [...new Set(professions)];
    console.log("Unique professions:", uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCounts = data.reduce(
      (counts, person) => {
        if (person.profession === "developer") {
          counts.developers++;
        } else if (person.profession === "admin") {
          counts.admins++;
        }
        return counts;
      },
      { developers: 0, admins: 0 }
    );
  
    console.log("Total Developers:", professionCounts.developers);
    console.log("Total Admins:", professionCounts.admins);
  }