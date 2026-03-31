function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
output.innerHTML = `
  <div class="card">
    <h2>${school.name}</h2>
    <img src="${school.image}">
    <p>${school.address}</p>
  </div>
`;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let artist = {
    "name":"Daniel Caesar",
    "image":"https://www.euphoriazine.com/wp-content/uploads/2025/08/daniel-caesar.jpg",
    "album":"Never Enough",
    "url":"https://www.sonofspergy.com/"
  };

  let output = document.getElementById("output");

  output.innerHTML = `
    <div class="card">
      <h2>${artist.name}</h2>
      <p>${artist.album}</p>
      <a href="${artist.url}" target="_blank">
        <img src="${artist.image}">
      </a>
    </div>
  `;
}