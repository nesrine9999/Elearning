var Course = document.getElementById('foo3')
var q = 1 ; 


function delete_question(q){
    var question = document.getElementById('titleQuestion'+q).innerHTML
    console.log(question)
    document.getElementById('quest'+q).innerHTML = "" 
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('question' , question)
    url = 'section/lecture/QCM/question/delete/'
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
