let username: string = "shidalgo";

// username = 10
username = "psalinas";
username = "jpalomares";

const password = "supersecreto";
//password = "nueva contraseña"

const users = ["user01", "user02", "user03"];
users.push("user04");
//users = ["a", "b", "c"]

let patientAge: number;
let isUserLogged: boolean;

let listNames: Array<string> = ["María", "Martha"];
let listUsers: string[] = ["Javier", "Julián"];

let listStudents: Array<{
  name: string;
  age: number;
  addresses: Array<string>;
}> = [
  { name: "Gerardo", age: 23, addresses: ["Casa 1", "Casa 2"] },
  { name: "Pedro", age: 32, addresses: ["Casa 3"] },
];

let dataToProcess: Array<Array<string>> = [
  ["Antonio", "Felipe", "Jesús"],
  ["Carla", "María", "Jimena"],
];

let dataUserToExport: Array<Array<{ name: string; age: number }>> = [
  [
    { name: "Mario", age: 45 },
    { name: "Andrea", age: 18 },
  ],
  [{ name: "Jorge", age: 34 }],
];
