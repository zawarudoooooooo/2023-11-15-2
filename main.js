let cityOneArr = [];
let cityTwoArr = [];
let cityThreeArr = [];
let cityFourArr = [];
let cityFiveArr = [];
let citySixArr = [];
let citySevenArr = [];
let cityEightArr = [];

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-5FA645EA-BBB9-4EDF-AD57-84C2F0275943")
.then(response => response.json())
.then(data =>{
    console.log(data)
    
//ZONE ONE    
cityOneArr = data.records.location[13]
console.log(cityOneArr)
cityNameOne.innerText=cityOneArr.locationName
weatherConditionOne.innerText=cityOneArr.weatherElement[0].time[0].parameter.parameterName;
minTemOne.innerText=cityOneArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemOne.innerText=cityOneArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionOne.innerText.indexOf("晴"));
console.log("陰"+weatherConditionOne.innerText.indexOf("陰"));
console.log("雲"+weatherConditionOne.innerText.indexOf("雲"));
console.log("雨"+weatherConditionOne.innerText.indexOf("雨"));

if(weatherConditionOne.innerText.indexOf("晴")>=0){
    imgOne.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionOne.innerText.indexOf("陰")>=0){
    imgOne.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionOne.innerText.indexOf("雲")>=0){
    imgOne.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionOne.innerText.indexOf("雨")>=0){
    imgOne.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE TWO
cityTwoArr = data.records.location[11]
console.log(cityTwoArr)
cityNameTwo.innerText=cityTwoArr.locationName
weatherConditionTwo.innerText=cityTwoArr.weatherElement[0].time[0].parameter.parameterName;
minTemTwo.innerText=cityTwoArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemTwo.innerText=cityTwoArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionTwo.innerText.indexOf("晴"));
console.log("陰"+weatherConditionTwo.innerText.indexOf("陰"));
console.log("雲"+weatherConditionTwo.innerText.indexOf("雲"));
console.log("雨"+weatherConditionTwo.innerText.indexOf("雨"));

if(weatherConditionTwo.innerText.indexOf("晴")>=0){
    imgTwo.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionTwo.innerText.indexOf("陰")>=0){
    imgTwo.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionTwo.innerText.indexOf("雲")>=0){
    imgTwo.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionTwo.innerText.indexOf("雨")>=0){
    imgTwo.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE THREE
cityThreeArr = data.records.location[6]
console.log(cityThreeArr)
cityNameThree.innerText=cityThreeArr.locationName
weatherConditionThree.innerText=cityThreeArr.weatherElement[0].time[0].parameter.parameterName;
minTemThree.innerText=cityThreeArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemThree.innerText=cityThreeArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionThree.innerText.indexOf("晴"));
console.log("陰"+weatherConditionThree.innerText.indexOf("陰"));
console.log("雲"+weatherConditionThree.innerText.indexOf("雲"));
console.log("雨"+weatherConditionThree.innerText.indexOf("雨"));

if(weatherConditionThree.innerText.indexOf("晴")>=0){
    imgThree.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionThree.innerText.indexOf("陰")>=0){
    imgThree.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionThree.innerText.indexOf("雲")>=0){
    imgThree.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionThree.innerText.indexOf("雨")>=0){
    imgThree.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE FOUR
cityFourArr = data.records.location[15]
console.log(cityFourArr)
cityNameFour.innerText=cityFourArr.locationName
weatherConditionFour.innerText=cityFourArr.weatherElement[0].time[0].parameter.parameterName;
minTemFour.innerText=cityFourArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemFour.innerText=cityFourArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionFour.innerText.indexOf("晴"));
console.log("陰"+weatherConditionFour.innerText.indexOf("陰"));
console.log("雲"+weatherConditionFour.innerText.indexOf("雲"));
console.log("雨"+weatherConditionFour.innerText.indexOf("雨"));

if(weatherConditionFour.innerText.indexOf("晴")>=0){
    imgFour.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionFour.innerText.indexOf("陰")>=0){
    imgFour.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionFour.innerText.indexOf("雲")>=0){
    imgFour.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionFour.innerText.indexOf("雨")>=0){
    imgFour.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE FIVE
cityFiveArr = data.records.location[1]
console.log(cityFiveArr)
cityNameFive.innerText=cityFiveArr.locationName
weatherConditionFive.innerText=cityFiveArr.weatherElement[0].time[0].parameter.parameterName;
minTemFive.innerText=cityFiveArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemFive.innerText=cityFiveArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionFive.innerText.indexOf("晴"));
console.log("陰"+weatherConditionFive.innerText.indexOf("陰"));
console.log("雲"+weatherConditionFive.innerText.indexOf("雲"));
console.log("雨"+weatherConditionFive.innerText.indexOf("雨"));

if(weatherConditionFive.innerText.indexOf("晴")>=0){
    imgFive.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionFive.innerText.indexOf("陰")>=0){
    imgFive.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionFive.innerText.indexOf("雲")>=0){
    imgFive.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionFive.innerText.indexOf("雨")>=0){
    imgFive.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE SIX
citySixArr = data.records.location[5]
console.log(citySixArr)
cityNameSix.innerText=citySixArr.locationName
weatherConditionSix.innerText=citySixArr.weatherElement[0].time[0].parameter.parameterName;
minTemSix.innerText=citySixArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemSix.innerText=citySixArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionSix.innerText.indexOf("晴"));
console.log("陰"+weatherConditionSix.innerText.indexOf("陰"));
console.log("雲"+weatherConditionSix.innerText.indexOf("雲"));
console.log("雨"+weatherConditionSix.innerText.indexOf("雨"));

if(weatherConditionSix.innerText.indexOf("晴")>=0){
    imgSix.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionSix.innerText.indexOf("陰")>=0){
    imgSix.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionSix.innerText.indexOf("雲")>=0){
    imgSix.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionSix.innerText.indexOf("雨")>=0){
    imgSix.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE SEVEN
citySevenArr = data.records.location[10]
console.log(citySevenArr)
cityNameSeven.innerText=citySevenArr.locationName
weatherConditionSeven.innerText=citySevenArr.weatherElement[0].time[0].parameter.parameterName;
minTemSeven.innerText=citySevenArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemSeven.innerText=citySevenArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionSeven.innerText.indexOf("晴"));
console.log("陰"+weatherConditionSeven.innerText.indexOf("陰"));
console.log("雲"+weatherConditionSeven.innerText.indexOf("雲"));
console.log("雨"+weatherConditionSeven.innerText.indexOf("雨"));

if(weatherConditionSeven.innerText.indexOf("晴")>=0){
    imgSeven.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionSeven.innerText.indexOf("陰")>=0){
    imgSeven.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionSeven.innerText.indexOf("雲")>=0){
    imgSeven.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionSeven.innerText.indexOf("雨")>=0){
    imgSeven.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

//ZONE EIGHT
cityEightArr = data.records.location[12]
console.log(cityEightArr)
cityNameEight.innerText=cityEightArr.locationName
weatherConditionEight.innerText=cityEightArr.weatherElement[0].time[0].parameter.parameterName;
minTemEight.innerText=cityEightArr.weatherElement[2].time[0].parameter.parameterName+"-";
maxTemEight.innerText=cityEightArr.weatherElement[4].time[0].parameter.parameterName+"℃";

console.log("晴"+weatherConditionEight.innerText.indexOf("晴"));
console.log("陰"+weatherConditionEight.innerText.indexOf("陰"));
console.log("雲"+weatherConditionEight.innerText.indexOf("雲"));
console.log("雨"+weatherConditionEight.innerText.indexOf("雨"));

if(weatherConditionEight.innerText.indexOf("晴")>=0){
    imgEight.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/01.svg"
}
if(weatherConditionEight.innerText.indexOf("陰")>=0){
    imgEight.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/07.svg"
}
if(weatherConditionEight.innerText.indexOf("雲")>=0){
    imgEight.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg" 
}
if(weatherConditionEight.innerText.indexOf("雨")>=0){
    imgEight.src="https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg" 
}

})
//ZONE ONE
const cityNameOne = document.getElementById("cityNameOne")
const weatherConditionOne = document.getElementById("weatherConditionOne")
const minTemOne = document.getElementById("minTemOne")
const maxTemOne = document.getElementById("maxTemOne")
const imgOne = document.getElementById("imgOne")

//ZONE TWO
const cityNameTwo = document.getElementById("cityNameTwo")
const weatherConditionTwo = document.getElementById("weatherConditionTwo")
const minTemTwo = document.getElementById("minTemTwo")
const maxTemTwo = document.getElementById("maxTemTwo")
const imgTwo = document.getElementById("imgTwo")

//ZONE THREE
const cityNameThree = document.getElementById("cityNameThree")
const weatherConditionThree = document.getElementById("weatherConditionThree")
const minTemThree = document.getElementById("minTemThree")
const maxTemThree = document.getElementById("maxTemThree")
const imgThree = document.getElementById("imgThree")

//ZONE FOUR
const cityNameFour = document.getElementById("cityNameFour")
const weatherConditionFour = document.getElementById("weatherConditionFour")
const minTemFour = document.getElementById("minTemFour")
const maxTemFour = document.getElementById("maxTemFour")
const imgFour = document.getElementById("imgFour")

//ZONE FIVE
const cityNameFive = document.getElementById("cityNameFive")
const weatherConditionFive = document.getElementById("weatherConditionFive")
const minTemFive = document.getElementById("minTemFive")
const maxTemFive = document.getElementById("maxTemFive")
const imgFive = document.getElementById("imgFive")

//ZONE SIX
const cityNameSix = document.getElementById("cityNameSix")
const weatherConditionSix = document.getElementById("weatherConditionSix")
const minTemSix = document.getElementById("minTemSix")
const maxTemSix = document.getElementById("maxTemSix")
const imgSix = document.getElementById("imgSix")

//ZONE SEVEN
const cityNameSeven = document.getElementById("cityNameSeven")
const weatherConditionSeven = document.getElementById("weatherConditionSeven")
const minTemSeven = document.getElementById("minTemSeven")
const maxTemSeven = document.getElementById("maxTemSeven")
const imgSeven = document.getElementById("imgSeven")

//ZONE EIGHT
const cityNameEight = document.getElementById("cityNameEight")
const weatherConditionEight = document.getElementById("weatherConditionEight")
const minTemEight = document.getElementById("minTemEight")
const maxTemEight = document.getElementById("maxTemEight")
const imgEight = document.getElementById("imgEight")