var intRandom = 0, odd = 0, even = 0, count_odd = 0, count_even = 0, Results;

intRandom = parseInt(Math.random() * 10);

for (var i = 0; i < 100; i++)
{ 
	intRandom = parseInt(Math.random()*10);
	if (i == 0)
	{
		Results = "" + intRandom + ", ";
    }
	else
	{
		Results = Results + intRandom + ", ";
	}
	
	Check_Odd__And_Even_Number();
}

console.log("Numbers : " + Results);
console.log("Even Number Count : " + count_even);
console.log("Odd Number Count : " + count_odd);
console.log("Sum Even : " + even);
console.log("Sum Odd : " + odd);

function Check_Odd__And_Even_Number()
{
	if (intRandom % 2 == 1)
    {
		count_odd += 1;
        odd = Sum_Odd_Number();
    }
	else
	{
		count_even += 1;
		even = Sum_Even_Number();
	}
}

function Sum_Odd_Number()
{
	return odd + intRandom;
}

function Sum_Even_Number()
{
	return even + intRandom;
}
