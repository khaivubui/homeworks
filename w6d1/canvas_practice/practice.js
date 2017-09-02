document.addEventListener("DOMContentLoaded", () => {
  // .1
  const canvas = document.getElementById('mycanvas');

  // 2.
  canvas.style.width = '500px';
  canvas.style.height = '500px';

  // 3.
  const ctx = canvas.getContext('2d');

  // ------ Phase II ------

  // 1.
  ctx.fillStyle = '#2980b9';

  // 2.
  console.log(canvas.width);
  console.log(canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ------ Phase III ------

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = '#e74c3c';
  ctx.stroke();

  // ------ Phase IV ------

  ctx.fillStyle = '#e74c3c';
  ctx.fill();
});
