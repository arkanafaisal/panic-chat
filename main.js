let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty("--vh", vh + "px")


let userSelector = document.getElementById("user-select")
let pointer = document.getElementById("user-pointer")
let chatContainer = document.getElementById("chat-container")
let chats = document.getElementsByClassName("chats")
let chatNode = document.getElementById("chat-node")
let input = document.getElementById("input")

let side = 2
function userSwitch(){
    side = side === 2? 1 : 2
    if(side === 2){
        pointer.classList.add("self-end")
        chatNode.classList.add("self-end")
    }
    else{
        pointer.classList.remove("self-end")
        chatNode.classList.remove("self-end")
    }

    openKeyboard()
}
function openKeyboard(){
    input.focus()
}
        
function enterHandler(input){
    const newChat = chatNode.cloneNode()
    newChat.innerText = input
    chatContainer.insertBefore(newChat, chatNode)
}

document.addEventListener("keydown", e => {
    if(e.key === "Enter" && input.value.trim()){
        enterHandler(input.value)
        input.value = ""
        chatNode.innerText = "..."
    }
    if(e.key === "Tab"){
        e.preventDefault()
        userSwitch()
    }
})
input.addEventListener("input", e =>{
    const inputvalue = input.value
    if(inputvalue.trim() === ""){
        input.value = ""
        chatNode.innerText = "..."
    }
    chatNode.innerText = inputvalue
})