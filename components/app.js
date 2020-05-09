
class App {
  constructor(gradeTable,pageHeader){
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var tempGrade = 0;
    for(var i =0; i<grades.length;i++){
      tempGrade += grades[i].grade;
    }
    tempGrade /= grades.length;
    this.pageHeader.updateAverage(tempGrade);
  }
  getGrades(){
    $.ajax({
      method:"get",
      url: "https://sgt.lfzprototypes.com/api/grades/",
      headers:
      {
        "X-Access-Token":"xXmGLllB"
      }
    })
    .done(this.handleGetGradesSuccess)
    .fail(this.handleGetGradesError);
  }

  start(){
    this.getGrades();
  }
}
