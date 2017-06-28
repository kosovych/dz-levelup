function Bar(barName, barmens = [], waiters = [], shots =[], tips, orderList = []) {
	this.barName = barName;
	this.barmens = barmens;
	this.waiters = waiters;
	this.shots = shots;
	this.tips = tips;
	this.orderList = orderList;
	
}

Bar.prototype.replenishWH = function({shotName: _shotName, shotAmount: _shotAmount}) {

	let findShot = this.shots.find(el => el.shotName === _shotName);
	if (findShot == undefined) {
		this.shots.push(...arguments);
		} else {
		findShot.shotAmount += _shotAmount;
	}
	return this;
};

Bar.prototype.addWorcker = function(workerObj) {

	if (workerObj.constructor.name === "Barmen") {
		this.barmens.push(workerObj);
		workerObj.barWhereIWorck = this;

	} else if (workerObj.constructor.name === "Waiters") {
		this.waiters.push(workerObj);
		workerObj.barWhereIWorck = this;
	}
	return this;
	
};

Bar.prototype.removeWorcker = function(workerObj) {

	if (workerObj.constructor.name === "Barmen") {
		let findWorcker = this.barmens.find(el => el.name === workerObj.name);
		let indexWorcker = this.barmens.indexOf(findWorcker);
		this.barmens.splice(indexWorcker, 1);
		workerObj.barWhereIWorck = undefined;

	} else if (workerObj.constructor.name === "Waiters") {
		let findWorcker = this.waiters.find(el => el.name === workerObj.name);
		let indexWorcker = this.waiters.indexOf(findWorcker);
		this.waiters.splice(indexWorcker, 1);
		workerObj.barWhereIWorck = undefined;
	}

	return this;
};

Bar.prototype.shereTips = function() {

	let barTips = this.tips;

	let allWorkers = this.barmens.length + this.waiters.length;

	let everyPartOfTips = barTips / allWorkers;

	this.barmens.forEach((el, i, arr) => {el.ownTips += everyPartOfTips});
	this.waiters.forEach((el, i, arr) => {el.ownTips += everyPartOfTips});

	this.tips = 0;
};

let BlueLagoon = new Bar("Blue Lagoon", [], [], 
	[	{shotName: "Martini",
		shotAmount: 5},
		{shotName: "Vodka",
		shotAmount: 7},
		{shotName: "Wine",
		shotAmount: 9},
		{shotName: "Brandy",
		shotAmount: 6}
	],
	100, []);

function Person(name, age, ownTips = 0, barWhereIWorck) {
	this.name = name;
	this.age = age;
	this.ownTips = ownTips
}

function Waiters(name, age) {
	Person.apply(this, arguments)
}

Waiters.prototype.takeOrder = function(orderObj) {

	let orderedShot = this.barWhereIWorck.shots.find(el => el.shotName === orderObj.shotName);

	let IsOrderInOrderList = this.barWhereIWorck.orderList.find(el => el.shotName === orderObj.shotName);

	let IsOrderInOrderListBoolean = !!IsOrderInOrderList;

	if(!orderedShot) {
		console.log("Такого напикта нет в баре");
		return;
	}

	if (orderedShot.shotAmount < orderObj.shotAmount) {
		console.log(`Ваш заказ слишком велик. Пополните запасы напитка: ${orderedShot.shotName}.`);
		return;
	}

	if (IsOrderInOrderList) {

		IsOrderInOrderList.shotAmount += orderObj.shotAmount;
		orderedShot.shotAmount -= orderObj.shotAmount;
		return;
	}

	if(orderedShot.shotAmount >= orderObj.shotAmount) {
		this.barWhereIWorck.orderList.push(orderObj);
		orderedShot.shotAmount -= orderObj.shotAmount;
		return;
	}

};

Waiters.prototype.takeTips = function(_tips) {
	this.ownTips = 0;
	return this.barWhereIWorck.tips += _tips;
};

const bob = new Waiters("Bob", 27);
const sara = new Waiters("Sara", 21);
const bill = new Waiters("Bill", 23);

function Barmen(name, age, ownTips = 0, specialShot, barWhereIWorck) {
	Person.apply(this, arguments);

	this.specialShot = specialShot;
}

Barmen.prototype.doOrder = function(_shotName) {

	let nowToDo = _shotName;

	let wantedOrderArr = this.barWhereIWorck.orderList;

	let wantedOrder = wantedOrderArr.find(el => el.shotName === _shotName);

	let indexOfWantedOrder = this.barWhereIWorck.orderList.indexOf(wantedOrder);

	let timeToDoOrder = wantedOrder.shotAmount * 300;

	setTimeout(function(){
		console.log(`Все заказы с ${nowToDo} готовы!`);
		wantedOrderArr.splice(indexOfWantedOrder, 1);

	}, timeToDoOrder);
};

const leo = new Barmen("Leo", 32, 20,"Vodka");
const mark = new Barmen("Mark", 34, 10,"Brandy");

BlueLagoon.addWorcker(bob);
BlueLagoon.addWorcker(sara);
BlueLagoon.addWorcker(bill);
BlueLagoon.addWorcker(leo);
BlueLagoon.addWorcker(mark);
BlueLagoon.replenishWH({shotName: "Lodka", shotAmount: 4});
BlueLagoon.replenishWH({shotName: "Vodka", shotAmount: 4});
BlueLagoon.removeWorcker(sara);
BlueLagoon.shereTips();

bob.takeOrder({shotName: "Martini", shotAmount: 4});
bob.takeOrder({shotName: "Martini", shotAmount: 5});
bob.takeOrder({shotName: "Martini", shotAmount: 1});
bob.takeOrder({shotName: "Vodka", shotAmount: 4});
bob.takeOrder({shotName: "odka", shotAmount: 4});

bill.takeTips(1000);

leo.doOrder("Vodka");


console.log(BlueLagoon);