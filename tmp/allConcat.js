var Symptom = require('./../js/symptom.js').symptomModule;
//var apiKey = "058e083a2e4bd200f48a6fe5642ecce7";

$(document).ready(function() {
  var newSymptom = new Symptom();
  $('#symptom').click(function() {
    var symptom = $("#retrieve-symptom").val();
    $('#retrieve-symptom').val("");
    $(".doctor-results").text("Based on your entry of " + symptom + "...");
    newSymptom.getDoctors(symptom);
  });
});
