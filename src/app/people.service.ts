import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    new Person(1,'Bill','Wright',new Date('01/01/1950')),
    new Person(2,'Bernie','Monnete',new Date('01/01/1952')),
    new Person(3,'Sean','Doyle',new Date('01/01/1955'))
  ];

  getPeople(): Observable<Person[]>{
    return of(this.people);
  }

  constructor() { }
}
