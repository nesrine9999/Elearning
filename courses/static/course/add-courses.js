var csrf = document.getElementsByName('csrfmiddlewaretoken')
var form = document.getElementById('Course-form') 
console.log(form)
var Course = document.getElementById('foo3')
var progressBoxv= document.getElementById('progress-box-v');
var inputv = document.getElementById('id_video');
var alertBoxv=document.getElementById('alert-box-v');
var cancelBoxv= document.getElementById('cancel-box-v'); 
var cancelBtnv=document.getElementById('cancel-btn-v'); 

inputv.addEventListener('change',()=>{
        
    progressBoxv.classList.remove('not-visible');
    cancelBoxv.classList.remove('not-visible');      
  ajouter_course()
})


/* const handleAlerts = (type, msg) => {
    alertBox.innerHTML`
        <div class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `
} */

function test1(){
    console.log("test is working")
}

function ajouter_course() {
    console.log("affiche ici")

    console.log(form)
    var cancelBtnv=document.getElementById('cancel-btn-v');
    var progressBoxv= document.getElementById('progress-box-v');
    var cancelBoxv= document.getElementById('cancel-box-v');
    var Title = document.getElementById('id_Title')
    var category = document.getElementById('id_category') 
    var level = document.getElementById('id_level') 
    var Description = document.getElementById('editor')
    var Image = document.getElementById('id_image_cover')
    var video = document.getElementById('id_video')
    
    Course = Title
    var url = "" 
    const fd = new FormData() ;
    fd.append('csrfmiddlewaretoken', csrf[0].value)
    fd.append('Title' , Title.value)
    fd.append('category', category.value)
    fd.append('level' , level.value) 
    fd.append('Description' , Description.value)
    fd.append('coverture_img' , Image.files[0])
    fd.append('video',video.files[0])
    Course = Title
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
        
        return xhr},
        success: function(data){
        console.log("success");
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