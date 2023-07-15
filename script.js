/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  const devs = arr.filter((person) => person.profession === "developer");

  devs.map((dev)=>{
    console.log(dev);
  });
}

function PrintDeveloperbyForEach() {
  
  arr.forEach((person)=>{
    if(person.profession === "developer") console.log(person);
  });

}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr[arr.length-1]);
}

function removeAdmin() {
  arr = arr.filter((person)=>person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
    let newArr = [
      {id: 9, name: "Aditya", age: "23", profession: "engineer"},
      {id: 8, name: "Tarun", age: "23", profession: "developer"},
      {id: 7, name: "Shubham", age: "23", profession: "aadmi"}
    ];

    arr = arr.concat(newArr);
    console.log(arr);
}
