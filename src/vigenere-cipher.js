let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
	constructor(type) {
		this.type = type;
	}

    encrypt(str, key) {
		if (!str || !key) throw new Error();
		str = str.toUpperCase().split("");
		key = key.toUpperCase();
		let res = [];

		let i = 0;
		str.forEach(s => {
			let char = s.charCodeAt(0);
			if (alphabet.includes(s)) {
				let offset = key.charCodeAt(i++ % key.length) - alphabet.charCodeAt(0);
				if (char + offset > alphabet.charCodeAt(alphabet.length - 1)) {
					let delta = char + offset - alphabet.charCodeAt(alphabet.length - 1) - 1;
					char = alphabet.charCodeAt(0) + delta;
				} else {
					char += offset;
				}
			}
			res.push(String.fromCharCode(char));
		});

		return this.type === false ? res.reverse().join("") : res.join("");
    }

    decrypt(str, key) {
		if (!str || !key) throw new Error();
		str = str.toUpperCase().split("");
		key = key.toUpperCase();
		let res = [];		
		
		let i = 0;
		str.forEach(s => {
			let char = s.charCodeAt(0);
			if (alphabet.includes(s)) {
				let offset = key.charCodeAt(i++ % key.length) - alphabet.charCodeAt(0);
				if (char - offset < alphabet.charCodeAt(0)) {
					let delta = char - offset - alphabet.charCodeAt(0) + 1;
					char = delta + alphabet.charCodeAt(alphabet.length - 1);
				} else {
					char -= offset;
				}
			}
			res.push(String.fromCharCode(char));
		});

		return this.type === false ? res.reverse().join("") : res.join("");
    }
}

module.exports = VigenereCipheringMachine;
