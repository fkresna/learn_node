var intRandom = 0;

for (var j = 0; j < 100; j++)
{
	intRandom = parseInt(Math.random()*(100-2)+2);
	console.log(intRandom + " = " + isPrime(intRandom));
}

document.getElementById("answer").innerHTML = Results;

function isPrime(x)
{
	var check = true;

	if (x < 2)
	{
		check = false;
	}
	if (x == 2)
	{
		check = true;
	}
	
	for (var i = 2; i < parseInt(x); i++)
	{
		if (x % i == 0)
		{
			check = false;
			break;
		}
	}
	return check;
}
