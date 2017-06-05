const student = {
	name: "Yaroslav",
	lastName: "Kosovych",
	age: 25,
	courses: [
		{
			title: "HTML",
			teacher:"Bob",
			duration: 36,
			progress: 0.2,
			marks: [4,5,3,4,5]
		},

		{
			title: "CSS",
			teacher:"John",
			duration:48,
			progress: 0.8,
			marks: [4,3,5,5,4,3]
		},

		{
			title: "JS",
			teacher:"Bill",
			duration: 52,
			progress: 0.1,
			marks: [3,5,4,4,4]
		}
	],
	getFullName() {
		return `${this.name} ${this.lastName}`;
	},
	getAge(){
		return `${this.age} years old`;
	},
	getCourses(){
		var coursArr = this.courses.map(function(cours){
			return cours.title;
		});
		// console.log(coursArr);
		var allCourses = coursArr.join(", ");
		return allCourses;
	},
	addNewCourse(teacherName, course, _duration){
		lastEl = this.courses.length;

		this.courses[+lastEl] = {
			title: course,
			teacher: teacherName,
			duration: _duration,
			progress: undefined,
			marks: []
		}
	},
	getAvarageMarkByCourse(course){
		var i = 0, 
			coursesArrLength = this.courses.length;
		for (; i < coursesArrLength; i++) {
			
			if (this.courses[i].title === course) {
				var avarageMark = this.courses[i].marks.reduce(function(p,c){
					var sum = p + c;
					return sum / coursesArrLength;
				}, 0);
			}
		}
	}

}
console.log(student);
console.log(student.getFullName());
console.log(student.getAge());
console.log(student.getCourses());
console.log(student.addNewCourse("Sam", "PHP", 12), student);
console.log(student.getAvarageMarkByCourse("JS"));