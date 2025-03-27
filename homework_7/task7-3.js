function askNumber () {
    for (let i = 0;  i < 10; i++) {
        let someNumber = prompt("введите число > 100:");

        if (someNumber === null || someNumber === "") {
            alert("введите число!");
        return;
        }

        if (Number(someNumber) > 100) {
            alert("ваше последнее число: " + someNumber);
            console.log("ваше последнее число: " + someNumber);
            return;
        }
        
        alert("ошибка! введите число больше 100!");
    }
    console.log ("вы достигли максимума попыток!");
}
askNumber();