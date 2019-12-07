var numList = [];
for (var i = 19; i < 121; i++) { 
    numList.push(i);
}

var gemValList = [];
for (var i = 1; i < 13; i++) { 
    gemValList.push(i);
}

var targetNum = getTargetNum();

var gemObj = {
    "greenGem": setGemValues(),
    "blueGem": setGemValues(),
    "purpleGem": setGemValues(),
    "redGem": setGemValues()
};
var userNumTotal = 0;
var gameComplete = isUserOver();
var wins = 0;
var loss = 0;
assginValuesToGems();


$(document).ready(function () {
    $(".targetNum").text(targetNum);
    $(".gem").on("click", function () { 
        console.log("adding value: ", parseInt($(this).val()));
        userNumTotal += (parseInt($(this).val()));
        $(".targetNum").text(targetNum);
        $(".userNumTotal").text(userNumTotal);
        if (userNumTotal > targetNum) {
            console.log("user went over...resetting");
            loss++;
            $(".loss").text(loss);
            $(".score-body").text("You lost!!");
            newGame();
            console.log("loss: ", loss);
        } else if (userNumTotal === targetNum) {
            console.log("user won...resetting");
            wins++;
            $(".wins").text(wins);
            $(".score-body").text("You Won!!");
            newGame();
            console.log("wins: ", wins);
        }
        console.log("targetNum: ", targetNum);
        console.log("greenGem", gemObj.greenGem);
        console.log("blueGem", gemObj.blueGem);
        console.log("purpleGem", gemObj.purpleGem);
        console.log("redGem", gemObj.redGem);
    });

}); 


function assginValuesToGems() {
    $(".greenGem").attr("value", gemObj.greenGem);
    $(".blueGem").attr("value", gemObj.blueGem);
    $(".purpleGem").attr("value", gemObj.purpleGem);
    $(".redGem").attr("value", gemObj.redGem);
}

function isUserOver() {
    if (parseInt(userNumTotal) > targetNum) {
        return true;
    }
}

function getTargetNum() {
    return numList[Math.floor(Math.random() * numList.length)];
}

function setGemValues() {
    return gemValList[Math.floor(Math.random() * gemValList.length)];
}

function newGame() {
    targetNum = getTargetNum();
    userNumTotal = 0;
    $(".targetNum").text(targetNum);
    $(".userNumTotal").text(userNumTotal);
    gemObj = {
        "greenGem": setGemValues(),
        "blueGem": setGemValues(),
        "purpleGem": setGemValues(),
        "redGem": setGemValues()
    };
    assginValuesToGems();
}