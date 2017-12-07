var x = 0
var time = setInterval(function(){
	x+=2;
	console.log(x + " seconds have passed");
	if(x == 10){
		clearInterval(time);
	}
},2000);