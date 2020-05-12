console.log("working");

class GradeForm {
  constructor(formElement){
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.submit(this.handleSubmit);
  }
  onSubmit(createGrade){
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("hello from handlesubmit");

    var form = new FormData(event.target);
    var name1 = form.get("name");
    var course1 = form.get("course");
    var grade1 = form.get("grade");
    this.createGrade(name1,course1,grade1);
    event.target.reset();
    console.log(form);
    console.log(name1);
    console.log(course1);
    console.log(grade1);
  }


}
