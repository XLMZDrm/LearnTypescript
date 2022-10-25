interface Yasuo {
    id: number;
    name: string;
    KDA: string;
}
type key = keyof Yasuo;
const varX: key = 'name';
console.log(varX);
