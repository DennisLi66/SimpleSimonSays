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

    }
    checkAgainst(){

    }
}