var Course = document.getElementById('foo3')
var j=100;
var idee=1;
var q = 1 ; 
var a = 1; 
var x = 1000; 
function update_answer(a,j){
    console.log('j = ',j)
    answer_old = document.getElementById('reponse'+a).innerHTML
    console.log(answer_old)
    if (document.getElementById('upans'+a).value == '' ) {
      answer_new  = answer_old
    }else{
      answer_new = document.getElementById('upans'+a).value 
    }
    console.log(answer_new)
    document.getElementById('reponse'+a).innerHTML = answer_new
    checkBox = document.getElementById('upis'+a)
    if (checkBox.checked == true){
      console.log('is true')
      ch = 'True'  
    }
    else{
      console.log('is false')
      ch = 'False' 
    }
    console.log(answer_new)
    console.log(answer_old)
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('answer_old', answer_old)
    fd.append('answer_new' ,answer_new)
    fd.append('ch' , ch)
    url = 'section/lecture/QCM/answer/update/'
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