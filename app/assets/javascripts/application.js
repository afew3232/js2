// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .



var counter; //grobal

function ClickPlus(){
	counter.value++;
	console.log(counter.value);
}
function ClickMinus(){
	if(counter.value > 0)counter.value--;
	console.log(counter.value);
}
function ClickReset(){
	counter.value=3;
}

//turbolink:load：ページ読み込み時に毎回実行される
$(document).on("turbolinks:load", function() {
	counter = document.getElementById("counterOutput");
	console.log("aaa2");

	$(".box").slideUp();
	$(".box").slideDown();
	$(".box").mouseover(function(){
		$(".box").addClass("box1");
	});
	$(".box").mouseout(".box",function(){
		$('.box').removeClass("box2");
		$('.box').removeClass("box1");
	});
	$('.box').on('click', function(){
		$(this).addClass('box2');
	});


	$(".toggle-box").on("click",function(){
		$(this).toggleClass("toggle-box-on");
	});



	//--------------------------------------
	//--------------------------------------
	//---------天気予報----------------------
	//--------------------------------------
	//--------------------------------------


	$('#btn').on('click', function() {
    
    $.ajax({// 入力された都市名でWebAPIに天気情報をリクエスト
    	url: "http://api.openweathermap.org/data/2.5/weather?q=" 
    	+ $('#cityname').val() + "&units=metric&appid=" 
    	+ "baab214c257b229e45b2bd2726a83931",
    	dataType : 'jsonp'
    }).done(function (data){//通信成功
        // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_min').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('#speed').text(data.wind.speed);
        // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);
    }).fail(function (data) {//通信失敗
       　alert('通信に失敗しました。');  
   });
});



});