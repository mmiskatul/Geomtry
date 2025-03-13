function calculateTriangleArea(){
    const base= input('triangle-base');
    const height=input('triangle-height');
    const triangleArea=0.5*base*height;
    setInnertext('triangle-Area',triangleArea);
}

 function claculateRectangleArea(){
    const width = input('rectangle-width');
    const length =input('rectangle-length');
    const rectangleArea =width*length;
    setInnertext('rectangle-Area',rectangleArea);
 }
 function claculateparallelogramArea(){
    const base =input('parallelogram-base');
    const height=input('parallelogram-base');
    const parallelogramArea=base * height;
    setInnertext('parallelogram-Area',parallelogramArea);
 }
 function claculaterhombusArea(){
    const diagonal1 =input('rhombus-diagonal1');
    const diagonal2 = input('rhombus-diagonal2');
    const rhombusArea = 0.5 *diagonal1*diagonal2;
    setInnertext('rhombus-Area',rhombusArea);
 }
 function claculatepentagonArea(){
    const a=input('pentagon-a');
    const p=5*a;
    const pentagonArea=p*a;
    setInnertext('pentagon-area',pentagonArea);
 }
 function claculateEllipseArea(){
    const a=input('Ellipse-x-axis');
    const b=input('Ellipse-y-axis');
    const EllipseArea=3.14 *a * b;
    setInnertext('pentagon-area',EllipseArea);
 }
 function input(def){
    const triangleBaseInput=document.getElementById(def);
    const triangleBaseInputValue=triangleBaseInput.value;
    const base=parseFloat(triangleBaseInputValue);
    return base;
}
function setInnertext(id,area){
    const trinagleAreaSpan=document.getElementById(id);
    trinagleAreaSpan.innerText = area;
}