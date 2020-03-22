const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

	if (typeof sampleActivity !== "string") return false;

	const K = 0.693 / HALF_LIFE_PERIOD;
	const T = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K ;
	
	if (T < 0 || !isFinite(T)) return false;
 
	return Math.ceil(T);
};
