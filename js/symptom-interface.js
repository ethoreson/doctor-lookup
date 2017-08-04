var apiKey = "058e083a2e4bd200f48a6fe5642ecce7";

var Symptom = require('./../js/symptom.js').symptomModule;

var displayDoctors = function(symptom, doctors) {
  $('.confirm-input').text("Based on your " + symptom + ", we reccomend you see " + doctors);
};

$(document).ready(function() {
  var newSymptom = new Symptom();
  $('#symptom-form').click(function() {
    var medicalIssue = $('#retrieve-symptom').val();
    $('#retrieve-symptom').val("");
    $('.confirm-input').text("Input received: " + medicalIssue);
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=1&user_key=' + apiKey, function(response) {
      console.log(response);
    // newSymptom.getDoctors(symptom, displayDoctors);
    //    console.log(response);
      console.log(JSON.stringify(response));
    });
  });
});
