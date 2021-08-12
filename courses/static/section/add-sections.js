var csrf=document.getElementsByName('csrfmiddlewaretoken')
var Course = document.getElementById('foo3')

function ajouter_section(){
    var section = document.getElementById('inputSection') 
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var url = "section/"
    var FD = new FormData()
    FD.append('csrfmiddlewaretoken' , csrf[0].value)
    FD.append('section', section.value)
    FD.append('course' , Course.value )
    $.ajax({
      type: 'POST',
      url: url,
      data: FD,
      success: function(data){
          console.log("success",data);
      },
      cache : false ,
      contentType : false ,
      processData : false ,
    }) 
  }

function preload_section(i){
    console.log('titleSection'+i)
    sec = document.getElementById('titleSection'+i)
    console.log(sec.innerHTML)
    $("#foo1").val(sec.innerHTML)
    $("#foo2").val('titleSection'+i)
  }