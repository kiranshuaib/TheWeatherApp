$(document).ready(function(){
  var lat;
  var long;
  $.getJSON("http://ip-api.com/json",function(data2){
    lat = (data2.lat).toFixed(1);
    long = (data2.lon).toFixed(1);
    console.log(lat);
    console.log(long);
    var fTemp;
    var cTemp;
    var tempSwap = true;
  // get the data from weather api for toronto
  var api =
  //  'https://api.openweathermap.org/data/2.5/weather?lat=43.6&lon=-79.51&appid=43da8ad38301e0caa52aad7beccdbf5e';
 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=43da8ad38301e0caa52aad7beccdbf5e';

  $.getJSON(api,function(data){
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name + ", "+data.sys.country;
    var code = data.weather[0].icon;


console.log(weatherType);
    //temp in fahrenheit
    fTemp = (kTemp*(9/5)-459.67).toFixed(2);
    //temp in celcius
    cTemp= (kTemp-273).toFixed(2);

    $("#city").html(city);
    $("#weatherType").html(weatherType);

    windSpeed = (2.237*(windSpeed)).toFixed(2);
    $("#windSpeed").html(windSpeed + " mph");
    $("#fTemp").html(fTemp + "&#8457");
    $("#wIcon").attr("src","http://openweathermap.org/img/w/"+code+".png");


// temperature toggle on click
    $("#fTemp").click(function(){
      if (tempSwap===false){
         $("#fTemp").html(fTemp + "&#8457");
         tempSwap = true;
    } else {

      $("#fTemp").html(cTemp +"&#8451;");
      tempSwap = false;
    }

  });

// wall paper change
     if (fTemp<32){
       $("body").css("background-image","url(https://newevolutiondesigns.com/images/freebies/winter-wallpaper-1.jpg)" );
     }
      else if(fTemp>=32 || fTemp<72){
        $("body").css("background-image","url(https://cdn.cnn.com/cnn/.e/img/3.0/branding/backgrounds/out-of-this-world/outofthisworld-background-full.jpg)");
     } else {
       $("body").css("background-image","url(http://4.bp.blogspot.com/-EuFofx_lW9c/VQdmCXy2jDI/AAAAAAAAVGg/AkXuvd2rqX0/s1600/flowers-163516_1280.jpg)");
     }

     var date = Date.today().toString('d-MMM-yyyy');   // "31-Oct-2007"
     var time = new Date().toString('HH:mm')           // "16:18"
     console.log(date,time);
     $("#date").html(date); //Update local time
     $("#time").html(time);

  });
    });
});
