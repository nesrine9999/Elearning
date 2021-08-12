const deleteUrl = window.location.href + "delete/"
const deleteForm = document.getElementById('delete-form')
const deleteBtn = document.getElementById('delete-btn')
const csrf= document.getElementsByName('csrfmiddlewaretoken')
const url ="admin-course-category/delete/" 
deleteForm.addEventListener('submit', e=>{
    e.preventDefault()

    $.ajax({
        type : 'POST',
        url : url,
        data: {
            'csrfmiddlewaretoken':csrf[0].value,

        },
        success : function(response){
            console.log(success)
            window.location.href = window.location.origin
        },
        error : function(error){
            console.log(error)
        }
    })    
})