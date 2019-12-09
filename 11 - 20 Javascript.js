// eleventh problem
function firstLast6(arr) {
    if (arr [0] == 6) {
        return true;
    }
    if (arr[arr.length - 1] == 6) {
        return true;
    }
    return false;
}

//twelth problem
function has23(arr) {
    if (arr [1] == 3){
        return true;
    }

    if (arr [0] == 2 || arr [0] == 3){
        return true;
    }
    return false;
}

//thirteenth problem
function fix23 (arr) {
    if ( arr [0] == 2 && arr [1] == 3){
        arr [1] = 0;
        return arr;
    }
    if (arr [1] == 2 && arr [2] == 3){
        arr [2] = 0;
        return arr;
    }
    return arr;
}
//fourteenth problem
function countYZ (arr){
    var count = 0;
    if (arr[arr.length - 1] == "y" || arr[arr.length - 1] == "Y" || arr[arr.length - 1] == "z" || arr[arr.length - 1] == "Z"){
        count += 1;
    }
    for (var i = 0; i <= arr.length; i++){
        if (arr[i] == " " && (arr[i - 1] == "y" || arr[i - 1] == "Y" || arr[i - 1] == "z" || arr[i - 1] == "Z")){
            count += 1;
        }
    }
    return count;
}

//fifteenth problem
function endOther (str1, str2){
    var smallString = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length > str2.length) {
        smallString = str2.length;
        if (str1.substring(str1.length - smallString) == str2) {
            return true;
        }
    }
    if (str2.length > str1.length) {
        smallString = str1.length;
        if (str2.substring(str2.length - smallString) == str1) {
            return true;
        }
    }
    if (str1 == str2) {
        return true;
    }
    return false;
}
//sixeenth problem
function starOut (string){
    var star = "";
    for (var i = 0; i < string.length; i++) {
        if (!((string.substring(i, i + 1) == "*") || string.substring(i + 1, i + 2) == "*" || string.substring(i - 1, i) == "*")){
            star = star + string.substring(i, i+1);
        }
    }
    return star;
}

//seventeenth problem
function getSandwich (food){
    var num = "";
    breadOne = 0;
    breadTwo = 0;
    for(var i = 0; i < food.length; i++){
        if(food.indexOf("bread") != food.lastIndexOf("bread")) {
            breadTwo += food.lastIndexOf("b");
            breadOne += food.indexOf("d");
            num += food.substring(breadOne + 1, breadTwo);
            return num;

        }
    }
    return num;
}

//eighteenth problem
function canBalance(str){
    var balanceOne = 0;
    var balanceTwo = 0;
    for(var i = 0; i < str.length; i++) {
        balanceOne += str[i];
        for (var x = i + 1; x < str.length; x++) {
            balanceTwo += str[x];
        }
        if (balanceOne == balanceTwo){
            return true;
        }
        balanceTwo = 0;
    }
    return false;
}

//nineteenth problem
function countClumps(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i+1] != arr[i+2]){
            count += 1;
        }
    }
    return count;
}

//twentieth problem
function evenlySpaced (a,b,c) {
    if((a - b) == (c - a)){
        return true;
    }
    if((b - a) == (c - b)){
        return true;
    }
    if((c - a) == (b - c)){
        return true;
    }
    return false;
}

function tester (){
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOthertrue, false;
    document.getElementById("output").innerHTML += starOut, false;
    document.getElementById("output").innerHTML += getSandwich, false;
    document.getElementById("output").innerHTML += canBalance, false;
    document.getElementById("output").innerHTML += countClumps, false;
}