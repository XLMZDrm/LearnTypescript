interface Student {
    id: number;
    name: string;
    age: number;
    gender: 'male' | 'female';
}
const studentList: Student[] = [
    { id: 1, name: 'Alice', age: 11, gender: 'female' },
    { id: 2, name: 'Bob', age: 12, gender: 'male' },
];
const newList: Student[] = [];
newList.push({ ...studentList[0] });
newList[0].name = 'Alice Alice';
console.log(studentList[0].name); // ???
console.log(newList);
let x = 5;
let y = 10;
// OLD WAY
// let temp = x;
// x = y; // 10
// y = temp; // 5
// NEW WAY
[y, x] = [x, y];
