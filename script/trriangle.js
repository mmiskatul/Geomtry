function calculateTriangleArea(){
    // for trinagle base 
    const triangleBaseInput=document.getElementById('triangle-base');
    const triangleBaseInputValue=triangleBaseInput.value;
    const base=parseFloat(triangleBaseInputValue);
    // for triangle height 
    const triangleheightInput=document.getElementById('triangle-height');
    const triangleheightInputValue=triangleBaseInput.value;
    const height=parseFloat(triangleBaseInputValue);
    const triangleArea=0.5*base*height;
    // display the Area
    const trinagleAreaSpan=document.getElementById('triangle-Area');
    trinagleAreaSpan.innerText = triangleArea;

}
 function claculateRectangleArea(){
    // for rectangle
    const rectanglewidth=document.getElementById('rectangle-width');
    const rectanglewidthValue=rectanglewidth.value;
    const width=parseFloat(rectanglewidthValue);

    const rectanglelength=document.getElementById('rectangle-length');
    const rectanglelengthValue=rectanglelength.value;
    const length=parseFloat(rectanglelengthValue);
    const rectangleArea =width*length;

    const rectangleAreaspan=document.getElementById('rectangle-Area');
    rectangleAreaspan.innerText=rectangleArea;
 }
 function claculateparallelogramArea(){
    const parallelogramBaseInput=document.getElementById('parallelogram-base');
    const parallelogramBaseInputValue=parallelogramBaseInput.value;
    const Base=parseFloat(parallelogramBaseInputValue);

    const parallelogramheightInput =document.getElementById('parallelogram-height');
    const parallelogramheightInputValue=parallelogramheightInput.value;
    const height=parseFloat(parallelogramheightInputValue);
    const parallelogramArea=Base * height;

    const parallelogramAreaSpan=document.getElementById('parallelogram-Area');
    parallelogramAreaSpan.innerText =parallelogramArea;
 }
 function claculaterhombusArea(){
    const rhombusDiagonal1Input = document.getElementById('rhombus-diagonal1');
    const rhombusDiagonal1Value = rhombusDiagonal1Input.value;
    const diagonal1 = parseFloat(rhombusDiagonal1Value);

    const rhombusDiagonal2Input = document.getElementById('rhombus-diagonal2');
    const rhombusDiagonal2Value = rhombusDiagonal2Input.value;
    const diagonal2 = parseFloat(rhombusDiagonal2Value);
    const rhombusArea = 0.5 *diagonal1*diagonal2;
    const rhombusAreaspan=document.getElementById('rhombus-Area');
    rhombusAreaspan.innerText =rhombusArea;

 }