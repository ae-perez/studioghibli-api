const app = document.getElementById('root');
//console.log(app); // will output: <div id="root"></div>

//create the logo
const logo = document.createElement('img');
logo.setAttribute('class', 'logo');
logo.src = 'https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true';

const geometrix = document.createElement('div');
geometrix.setAttribute('class', 'logo-circle');
app.appendChild(geometrix);

//create the container the cards will be in
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//create a request variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //begin accessing JSON data here
    var data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            //log each movie's title
            console.log(movie.title);
            console.log(movie.description);

            //create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            //--- this works 
            card.addEventListener("click", Hello);
            //--- this works

            //create an H1 and set the text content to film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0,300); //limits desription to 300 characters
            p.textContent = `${movie.description}...`;

            //append what you have just created
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

        });
    } else {
        console.log('error');
    }
}

//send request
request.send()


function Hello () {
    console.log("HELLO GHIBLI LOVER");
}