interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    };

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    };

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    };
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    };

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    };

    workDirectorTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: string | number): Director | Teacher => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
};

// tests
console.log(createEmployee(200).getCoffeeBreak());
// Output: Teacher
// Cannot have a break
console.log(createEmployee(1000).workFromHome());
// Output: Director
// Working from home
console.log(createEmployee('$500').workDirectorTasks());
// Output: Director
// Getting to director tasks
