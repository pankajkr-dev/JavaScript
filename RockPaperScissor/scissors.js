let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx= Math.floor(math.randon() *3);
    return options[randidx];
}


const playGame=(userChoice)=>{
    console.log("user choice", userChoice);
    const compChoice = gencompChoice();
    console.log("computer Choice ", compChoice)
}


choices.forEach(
    (choice)=>{
        console.log(choice);
        choice.addEventListener("click", ()=>{
            const choiceId= choice.getAttribute("id"); //to print the id of the clicked Choice
            console.log("Choice was Clicked" , choiceId);
            playGame(userChoice);
       
        });
 });

 // time-29min

