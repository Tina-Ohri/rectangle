var rect={
    peri:(x,y)=>
        2*(x+y)
    ,
    area:(x,y)=>
         x*y
    
}
function solveRect(x,y){
    if(x<=0||y<=0){
        console.log("Parameters are incorrect");
        }
    else{
        console.log("Area = "+rect.area(x,y));
        console.log("Perimeter = "+rect.peri(x,y));
        }
}
solveRect(2,3);
solveRect(0,5);
solveRect(5,0);