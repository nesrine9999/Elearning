var csrf=document.getElementsByName('csrfmiddlewaretoken')
var Course = document.getElementById('foo3')

function edit_section(j){
    console.log('update section ')
    var section_old = document.getElementById('foo1')
    console.log('section old' , section_old.value)
    var section_new = document.getElementById('inputSectionUP'+j) 
    console.log('section new' , section_new.value)
    console.log(document.getElementById('foo2').value)
    document.getElementById(document.getElementById('foo2').value).innerHTML = section_new.value
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var url = "section/update/"
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' ,csrf[0].value )
    fd.append('section_old' , section_old.value)
    fd.append('section_new', section_new.value)
    fd.append('course' , document.getElementById('id_Title').value)
    $.ajax({
      type: 'POST',
      url: url,
      data: fd,
      success: function(data){
          console.log("success");
      },
      error: function(error){
        console.log("error",error)
      },
      cache : false ,
      contentType : false , 
      processData : false ,
    }) 
  
  }
  