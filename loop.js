for (i=1; i<=5; i++)
{
console.log (i);
}
var i=11;
while (i<=15)
{
console.log(i + "<br/>");
i++;
}
var i=21;
do{
console.log(i + "<br/>");
i++;
}while (i<=25);
let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};
for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
console.log( i + "<br>");
}
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
console.log( i + "<br>"); 
}
