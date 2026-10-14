let express = require('express');
let app = express();

let songs = {
    "data" : [
        {
            title: "Good Days",
            artist: "SZA",
            year: "2020"
        },
        {
            title: "Jealous",
            artist: "Beyoncé",
            year: "2013"
        },
        {
            title: "As",
            artist: "Stevie Wonder",
            year: "1976"
        },
        {
            title: "Human Nature",
            artist: "Michael Jackson",
            year: "1984"
        },
        {
            title: "Soft and Wet",
            artist: "Prince",
            year: "1978"
        },
        {
            title: "Empty",
            artist: "Janet Jackson",
            year: "1997"
        },
        {
            title: "Pyramids",
            artist: "Frank Ocean",
            year: "2012"
        },
        {
            title: "Breakdown",
            artist: "Mariah Carey",
            year: "1997"
        },
        {
            title: "Heard 'Em Say (feat. Adam Levine)",
            artist: "Kanye West",
            year: "2005"
        },
        {
            title: "Cruisin",
            artist: "D'Angelo",
            year: "1995"
        }
    ]
};

app.get('/', (request, response) => {
    response.send("This is my static page - Whaddup!");
})

app.get('/about', (request, response) => {
    response.send("This is the about page");
})

app.get('/songs', (request, response) => {
    response.json(songs);
})

app.get('/songs/:song', (request, response) => {
    console.log(request.params.song);
    let userSong = request.params.song;
    let userObject;
    for (let i = 0; i < songs.data.length; i++) {
        if (userSong.toLowerCase() === songs.data[i].title.toLowerCase()) {
            userObject = songs.data[i];
        }
    }
    console.log(userObject);
    if (userObject) {
        response.json(userObject);
    } else {
        response.send("Song not found");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

// let a = 20;
// let b = 10;
// console.log(a + b);
