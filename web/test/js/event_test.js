/**
 * event_test.js
 * 자바스크립트 이벤트와 이벤트 핸들러 테스트용 소스 파일
 */

//alert("event_test.js 파일 연결 성공...");

window.onload = function(){
	//id가 btn인 태그 엘리먼트가 클릭되었을 때의 동작처리
	var btn = document.getElementById("btn");
	btn.onclick = function(e){
		console.log(e.target);
		console.log(e.x);
		console.log(e.y);
		console.log(e.target.offsetLeft);
		console.log(e.target.offsetTop);
	}
	
	//nation 의 선택값이 변경되었을 때, 선택된 nation 의 값을 읽어서
	//그 값에 대한 li 항목의 배경색과 글자색을 변경처리함
	var li = document.getElementsByTagName("li");
	var nation = document.getElementById("nation");
	
	nation.onchange = function() {
		changeList();
		var index = this.value;
		li[index].style.backgroundColor = "yellow";
		li[index].style.color = "red";
	}
}

function changeList(){
	var li = document.getElementsByTagName("li");
	
	for(var i = 0; i < li.length; i++){
		li[i].style.backgroundColor = "white";
		li[i].style.color = "black";
	}
}





