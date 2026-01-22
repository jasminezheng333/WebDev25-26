// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Avg(){
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);
    let op = document.getElementById("output1");
    let avg = ((g1)+(g2)+(g3))/3;
    op.innerHTML = "The average is " + avg;
}
// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let op = document.getElementById("output2");
    let slope = (y2-y1)/(x2-x1);
    op.innerHTML = "The slope is " + slope;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let op = document.getElementById("output3");
    let bmi = weight/(height **2) * 703;
    op.innerHTML = "Your BMI is" + bmi;
}