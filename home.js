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
			'Accounting & Bookkeeping',
			'Cryptocurrreny & Blockchain',
			'Finance',
			'Investing & Trading',
		],
	},
	{
		id: 4,
		category: 'IT & Software ',
		subCategory: [
			'IT Certification',
			'Hardware',
			'Network & Security',
			'Other IT & Software',
		],
	},
	{
		id: 5,
		category: 'Office Productivity ',
		subCategory: ['Microsoft', 'Apple', 'Google', 'SAP'],
	},
	{
		id: 6,
		category: 'Design',
		subCategory: ['Web Design', 'Graphic Designing', 'Game Designign', '3D'],
	},
	{
		id: 7,
		category: 'Marketing',
		subCategory: [
			'Digital Marketing',
			'Search Engine Optimization',
			'Branding',
			'Maeketing Fundamentals',
		],
	},
];

// Carousl Images

const carouslImg = ['./bgimg.jpg', './slide2.png', './slide3.png'];
var imgChange = 0;

// timer
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

// Variable declariation

var displayCatergory = document.getElementById('displayCategory');
var displaySub = document.querySelector('.dropdown-sub');

// Display Category

function displayArray(array) {
	let displays = array.map(function (item) {
		return `<li id="${item.category}" onmouseenter ="myFunction(${item.id})">${item.category}</li>`;
	});
	displayCatergory.innerHTML = displays.join('');
}
displayArray(categoryList);

// sub Catergory mapping - nested mapping

function myFunction(e) {
	let hoverId = e;
	const filterItem = categoryList.filter(function (item) {
		if (item.id === hoverId) {
			return item;
		}
	});
	let subDisplay = filterItem.flatMap(function (item) {
		let subItem = item.subCategory;
		console.log(subItem);
		let subMap = subItem.map(function (sub) {
			return `<li>${sub}</li>`;
		});
		return subMap;
	});
	displaySub.innerHTML = subDisplay.join('');
}

function mouseLeave() {
	displaySub.style.display = 'none';
}

// caroul

const imagesContent = document.querySelector('.images');

// imagesContent.innerHTML = carouslImg[0];

function displayImages(num) {
	imagesContent.innerHTML = `<img src='${carouslImg[num]}'></img>`;
	// console.log(item);
	// console.log(imagesdisplay);
}
displayImages(0);
// imagesContent.innerHTML = imagesdisplay;

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const carouslBtn = document.querySelector('.carsoulBtn');

left.addEventListener('click', function () {
	console.log(carouslImg.indexOf());
	if (imgChange === carouslImg.length - 1) {
		imgChange = 0;
	} else {
		imgChange = imgChange + 1;
	}
	displayImages(imgChange);
	console.log(object);
});

right.addEventListener('click', function () {
	if (imgChange === 0) {
		imgChange = carouslImg.length - 1;
	} else {
		imgChange = imgChange - 1;
	}
	console.log(carouslImg.indexOf());

	displayImages(imgChange);
});

// const categoryFilter = [];
// const filterCategory = categoryList.forEach(function (item) {
// 	const store = item.subCategory;
// 	const storeSub = store.forEach(function (sub) {
// 		categoryFilter.push(sub);
// 		// console.log(sub);
// 	});
// });

// console.log(categoryFilter);
