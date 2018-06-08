export class Person {
    id:number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    constructor(id?:number, firstName?:string, lastName?:string, dateOfBirth?:Date){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }

    getAge(): number{
        let timeRange: number = (new Date().getTime() - this.dateOfBirth.getTime());
        return Math.floor(timeRange/31556952000);

        // let today: Date = new Date();
        // let age: number = today.getFullYear() - this.dateOfBirth.getFullYear();
        // if(this.dateOfBirth.getDate()>today.getDate() &&
        //     this.dateOfBirth.getMonth()>today.getMonth()){
        //     age--;
        // }
        // return age;
    }
}
