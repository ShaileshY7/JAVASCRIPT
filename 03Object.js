const course={
    name:"Python",
    duration: "3 months",
    price: 5000,
    courseInstructor:"Be10x"
}
//DESTRUCTURING OF OBJECT...................
const {courseInstructor:Instructor}=course

console.log(Instructor)

const {name:fullname}=course
console.log(fullname);

//JSON format
// {
//     "name": "Python",
//      "duration": "3 months",
//      "price": 5000,
// }

// {
//     {}
//     {}
//     {}
// }
