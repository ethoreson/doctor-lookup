var Symptom = require('./../js/symptom.js').symptomModule;

var displayDoctors = function(symptom, doctors) {
  $('.confirm-input').text("Based on your " + symptom + ", we reccomend you see " + doctors);
};

$(document).ready(function() {
  var newSymptom = new Symptom();
  $('#symptom-form').click(function() {
    var medicalIssue = $('#retrieve-symptom').val();
    var doctors = "Doctor A";
    $('#retrieve-symptom').val("");
    newSymptom.getDoctors(medicalIssue, doctors);
    // $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.6062%2C-122.3321%2C%205&user_location=47.6062%2C-122.3321&skip=0&limit=3&user_key=' + apiKey).then(function(response) {
    // newSymptom.getDoctors(symptom, displayDoctors);
    //    console.log(response);
    //  console.log(JSON.stringify(response));
    // });
  });
});
