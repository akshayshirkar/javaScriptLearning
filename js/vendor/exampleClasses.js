class student{
  constructor(id,name,subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
  }
  addSubject(subject){
    this.subjects = [...this.subjects,subject];
  }
}

const student1 = new student(1,'Akshay');
student1.addSubject('physics');
console.log(student1);
