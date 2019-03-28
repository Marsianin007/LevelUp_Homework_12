let main = (a, b, c, d, e, f, g, h, j, k) => {
	let hight_1, hight_2, i = 0, quality_repeats = 0, water = 0, how = 2;
	let arr = [a, b, c, d, e, f, g, h, j, k];
	while (i < arr.length) {
		while (arr[i] <= arr[i + 1])
			i++;
		hight_1 = i;
		if (arr[hight_1] <= arr[hight_1 + how]) {
			for (let i = 0; i < how - 1; i++) 
				water += arr[hight_1] - arr[hight_1 + 1 + i];
		
			hight_1 = hight_1 + how;
			i = hight_1;
			how = 2;
		}
		else 
			how++;
		if ( (how + i) >= arr.length) { 
			while (i < arr.length) {
				if (arr[i + 1] < arr[i]) {
					hight_2 = arr[i + 1];
					if (arr[i + 1] <= arr[i + 2]) {
						water += arr[i + 2] - arr[i + 1];
						i++;
					}
					else 
						i++;
				}
				else 
					i++;
			}  
		}
		console.log(water);
		return water;
	}
}