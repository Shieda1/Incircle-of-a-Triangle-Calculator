// https://calculator.swiftutors.com/incircle-of-a-triangle-calculator.html

const a =  document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const incircleRadiusRadio = document.getElementById('incircleRadiusRadio');
const incircleAreaRadio = document.getElementById('incircleAreaRadio');
const triangleAreaRadio = document.getElementById('triangleAreaRadio');

btn.addEventListener('click', function() {
  
  if(incircleRadiusRadio.checked)
    result.textContent = `Circumcircle Radius = ${computeCircumcircleRadius().toFixed(2)}`;

  else if(incircleAreaRadio.checked)
    result.textContent = `Circumcircle Area = ${computeCircumcircleArea().toFixed(2)}`;

  else if(triangleAreaRadio.checked)
    result.textContent = `Triangle Area = ${computeTriangleArea().toFixed(2)}`;
})

// calculation

function computeCircumcircleRadius() {
  return Math.sqrt(computeS() * (computeS() - Number(a.value)) * (computeS() - Number(b.value)) * (computeS() - Number(c.value))) / computeS();
}

function computeCircumcircleArea() {
  return Math.PI * Math.pow(computeCircumcircleRadius(), 2);
}

function computeTriangleArea() {
  return Math.sqrt(computeS() * (computeS() - Number(a.value)) * (computeS() - Number(b.value)) * (computeS() - Number(c.value)));
}

function computeS() {
  return (Number(a.value) + Number(b.value) + Number(c.value)) / 2;
}