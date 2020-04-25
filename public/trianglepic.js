var type
var a,b,c;
function checktriangle(){

    InA = document.getElementById("InA").value
    InB = document.getElementById("InB").value
    InC = document.getElementById("InC").value
    output = document.getElementById("output")

    a = parseFloat(InA)
    b = parseFloat(InB)
    c = parseFloat(InC)

    console.log(a)
    console.log(b)
    console.log(c)

    if(a == null||b == null|| c== null){
        alert("Values shouldn't be 0 or Null")
        output.innerHTML = "Missing Input"
    }
    else if(a<0||b<0||c<0){
        output.innerHTML = "Wrong Input"
    }
    else if(a+b>c && a+c>b && b+c>a){
        
        if(a==b && b==c && a==c){
            output.innerHTML = "Equilateral triangle"
            type = 1
        }
        else if((a*a+b*b)==(c*c)||((a*a+c*c)==(b*b))||(b*b+c*c)==(a*a)){
            output.innerHTML = "Right triangle"
            type = 2
        }
        else if(a==b||b==c||a==c){
            output.innerHTML = "Isosceles triangle"
            type = 3
        }
        else {
            output.innerHTML = "Scalene triangle"
            type = 4
        }
        drawTriangle(type)
        //drawTriangleFromSide();
    }
    else{
        alert("Values shouldn't be 0 or Null")
        output.innerHTML = "Not a triangle"
    }
}

function drawTriangle(type){

    var canvasElement = document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");
    var width = canvasElement.width
    var height = canvasElement.height;

    switch(type){
        case 1:
            // the Equilateral
            context.beginPath();
            context.moveTo(250/500*width, 150/500*height)
            context.lineTo(365/500*width, 350/500*height)
            context.lineTo(135/500*width, 350/500*height)
            context.closePath();

            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;

        case 2:
            // the Right
            context.beginPath();
            context.moveTo(100/500*width, 100/500*height);
            context.lineTo(100/500*width, 300/500*height);
            context.lineTo(300/500*width, 300/500*height);
            context.closePath();

            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;
            
            
        case 3:
            // the Isosceles
            context.beginPath();
            context.moveTo(100/500*width, 100/500*height);
            context.lineTo(100/500*width, 300/500*height);
            context.lineTo(300/500*width, 300/500*height);
            context.closePath();

            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;

        case 4:
            // the Scalene
            context.beginPath();
            context.moveTo(100/500*width, 100/500*height);
            context.lineTo(100/500*width, 300/500*height);
            context.lineTo(300/500*width, 300/500*height);
            context.closePath();
            
            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;  
    }
}

    //still error
    //draw triangle by actual side value
    function drawTriangleFromSide(){
        var canvas = document.getElementById('triangle-canvas');
        var ctx = canvas.getContext('2d');

        R1 = a;
        R2 = b;
        R3 = c;

        var Ax=0, Ay=0;
        var Bx=R3, By=0;
        var Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
        var Cy=Math.sqrt(R2*R2-Cx*Cx);

        var Ox = canvas.width / 2 - Bx/2;
        var Oy = canvas.height / 2 + Cy/2;

    
        ctx.beginPath();
        ctx.moveTo(Ox+Ax, Oy-Ay);
        ctx.lineTo(Ox+Bx, Oy-By);
        ctx.lineTo(Ox+Cx, Oy-Cy);
        ctx.closePath();
        ctx.fillStyle="gold"; ctx.lineWidth=2;
        ctx.stroke(); ctx.fill();
    }

    

