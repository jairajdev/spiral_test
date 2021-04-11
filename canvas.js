const canvas = document.querySelector("canvas");
const Form = document.getElementById("myform");
const submit = document.getElementById("myform-submit");
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext("2d");
var RADIUS = 5;
// var PHI = (Math.sqrt(5) - 1) / 2;
var PHI = (Math.sqrt(5) + 1) / 2 - 1;

function dot(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, 2 * Math.PI, false);
  ctx.fillStyle = "red";
  ctx.fill();
}

function polarToCartesian(r, theta) {
  return {
    x: r * Math.cos(theta),
    y: r * Math.sin(theta),
  };
}

// function spiral() {
//     var N = 200;
//     for (var n = 0; n < N; n++) {
//       var r = Math.sqrt(n) * 5;
//       var theta = 2 * Math.PI * PHI * n;
//       var pt = polarToCartesian(r, theta);
//       dot(ctx, pt.x + 512, pt.y + 512);
//     }
//   }
// }

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const number = myform.number.value;
  if (number == "") {
    alert("Please provide your number of nodes!");
  } else {
    console.log(number);
    ctx.clearRect(0, 0, 800, 800);
    for (var n = 0; n < number; n++) {
      var r = Math.sqrt(n) * 10;
      var theta = 2 * Math.PI * PHI * n;
      var pt = polarToCartesian(r, theta);
      dot(ctx, pt.x + 400, pt.y + 400);
    }
  }
});
