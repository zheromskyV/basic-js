module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false;
	}
	let team = "";
	for (let i = 0; i < members.length; i++) {
		let tmp = members[i];
		if (typeof tmp === "string") {
		tmp = tmp.trim();
		team += tmp[0].toUpperCase();
		}
	}
	return team.split("").sort().join("");
};