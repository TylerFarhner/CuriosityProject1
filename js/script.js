// Constants and State Variables
// CONSTANT
let sheetURL = "https://docs.google.com/spreadsheets/d/1Wvq29dYTUKc9L_ZJxz-btf7KFa3FGp1WdUMONeYaFYQ/edit?usp=sharing"

const BASE_URL = "https://spreadsheets.google.com/feeds/list/1Wvq29dYTUKc9L_ZJxz-btf7KFa3FGp1WdUMONeYaFYQ/od6/public/values?alt=json"

//STATE Data
let workoutInfo;


// Cached Element References
const $collection = $('#collection');

// Attached event listeners
$collection.on('click', '.card',  getData)


// Functions

function getData() {
    // fetch data using ajax
  const data =  $.ajax({url: `${BASE_URL}`,
    })
        .then( 
            (data) => {
        // return data and assign to global state variable (workoutInfo)
        // call render to visualize it to the dom
        console.log('Data: ', data)
        workoutInfo = data;
        render();
    }, function(error) {
        console.log('Error: ', error);
    })
}

function handleClick() {
    alert('a card was clicked');
}

function render() {
    const htmlArray = workoutInfo.feed.entry.map(workout => {
        return`
        <article class="card flex-ctr">
            <h3>${workout.title.$t}</h3>
        </article>
        `;
    });
    $collection.html(htmlArray)
}
