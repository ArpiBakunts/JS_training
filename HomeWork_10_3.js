class Person {
    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (value && (value.toLowerCase() === "female" || value.toLowerCase() === "male")) {
            this._gender = value;
        }
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value && (this._age > 0 || this._age < 120)) {
            this._age = value;
        }
    }

    toString() {
        console.log("I am a Person");
    }

    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }
}

class Student extends Person {
    get programs() {
        return this._programs;
    }

    set programs(value) {
        this._programs = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        if (typeof value === "number") {
            this._fee = value;
        }
    }

    passExam(program, grade) {
        if (!this._programs.includes(program)){
            this._programs.push(program);
        }

        for (let key in this.programs) {
            if (!this._studentGrades[this.programs[key]]) {
                this._studentGrades[this.programs[key]] = null;
            }
        }
        this._studentGrades[program] = grade;
    }

    isTransferToNextYear() {
        for (let value of Object.values(this._studentGrades)) {
            if (value < 50 || value === undefined) {
                return false;
            }
        }

        this._year += 1;
        return true;
    }

    toString() {
        console.log("I am a Student");
    }

    _studentGrades = {};

    constructor(programs, year, fee) {
        super();
        this.programs = programs;
        this.year = year;
        this.fee = fee;
    }
}

class Teacher extends Person{

    constructor(program, pay) {
        super();
        this.program = program;
        this.pay = pay;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        if (typeof this._program === "string") {
            this._program = value;
        }
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        if (typeof value === "number") {
            this._pay = value;
        }
    }

    toString() {
        console.log("I am a teacher");
    }
}


let person = new Person();
person.toString();

let student = new Student();
student.toString();
student.firstName = "Arpi";
student.lastName = "Bakunts";
student.gender = "female";
student.age = 27;   // not working?
student.programs = ["English", "JS", "Java"];
student.year = 2020;
student.fee = 1000;

console.log(student.firstName)
console.log(student.lastName)
console.log(student.gender)
console.log(student.age)
console.log(student.programs)
console.log(student.year)
console.log(student.fee)

student.passExam("JS", 70);
student.passExam("English", 90);
student.passExam("Armenian", 100);
console.log(student._studentGrades);
student.passExam("Java", 70);
console.log(student.programs);
student.isTransferToNextYear();
console.log(student.year);
console.log(student._studentGrades);


let teacher = new Teacher("JS", "1000")
teacher.toString();
