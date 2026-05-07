const quotes = [
  'Stay hungry, stay foolish.',
  'Practice makes perfect.',
  'Code every day.',
  'Small steps matter.',
  'Consistency beats talent.',
  "Build, don't just watch."
];

function gen(){
  const i = Math.floor(Math.random()*quotes.length);
  document.getElementById('quote').innerText = quotes[i];
}
