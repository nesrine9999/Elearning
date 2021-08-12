var Course = document.getElementById('foo3')
var j=100;
var idee=1;


function edit_lecture(j){
    console.log('update lecture ')
    var id = document.getElementById('foo3').value
    console.log('le id est ',id)
    var lecture_old = document.getElementById('foo1')
    console.log(lecture_old.value)
    var lecture_new = document.getElementById('inputLectureUP'+j)
    console.log(lecture_new.value)
    console.log(document.getElementById('foo2').value)
    var Title = document.getElementById('id_Title')
    console.log(Title.value)
    document.getElementById(document.getElementById('foo2').value).innerHTML = lecture_new.value
    var csrf =  document.getElementsByName('csrfmiddlewaretoken')
    var url = "section/lecture/update/"
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' ,csrf[0].value )
    fd.append('lecture_old' , lecture_old.value)
    fd.append('lecture_new', lecture_new.value)
    fd.append('course' ,Title.value)
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