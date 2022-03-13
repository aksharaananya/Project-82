canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginpath();
ctx.strokestyle="red";
ctx.lineWidth= 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="blue";
ctx.lineWidth=1;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="black";
ctx.lineWidth=1;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="red";
ctx.lineWidth=1;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="gold";
ctx.lineWidth=1;
ctx.arc(300, 265, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle="green";
ctx.lineWidth=1;
ctx.arc(400, 265, 40, 0, 2*Math.PI);
ctx.stroke();