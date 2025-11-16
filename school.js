// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(` Hello, I'm ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study(){
//     console.log(`${this.name} is studying...`)
//   }
// }
// const students = [
//     new Student('Mhmd', 23, "A"),
//     new Student('Ahmed', 17, "B"),
//     new Student('Ali', 19, "A"),
//     new Student('Majad', 23, "A"),
//     new Student('Khalid', 21, "A"),
//     new Student('Sara', 18, "C")
// ]
// const [student1,student2,student3,student4,student5,student6] = students

// const adultStudents = students.filter(s => s.age <= 18)

// // console.log(adultStudents);

// student1.greet()
// student1.study()/* student2,student3,student4,student5,student6 */





class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        return `Hello, I'm ${this.name}`
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age)
            this.grade = grade
    }

    study(){
        return `${this.name} is studying...`
    }
}

const students = [
    new Student('Mhmd', 23, "A"),
    new Student('Ahmed', 17, "B"),
    new Student('Ali', 19, "A"),
    new Student('Majad', 23, "A"),
    new Student('Khalid', 21, "A"),
    new Student('Sara', 18, "C")
]
const [student1, student2, student3, student4, student5, student6] = students

function adultStudents(arr, age){
    return arr.filter((student) => {student.age >= age ? console.log(student.name, student.age):null})
}
// const newStudent = new Person("Google", 12)
// console.log(newStudent.name, newStudent.age)
// console.log(newStudent.greet())
console.log(adultStudents(students, 18))