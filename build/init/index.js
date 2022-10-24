"use strict";
const sum = (a, b) => {
    return a + b + '';
};
function hello() {
    console.log('hello world');
}
let size;
size = 'XL';
size = 45;
//wrong
// size = true;
var Colors;
(function (Colors) {
    Colors["red"] = "red";
    Colors["green"] = "green";
    Colors["blue"] = "blue";
})(Colors || (Colors = {}));
let color;
color = Colors.blue;
console.log(color);
let actor;
actor = { age: 12, name: 'SYHANH' };
const fn1 = (a) => {
    console.log(a);
    return 3;
};
fn1('test');
