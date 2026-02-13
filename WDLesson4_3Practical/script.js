/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function BMI(){
  h = parseFloat(document.getElementById('height').value);
  w = parseFloat(document.getElementById('weight').value);
  let op= document.getElementById("output");
  let bmi = w/(h **2) * 703;
  let message = "";
  let img="";
  if (bmi < 18.5) {
      img = "underweight.png";
      message ="Underweight";
    } else if (bmi >=18.5 && bmi <25) {
      img = "healthyweight.png";
      message ="Healthyweight";
    } else if (bmi >=25 && bmi<30) {
      img = "overweight.png";
      message ="Overweight";
    } else if(bmi>=30) {
      img = "obeseweight png"; 
      message ="Obese";
    }
  op.innerHTML= `<img src ="${img}"><br> You are ${message}`;
}