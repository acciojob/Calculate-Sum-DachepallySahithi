//your JS code here. If required.
document.getElementById('sum_btn').addEvenListener('click', function() {
	const num1 = Number(document.getElementById('n1').value);
	const num1 = Number(document.getElementById('n2').value);

	if(!isNan(num1) && !isNan(num2)){
		const result = num1 + num2;
		document.getElementById('sum').textContent = `Sum: ${result}`;
	}
	else{
		document.getElementById('sum').textContent = '';
	}
});