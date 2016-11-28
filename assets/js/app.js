$(document).ready(function () {
  

  $.ajax({
    url: 'http://localhost:5000/shakespeare',
    success: function (data) {
        console.log(data);

        var template = $.templates("#cardTemplate");
        var htmlOutput = template.render(data);
        $("#novels").html(htmlOutput);
    },
    error: function (jqXHR, exception) {
        alert(jqXHR.status);
    }
  });

});
