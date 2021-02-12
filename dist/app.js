// console.log("Hello world from typescript");
// const suma = (num1: number, num2: number): number => {
//     return num1 + num2;
// }
// console.log("Ejemplo de suma ", suma(2, 4));
//Constantes
const apiKey = "12122212";
//variables en typescript
let nombre = "Juan";
nombre = "Roberto";
//Tipos de datos en javascript
let age = 27;
let isActive = false;
isActive = true;
//Listas
const numbers = [];
const numbers2 = [];
const names = ["Juan", "Pedro", "Lucas", "Mateo"];
// numbers.slice(0, 2)
numbers.push(1);
//Definicion del tipo de dato
let user = {
    name: "John",
    age: 34,
    lastName: "Cena"
};
user.age = 12;
user.name = "David";
let user2 = {
    name: "Windows",
    lastName: "P",
    age: 34
};
//Clases en TS
class Animal {
    constructor(name, age) {
        this.name = name.trim();
        this.age = age;
    }
    //Metodos en TS
    toString() {
        return `Name: ${this.name}, age: ${this.age}`;
    }
}
//Herencia
class Mammal extends Animal {
    constructor(data) {
        const { name, age, canSwim } = data;
        super(name, age);
        this.canSwim = canSwim;
    }
    swim() {
        console.log(`${this.name}, Can swim ${this.canSwim}`);
    }
}
class Bird extends Animal {
    constructor(data) {
        const { name, age, canFly } = data;
        super(name, age);
        this.canFly = canFly;
    }
    fly() {
        console.log(`${this.name}, Can fly ${this.canFly}`);
    }
}
//Instancias
//Instancias de una clase abstracta (error)
// const dog:Animal = new Animal("LULU", 3);
// console.log("Dog", dog.toString());
const mammal = new Mammal({ name: "Baylee", age: 3, canSwim: true });
const condor = new Bird({ name: "Claudio", age: 5, canFly: true });
console.log("Mammal", mammal.toString());
console.log("Condor", condor.toString());
condor.fly();
mammal.swim();
//propiedades de solo lectura
class Person {
    constructor(//readonly dni: string, 
    data) {
        const { dni, name, age } = data;
        this.dni = dni;
        this._name = name;
        this.age = age;
    }
    //Encapsulamiento
    get name() { return this._name; }
    set name(value) {
        if (value.trim().length > 0) {
            this._name = value;
        }
        else {
            // throw new Error('Invalid name');
        }
    }
    get age() { return this._age; }
    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
        else {
            // throw new Error('Invalid age');
        }
    }
}
const myUser = new Person({ dni: "124567890", name: "Darwin", age: 27 });
console.log("User dni", myUser.dni);
console.log("User name", myUser.name);
console.log("user age", myUser.age);
myUser.age = -2;
myUser.name = " ";
//no se puede reasignar
// myUser.dni = "343444";
console.log("User dni", myUser.dni);
console.log("User name", myUser.name);
console.log("user age", myUser.age);
//Porpiedades y métodos estaticos 
class AppConfig {
    static getData() {
        return 200;
    }
}
AppConfig.apiKey = "13343566";
console.log(AppConfig.apiKey);
console.log(AppConfig.getData());
//Propiedades t parámetro opcionales
class Vehicle {
    constructor(data) {
        const { model, year } = data;
        this.model = model;
        this.year = year;
    }
}
class Employee {
    // vehicle?: Vehicle | null;
    constructor(data) {
        const { id, name, vehicle } = data;
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}
const kia = new Vehicle({ model: "cerato", year: 2010 });
const darwin = new Employee({ id: 123, name: "Darwin Morocho", vehicle: kia });
console.log("id", darwin.id);
console.log("vehicle", darwin.vehicle);
//Con funciones VALOR POR DEFECTO
const getPrice = (normalPrice, discount = 0) => normalPrice - normalPrice * discount / 100;
console.log("galleta::::", getPrice(.50, 50));
//tipo de dato any puede cambiar en tiempo de ejecucion
let user3;
user3 = "Darwin";
user3 = 21;
user3 = false;
let user4 = {
    name: "Darwin",
    age: 40
};
let user5 = {
    name: "Darwin",
    age: 60,
    address: "Avenida de la muerte",
    job: "Software development",
};
class AutenticationClient {
    register(data) {
        return false;
    }
    login(email, password) {
        return null;
    }
}
//Non-Null Assertion Operation !
const checkCredentials = (email, password) => {
    return "login ok";
};
const login = (data) => {
    const { email, password, loginType } = data;
    switch (loginType) {
        case "password":
            return checkCredentials(email, password);
            break;
        case "facebook":
            return "login ok";
            break;
        case "google":
            return "login ok";
            break;
        default:
            return "Invalid login";
    }
};
class MyUser {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    // name!:string;
    // lastName!:string;
    // age!:number;
    static fromJson(data) {
        return new MyUser(data.name, data.lastName, data.age);
        // const user = new MyUser();
        user.name = data.name;
        user.lastName = data.lastName;
        user.age = data.age;
    }
}
MyUser.fromJson({ name: "", lastName: "", age: 27 });
//parametro opcionales al final
const mylogin = (email, loginType, password, password2) => {
};
mylogin("email", "password", undefined, "WEDWED");
const createCourse = (name, level, price) => {
    const newCourse = {
        name,
        price: 9.99,
        level: level,
    };
    return newCourse;
};
const nodeJSCourse = {
    name: 'Node.js',
    price: 9.99,
    level: "advanced"
};
//Progamacion asyncrona en javascript
const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
};
const run = () => {
    sleep(2).then((value) => {
        console.log("Hello", value);
    });
};
run();
const run2 = async () => {
    // const value = sleep(2).then((value) => {return value;});
    // console.log(value);
    const value = await sleep(2);
    console.log("Hola AsyncAwait", value);
};
run2();
//Enums Grupo de constantes 
var FileType;
(function (FileType) {
    FileType["video"] = ".MP4";
    FileType["image"] = ".JPG";
    FileType["audio"] = ".MP3";
})(FileType || (FileType = {}));
// const getFileType = (url: string): FileType => {
//     if (url === '.mp3') {
//         return FileType.audio;
//     }
//     if (url === '.mp4') {
//         return FileType.video;
//     }
//     return FileType.image;
// }
const parseDate = (url) => {
    // const type: FileType = getFileType(url);
    const type = url.substring(0, 10).toUpperCase();
    switch (type) {
        case FileType.audio:
            break;
        case FileType.video:
            break;
        case FileType.image:
            break;
        default:
            break;
    }
};
