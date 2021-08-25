function startRecognition() {

//get the search input feild
const mysearch = document.getElementById('search-input')

//use Speech Recognition properties in chrome
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//define a speech recogntion instance
const recognition = new SpeechRecognition();

//return interim results 
recognition.interimResults = true;

// store the result in "text" constant
recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

//type the result in the search feild and submit
  if (e.results[0].isFinal) {
    mysearch.value=text;
    window.location.href ='https://www.google.com/search?q=' + text
  }
});

//start the speech recognition process
recognition.start();
}
