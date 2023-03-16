const categoryList = [
	{
		id: 1,
		category: 'Development',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
	{
		id: 2,
		category: 'Bussiness',
		subCategory: [
			'Enterpreneurship',
			'Management',
			'Sales',
			'Bussiness Strategy',
		],
	},
	{
		id: 3,
		category: 'Finance & Accounting',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
	{
		id: 4,
		category: 'IT & Software ',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
	{
		id: 5,
		category: 'Office Productivity ',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
	{
		id: 6,
		category: 'Design',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
	{
		id: 7,
		category: 'Marketing',
		subCategory: [
			'Web Development',
			'Mobile Development',
			'Programming Language',
			'Game Development',
		],
	},
];
setInterval(display, 1000);
let timer = document.getElementById('timer');

let time = new Date('mar  25	,2023 13:00:00').getTime();
function display() {
	let endTime = time;
	let now = new Date().getTime();
	let timeLeft = endTime - now;

	var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
	const timer = document.getElementById('timer');
	// console.log(timer);
	if (days === 0) {
		timer.textContent = ` ${hours}h ${minutes}m ${seconds}s`;
	} else {
		timer.textContent = `${days}days ${hours}h ${minutes}m ${seconds}s`;
	}

	if (timeLeft <= 0) {
		clearInterval(display);
		timer.textContent = 'Expired';
	}
}

var displayCatergory = document.getElementById('displayCategory');
var displaySub = document.querySelector('.dropdown-sub');
// console.log(displayCatergory);

function displayArray(array) {
	let displays = array.map(function (item) {
		return `<li id="${item.category}" onmouseenter ="myFunction(${item.id})">${item.category}</li>`;
	});
	// console.log(displays);
	displayCatergory.innerHTML = displays.join('');
}
displayArray(categoryList);

function myFunction(e) {
	let hoverId = e;
	const filterItem = categoryList.filter(function (item) {
		if (item.id === hoverId) {
			return item;
		}
		// console.log(item);
	});
	// console.log(hoverId);
	// console.log(filterItem);
	let subDisplay = filterItem.map(function (item) {
		let subItem = item.subCategory;
		console.log(subItem);
		let subMap = subItem.map(function (sub) {
			return `<li>${sub}</li>`;
		});
		return subMap;
	});
	displaySub.innerHTML = subDisplay.join('');
	// });
}

function mouseLeave() {
	displaySub.style.display = 'none';
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('click', function (e) {
	// console.log('left');
	// console.log(e.target.innerHTML);
	const targetImg = left.closest('div').id;
	console.log(targetImg);
	// console.log(e.target.id)
});
