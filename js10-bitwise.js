

function getMaxlessThank(n, k){
	let largest = 0;
	let current = 0;
	for(let a = 1; a < n; a++){
		for(let b = a + 1; b <= n; b++){
			current = a & b;
			if(current < k && current < n && current > largest){
				largest = current;
			}
		}
	}
	return largest;
}

console.log(getMaxlessThank(8, 3));