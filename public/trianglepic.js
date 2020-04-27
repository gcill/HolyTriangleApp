var type
var a,b,c,x,y,z,w;
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

    //check if input is number
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Please provide side of triangle")
        output.innerHTML = "Result : Missing Input"
        type = 6;
        drawTriangle(type)
    }
    else if(a<0||b<0||c<0){
        alert("Value should not negative")
        output.innerHTML = "Result : Wrong Input"
        type = 6;
        drawTriangle(type)
    }
    else if(a+b>c && a+c>b && b+c>a){
        
        if(a==b && b==c && a==c){
            output.innerHTML = "Result : Equilateral triangle"
            type = 1
        }
        else if((a*a+b*b)==(c*c)||((a*a+c*c)==(b*b))||(b*b+c*c)==(a*a)){
            output.innerHTML = "Result : Right triangle"
            type = 2
        }
        else if(a==b||b==c||a==c){
            output.innerHTML = "Result : Isosceles triangle"
            type = 3
        }
        else {
            w = (Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c)
            x = Math.acos((Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c))*180/Math.PI
            y = Math.acos((Math.pow(a,2)+Math.pow(c,2)-Math.pow(b,2))/(2*a*c))*180/Math.PI
            z = Math.acos((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2))/(2*a*b))*180/Math.PI
            console.log(w)
            console.log(x)
            console.log(y)
            console.log(z)
                if(x<=90&&y<=90&&z<=90)
                {
                    output.innerHTML = "Result : Acute Scalene triangle "
                    type = 4
                }
                else if(x>90||y>90||z>90){
                    output.innerHTML = "Result : Obtuse Scalene triangle "
                    type = 5

                }
        }
        drawTriangle(type)
        //drawTriangleFromSide();
    }
    else{
        //alert("Values shouldn't be 0 or Null")
        output.innerHTML = "Result : Not a triangle"
        type = 6
        drawTriangle(type)
    }
}

function drawTriangle(type){

    var canvasElement = document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");
    var width = canvasElement.width
    var height = canvasElement.height;
    context.clearRect(0,0,width,height);
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
            context.lineTo(100/500*width, 350/500*height);
            context.lineTo(350/500*width, 350/500*height);
            context.closePath();

            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;
            
            
        case 3:
            // the Isosceles
            context.beginPath();
            context.moveTo(250/500*width, 150/500*height);
            context.lineTo(350/500*width, 400/500*height);
            context.lineTo(150/500*width, 400/500*height);
            context.closePath();

            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;

        case 4:
            // the Scalene
            context.beginPath();
            context.moveTo(250/500*width, 100/500*height);
            context.lineTo(400/500*width, 400/500*height);
            context.lineTo(150/500*width, 400/500*height);
            context.closePath();
            
            // the outline
            context.lineWidth = 10;
            context.strokeStyle = '#666666';
            context.stroke();
            break;
        case 5:
            // the Scalene
            context.beginPath();
            context.moveTo(100/500*width, 100/500*height);
            context.lineTo(400/500*width, 350/500*height);
            context.lineTo(200/500*width, 350/500*height);
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

    

