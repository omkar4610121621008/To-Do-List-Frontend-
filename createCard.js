
const main = document.querySelector('.main')

let createUserCard = ({id, username, password}) => {

    const user = document.createElement('div')
    user.classList.add('user-card')

    const userId = document.createElement('h2')        
    userId.classList.add('user-id')
    userId.append(`ID ${id}`)
    user.appendChild(userId)

    const userName = document.createElement('h2')        
    userName.classList.add('username')
    userName.append(username)
    user.appendChild(userName)

    const userPassword = document.createElement('p')
    userPassword.classList.add("password")      
    userPassword.append(password)
    user.appendChild(userPassword)

    main.appendChild(user)
}


