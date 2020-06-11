// function drawBasic(){
//     document.getElementById("cTop").innerHTML = "<canvas id='c1' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById('cLeft').innerHTML = "<canvas id='cL' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById("cRight").innerHTML = "<canvas id='cR' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
//     document.getElementById("cBottom").innerHTML = "<canvas id='cB' style='border:1px solid #d3d3d3;'> Not Supported</canvas>";
// }

class simonGame{
    constructor(){
        let length = 4;
        let sequence = "";
        let remaining = "";
    }
    generateSequence(){
        let colors = ['R','G','B','0'];
        for (let c = 0; c < this.length; c++){
             this.sequence += colors[Math.floor(Math.random() * colors.length)];
        }
        this.remaining = this.sequence;
        console.log(this.sequence);
    }
    addToSequence(){
        let colors = ['R','G','B','0'];
        this.sequence += colors[Math.floor(Math.random() * items.length)];
        console.log(this.sequence);
        this.length++;
        this.remaining = this.sequence;
    }
    lightUpSequence(){
        let order = this.sequence;
        while (order.length > 0){
            if (order[0] == 'R'){

            }
            order = order.slice(1);
        }
    }
    checkAgainst(input){
        if (input != this.remaining[0]){
            return false;
        }
        if (this.remaining.length != 1){
        this.remaining = this.remaining.slice(1);
        }
        return true;
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
            document.getElementById("bottomH").style
        }
        else if (code == "B2"){

        }
    }
    disableHover(){
        document.getElementById("tH").innerHTML = "<div id='topH'></div>";
        document.getElementById("rH").innerHTML = "<div id='rightH'></div>";
        document.getElementById("lH").innerHTML = "<div id='leftH'></div>";
        document.getElementById("bH").innerHTML = "<div id='bottomH'></div>";
    }
    enableHover(){
        document.getElementById("tH").innerHTML = "<div id='cTop'></div>";
        document.getElementById('rH').innerHTML = "<div id='cLeft'></div>";
        document.getElementById("lH").innerHTML = "<div id='cRight'></div>";
        document.getElementById("bH").innerHTML = "<div id='CBtm'></div>";
    }
}