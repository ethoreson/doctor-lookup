var apiKey = require('./../.env').apiKey;

Symptom = function(){
};

Symptom.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  console.log("works!");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    displayDoctors(symptom, response);
  }).fail(function(error) {
    $('.displayDoctors').text(error.responseJSON.message);
  });
};

exports.symptomModule = Symptom;
