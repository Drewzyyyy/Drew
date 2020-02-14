function myFunction() {
var fruits = [];
var dec = document.getElementById("deci").value;
var val = dec;
	while(val > 0){
    	fruits.push(val % 2);
        val = Math.trunc(val / 2);
    }
    document.getElementById("demo").innerHTML = "";
    while(fruits.length != 0){
    document.getElementById("demo").innerHTML +="" + fruits.pop() + "";
	}
}