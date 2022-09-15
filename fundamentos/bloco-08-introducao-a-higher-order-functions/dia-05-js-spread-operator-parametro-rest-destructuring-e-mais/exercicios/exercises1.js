const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle1) // altere a chamada da funcao 

//   // console.log(rectangle[0] * rectangle[1]);
// });

console.log(rectangleArea(...rectangle1));