var score = 0,
	moved = 0;

function addNew() {
	for(var i=0;i<2;i++) {
		while(true) {
			var x = Math.floor(4*Math.random());
			var y = Math.floor(4*Math.random());
			if($('.c'+x+y).text()=="") break;
		}
		$('.c'+x+y).text(2*i+2);
	}
}

function add() {
	while(true) {
		var x = Math.floor(4*Math.random());
		var y = Math.floor(4*Math.random());
		if($('.c'+x+y).text()=="") break;
	}
	var num = Math.floor(10000*Math.random());
	num = 2*(num%2 +1);
	$('.c'+x+y).text(num);
	// $('.c'+x+y).fadeOut(1000,function(){
	// 	$('.c'+x+y).fadeIn(1000);
	// });
}

function dig(n) {
	var count = 0;
	  if (n >= 1) ++count;

	  while (n / 10 >= 1) {
	    n /= 10;
	    ++count;
	  }
	  return count;
}

function checkFont() {
	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {
			if($('.c'+i+j).text()!="") {
				var n = Number($('.c'+i+j).text());
			  	var s = "c"+i+j+" f"+dig(n);
			  	$('.c'+i+j).replaceWith('<td class="'+s+'">'+$('.c'+i+j).text()+'</td>');
			}  else {
				$('.c'+i+j).css("background-color","white");
			}
		}
	}
}

function checkOver() {
	var over = 1;

	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {
			if($('.c'+i+j).text()=="") {
				over = 0;
				return over;
			}
		}
	}

	for(var i=0;i<4;i++) {
		for(var j=0;j<3;j++) {
			var nc = j+1;
			if($('.c'+i+j).text()==$('.c'+i+nc).text()) {
				over = 0;
				return over;
			}
		}
	}

	for(var j=0;j<4;j++) {
		for(var i=0;i<3;i++) {
			var nr = i+1;
			if($('.c'+i+j).text()==$('.c'+nr+j).text()) {
				over = 0;
				return over;
			}
		}
	}
	return over;
}

function left_move() {
	moved = 0;
	for(var i=0;i<4;i++) {
 		var low = 0;
 		for(var j=1;j<4;j++) {
 			if($('.c'+i+j).text()!="") {
 				for(var k=j-1;k>=low;k--) {
 					var q=k+1;
	 				if($('.c'+i+k).text()=="") {
	 					moved=1;
 						$('.c'+i+k).text($('.c'+i+q).text());
 						$('.c'+i+q).text("");
	 				} else {
	 					low=k+1;
	 					if($('.c'+i+k).text()==$('.c'+i+q).text()) {
	 						score+=Number($('.c'+i+q).text()*2);
	 						moved = 1;
	 						$('.c'+i+k).text($('.c'+i+q).text()*2);
 							$('.c'+i+q).text("");
	 					}
	 					break;
	 				}
 				}
 			}
 			
 		}
 	}
 	after_move();
}

function right_move() {
	moved = 0;
	for(var i=0;i<4;i++) {
 		var high = 3;
 		for(var j=2;j>=0;j--) {
 			if($('.c'+i+j).text()!="") {
 				for(var k=j+1;k<=high;k++) {
 					var q=k-1;
	 				if($('.c'+i+k).text()=="") {
	 					moved = 1;
 						$('.c'+i+k).text($('.c'+i+q).text());
 						$('.c'+i+q).text("");
	 				} else {
	 					high=k-1;
	 					if($('.c'+i+k).text()==$('.c'+i+q).text()) {
	 						score+=Number($('.c'+i+q).text()*2);
	 						moved = 1;
	 						$('.c'+i+k).text($('.c'+i+q).text()*2);
 							$('.c'+i+q).text("");
	 					}
	 					break;
	 				}
 				}
 			}
 			
 		}
 	}
 	after_move();
}

function up_move() {
	moved = 0;
	for(var j=0;j<4;j++) {
 		var low = 0;
 		for(var i=1;i<4;i++) {
 			if($('.c'+i+j).text()!="") {
 				for(var k=i-1;k>=low;k--) {
 					var q=k+1;
	 				if($('.c'+k+j).text()=="") {
	 					moved=1;
 						$('.c'+k+j).text($('.c'+q+j).text());
 						$('.c'+q+j).text("");
	 				} else {
	 					low = k+1;
	 					if($('.c'+k+j).text()==$('.c'+q+j).text()) {
	 						score+=Number($('.c'+q+j).text()*2);
	 						moved=1;
	 						$('.c'+k+j).text($('.c'+q+j).text()*2);
 							$('.c'+q+j).text("");
	 					}
	 					break;
	 				}
 				}
 			}
 			
 		}
 	}
 	after_move();
}

function down_move() {
	moved = 0;
	for(var j=0;j<4;j++) {
 		var high = 3;
 		for(var i=2;i>=0;i--) {
 			if($('.c'+i+j).text()!="") {
 				for(var k=i+1;k<=high;k++) {
 					var q=k-1;
	 				if($('.c'+k+j).text()=="") {
	 					moved=1;
 						$('.c'+k+j).text($('.c'+q+j).text());
 						$('.c'+q+j).text("");
	 				} else {
	 					high = k-1;
	 					if($('.c'+k+j).text()==$('.c'+q+j).text()) {
	 						score+=Number($('.c'+q+j).text()*2);
	 						moved=1;
	 						$('.c'+k+j).text($('.c'+q+j).text()*2);
 							$('.c'+q+j).text("");
	 					}
	 					break;
	 				}
 				}
 			}
 			
 		}
 	}
 	after_move();
}

function after_move() {
	if(moved) add();
	checkFont();
	if(moved==0) {
	 	$('.message').text("Invalid Move!!");
	 	$('.message').css("color","red");
	} 
	else  $('.message').text("");
	 
	if(checkOver()==1) {
	 	$('.message').text("Game Over!!");
	 	$('.message').css("color","red");
	} 
	$('.score').text(score);
}

addNew();
checkFont();

$('body').keydown(function(event){	
	if(event.which === 37) left_move();
	if(event.which === 39) right_move();
	if(event.which === 38) up_move();
	if(event.which === 40) down_move();
});

$('.left').on('click',left_move);
$('.right').on('click',right_move);
$('.up').on('click',up_move);
$('.down').on('click',down_move);

$('.reset').on('click', function() {
	for(var i=0;i<4;i++) 
		for(var j=0;j<4;j++)
			$('.c'+i+j).text("");
	addNew();
	checkFont();
	$('.message').text("");
	score = 0;
	$('.score').text(score);
});