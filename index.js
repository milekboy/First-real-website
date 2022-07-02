var counter = 0;

function add()
{
    $("#jad").html("<i class='fa-solid fa-xmark'></i>")
  counter++;
  $("#jad").click(function(){
    $("#jad").html("<i class='fa-solid fa-xmark'></i>")})
  if (counter % 2 == 0)$("button").click(function(){
    $("#jad").html("  <span class='navbar-toggler-icon'></span>")})
else if  (counter % 2 == 1)  $("button").click(function(){
    $("#jad").html(" <i class='fa-solid fa-xmark'></i>")})
}
