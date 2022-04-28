window.onload = () => {
    randomUserGenerator()
}
const randomUserGenerator = () => {
    fetch('https://randomuser.me/api')
        .then((res) => {
            return res.json()
        }).then((data) => {
            showRandomUserData(data)
        })
}
const showRandomUserData = (data) => {

    $("#name").text(` ${data.results[0].name.first} ${data.results[0].name.last}`)
    $("#phone").text(`${data.results[0].phone}`)
    $("#email").text(`${data.results[0].email}`)
    $("#age").text(`${data.results[0].dob.age}`)
}
