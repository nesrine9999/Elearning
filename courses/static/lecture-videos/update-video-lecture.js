var Course = document.getElementById('foo3')
 j= 100 ;
var idee=1;
var a = 1 ;

function update_video(j){
    var lecture = document.getElementById('titleLecture'+j).innerHTML 
    console.log(lecture)
    var video = document.getElementById('videoupdated'+j)
    var progressBoxv= document.getElementById('progress-box-v'+j);
      var cancelBoxv= document.getElementById('cancel-box-v'+j);
      var cancelBtnv=document.getElementById('cancel-btn-v'+j);
      var alertBoxv=document.getElementById('alert-box-v'+j);
      progressBoxv.classList.remove('not-visible');
      cancelBoxv.classList.remove('not-visible');
      
      var csrf = document.getElementsByName('csrfmiddlewaretoken')
      var fd = new FormData()
      fd.append('csrfmiddlewaretoken' , csrf[0].value)
      fd.append('lecture' , lecture)
      fd.append('video' , video.files[0])
      fd.append('course' , document.getElementById('id_Title'))
      url ="section/lecture/update_video/"
      $.ajax({
        type: 'POST',
        url: url,
        data: fd,
        beforeSend : function(){
          console.log('before')
          alertBoxv.innerHTML=""
          },
        xhr: function(){
          const xhr=new XMLHttpRequest();
          xhr.upload.addEventListener('progress',ev=>{
          if ( ev.lengthComputable ){
            const percentv = ev.loaded / ev.total * 100
            console.log(percentv) 
            progressBoxv.innerHTML=`<div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${percentv}%" aria-valuenow="${percentv}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>${percentv.toFixed(1)}%</p>`
            }
          else
            console.log('errrr')
            })
            cancelBtnv.addEventListener('click',()=>{
          xhr.abort()
          setTimeout(()=>{
          form.reset()
          progressBoxv.innerHTML=""
          cancelBoxv.classList.add('not-visible')
            },2000)
          })
          console.log(xhr)
          console.log('hahah')
          return xhr},
          success: function(data){
          console.log("succezss");
          alertBoxv.innerHTML=`<div class="alert alert-success" role="alert">
          success </div>`
          cancelBoxv.classList.add('not-visible')
            },
          error: function(error){
          console.log(error)},
          cache:false,
          contentType: false,
          processData : false,})
  }