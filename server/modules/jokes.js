let jokes = [{
        intro: 'why did the monkey fall out of the tree',
        punchline: 'because he died',
    },
    {
        intro: 'how do you hide an elephant in a strawberry patch',
        punchline: 'you paint its toenails red'
    }
];

function getRandomJoke(){
    let random = Math.round(Math.random());
    console.log(random);
    return jokes[random];
}

module.exports = getRandomJoke;