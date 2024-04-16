document.getElementById('calculate').addEventListener('click', function () {
  var location = document.getElementById('location').value;
  var fee = parseFloat(document.getElementById('fee').value);
  var scholarship = parseFloat(document.getElementById('scholarship').value);
  var deposit = parseFloat(document.getElementById('deposit').value);
  var statement;

  if (location === 'inside') {
    statement = ((fee - scholarship - deposit) + 12006).toFixed(2);
  } else if (location === 'outside') {
    statement = ((fee - scholarship - deposit - deposit) + 9207).toFixed(2);
  }

  document.getElementById('output').innerHTML = '<strong>Statement:</strong> £' + statement;
});
