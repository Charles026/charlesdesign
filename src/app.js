import "./scss/style.scss";
import "bootstrap"
console.log('hello') ;
document.body.style.background = '#f4f4f4';
$(function () {
    $("#btn-alert").click(function () {
        alert("alert弹出")
    });
    $('#btn-layer').click(function () {
        console.log('hello')
    });
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
