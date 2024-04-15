const submitBtn= document.querySelector('.submit__btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const commentsCont =  document.querySelector('.comment__container')

submitBtn.addEventListener('click', submitFeedback)


feedbackArr=[]

function submitFeedback(e){
    const userForm = userName.value
    const commentForm = comment.value
    console.log(userForm, commentForm)


    if (commentForm !== '' && !userForm) {
         newFeedback = {
          "id": Math.floor((Math.random() * 1000) + 1),
            "userName": 'Anonymous',
            "userComment": commentForm,
        }
        feedbackArr.push(newFeedback)
        console.log(newFeedback)

        addFeedback(newFeedback)
        showPosipup(true)
    }
    else if (commentForm !== '' && userForm !== null) {
        newFeedback = {
            "id": Math.floor((Math.random() * 1000) + 1),
            "userName": userForm,
            "userComment": commentForm,
        }
        feedbackArr.push(newFeedback)
        console.log(newFeedback)

        addFeedback(newFeedback)
        showPosipup(true)
    }
    else {
        showPopup(true)
    }
    resetForm()
  }

function resetForm(){
    userName.value=''
    comment.value=''
}

function addFeedback(item){
    const letter = (item.userName).charAt(0)
    const div = document.createElement('div')
    div.classList = 'cm_card'
    div.id = item.id
    div.innerHTML = '<div class="comment_info">\n' +
        '                <small class="nickname">\n' +
                            (item.userName) +
        '                 says:</small> \n' +
        '                <p class="comment">"\n' +
                            (item.userComment) +
        '                "</p>\n' +
        '            </div>'
    commentsCont.insertAdjacentElement('beforeend',div)
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if (window.pageYOffset>100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

function showPopup(bool) {
    if (bool) {
        document.getElementById("poop").innerHTML = "To submit recommendation type in a recommendation."
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
        document.getElementById("poop").innerHTML = ""
    }
}

function showPosipup(bool) {
    if (bool) {
        document.getElementById("poop").innerHTML = "Thank you for your recommendation!"
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
        document.getElementById("poop").innerHTML = ""
    }
}
