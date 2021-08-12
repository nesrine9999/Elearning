var Course = document.getElementById('foo3')
var j=100;
var q = 1 ; 

function add_question(j){
    var inputQuestionContent = $("#question"+j).val();
    console.log(inputQuestionContent) 
    q++
    console.log(q)        
    $("#quest"+j).append('<div id="quest'+q+'"> <div id="question'+q+'" class="bg-light p-2 mb-2 mt-2 rounded"> <div class="d-flex align-items-center justify-content-between "> <h5 id="titleQuestion'+q+'"></h4><div><a href="#!" class="mr-1 text-inherit"  aria-expanded="false" data-toggle="collapse" data-target="#upquestion'+q+'"  aria-controls="question'+q+'"  ><i class="fe fe-edit font-size-xs"></i></a><a href="#!" class="mr-1 text-inherit" data-toggle="modal" data-target="#" data-placement="top" onclick="delete_question('+q+')"><i class="fe fe-trash-2 font-size-xs"></i></a><a href="#!" class="text-inherit" data-toggle="collapse" data-target="#adrp'+q+'" aria-expanded="false" aria-controls="adrp'+q+'"><span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span></a></div></div><div id="upquestion'+q+'" class="collapse" aria-labelledby="development" data-parent="#upquestion'+q+'"><div class="card-body d-flex align-items-center justify-content-between "><input type="text" class="form-control mb-3" id="inputQuestionUP'+q+'" placeholder="update question here"> <a class="btn btn-primary btn-sm" id="upquestion" onclick="edit_question('+q+')">update Question</a></div></div><div id="adrp'+q+'" class="collapse" aria-labelledby="development" data-parent="#upquestion'+q+'">  <input type="text" id="ans'+q+'" class="form-control" placeholder="put your answer here"><input type="checkbox" id="is'+q+'">True ? <a class="btn btn-info btn-sm" onclick="add_answer('+q+')"> add answer </a></div> <div id="answers'+q+'"> </div> </div></div>')
    $("#titleQuestion"+q).text(inputQuestionContent);
    //console.log('done')
    //console.log(j)
    lecture = document.getElementById('titleLecture'+j).innerHTML
    //console.log('lecture de '+lecture)
    question = inputQuestionContent
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('lecture' , lecture)
    fd.append('question' , question) 
    url = 'section/lecture/QCM/question/add/'
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
    //console.log(document.getElementById("quest").innerHTML)
  }