var P = 0, i = 0, t = 0, F;

for (var j = 0; j < 5; j++)
{
	P = Math.random()*10000;
	P = P.toFixed(2);
	
	i = Math.random()*10;
	i = i.toFixed(2);
	
	t =Math.round(Math.random()*(100-1)+1);
	
	F = FutureValue (P, i, t);
	
	console.log("Present Value : $ " + P);
	console.log("Monthly Interest Rate : " + i);
	console.log("Number of Months : " + t);
	console.log("Future Value : $ " + F + "\n");
}

function FutureValue(P, i, t)
{
	F =  P * Math.pow((1 + i),t);
	F = F.toFixed(2);
	return F;
}
