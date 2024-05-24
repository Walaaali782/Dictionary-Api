const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('result');

const audio = document.getElementById('sound');


const searchbtn = document.getElementById('search-inp');


searchbtn.addEventListener("click", () => {

    let inpword = document.getElementById('word-inp').value;
    console.log(inpword);

    fetch(`${url}${inpword}`).then((response) => response.json())
    .then((data) => {

        console.log(data);



        result.innerHTML= ` 
        <div class="word">

        <h3>${inpword}</h3> 

     <button onclick="playsound()"> 
     <i class="fa-solid fa-volume-high"></i> 
     </button>

      </div>

   <div class="details">

      <p>${data[0].meanings[0].partOfSpeech} 
      </p>
      <p> /${data[0].phonetic}  /</p>

   </div>
 
   <p class="word-meaning">  
   
${data[0].meanings[0].
    definitions[0].
    definition
    }
   
   
   
   </p>
 
   <p class="word-example">  
   
   ${data[0].meanings[0].
    definitions[0].
    example || ""  }

   
   
   </p>`;

audio.setAttribute("src", `${data[0].phonetics[0].audio}`);

    }).catch(() => {
                    result.innerHTML= `   <h3 class="error"> Clouldnot Find The World </h3> `
              
            });

});

function playsound() {
    audio.play().catch(error => {
        console.error('Error playing the audio:', error);
    });
}





//     console.log(data[0]);

//     console.log(data[0].capital[0]);

//     console.log(data[0].flags.svg);

//     console.log(data[0].name.common);

//     console.log(data[0].continents[0]);

//     console.log(Object.keys(data[0].currencies)[0]);

//     console.log(data[0].currencies[Object.keys(data[0].currencies)].name);  

//     console.log(Object.values(data[0].languages).toString().split(",").join(","));









