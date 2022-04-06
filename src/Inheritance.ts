interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(IPerson: IPersonData) {
        this._name = IPerson.name;
        this._secondName = IPerson.secondName;
        this._age = IPerson.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(IStudent: IStudentData) {
        super({
            name: IStudent.name,
            secondName: IStudent.secondName,
            age: IStudent.age,
        });
        this._phone = IStudent.phone;
    }

    getData(): IStudentData {
        return { ...super.getData(), ...{ phone: this._phone } };
    }
}
