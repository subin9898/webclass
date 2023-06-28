$(document).ready(function () {
  // let pathLength = $(".letter").get(0).getTotalLength()
  //  get(0)-> 제이쿼리 문서객체를 자바스크립트 문서객체로 변환하여 리턴함
  // $(".letter").css("stroke-dasharray", pathLength)
  // $(".letter").css("stroke-dashoffset", pathLength)

  $("#introtxt path").each(function () {
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.5
    let delay = idx * secondTerm


    let pathLength = $(this).get(0).getTotalLength()
    $(this).css("stroke-dasharray", pathLength)
    $(this).css("stroke-dashoffset", pathLength)

    setTimeout(function () {
      path.css("transition", `stroke-dashoffset 1s ease ${delay}s, fill 1s ease ${delay + 1}s`)
    }, 500)
  })

  setTimeout(function () {
    $("#introtxt").addClass("on")

  }, 1000)

})