const jokeTeller = ['Vault Boy', 'Mickey Mouse', 'Rick James', 'Django'];

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const jokesArray = [
    'Which bear is the most condescending? A pan-duh!', 
    'What’s brown and sticky? A stick.', 
    'How do you get a country girl’s attention? A tractor.',
    'Why are elevator jokes so classic and good? They work on many levels.',
    'What do you call a pudgy psychic? A four-chin teller.',
    'What did the police officer say to his belly-button? You’re under a vest.',
    'What do you call it when a group of apes starts a company? Monkey business.',
    'What kind of drink can be bitter and sweet? Reali-tea.',
    'What did Tennessee? The same thing as Arkansas.',
    'Why do bees have sticky hair? Because they use a honeycomb.',
    'My wife asked me to go get 6 cans of Sprite from the grocery store. I realized when I got home that I had picked 7 up.',
    'What’s the most detail-oriented ocean? The Pacific.'];

const getRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
};

const joker = jokeTeller[getRandomNumber(jokeTeller)];
const joke = jokesArray[getRandomNumber(jokesArray)];



/*
console.log(time);
console.log(joker);
console.log(joke);
*/


const art = `                          __ooooooooo__
                    oOOOOOOOOOOOOOOOOOOOOOo
                oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
             oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
            oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
          oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
         oOOOOOOOOOOO*  *OOOOOOOOOOOOOO*  *OOOOOOOOOOOOo
        oOOOOOOOOOOO      OOOOOOOOOOOO      OOOOOOOOOOOOo
        oOOOOOOOOOOOOo  oOOOOOOOOOOOOOOo  oOOOOOOOOOOOOOo
        oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo
        oOOOO     OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO     OOOOo
        oOOOOOO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO OOOOOOo
         *OOOOO  OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  OOOOO*
         *OOOOOO  *OOOOOOOOOOOOOOOOOOOOOOOOOOOOO*  OOOOOO*
           *OOOOOO  *OOOOOOOOOOOOOOOOOOOOOOOOOO*  OOOOOO*
            *OOOOOOo  *OOOOOOOOOOOOOOOOOOOOOO*  oOOOOOO*
              *OOOOOOOo  *OOOOOOOOOOOOOOOOO*  oOOOOOOO*
               *OOOOOOOOo  *OOOOOOOOOOO*  oOOOOOOOO*      
                  *OOOOOOOOo           oOOOOOOOO*      
                      *OOOOOOOOOOOOOOOOOOOOO*          
                          ""ooooooooo""             `

console.log(`It's ${time}, my name is ${joker}! Here is a joke for you: ${joke}`);
console.log('');
console.log(art);