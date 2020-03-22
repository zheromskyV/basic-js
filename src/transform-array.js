module.exports = function transform(arr) {
	if(!Array.isArray(arr)) {
		throw new Error();
	}

	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "--discard-next") {
			i++;
		} else if (arr[i] === "--discard-prev") {
			res.pop();
		} else if (arr[i] === "--double-next") {
			if (i < arr.length - 1) {
				res.push(arr[i + 1]);
			}
		} else if (arr[i] === "--double-prev") {
			if (!isNaN(arr[i - 1]) || typeof(arr[i - 1]) !== "undefined") {
				res.push(arr[i - 1]);
			}
		} else  {
			res.push(arr[i]);
		}
	}
	
	return res;
};
