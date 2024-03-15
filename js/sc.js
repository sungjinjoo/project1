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
	const dep2H = $('.dep2>li').outerHeight();
	const bg = $('.bg');
	dep1.on({
		mouseenter: function () {
			let tg = $(this);
			console.log(tg);
			let dep2Len = tg.find('.dep2>li').length;
			console.log(dep2Len);
			let newH = tg.find('ul').outerHeight();
			console.log(dep2Len);
			bg.css('height', newH);
		},
		mouseleave: function () {
			bg.css('height', 0);
		},
	});
}
menu();

$('.tab-btn a').click(function(){
	$(this).addClass('active')
	$(this).siblings('.tab-btn a').removeClass('active')
})
