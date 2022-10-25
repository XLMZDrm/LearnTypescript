const student = {
    id: 12,
    name: 'a',
} as const;
function getStatusName(state: 'active') {
    console.log(state);
}
// let s = 'active'; // let s: string
// getStatusName(s);
// ts error: Argument of type 'string' is not assignable to parameter of type '"active"'.ts(2345)
// solution 1
// let s: 'active' = 'active'; // or const s = 'active'
// getStatusName(s);

// solution 2
let s = 'x';
getStatusName(s as 'active');
