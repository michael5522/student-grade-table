
class App {
  constructor(gradeTable,pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
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
    this.gradeForm.onSubmit(this.createGrade);
  }

  createGrade(name,course,grade){
    console.log(name,course,grade);
    $.ajax({
      method: "post",
      url: "https://sgt.lfzprototypes.com/api/grades/",
      headers:
      {
        "X-Access-Token": "xXmGLllB"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      }
    })
    .done(this.handleCreateGradeSuccess)
    .fail(this.handleCreateGradeError);

  }

  handleCreateGradeError(error){
    console.log(error);
  }

  handleCreateGradeSuccess(){
    this.getGrades();
  }
}
