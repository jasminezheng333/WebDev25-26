/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) GIve each info card div a class of card"
2) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
3) Create an appropriate random price to display for each pizza (15-35). No HTML elemnt needed
4) Enter quantity is a text input. No need for id
5) Buy is a button input. No need for event listener

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3-6 

//init() function is called when the page loads in index.html
function init(){
   let op = document.getElementById("output"); 
   let build="";

   for (let i = 1; i <= 5; i++) {
      let price = Math.floor(Math.random()*(35-15+1)+15);
      build+=`<div class="card">
               <img src = "images/title${i}.png" class="title">
               <img src = "images/pizza${i}.jpg" class="pizza"><br>
               $${price} <input type="text" placeholder="Enter Quantity">
               <input type="button" value="Buy">
            </div>`;
   }
   op.innerHTML=build;
}