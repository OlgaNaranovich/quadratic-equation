module.exports = function solveEquation(equation) {

	let srcFirstNum = /-?\d+/;
	let firstNum = equation.match(srcFirstNum);
	firstNum[0] = Number(firstNum[0].replace(/\s/g, ''));

	let srcNums = /([-+]? \d+)/g;
	let nums = equation.match(srcNums);

	for (let i = 0; i < nums.length; i++) {
		nums[i] = Number(nums[i].replace(/\s/g, ''));
		firstNum.push(nums[i]);
	}

	let a = firstNum[0];
	let b = firstNum[1];
	let c = firstNum[2];
	let d = b * b - 4 * a * c;

	const x1 = (-b + Math.round(Math.sqrt(d))) / (2 * a);
	const x2 = (-b - Math.round(Math.sqrt(d))) / (2 * a);

	const result = [x1, x2];
	result.sort(function(a,b) {
		return a - b;
	});
	return result;
}
