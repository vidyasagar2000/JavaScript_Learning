const course = {
  courseName: "js in Hindi",
  price: "999",
  courseIntructor: "Hitesh",
};

// course.courseIntructor
const { courseIntructor: instructor } = course;
// console.log(courseIntructor);
console.log(instructor);

const navbar = ({ company }) => {
  // destructuring props as we will not use props.company
};
navbar((company = "VS"));

/*

JSON Structure
{
    "name": "VidyaSagar",
    "course": "js in hindi",
    "price": "free"
}


Sometimes it may be in diffrent format

[
    {},
    {
        [
            {},
            {},
        ]
    },
    {}
]
*/
