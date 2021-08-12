var Course = document.getElementById('foo3')
var j=100;
var idee=1;
var q = 1 ; 
var s = 1; 
var x = 1000; 

function add_answer(j){
    //console.log('jj ='+j)
    question = document.getElementById('titleQuestion'+j).innerHTML
    s++
    console.log('s=' ,s)
    console.log(document.getElementById('ans'+j).value)
    var checkBox = document.getElementById("is"+j);
    $("#answers"+j).append('<div id="RE'+s+'"><div> <div class="d-flex align-items-center justify-content-between"> <h5 id="reponse'+s+'"></h5><div id="is_true'+s+'"></div><div><a href="#!" class="mr-1 text-inherit"  data-toggle="collapse" data-target="#upreponse'+s+'" aria-expanded="false" aria-controls="upreponse'+s+'" ><i class="fe fe-edit font-size-xs"></i></a><a href="#!" class="mr-1 text-inherit" data-toggle="modal" data-target="#" data-placement="top" onclick="delete_answer('+s+')"><i class="fe fe-trash-2 font-size-xs"></i></a></div></div> <div id="upreponse'+s+'" class="collapse" aria-labelledby="development" data-parent="#upreponse'+s+'"><div class="card-body"><input type="text" id="upans'+s+'" class="form-control" placeholder="update your answer here"><input type="checkbox" id="upis'+s+'">True ? <a class="btn btn-info btn-sm" onclick="update_answer('+s+','+q+')"> update answer </a></div></div>')
    $("#reponse"+s).text(document.getElementById('ans'+j).value)
    if (checkBox.checked == true){
      console.log('is true')
      ch = 'True'  
    }
    else{
      console.log('is false')
      ch = 'False' 
    }
    answer = document.getElementById('ans'+j).value
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('answer', answer)
    fd.append('question' ,question)
    fd.append('ch' , ch)
    url = 'section/lecture/QCM/answer/add/'
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