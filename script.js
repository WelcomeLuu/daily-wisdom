// Declare the HTML elements
const AdviceTxt = document.getElementById('advice-text');
const btnAdvice = document.getElementById('get-advice');


// Declare the function
const FuncAdvice = async() =>
{
    // Show the api fetch is loading
    AdviceTxt.innerHTML = "Loading Wisdom...";

    //Declare the try catch
    try{
        // get the api fetch
        const Response = await fetch('https://api.adviceslip.com/advice');
        const data = await Response.json();

        // now display the advice to the user
        AdviceTxt.innerHTML = `"${data.slip.advice}"`;
    } catch(error)
    {
        // handle the error by displaying this to the user
        AdviceTxt.innerHTML="Something went wrong. Try again";
    }
    
}

// Add event listener for the btn and the function
btnAdvice.addEventListener('click',FuncAdvice);
