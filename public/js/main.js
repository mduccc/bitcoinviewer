
function replaceString(s){
	var string = s
	var pos = string.indexOf('&quot;')
	while(pos !== -1){
		string = string.replace('&quot;', '"')
		pos = string.indexOf('&quot;')
	}
	return string
}

window.onload = function chart(){
	var ctx = document.getElementsByClassName("myChart")[0];

	var new_xbar = '['+xbar+']'
	new_xbar = replaceString(new_xbar)
	var new_ybar = '['+ybar+']'
	var Xbar = JSON.parse(new_xbar)
	var Ybar = JSON.parse(new_ybar)
	var myLineChart = new Chart(ctx, {
    	type: 'line',
    	data: {
    		labels: Xbar,
    		datasets: [
    			{
    				label: "USD",
    				data: Ybar,
    				borderColor:"green",
    				fill: false
    			}
    		],
    		
		}
	});

	console.log(new_xbar)
}