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
let age:number = 27;

let isActive: boolean = false;
isActive = true;


//Listas
const numbers: Array<number> = [];
const numbers2: number[] = [];
const names: string[] = ["Juan","Pedro","Lucas","Mateo"];
// numbers.slice(0, 2)
numbers.push(1);

//Objetos

//definir tipo de dato personalizado
type UserProduct = {
    name: string,
    lastName : string,
    age: number,
}

//Definicion del tipo de dato
let user: {
    name: string,
    lastName : string,
    age: number,
} = {
    name: "John",
    age: 34,
    lastName: "Cena"
}

user.age = 12;
user.name = "David";

let user2: UserProduct = {
    name:"Windows",
    lastName : "P",
    age: 34
}

//Clases en TS
abstract class Animal {
    protected name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name.trim();
        this.age = age;
    }

    //Metodos en TS
    public toString(): string {
        
        return `Name: ${this.name}, age: ${this.age}`;
    }
}

//Herencia
class Mammal extends Animal { 
    private canSwim: boolean;

    constructor(data: {name: string; age: number; canSwim: boolean}) {
        const { name, age, canSwim} = data;
        super(name, age);
        this.canSwim = canSwim;
    }

    public swim(): void {
        console.log(`${this.name}, Can swim ${this.canSwim}`);
    }
}


class Bird extends Animal { 
    
    public canFly: boolean;
    
    constructor(data: {name: string; age: number; canFly: boolean}) {
        const {name, age, canFly} = data;
        super(name, age);
        this.canFly = canFly;
    }

    public fly(): void {
        console.log(`${this.name}, Can fly ${this.canFly}`);
    }
}

//Instancias

//Instancias de una clase abstracta (error)
// const dog:Animal = new Animal("LULU", 3);

// console.log("Dog", dog.toString());

const mammal:Mammal = new Mammal({name: "Baylee", age: 3, canSwim: true});
const condor:Bird = new Bird({name: "Claudio", age:5, canFly: true});

console.log("Mammal", mammal.toString());
console.log("Condor", condor.toString());
condor.fly();
mammal.swim();


//propiedades de solo lectura
class Person {
    public readonly dni: string;
    private _name: string;
    private _age: number;

    constructor(//readonly dni: string, 
        data: {dni: string, name: string; age: number}) {
        const { dni, name, age } = data;
        this.dni = dni;
        this._name = name;
        this.age = age;
    }

    //Encapsulamiento
    get name(): string { return this._name}
    
    set name(value: string) { 
        if (value.trim().length > 0) {       
            this._name = value;
        } else {
            // throw new Error('Invalid name');
        }
    }

    get age(): number { return this._age }

    set age(value: number) { 
        if (value >= 0) {
            this._age = value;
        } else {
            // throw new Error('Invalid age');
        }
    }

}

const myUser: Person = new Person({dni: "124567890", name: "Darwin", age: 27});

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
    static apiKey: string = "13343566";

    static getData(): number {
        return 200;
    }
}

console.log(AppConfig.apiKey);
console.log(AppConfig.getData());

//Propiedades t parámetro opcionales
class Vehicle {
    model: string;
    year: number;

    constructor(data: {model: string, year: number}) {
        const { model, year } = data;
        this.model = model;
        this.year = year;
    }
}

class Employee {
    id: number;
    name: string;
    vehicle?: Vehicle;
    // vehicle?: Vehicle | null;


    constructor(data: {id: number, name: string, vehicle?: Vehicle}) {
        const { id, name, vehicle } = data;
        this.id = id;
        this.name = name;
        this.vehicle = vehicle;
    }
}

const kia = new Vehicle({model: "cerato", year: 2010});

const darwin = new Employee({id: 123, name: "Darwin Morocho", vehicle: kia});

console.log("id", darwin.id);
console.log("vehicle", darwin.vehicle);


//Con funciones VALOR POR DEFECTO
const getPrice = (normalPrice: number, discount: number = 0) => normalPrice - normalPrice*discount/100;

console.log("galleta::::", getPrice(.50, 50));

//tipo de dato any puede cambiar en tiempo de ejecucion
let user3: any;

user3 = "Darwin";
user3 = 21;
user3 = false;

//Interfaces (estructura de una clase)

//type es necesario el =
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// }

interface User {
    name: string;
    age: number;
    address?: string;
}

interface Employee2 extends User {
    job: string;
}

let user4: User = {
    name: "Darwin",
    age: 40
};

let user5: Employee2 = {
    name: "Darwin",
    age: 60,
    address: "Avenida de la muerte",
    job: "Software development",
}

interface Autentication {
    Aapihost?: string;
    login(email: string, password: string): string | null;
    
    register(data: {username: string; email: string; password: string}) : boolean;
}

class AutenticationClient implements Autentication {
    Aapihost?: string;
    
    register(data: { username: string; email: string; password: string; }): boolean {
        return false;
    }
    
    login(email: string, password: string): string {
        return null;
    }
}


//Non-Null Assertion Operation !
const checkCredentials = (email:string, password:string): string => {
    return "login ok";
}

const login = (data: { email: string; password?: string; loginType: string }): string => {
    const { email, password, loginType } = data;
    switch (loginType) {
        case "password":
            return checkCredentials(email, password!);
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
}

class MyUser {
    name:string;
    lastName:string;
    age:number;

    // name!:string;
    // lastName!:string;
    // age!:number;

    static fromJson(data: { name:string, lastName:string, age:number; }): MyUser {
        return new MyUser(data.name, data.lastName, data.age);


        // const user = new MyUser();
        user.name = data.name;
        user.lastName = data.lastName
        user.age = data.age;
    }

    private constructor(name:string, lastName:string, age:number){
        this.name = name;
        this.lastName =lastName;
        this.age = age;
    }
}

MyUser.fromJson({name:"", lastName: "", age: 27});

//parametro opcionales al final
const mylogin = (email:string, loginType:string, password?:string, password2?:string): void => {

};

mylogin("email", "password", undefined, "WEDWED");

//Tipos de datos literales
type levelType = 'basic' | 'intermediate' | 'advanced';
type CoursePrice = 0 | 4.99 | 9.99;

type Course = {
    name: string;
    price: CoursePrice;
    level: levelType;
}


const createCourse = (name: string, level: string, price: CoursePrice): Course => {
    const newCourse: Course = {
        name,
        price: 9.99,
        level: level as levelType,
    };
    return newCourse;
}

const nodeJSCourse: Course = {
    name: 'Node.js',
    price: 9.99,
    level: "advanced"
}


//Progamacion asyncrona en javascript
const sleep = (seconds: number): Promise<number> => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    });
}

const run = () => {
    sleep(2).then((value) => {
        console.log("Hello", value);
    });
}

run();


const run2 = async (): Promise<void> => {
    // const value = sleep(2).then((value) => {return value;});
    // console.log(value);
    const value: number = await sleep(2);
    console.log("Hola AsyncAwait", value)
};

run2();

//Enums Grupo de constantes 
enum FileType {
    video = ".MP4", image = ".JPG", audio = ".MP3"
}

// const getFileType = (url: string): FileType => {
//     if (url === '.mp3') {
//         return FileType.audio;
//     }
//     if (url === '.mp4') {
//         return FileType.video;
//     }
//     return FileType.image;
// }

const parseDate = (url: string) => {
    // const type: FileType = getFileType(url);
    const type: FileType = url.substring(0, 10).toUpperCase() as FileType;

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
}