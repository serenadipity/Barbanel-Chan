

var updateHunger = function updateHunger(n) {
    newPercent = getHunger() + n + '%';
    $("#hunger")[0].style.width = newPercent;
    $("#hunger").text(newPercent);    
}

var getHunger = function getHunger(){
    var h = $("#hunger")[0].style.width;
    return parseFloat(h);
}

var temp = function temp(location){
    $('#loc').text(location);
    $.get("/temp", {city:location}, function(d){
	      $("#temp").text(d + " " + decodeURI('%C2%B0') + "F")
        feels(d);});
}


var feels = function feels(temp){
    h = getHunger();
    if (h < 50){
        if (temp < 68){
            $("#feels").text("hungry and cold");
        } else {
            $("#feels").text("hungry");
        }
    } else if (temp < 68){
        $("#feels").text("cold");
    } else {
        $("#feels").text("happy");
    }
}

temp("New York");	
console.log(getHunger());
updateHunger(5)
