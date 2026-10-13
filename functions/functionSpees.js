
function distanceInMiles(distanceInKM){
    return distanceInKM/1.6;
    }


function averageSpeedMiles(distanceInKM, time){
    return  distanceInMiles(distanceInKM)/time;
}


let timeInHour = 45.5/60;

console.log(averageSpeedMiles(14, timeInHour));

