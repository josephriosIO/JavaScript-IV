// CODE here for your Lambda Classes
class Person {
  constructor(base) {
    (this.name = base.name),
      (this.age = base.age),
      (this.location = base.location);
  }

  speak() {
    console.log(
      `Hello my name is ${this.name}, I am ${this.age} and am from ${
        this.location
      }.`
    );
  }
}

class Instructor extends Person {
  constructor(teacher) {
    super(teacher);
    (this.specialty = teacher.specialty),
      (this.favLanguage = teacher.favLanguage),
      (this.catchPhrase = teacher.catchPhrase);
  }

  demo(str) {
    console.log(`Today we are learning about ${str}.`);
  }

  grade(student, str) {
    console.log(`${student.name} receives a perfect score on ${str}.`);
  }
}

class Student extends Person {
  constructor(studies) {
    super(studies);
    (this.previousBackground = studies.previousBackground),
      (this.className = studies.className),
      (this.favSubject = studies.favSubject);
  }

  listSubjects() {
    this.favSubject.forEach(function(subjects) {
      console.log(subjects);
    });
  }

  PRAssignments(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(test) {
    console.log(`${this.name} has begun sprint challenge on ${test}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(data) {
    super(data);
    (this.gradeClassName = data.gradeClassName),
      (this.favInstructor = data.favInstructor);
  }

  standUp(channelName) {
    console.log(
      `${this.name} announces to ${channelName}, @channel standy times!`
    );
  }

  debugsCode(student, subject1) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject1}'`);
  }
}

const josh = new Instructor({
  name: "josh",
  age: 30,
  location: "Lambda World",
  specialty: "react",
  favLanguage: "Python",
  catchPhrase: "Don't forget about the homies"
});

const joseph = new Student({
  name: "Joseph",
  age: 21,
  location: "California",
  favSubject: ["Math", "science", "coding"]
});

const vinny = new ProjectManager({
  name: "vinny",
  age: 20,
  location: "Brentwood",
  favSubject: ["math", "english", "science"],
  gradeClassName: "CS15",
  favInstructor: "Josh Knell"
});

const liz_B = new Student({
  name: "Lizzy B",
  age: 27,
  gender: "Female",
  location: "Portland, OR",
  previousBackground: "Biology/Health Science grad",
  className: "WEB12",
  favSubjects: ["CSS", "React", "Ternaries", "SQL", "Node"]
});

joseph.speak();
//joseph.listSubjects();
joseph.PRAssignments("math");
joseph.sprintChallenge("JavaScript");
vinny.standUp("@WEB18");
vinny.debugsCode(joseph, "JavaScript");
josh.demo("CSS");
josh.grade(joseph, "JavaScript Fundementals");
josh.speak();
vinny.speak();
liz_B.sprintChallenge("css");
