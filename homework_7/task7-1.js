// homework 7.1
function parametrFunc () {
    let storage = 0;
    return function add(num) {
        storage = storage + num ;
        return storage ;
    }
}
const sum = parametrFunc() ;

console.log(sum(4));

console.log(sum(6));

console.log(sum(10));

console.log(sum(7));