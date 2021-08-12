var Course = document.getElementById('foo3')
var j=100;
function edit_question(j){
    question_old = document.getElementById('titleQuestion'+j).innerHTML
    question_new = document.getElementById('inputQuestionUP'+j).value
    console.log(question_old)
    console.log(question_new)
    $("#titleQuestion"+j).text(question_new)
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('question_old' , question_old)
    fd.append('question_new', question_new)
    url ='section/lecture/QCM/question/update/'
    $.ajax({
      type: 'POST',
      url: url,
      data: fd,
      success: function(data){
          console.log("success");
      },
      cache : false ,
      contentType : false , 
      processData : false ,
    }) 
  }
  