function findWinners(matches: number[][]): number[][] {
    let winners = new Set();
	let losers = new Map();
	let n = matches.length;
	for (let i = 0; i < n; i++) {
		let win = matches[i][0];
		let lose = matches[i][1];

		winners.add(win);
		losers.set(lose, losers.get(lose) + 1 || 1);
	}

	let answer = [];
	let coreWinners: any[] = [];
	for (let key of winners) {
		if (!losers.has(key)) coreWinners.push(key);
	}
	answer.push(coreWinners.sort((a, b) => a - b));

	let singleLosers = [];
	for (let [key, val] of losers) {
		if (val === 1) singleLosers.push(key);
	}
	answer.push(singleLosers.sort((a, b) => a - b));

	return answer;
};