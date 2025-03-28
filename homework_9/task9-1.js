let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

let allSalary = 0;

function  sumSalaries(group) {
    for (let key in group){
        if (Array.isArray (group[key])) {
            for (let person of group[key]) {
                allSalary += person.salary;
            }
        }
        else {
            sumSalaries(group[key]);
        }
    }
}
sumSalaries(company);
console.log(allSalary);