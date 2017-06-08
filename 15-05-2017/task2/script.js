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
			marks: [1,5,3,4,5]
		},

		{
			title: "CSS",
			teacher:"John",
			duration:48,
			progress: 0.8,
			marks: [2,3,5,5,4,3]
		},

		{
			title: "JS",
			teacher:"Bill",
			duration: 100,
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
		return this;
	},

	getAvarageMarkByCourse(course){
		var wantedObj = this.courses.find(function(coursObj, courseIndex, coursesArr){
			while(coursObj.title === course){
				return coursObj;
			}
		});

		if (!wantedObj.marks.join()){
			return null;
		}

		var avarageMark = wantedObj.marks.reduce(function(p,c, index, arr){
			return p+c;
		});

		return avarageMark / wantedObj.marks.length;
	},

	getAvarageMark(){
		var emptyArr = [];

		var allCoursesMarks = emptyArr.concat(...this.courses.map(function(coursMarks){
			return coursMarks.marks;			
		}));

		var sumAllMarks = allCoursesMarks.reduce(function(p,c){
			return p+c;
		});

		return sumAllMarks / allCoursesMarks.length;
	},

	addMark(course, mark){
		var wantedObj = this.courses.find(function(coursObj, courseIndex, coursesArr){
			while(coursObj.title === course){
				return coursObj;
			}
		});

		wantedObj.marks.push(mark);
		return this.courses;
	},

	addProgress(course, hours){
		var wantedObj = this.courses.find(function(coursObj, courseIndex, coursesArr){
			while(coursObj.title === course){
				return coursObj;
			}
		});

		var progresParse = hours / wantedObj.duration;

		if (progresParse < (1 - wantedObj.progress)){
			wantedObj.progress = progresParse + wantedObj.progress;
			return wantedObj;
		} else {
			console.log("Стужент прозанимался болльше, чем нужно");
			return wantedObj;
			
		}
	},

	getProgress(course){
		var wantedObj = this.courses.find(function(coursObj, courseIndex, coursesArr){
			while(coursObj.title === course){
				return coursObj;
			}
		});

		var progressInPer = wantedObj.progress*100;
		return `${progressInPer.toFixed()}% курса пройдено`;
	}

}

console.log(student);
console.log(student.getFullName());
console.log(student.getAge());
console.log(student.getCourses());
console.log(student.addNewCourse("Sam", "PHP", 12));
console.log(student.getAvarageMarkByCourse("JS"));
console.log(student.getAvarageMark());
console.log(student.addMark("JS", 1));
console.log(student.addProgress("JS", 30));
console.log(student.getProgress("JS"));