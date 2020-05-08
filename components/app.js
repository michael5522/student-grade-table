
class App {
  constructor(gradeTable){
    this.gradeTable = gradeTable;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
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
