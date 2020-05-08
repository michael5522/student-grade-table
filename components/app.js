console.log("app.js working")

class App {
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grade){
    console.log(grade);
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
