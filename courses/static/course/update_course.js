/// dans cette fichier on a la fonction update course qui nous permet de ajouter course 
// on utilise AJAX et django  
function update_course(){
    console.log("update Courses is here ici")
    chV = 'video'
    chI = 'image'
    changedV = ''
    var cancelBtnv=document.getElementById('cancel-btn-v');
    var progressBoxv= document.getElementById('progress-box-v');
    var cancelBoxv= document.getElementById('cancel-box-v');
    var form = document.getElementById('course-form') 
    var alertBoxv=document.getElementById('alert-box-v');
    progressBoxv.classList.remove('not-visible');
    cancelBoxv.classList.remove('not-visible');  
    var Title = document.getElementById('id_Title')
    var category = document.getElementById('id_category')
    Course = Title.value
    var level = document.getElementById('id_level') 
    var description = document.getElementById('id_description')
    var coverture = document.getElementById('id_coverture_img')
    var video = document.getElementById('id_video')
    if (video.files[0] == null ){
      chV = 'no video'
      changedV = changedV + 'oui'
    }
    if (coverture.files[0] == null){
      chI = 'no image'
      changedV = changedV + 'non'
    }
    var csrf = document.getElementsByName('csrfmiddlewaretoken')
    var id = document.getElementById('id_course')
    var url = "" 
    const fd = new FormData() ; 
      fd.append('csrfmiddlewaretoken' , csrf[0].value)
      fd.append('id' , id.value)
      fd.append('name' , nom.value)
      if (chI == 'image'){
        fd.append('coverture_img' , coverture.files[0])
        fd.append('image_ch' , 'image')
      }
      else {
        fd.append('image_ch' , 'no image')
      }
      fd.append('category', category.value)
      console.log(category.value)
      fd.append('level' , level.value) 
      fd.append('description' , description.value)
      
      if (chV == 'video'){
        fd.append('video' , video.files[0])
        fd.append('video_ch', 'video')
      }
      else {
        fd.append('video_ch' , 'no video') 
      }
      console.log( video.files[0])
      $.ajax({
        type: 'POST',
        url: url,
        data: fd,
        beforeSend : function(){
          console.log('before')
         //alertBoxv.innerHTML=""
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
          courseForm.next() 
        },
          error: function(error){
          console.log(error)},
          cache:false,
          contentType: false,
          processData : false,})}