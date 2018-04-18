export class Person {
  name: string;
  vorname: string;

  constructor(person: Person) {
    this.name = person.name;
    this.vorname = person.vorname;
  }

  getEmail(): string {
    return this.vorname + '.' + this.name + '@adesso.ch';
  }

}
