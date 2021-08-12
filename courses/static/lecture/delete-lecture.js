var Course = document.getElementById('foo3')

function delete_lecture(chh){
    console.log('delete_lecture')
      ss = "titleLecture" + chh 
      cont = "courseOne" + chh 
      ch = document.getElementById(ss).innerHTML
      console.log(ss)
      console.log(cont)
      console.log(ch)
  
      var div = document.getElementById(''+j)
      console.log(div)
      var action = confirm("Are you sure you want to delete this lecture ?");
      var csrf = document.getElementsByName('csrfmiddlewaretoken')
      var fd = new FormData()
      fd.append('csrfmiddlewaretoken' , csrf[0].value)
      fd.append('lecture', ch)
      url ="section/lecture/delete/" 
      if (action != false){
      $.ajax({
        type: 'POST',
        url: url,
        data: fd,
        success: function(data){
            console.log("success",data);
        },
        error:function(error){
          console.log('error')
        },
        cache : false ,
        contentType : false , 
        processData : false ,
      }) 
    
      div.innerHTML = "" 
      }
    }