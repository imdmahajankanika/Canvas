var figs=[]
var figure_size = document.getElementById("figureSize");
const canvas = document.querySelector('#myCanvas')
canvas.width = document.getElementById("drawingbox").clientWidth;
canvas.height= document.getElementById("drawingbox").clientHeight;
var shape = document.getElementById("shapes");
var bg_color = document.getElementById("bgcolor");
var border_col = document.getElementById("bordercolor");
var border_thickness = document.getElementById("borderThickness");
function display() {
    var x = Math.floor(Math.random()*(canvas.width));
    var y = Math.round(Math.random()*(canvas.height));
    var ctx = canvas.getContext("2d");
    if(shape.value=="Circle"){
     var r= figure_size.value/2;
      ctx.beginPath();
      ctx.arc(x,y,r,0,2*Math.PI);
      ctx.fillStyle = bg_color.value;
      ctx.fill();
      ctx.lineWidth = border_thickness.value;
      ctx.strokeStyle = border_col.value;
      ctx.stroke();

    }
     else if(shape.value=="Square"){
      var width = figure_size.value;
      ctx.fillStyle = bg_color.value;
      ctx.fillRect(x,y,width,width);
      ctx.strokeStyle=border_col.value;
      ctx.lineWidth = border_thickness.value;
      ctx.strokeRect(x,y,width,width);
     }
    else{
        ctx.beginPath();
        ctx.fillStyle = bg_color.value;
        ctx.moveTo(x-figure_size.value/2 ,y-figure_size.value/2);
        ctx.lineTo(x-figure_size.value/2 , y+figure_size.value/2);
        ctx.lineTo(x + figure_size.value/2, y + figure_size.value/2);
        ctx.closePath();
        ctx.lineWidth = border_thickness.value;
        ctx.fill();

        ctx.strokeStyle=border_col.value;
        ctx.stroke();
    }
     figs.push({"shape": shape.value, "bg_color": bg_color.value, "x": x, "y": y, "figure_size": figure_size.value, "border_thickness": border_thickness.value, "border_col": border_col.value});
      localStorage.setItem("figures", JSON.stringify(figs));
      getFigs=JSON.parse(localStorage.getItem("figures"))
      fetch("http://localhost:3000/get",
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(getFigs)
      }
      ).then(onSuccess);
      function onSuccess(response){
        console.log(response)
        response.text().then(function(result){
          console.log(result);
        });
      }
};
var allFigures
if(localStorage.getItem("figures").length>0){
  allFigures = localStorage.getItem("figures");
  var fig = JSON.parse(allFigures);
for(var i=0;i<fig.length;i++){
  var x = Math.floor(Math.random()*(canvas.width));
  var y = Math.round(Math.random()*(canvas.height));
  var ctx = canvas.getContext("2d");
  if(fig[i].shape=="Circle"){
  var r= fig[i].figure_size/2;
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fillStyle = fig[i].bg_color;
  ctx.fill();
  ctx.lineWidth = fig[i].border_thickness;
  ctx.strokeStyle = fig[i].border_col;
  ctx.stroke();
 
   }
  else if(fig[i].shape=="Square"){
  var width = fig[i].figure_size;
  ctx.fillStyle = fig[i].bg_color;
  ctx.fillRect(x,y,width,width);
  ctx.strokeStyle=fig[i].border_col;
  ctx.lineWidth = fig[i].border_thickness;
  ctx.strokeRect(x,y,width,width);
 }
else{
    ctx.beginPath();
    ctx.fillStyle = fig[i].bg_color;
    ctx.moveTo(x-fig[i].figure_size/2 ,y-fig[i].figure_size/2);
    ctx.lineTo(x-fig[i].figure_size/2 , y+fig[i].figure_size/2);
    ctx.lineTo(x + fig[i].figure_size/2, y + fig[i].figure_size/2);
    ctx.closePath();
    ctx.lineWidth = fig[i].border_thickness;
    ctx.fill();
    
    ctx.strokeStyle=fig[i].border_col;
    ctx.stroke();
}
 figs.push({"shape": fig[i].shape, "bg_color": fig[i].bg_color, "x": x, "y": y, "figure_size": fig[i].figure_size, "border_thickness": fig[i].border_thickness, "border_col": fig[i].border_col});
  localStorage.setItem("figures", JSON.stringify(figs));
  }
}
function randomGen(){
  var shp=["Square","Triangle","Circle"]
  var col=["white","#347fc4","#7d6b91","#989fce","#E6C9F7"] ;
  var col_bor=["#4b4a67","#5a2328","#264027","#821CC2","black"] ;
  var thickness = [2,4,6,8,10,20];
  var figSize = [20,40,60,80,100,200];
  for(let i=0;i<10;i++){
    var rnd_shp = shp[Math.floor(Math.random()*3)];
    var rnd_bg = col[Math.floor(Math.random()*5)];
    var rnd_bor = col_bor[Math.floor(Math.random()*5)];
    var rnd_thickness=thickness[Math.floor(Math.random()*6)]
    var rnd_figSize=figSize[Math.floor(Math.random()*6)]
    var x = Math.floor(Math.random()*(canvas.width));
    var y = Math.round(Math.random()*(canvas.height));
    var ctx = canvas.getContext("2d");
    if(rnd_shp=="Circle"){
      var r= rnd_figSize/2;
      ctx.beginPath();
      ctx.arc(x,y,r,0,2*Math.PI);
      ctx.fillStyle = rnd_bg;
      ctx.fill();
      ctx.lineWidth = rnd_thickness;
      ctx.strokeStyle = rnd_bor;
      ctx.stroke();
    }
    else if(rnd_shp=="Square"){
      var width = rnd_figSize;
      ctx.fillStyle = rnd_bg;
      ctx.fillRect(x,y,width,width);
      ctx.strokeStyle=rnd_bor;
      ctx.lineWidth = rnd_thickness;
      ctx.strokeRect(x,y,width,width);
    }
    else{
        ctx.beginPath();
        ctx.fillStyle = rnd_bg;
        ctx.moveTo(x-rnd_figSize/2 ,y-rnd_figSize/2);
        ctx.lineTo(x-rnd_figSize/2 , y+rnd_figSize/2);
        ctx.lineTo(x + rnd_figSize/2, y + rnd_figSize/2);
        ctx.closePath();
        ctx.lineWidth = rnd_thickness;
        ctx.fill();
        ctx.strokeStyle=rnd_bor;
        ctx.stroke();
      }
    figs.push({"shape": rnd_shp, "bg_color": rnd_bg, "x": x, "y": y, "figure_size": rnd_figSize, "border_thickness": rnd_thickness, "border_col": rnd_bor});
  localStorage.setItem("figures", JSON.stringify(figs));
   }
 }
 
function clearStorage(){
    localStorage.setItem("figures", JSON.stringify([]));
}