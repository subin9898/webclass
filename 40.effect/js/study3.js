$(document).ready(function () {


  let a = [1, 2, 3, "hi"]


  $(".btn1").click(function () {
    textAni(".title", {
      // aniDelay: 0.5,
      // aniSpeed: 1,
      // textSize: 80
    })
  })
  textAni(".title", {
    textsize: 100,
    aniSpeed: 0.5,
    effect: "moveBottomToTop"
  })
})


