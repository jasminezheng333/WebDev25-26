let data, info;

async function init(){   
  let link = "MVC.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.on_street_name}</p>
                 <p>${crash.off_street_name}</p>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${crash.created_date}</p>
                 <hr>
                 <p>${crash.collision_id}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.incident_zip == zip){
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.borough}</p>
                  <p>${complaint.incident_zip}</p>
                  <p>${complaint.descriptor}</p>
                  <hr>
                  <p>${complaint.created_date}</p>
                  <hr>
                  <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}
// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByType(){
  let output = document.getElementById("output");
  let type = document.getElementById("type").value();
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.complaint_type==type){
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.borough}</p>
                  <p>${complaint.incident_zip}</p>
                  <p>${complaint.descriptor}</p>
                  <hr>
                  <p>${complaint.created_date}</p>
                  <hr>
                  <p>${complaint.agency}</p>
                </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}