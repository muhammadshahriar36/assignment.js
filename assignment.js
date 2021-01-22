function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


function budgetCalculator(watch, mobile, laptop){
    watch = watch*50;
    mobile = mobile*100;
    laptop = laptop*500;
    var taka = watch + mobile + laptop;
    return taka;
}


function hotelCost(day){
    var taka = 0;
    if(day<=10){
        taka = day*100;
    }
    else if(day<=20){
        var firstPart = 10*100;
        var remaining = day - 10;
        var secondPart = remaining*80;
        taka = firstPart + secondPart;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day - 20;
        var thirdPart = remaining*50;
        taka = firstPart + secondPart + thirdPart;
    }
    return taka;
}


function megaFriend(names){
    var max = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length > max.length){
            max = element;
        }
    }
    return max;
}




var nanaMeter = kilometerToMeter(5);
console.log(nanaMeter);

var amount = budgetCalculator(3, 5, 2);
console.log(amount);

var count = hotelCost(40);
console.log(count);

var names = ["shahriar hossain joy", "tamim hasan", "abu saad", "multazimul islam akib"];
var result = megaFriend(names);
console.log(result);
