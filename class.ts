class Car {
	name: string;
	private year: number;
	constructor(name: string, year: number) {
		this.name = name;
		this.year = year;
	}
}
let car1 = new Car('Audi', 2022);

car1.name = 'Mazda';

console.log(car1);
