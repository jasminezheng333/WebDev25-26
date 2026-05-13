//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(violation){
  let build = "";
  build = `<div class="fitted card">
                <h3>Summons#: ${violation.summons_number}</h3>
                <hr>
                <p>Plate: ${violation.issue_date}</p>
                <p>License type ${violation.license_type}</p>
                <p>${violation.descriptor}</p>
                <hr>
                <p>Issued on: ${violation.created_date}</p>
                <hr>
                <p>${violation.issuing_agency}</p>
            </div>`;

  return build;
}