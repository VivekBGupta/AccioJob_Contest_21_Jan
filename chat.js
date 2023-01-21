// import randomNumber from  "./script.js";
// console.log(randomNumber)
let questions = [
    { question: "What is a dog", answer: "Dog is a animal with 4 legs", imageLink: "https://www.howitworksdaily.com/wp-content/uploads/2015/08/131216Cute-dog-sticking-out-his-tongue-wallpaper-200x200.jpg" },
    { question: "What is a cat", answer: "Cat is a small domesticated animal with fur", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ056rSv3ZH7rACzdfx9AstokLhO0111n8SpA&usqp=CAU" },
    { question: "What is a lion", answer: "Lion is a large wild cat with a mane", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl51fDOxbgvR81G1aqBdZEr0oEIMPd-sui1g&usqp=CAU" },
    { question: "What is a bear", answer: "Bear is a large mammal that eats mostly fish and insects", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCRH68zuhvSu3S6zCqncgyGSXQRjzZOqdLdhcaEMIeFFpHZEE3hHenJ1klo53Bio3o-8&usqp=CAU" },
    { question: "What is a penguin", answer: "Penguin is a flightless bird that lives in cold climates", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyzM8eAZdTyoXDODL-kFgVi8Y0_wyWO4KJQ&usqp=CAU" },
    { question: "What is a snake", answer: "Snake is a long and legless reptile that can be venomous", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tTb42KgHb2j4uRoxYpQ6lfjF3xIMN3_1lg&usqp=CAU" }
]

let searchButton = document.getElementById("searchButton")
let output = document.getElementById("output")
let input = document.getElementById("token_input")
let speechBtn = document.getElementById("token_btn")
// let inputValue = document.getElementById("token_input").value

searchButton.addEventListener("click", function () {
    let searchBarValue = document.getElementById("searchBar").value
    let found = false
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].question.toLowerCase() === searchBarValue.toLowerCase()) {
            found = true
            output.innerHTML = `
            <p>${questions[i].question}</p>
            <p>${questions[i].answer}</p>
            <img src=${questions[i].imageLink}>
            `
                speechBtn.addEventListener("click",function speech(){
                        let speech = new SpeechSynthesisUtterance();
                            speech.text = questions[i].answer;
                            speech.rate = 1;
                            speech.pitch = 1;
                            speech.volume = 1;
                            speechSynthesis.speak(speech);
                })
                break;
                
                
            }
    }
    if (!found) {
        output.innerHTML = `<p>No matching question found</p>`
    } else {
        input.style.display = "inline-block";
        speechBtn.style.display = "inline-block";
        
    }
})
