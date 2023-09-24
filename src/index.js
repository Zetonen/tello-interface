screen.orientation.addEventListener('change', event => {
  const type = event.target.type;
  const angle = event.target.angle;
  if (type ==='portrait-primary') {
    alert(false)
    console.log(true);
  }
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
