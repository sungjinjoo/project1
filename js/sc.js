const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup>span');
btn.onclick = function () {
	pop.style.display = 'none';
};
const loginBtn = $('#login');
const logoutBtn = $('#logout');
let text = $('.main_banner h2');
let textold = text.text();
logoutBtn.css('display', 'none');
/* 초기값지정,[],{} user={id:test,password:5246,isLoggedIn:false}*/
function init() {
	if (!localStorage.getItem('user')) {
		localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
	}
}

/* 로그인 */
function login() {
	let uid = $('#uid').val();
	let upw = $('#upw').val();
	/* JSON 데이터타입의 자료를 자바스크립트 객체로 변환 */
	let user = JSON.parse(localStorage.getItem('user'));
	if (uid === user.id && upw === user.password) {
		alert('로그인성공');
		text.text(`${uid}님 ${textold}`);
		$('.input_group, #login').css('display', 'none');
		logoutBtn.css('display', 'flex');
		$('.spotmenu>a:first-child').text('로그아웃');
		user.isLoggedIn = true;
		localStorage.setItem('user', JSON.stringify(user));
		if (user.isLoggedIn) {
			alert('로그아웃 성공');
			user.isLoggedIn = false;
			localStorage.setItem('user', JSON.stringify(user));
			text.text(textold);
			$('.input_group, #login').css('display', 'flex');
			logoutBtn.css('display', 'none');
			$('.spotmenu>a:first-child').text('로그인');
		}
	} else {
		alert('회원전용페이지 입니다');
	}
}
/* 로그아웃 */
function logout() {
	let user = JSON.parse(localStorage.getItem('user'));
}
/* 로그인/아웃 버튼 이벤트 핸들러 */
loginBtn.on('click', (e) => {
	e.preventDefault();
	login();
});
logoutBtn.on('click', (e) => {
	e.preventDefault();
	logout();
});
//logoutBtn.on('click',()=>{})
/* 초기화 */
init();

/* ==========
    menu
========== */
function menu() {
	const dep1 = $('.dep1>li');
	const dep2 = $('.dep2');
	const bg = $('.bg');
	dep1.on({
		mouseenter: function () {
			let tg = $(this);
			let dep2a = tg.find('.dep2');
			let newH = tg.find('ul').outerHeight();
			bg.css('height', newH);
			dep2.hide();
			dep2a.slideDown();
		},
		mouseleave: function () {
			bg.css('height', 0);
			dep2.hide();
		},
	});
}
/* 탭 */
menu();
$('.tab-btn a').click(function(){
	$(this).addClass('active')
	$(this).siblings('.tab-btn a').removeClass('active')
})


// 슬라이드

const swiper = new Swiper('.swiper', {
	// Optional parameters
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
  });
  const tabWrap = document.querySelector('.section2'),
	targetLink = document.querySelectorAll('.section2_box a'),
	tabContent = document.querySelectorAll('.banner_box3>div');
/* 반복문 */
targetLink[0].classList.add('active');
for (let i = 0; i < targetLink.length; i++) {
	targetLink[i].addEventListener('click', function (e) {
		e.preventDefault();
		let tg = this;
		let link = tg.getAttribute('href');
		for (let j = 0; j < targetLink.length; j++) {
			targetLink[j].classList.remove('active');
			tabContent[j].classList.remove('active');
		}
		tg.classList.add('active');
		document.querySelector(link).classList.add('active');
	});
}
