var number = 99;
while(number >= 1){
    var bottleWord = "bottles";
    if(number === 1){
        bottleWord = "bottle";
    }
    console.log(number + " " + bottleWord + " of beer on the wall, ");
    console.log(number + " " + bottleWord + " of beer.");
    console.log("Take one down and pass it around, ");
    number--;
    if(number === 0){
        console.log("no more bottles of beer on the wall.")
        console.log("No more bottles of beer on the wall, ")
        console.log("No more bottles.")
        console.log("Go to the store and buy some more, ")
        console.log("99 bottles of beer on the wall.")
    }else{
        if(number === 1){
            bottleWord = "bottle"
        }
        console.log(number + " " + bottleWord + " of beer on the wall.")
    }
}
