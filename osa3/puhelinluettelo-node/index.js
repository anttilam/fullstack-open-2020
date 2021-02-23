const { response, request } = require('express');
const express = require('express');
const app = express()

const port = 3002

// Request will contain JSON so a json-parser is needed.
app.use(express.json())
/* 
    !! Important to understand !! 
    
    This 'backend' context needs data to be converted in between. 
    Frontend request returns JSON,
    but Node wants JS objects. 
*/

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2020-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2020-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2020-01-10T19:20:14.298Z",
      important: true
    }
]

// Root
app.get('/', (request, response) => {
    response.send('Hullo');
})



// Single resource URI
app.get('/api/notes/:id', (request, response) => {
    // Huom! Pitaa castata numberiksi, koska on stringi muuten
    const id = Number(request.params.id);

    const note = notes.find(note => {
        console.log(note.id, typeof note.id, id, typeof id, note.id === id);   
        return note.id === id
    });
    /*
     Ilman tätä url missä ei ole resurssia (localhost:3002/api/notes/666)
     palauttaa 200 ok, mutta content-length on 0 
    */
    if (note) {
        response.json(note);
    } else {
        response.status(404).end()
    }
})

// Receiving data
app.post('/api/notes', (request, response) => {

})

app.get('/api/notes', (request, response) => {
    /*
    
    Express response objects have a json() function. The res.json() function takes a single parameter, 
    an object obj, serializes it to JSON, and sends it in the HTTP response body

    */
    response.json(notes);
    // response.send(notes) -- Seems to work too, not sure why? Content-type is json  
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    // huom päivitetään suoraan globaalia notes listaa
    notes = notes.filter(note => note.id !== id);

    response.status(204).end()
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})