var Course = document.getElementById('foo3')
var j=100;
var idee=1;
var q = 1 ; 
var a = 1; 
var x = 1000; 

function delete_answer(a){
    answer = document.getElementById('reponse'+a).innerHTML 
    document.getElementById('RE'+a).innerHTML =""
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('answer' , answer)
    url = 'section/lecture/QCM/answer/delete/'
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