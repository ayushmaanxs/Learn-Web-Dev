
gsap.from("h1", {
  opacity: 0,
  y: 50,
  delay: 0.5,
  duration: 1,
  // textillate js ka code github ke readme se copy kraa hai
  //textilllate ka code humesa onStart pe likhenge hum
  onStart: function () {
    $("h1").textillate({ in: { effect: "rollIn" } });
  },
});
 