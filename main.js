let userSelected = document.querySelector(".selected")
let users = document.getElementsByClassName("user")
let chatContainer = document.getElementsByClassName("chat-container")[0]
let chatWrap = document.getElementsByClassName("chatWrap")[0]
let chats = document.getElementsByClassName("chats")
let input = document.getElementsByTagName("input")

let lastChat = chats[chats.length - 1]
let person = 2
function userSelectHandler(e){
    userSelected.classList.remove("selected")
    e.target.classList.add("selected")
    userSelected = document.querySelector(".selected")
    if(e.target.classList[1] === 'person1'){person = 1}else{person = 2}

    lastChat = chats[chats.length - 1]
    if(person === 1){
        lastChat.style.alignSelf = "flex-start"
    } else {
        lastChat.style.alignSelf = "flex-end"
    }
}

function enterHandler(input){
    const newChat = document.createElement("div")
    newChat.classList.add("chats")
    newChat.innerHTML = input
    newChat.style.height = "1 rem"
    newChat.style.alignSelf = lastChat.style.alignSelf
    chatContainer.insertBefore(newChat, lastChat)
    lastChat = chats[chats.length - 1]
}

document.addEventListener("keydown", e => {
    if(e.key === "Enter" && input[0].value.trim()){
        enterHandler(input[0].value)
        input[0].value = ""
    }
    if(e.key === "Tab"){
        e.preventDefault()
        if(userSelected.classList[1] === "person1"){
            userSelected.classList.remove("selected")
            users[1].classList.add("selected")
            userSelected = users[1]
            lastChat.style.alignSelf = "flex-end"
        } else {
            userSelected.classList.remove("selected")
            users[0].classList.add("selected")
            userSelected = users[0]
            lastChat.style.alignSelf = "flex-start"
        }
    }
})