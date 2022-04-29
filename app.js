window.onload = () => {


    const randomAbout = async () => {
        const randomFetch = await (await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')).json()
        showRandomAbout(randomFetch)
    }

    const randomPokemon = async () => {
        let randomNum = Math.floor(Math.random() * 898) + 1
        const randomFetch = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)).json()
        showRandomPokemon(randomFetch)
    }
    const randomQuoteGenerator = async () => {
        const randomFetch = await (await fetch('https://api.kanye.rest')).json()
        showRandomQuote(randomFetch)

    }
    const randomUserGenerator = async () => {
        const randomFetch = await (await fetch('https://randomuser.me/api')).json()
        showRandomUserData(randomFetch)
    }
    const showRandomAbout = (data) => {
        $("#about-me").text(`${data}`)
    }
    const showRandomUserData = (data) => {

        $("#name").text(` ${data.results[0].name.first} ${data.results[0].name.last}`)
        $("#location").text(`${data.results[0].location.city}`)
        $("#profile-image").attr('src', `${data.results[0].picture.medium}`)
        $("#email").text(`${data.results[0].email}`)
        $("#age").text(`${data.results[0].dob.age}`)
    }

    const showRandomPokemon = (data) => {
        const { name, sprites } = data
        const { back_default } = sprites
        $("#pokemon").text(`${name}`)
        $("#pokemon-pic").attr('src', `${back_default}`)
    }
    const showRandomQuote = (data) => {
        $("#quote").text(`${data.quote}`)
    }
}
const loadRandomAbout = []
const loadRandomPokemon = []
const loadRandomQuote = []
const loadRandomUser = []
const loadRandomFreinds = []
let loadCounter = 0;
$("#load").on("click", function () {
    loadCounter++
    randomAbout()
    randomPokemon()
    randomQuoteGenerator()
    randomUserGenerator()

})
const randomAbout = async () => {
    const randomFetch = await (await fetch('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')).json()
    loadRandomAbout.push(randomFetch)
}

const randomPokemon = async () => {
    let randomNum = Math.floor(Math.random() * 898) + 1
    const randomFetch = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)).json()
    loadRandomPokemon.push(randomFetch)
}
const randomQuoteGenerator = async () => {
    const randomFetch = await (await fetch('https://api.kanye.rest')).json()
    loadRandomQuote.push(randomFetch)

}
const randomUserGenerator = async () => {
    const randomFetch = await (await fetch('https://randomuser.me/api')).json()
    loadRandomUser.push(randomFetch)
}
const randomFriendGenerator = async () => {
    const randomFetch = await (await fetch('https://randomuser.me/api')).json()
    loadRandomFreinds.unshift(randomFetch)
}
let counter = 0
$("#display-U").on('click', function () {
    if (loadCounter > counter) {
        $("#about-me").text(`${loadRandomAbout[counter]}`)
        $("#name").text(` ${loadRandomUser[counter].results[0].name.first} ${loadRandomUser[counter].results[0].name.last}`)
        $("#location").text(`${loadRandomUser[counter].results[0].location.city}`)
        $("#profile-image").attr('src', `${loadRandomUser[counter].results[0].picture.medium}`)
        $("#email").text(`${loadRandomUser[counter].results[0].email}`)
        $("#age").text(`${loadRandomUser[counter].results[0].dob.age}`)
        $("#pokemon").text(`${loadRandomPokemon[counter].name}`)
        $("#pokemon-pic").attr('src', `${loadRandomPokemon[counter].sprites.back_default}`)
        $("#quote").text(`${loadRandomQuote[counter].quote}`)
        for (let i = 0; i < 7; i++) {
            randomFriendGenerator()
        }
        for (let i = 0; i < 7; i++) {
            $(`#friend${i}`).text(`${loadRandomFreinds[i].results[0].name.first}`)
        }
        counter++
    }
})