var Course = document.getElementById('foo3')
var form = document.getElementById('section-form')
var progressBoxv= document.getElementById('progress-box-v');
var cancelBoxv= document.getElementById('cancel-box-v');
var inputv = document.getElementById('id_video');
var Title = document.getElementById('id_Title')
var category = document.getElementById('id_category') 
var level = document.getElementById('id_level') 
var description = document.getElementById('id_description')
var coverture = document.getElementById('id_coverture_img')
var j=100

                          //const videov = document.getElementById('video_v');
                          
var csrf=document.getElementsByName('csrfmiddlewaretoken')
var cancelBtnv=document.getElementById('cancel-btn-v');
  
                        //const imageBox=document.getElementById('image-box');
var alertBoxv=document.getElementById('alert-box-v');
                        
inputv.addEventListener('change',()=>{
                          
progressBoxv.classList.remove('not-visible');
cancelBoxv.classList.remove('not-visible');      

})
var Course = document.getElementById('foo3')
 j= 100 ;
var idee=1;
var a = 1 ;

function ajouter_lecture(i){
    var sec = document.getElementById('titleSection' +i).innerHTML
    console.log(i)
    console.log(sec)
    var lecture = document.getElementById('inputLecture'+i)
    console.log(lecture.value)
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var url = "section/lecture/"
    var fd = new FormData()
    fd.append('csrfmiddlewaretoken' , csrf[0].value)
    fd.append('section' , sec)
    fd.append('lecture' , lecture.value)
    $.ajax({
      type: 'POST',
      url: url,
      data: fd,
      success: function(data){
          console.log("success");
      },
      error: function(error){
        console.log('error')
        console.log(error)
      },
      cache : false ,
      contentType : false , 
      processData : false ,
    }) 
  
    
  }

  function preparation_lecture(id){
    console.log('preparation_lecture')
    j++;
    inputLectureContent = document.getElementById('inputLecture'+id).value
    console.log(inputLectureContent)
    idee = id
    $('#sectionList'+id+'').append('<div id="'+j+'"> <div class="list-group-item rounded px-3 mb-1" id="introductionSecond"> <div class="d-flex align-items-center justify-content-between"> <h5 class="mb-0"> <a href="#!" class="text-inherit"> <i class="fe fe-menu mr-1 text-muted align-middle"></i><span id="titleLecture'+j+'" class="align-middle"></span></a></h5><div><a href="#!" class="mr-1 text-inherit" data-toggle="collapse" data-target="#upcoll'+j+'" aria-expanded="false" aria-controls="upcoll'+j+'" onclick="preload_lecture('+j+')" ><i class="fe fe-edit font-size-xs"></i></a><a href="#!" class="mr-1 text-inherit" data-toggle="tooltip" data-placement="top"  onclick="delete_lecture('+j+')"><i class="fe fe-trash-2 font-size-xs"></i></a><a href="#!" class="text-inherit" data-toggle="collapse" data-target="#collapselis'+j+'" aria-expanded="false" aria-controls="collapselis'+j+'"><span class="chevron-arrow"><i class="fe fe-chevron-down"></i></span></a></div></div><div id="collapselis'+j+'"><div class="card-body"><div id="upcoll'+j+'" class="collapse" aria-labelledby="development"data-parent="#upcoll'+j+'"><div class="card-body"><input type="text" class="form-control mb-3" id="inputLectureUP'+j+'" placeholder="Update lecture" > <a class="btn btn-primary btn-sm" id="upLectureModall" onclick="edit_lecture('+j+')">update Lecture</a></div></div><div id="add'+j+'"> <a href="#!" data-toggle="collapse"data-target="#videoin'+j+'" aria-expanded="false"aria-controls="videoin'+j+'" class="btn btn-secondary btn-sm" id="addvid'+j+'">Add Video +</a>  <a href="#!" class="btn btn-secondary btn-sm" data-toggle="collapse" data-target="#filein'+j+'" aria-expanded="false" aria-controls="filein'+j+'">Add PDF +</a> <a href="#!" class="btn btn-secondary btn-sm"data-toggle="collapse" data-target="#qcmcontent'+j+'" aria-expanded="false" aria-controls="qcmcontent'+j+'">ADD QCM +</a><div id="videoin'+j+'" class="collapse"  data-parent="#collapselis'+j+'"><input type="file" class="form-control" id="video'+j+'"> <a class="btn btn-primary btn-sm" onclick="add_video('+j+')"> add content </a> </div> <div id="filein'+j+'" class="collapse"  data-parent="#collapselis'+j+'"><input type="file" class="form-control" id="filer'+j+'"><a class="btn btn-primary btn-sm" onclick="add_file('+j+')"> add content </a></div> <div id="qcmcontent'+j+'" class="collapse" ><input type="text" class="form-control" placeholder="put your question here" id="question'+j+'"> <a class="btn btn-primary btn-sm" onclick="add_question('+j+')" > add question </a><div id="quest'+j+'">  </div></div></div> <div class="not-visible" id="update'+j+'" ><a href="#!" data-toggle="collapse"data-target="#videoup'+j+'" aria-expanded="false"aria-controls="videoup'+j+'" class="btn btn-secondary btn-sm "  >UPDATE Video +</a>  <a href="#!" class="btn btn-secondary btn-sm " data-toggle="collapse" data-target="#fileup'+j+'" aria-expanded="false" aria-controls="fileup'+j+'">UPDATE PDF +</a><div id="videoup'+j+'" class="collapse"  data-parent="#collapselis'+j+'"><input type="file" class="form-control" id="videoupdated'+j+'"> <a class="btn btn-primary btn-sm" onclick="update_video('+j+')"> Update video  </a> </div> <div id="fileup'+j+'" class="collapse"  data-parent="#collapselis'+j+'"><input type="file" class="form-control" id="fileupdated'+j+'"><a class="btn btn-primary btn-sm" onclick="update_file('+j+')"> update tp PDF </a></div> </div><div id="alert-box-v'+j+'"></div><br><div id="progress-box-v'+j+'"  class="not-visible">progress </div><div id="cancel-box-v'+j+'"  class="not-visible"> <button id="cancel-btn-v'+j+'">cancel</button></div> </div></div></div></div>');
    $('#titleLecture'+j+'').text(inputLectureContent);
    ajouter_lecture(idee,j)
  }
white_check_mark
eyes
raised_hands
React
Reply


function preload_lecture(id){
    lec = document.getElementById("titleLecture" + id )
    console.log("le id est" ,id)
    $("#foo1").val(lec.innerHTML)
    $("#foo2").val('titleLecture'+id)
    $("#foo3").val(id)
  
  }