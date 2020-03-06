var counter=0;
var winner="";
var gameover=0;
$('p').text("Turn: X");

$('.box').on('click',function(){
	if(!gameover && $(this).text()==="")
	{
		if(counter%2==0) 
		{
			$(this).text("X");
			$(this).css("color","red");
			$('p').text("Turn: O");
		}
		else
		{
			$(this).text("O");
			$(this).css("color","#000080");
			$('p').text("Turn: X");
		} 
		counter++;
		check();
	}
});

$('button').on('click',function(){
	$('.box').text("");
	$('p').text("Turn: X");
	gameover=0;
	$('.result').text("");
	counter=0;
	winner="";
});

function check() {
	var t1=$('.b1').text();
	var t2=$('.b2').text();
	var t3=$('.b3').text();
	var t4=$('.b4').text();
	var t5=$('.b5').text();
	var t6=$('.b6').text();
	var t7=$('.b7').text();
	var t8=$('.b8').text();
	var t9=$('.b9').text();
	if(t1===t2 && t1===t3 && t1!=="") winner=t1;
	if(t4===t5 && t4===t6 && t4!=="") winner=t4;
	if(t7===t8 && t7===t9 && t7!=="") winner=t7;
	if(t1===t4 && t1===t7 && t1!=="") winner=t1;
	if(t2===t5 && t2===t8 && t2!=="") winner=t2;
	if(t3===t6 && t3===t9 && t3!=="") winner=t3;
	if(t1===t5 && t1===t9 && t1!=="") winner=t1;
	if(t3===t5 && t3===t7 && t3!=="") winner=t3;

	if(winner!="")
	{
		gameover=1;
		$('p').text("");
		if(winner==="X") $('.result').text("X Won !!");
		else $('.result').text("O Won !!");
	}
	if(winner==="" && t1!="" && t2!="" && t3!="" && t4!="" && t5!="" && t6!="" && t7!="" && t8!="" && t9!="")
	{
		gameover=1;
		$('p').text("");
		$('.result').text("Draw !!");
	}
}