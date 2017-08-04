var apiKey = require('./../.env').apiKey;

Symptom = function(){
};

Symptom.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  console.log("works!");
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?fields=' + medicalIssue + '&skip=0&limit=2&user_key=' + apiKey).then(function(response) {
    displayDoctors(symptom, response);
  }).fail(function(error) {
    $('.displayDoctors').text(error.responseJSON.message);
  });
};

exports.symptomModule = Symptom;
