const sum = (a: number, b: number): string => {
    return a + b + '';
};
function hello() {
    console.log('hello world');
}
let size: string | number;

size = 'XL';
size = 45;
//wrong
// size = true;
enum Colors {
    red = 'red',
    green = 'green',
    blue = 'blue',
}
let color: Colors;
color = Colors.blue;
console.log(color);
interface person {
    name: string;
    age: number;
}
let actor: person;
actor = { age: 12, name: 'SYHANH' };
const fn1 = <Type>(a: Type) => {
    console.log(a);
    return 3;
};
fn1<string>('test');
