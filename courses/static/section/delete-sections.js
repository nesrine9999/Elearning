var csrf=document.getElementsByName('csrfmiddlewaretoken')
var Course = document.getElementById('foo3')

function delete_section(i,x) {
    console.log('delete_section')
    var sec = document.getElementById('titleSection'+i).innerHTML
    var url = "section/delete/" 

  
  console.log(sec)
  var div = document.getElementById('sectionList'+i)
  console.log(div)
  var action = confirm("Are you sure you want to delete this section ?");
  var csrf = document.getElementsByName('csrfmiddlewaretoken')
  var fd = new FormData()
  fd.append('section' , sec) 
  fd.append('new' , x )
  fd.append('csrfmiddlewaretoken' , csrf[0].value)
  if (action != false){
  $.ajax({
    type: 'POST',
    url: url,
    data: fd,
    success: function(data){
        console.log("success",data);
    },
    cache : false ,
    contentType : false , 
    processData : false ,
  })

  div.innerHTML = "" 
}
}