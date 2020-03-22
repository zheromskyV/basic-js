module.exports = function repeater(str, options) {
	str = String(str);
	let repTimes = "repeatTimes" in options ? options.repeatTimes : 1;
	let sep = "separator" in options ? options.separator : "+";
	let add = "addition" in options ? String(options.addition) : "";
	let addRepTimes = "additionRepeatTimes" in options ? options.additionRepeatTimes : 1;
	let addSep = "additionSeparator" in options ? options.additionSeparator : "|";

	let newAdd = add;
	for (let j = 1; j < addRepTimes; j++) {
		newAdd += addSep;
		newAdd += add;
	}
	let newStr = str + newAdd;
	let res = newStr;
	for (let i = 1; i < repTimes; i++) {
		res += sep;
		res += newStr;
	}

	return res;
};
  