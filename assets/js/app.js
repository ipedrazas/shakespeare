$(document).ready(function () {
  

    $.getJSON('data.json', function (data) {
      console.log(data);

    var template = $.templates("#cardTemplate");
    var htmlOutput = template.render(data);
    $("#novels").html(htmlOutput);
        
    });
  
});
