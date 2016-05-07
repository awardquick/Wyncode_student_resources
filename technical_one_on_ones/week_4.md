# Week 4 (One on One):

## Problem 1

Create me an HTML page that represents the weather, it should have the date & time, the temperature and a description of the weather. Please use one of these 3 backgrounds:

```css
http://webweu.se/ab33/Bilder/WPS/Artistic/Rain-Artistic-Wallpaper.jpg
http://www.photofurl.com/wp-content/uploads/2008/11/beautiful_mountain_wallpaper.jpg
http://www.skringers.com/wp-content/uploads/Free-Desktop-Wallpaper-Beach-Scenes-Sunny-Beach.jpg
```

It should use white centered text, the temperature should be very large compared to all the rest of the text & have space above and below it.

----

## Problem 2

Create me a file called `api.rb` that pulls in the weather from [Yahoo](https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202450080&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys) or [OpenWeather](http://api.openweathermap.org/data/2.5/weather?q=Miami+Beach,FL&appid=c38d29204353577f04f9a8b861e3c70e). 

Please output the date, temperature & description of the weather to the command line. 

__Bonus:__ Open your file and change the value of the date, temp & condition so when it loads it has the data from the last time the `api.rb` script was run.
