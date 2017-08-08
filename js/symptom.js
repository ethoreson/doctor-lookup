var apiKey = require('./../.env').apiKey;

Symptom = function(){
};

Symptom.prototype.getDoctors = function(symptom) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom+'&location=45.5231%2C-122.6765%2C%205&user_location=47.6062%2C-122.3321&skip=0&limit=3&user_key=' + apiKey).then(function(response) {
    for (i = 0; i <= 2; i++) {
      $('.doctor-results').append("<hr><h4>Dr. " +
      response.data[i].profile.first_name +
      " " +
      response.data[i].profile.last_name +
      ":</h4><br>" +
      response.data[i].profile.bio);
    }
  }).fail(function(error) {
    $('.doctor-results').text(error.responseJSON.message);
  });
};

exports.symptomModule = Symptom;
