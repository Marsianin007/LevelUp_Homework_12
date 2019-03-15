
var hight_1, hight_2;
var i = 0;
var water = 0;
var how = 2;



	var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1];

    
	while (i < arr.lenght) {


		while (arr[i] <= arr[i + 1]) {
			i++;
		}
		hight_1 = i;

		if (arr[hight_1] <= arr[hight_1 + how]) {

			for (var i = 0; i < how - 1; i++) {
				water += arr[hight_1] - arr[hight_1 + 1 + i];

			}

			
			hight_1 = hight_1 + how;
			i = hight_1;
			how = 2;
		}
			else {
				how++;

			}

		if ( (how + i) >= arr.lenght) {  
			while (i < arr.lenght) {
				if (arr[i + 1] < arr[i]) {
					hight_2 = arr[i + 1];

				if (arr[i + 1] <= arr[i + 2]) {
					water += arr[i + 2] - arr[i + 1];
					i++;
				} 
				else {
					i++;
				}

				} 
				else {
					i++;
				}

				

			}
			

		}

		
	}


		console.log(water);
		
	


	



