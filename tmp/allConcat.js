var Symptom = require('./../js/symptom.js').symptomModule;
var apiKey = "058e083a2e4bd200f48a6fe5642ecce7";

$(document).ready(function() {
  $('#symptom').click(function() {
    var symptom = $("#retrieve-symptom").val();
    $('#retrieve-symptom').val("");
    $(".doctor-results").text("Based on your symptom of " + symptom + "...");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=47.6062%2C-122.3321&skip=0&limit=2&user_key=' + apiKey, function(response) {
      console.log(response);
      $('.doctor-results').text("We reccomend you contact " + response.data[0].profile.last_name);
    });
  });
});

//
// exports.getDoctors = function(medicalIssue) {
//
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };
