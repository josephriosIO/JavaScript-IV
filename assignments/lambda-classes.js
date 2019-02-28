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

  determineGrade(student, subject) {
    let score = student.score;
    let points = Math.floor(Math.random() * 50) + 1;

    score += points;

    if (score > 100) {
      console.log(`${student.name} you got above a perfect score!`);
    } else {
      console.log(`${student.name} grade is a ${score} on ${subject}.`);
    }
  }
}

class Student extends Person {
  constructor(studies) {
    super(studies);
    (this.previousBackground = studies.previousBackground),
      (this.className = studies.className),
      (this.favSubject = studies.favSubject),
      (this.grade = studies.grade),
      (this.score = studies.score);
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

  graduate() {
    let finalScore = (this.score += Math.floor(Math.random() * 50) + 1);
    if (finalScore > 70) {
      console.log(`YOU GRADUATED CONGRATS`);
    } else {
      console.log(`please try again once you get a better score.`);
    }
  }

  determineGradeForGraduation1(score) {
    return (score += Math.floor(Math.random() * 50) + 1);
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
  favSubjects: ["CSS", "React", "Ternaries", "SQL", "Node"],
  score: 40
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
vinny.determineGrade(liz_B, "CSS");
liz_B.graduate();
