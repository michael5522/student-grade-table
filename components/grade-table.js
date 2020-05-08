
class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    var tbody = this.tableElement.find('tbody');
    tbody.empty();

    for(var i =0; i < grades.length; i++){
      var $tr = $("<tr>");
      var $name = $("<td>", { text: grades[i].name });
      var $course = $("<td>", { text: grades[i].course });
      var $grade = $("<td>", { text: grades[i].grade });
      $tr.append($name,$course,$grade);
      tbody.append($tr);
    };


  }
}
