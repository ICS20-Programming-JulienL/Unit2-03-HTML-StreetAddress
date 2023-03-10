// Copyright (c) 2023 Julien Laamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked() {
// get street name from text field
  let number= parseInt(document.getElementById("StNu").value)
	// get street numberfrom text field
  let name = document.getElementById("StN").value


  // display name and age back to user
  document.getElementById('Answer').innerHTML = "Your address is " + number +" "+ name
}

