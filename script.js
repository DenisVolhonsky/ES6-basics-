
let name = 'asd';

// тернарный оператор
name === 'asd'? console.log('asd') : console.log('not asd');

// медленнее чем if else
switch(name) {
    case 'asd':
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('Else!');
}

// Math
console.log(Math.random());
console.log(Math.max(1, 2, 3, 5, 4));
console.log(Math.min(1, 2, 3, 5, 4));
console.log(`Math.ceil 1.5: ${Math.ceil(1.5)}`);
console.log(`Math.floor 1.5: ${Math.floor(1.5)}`);
console.log(`Math.round 1.5: ${Math.round(1.5)}`);
console.log(`2 в 3-й степени: ${Math.pow(2,3)}`);


