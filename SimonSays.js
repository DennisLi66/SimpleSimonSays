// function drawBasic(){
//     document.getElementById("cTop").innerHTML = "<canvas id='c1' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById('cLeft').innerHTML = "<canvas id='cL' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById("cRight").innerHTML = "<canvas id='cR' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById("cBottom").innerHTML = "<canvas id='cB' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
// }

class simonGame{
    constructor(){
        this.length = 4;
        this.sequence = "";
        this.remaining = "";
        // console.log("CONSTRUCTED");
    }
    writeToSCoreBoard(){
        //update scoreboard with remaining amount to move on to next level
        let toWrite = "Score:<br>";
        toWrite += (this.length-4)+ "<br>Remaining:<br>" + this.remaining.length;
        document.getElementById("cSB").innerHTML = toWrite;
    }
    generateSequence(){
        let colors = ['R','G','B','0'];
        for (let c = 0; c < this.length; c++){
            let symbol = colors[Math.floor(Math.random() * colors.length)];
             this.sequence += symbol;
        }
        this.remaining = this.sequence;
    }
    addToSequence(){
        let colors = ['R','G','B','0'];
        this.sequence += colors[Math.floor(Math.random() * colors.length)];
        console.log(this.sequence);
        this.length++;
        this.remaining = this.sequence;
    }
    lightUpSequence(order,time){
        this.writeToSCoreBoard();
        disableHover();
       if (order.length > 0){
            if (order[0] == 'R'){
                console.log(order[0]);
                window.setTimeout(this.changeHue,time,"T1");
                window.setTimeout(this.changeHue,time+500,"T2");
            }
            else if (order[0] == "G"){
                console.log(order[0]);
                window.setTimeout(this.changeHue,time,"L1");
                window.setTimeout(this.changeHue,time+500,"L2");

            }
            else if (order[0] == "B"){
                console.log(order[0]);
                window.setTimeout(this.changeHue,time,"B1");
                window.setTimeout(this.changeHue,time+500,"B2");

            }
            else if (order[0] == "0"){
                console.log(order[0]);
                window.setTimeout(this.changeHue,time,"R1");
                window.setTimeout(this.changeHue,time+500,"R2");

            }
            // order = order.slice(1);
            this.lightUpSequence(order.slice(1),time+550);
        }
        else{
            window.setTimeout(enableHover,time);
        }
    }
    checkAgainst(input){
        console.log(input + " + " + this.remaining[0])
        if (input != this.remaining[0]){
            //prompt failure
            this.promptFailure();
            //return false;
        }
        else {
            this.remaining = this.remaining.slice(1);
            this.writeToSCoreBoard();
            if (this.remaining.length == 0){
                this.addToSequence();
                ///lightup
                this.lightUpSequence(window.simon.sequence,0);
            }
        }
    }
    changeHue(code){
        if (code == "R1"){
            document.getElementById("rightH").style.backgroundColor = "rgb(179, 179, 179)";
        }
        else if (code == "R2"){
            document.getElementById("rightH").style.backgroundColor = "black";
        }
        else if (code == "T1"){
            document.getElementById("topH").style.backgroundColor = "rgb(247, 193, 184)";
        }
        else if (code == "T2"){
            document.getElementById("topH").style.backgroundColor = "crimson";
        }
        else if (code == "L1"){
            document.getElementById("leftH").style.backgroundColor = "rgb(158, 201, 158)";
        }
        else if (code == "L2"){
            document.getElementById("leftH").style.backgroundColor = "green";
        }
        else if (code == "B1"){
            document.getElementById("bottomH").style.backgroundColor = "rgb(210, 210, 252)";
        }
        else if (code == "B2"){
            document.getElementById("bottomH").style.backgroundColor = "blue";
        }
    }
    promptFailure(){
        //reset everything to the basics
        //Times cleared = length - 4
        window.hScore = Math.max(window.simon.length - 4,window.hScore);
        let toWrite = "Game Over<br>Your score was " + (window.simon.length - 4) + ".<br>";
        toWrite += "Your highest score is " + window.hScore + ".<br>";
        toWrite += "<button onclick='runGame()'>Try Again</button>"     
        document.getElementById("cSB").innerHTML = toWrite;

    }
}



function disableHover(){
    document.getElementById("tH").innerHTML = "<div id='topH'></div>";
    document.getElementById("rH").innerHTML = "<div id='rightH'></div>";
    document.getElementById("lH").innerHTML = "<div id='leftH'></div>";
    document.getElementById("bH").innerHTML = "<div id='bottomH'></div>";
}
function enableHover(){
    document.getElementById("tH").innerHTML = "<div id='cTop' onclick='window.simon.checkAgainst(\"R\")'></div>";
    document.getElementById('lH').innerHTML = "<div id='cLeft'onclick='window.simon.checkAgainst(\"G\")'></div>";
    document.getElementById("rH").innerHTML = "<div id='cRight' onclick='window.simon.checkAgainst(\"0\")'></div>";
    document.getElementById("bH").innerHTML = "<div id='cBtm' onclick='window.simon.checkAgainst(\"B\")'></div>";
}

function runGame(){



    //hide from scoreboard
    document.getElementById("cSB").innerHTML = "Scoreboard";
    window.simon = new simonGame();
    //set simon to window

    window.simon.generateSequence();
    console.log(window.simon.sequence);

    //lightup sequence
    window.simon.lightUpSequence(window.simon.sequence,0);
    //player action

    

}

function setScore(){
    window.hScore = 0;
}