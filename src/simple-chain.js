const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length;
	},

	addLink(value) {
		let link = "( " + value + " )";
		this.chain.push(link);
		return this;
	},

	removeLink(position) {
		if (typeof position !== "number" ||
			this.chain.length < position || position <= 0) {
			this.chain = [];
			throw new Error();
		} else {
			this.chain.splice(position - 1, 1);
		}
		return this;
	},

	reverseChain() {
		this.chain.reverse();
		return this;
	},

	finishChain() {
		let finished = this.chain.join("~~");
		this.chain = [];
		return finished;
	}
};

module.exports = chainMaker;
