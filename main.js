var $table = $(".table");
var gradeTable = new GradeTable($table);

var $header = $(".header");
var pageHeader = new PageHeader($header);

var $form = $("form");
var gradeForm = new GradeForm($form);

var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
