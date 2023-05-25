const resultsArray = []

const createUser = async () => {
    try {
        const response = await fetch("https://todolist-1z4h.onrender.com/User", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                //add html stuff
            })
        })
        const data = await response.json();
        //add more stuff
    } catch (error) {
        console.log(error)
    }
}

const getAllusers = async () => {
    try {
        const response = await fetch("https://todolist-1z4h.onrender.com/User")
        const data = await response.json()
        console.log(data)
        return data.users
    } catch (error) {
        console.log(error)
    }
}

const displayAllUsers = async () => {
    const users = await getAllusers()
    for (let user of users) {
        console.log(user)
        createUserCard(user)
    }
}

const button = document.querySelector('.Get')
button.addEventListener('click', (event) =>{
    event.preventDefault()
    displayAllUsers()
})

// const getUser = async (id) => {
//     try {
//         const response = await fetch(`http://localhost:5000/User/${id}`)
//         const data = await response.json()
//         console.log(data)
//         return data.user
//     } catch (error) {
//         console.log(error)
//     }
// }

// const displayUser = async (id) => {
//     const user = await getUser(id)
//     createUserCard(user)
// }

// const main = document.querySelector('.getuserclass')
// const button2 = document.querySelector('.getuser')
// button2.addEventListener('click', (event) =>{
//     event.preventDefault()
//     const input = document.querySelector(".getuserclass").value
//     displayUser(value)
// })