module.exports = class DepthCalculator {
    calculateDepth(arr) {
		let count = 0;
		let counts = []; counts.push(count);
		if (Array.isArray(arr)) {
			count++;
			for(let a of arr) {
				if (Array.isArray(a)) {
					let newcount = this.calculateDepth(a);
					counts.push(newcount);
				}
			}
			counts.sort((a, b) => b - a);
			count += counts[0];
		} 
		return count;
    }
};