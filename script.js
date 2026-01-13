// get the html tags that need functionality
const advicetext = document.getElementById('advice-text');
const btnAdvice = document.getElementById('get-advice');

// Make a function to get advice
const FetchAdvice =  async() =>
{
    // tell the user that the fetch is loading
    advicetext.innerHTML = "Loading...";

    // declare a try catch to make sure that the user does not get a stack error
    try
    {
        // remember await means pause here(used for async functions)
        const Response = await fetch ('https://api.adviceslip.com/advice');
        const data =  await Response.json();

        advicetext.innerHTML = `"${data.slip.advice}"`; 

    } catch (error) 
    {
        advicetext.innerHTML = "Something went wrong, try again";
    }
    
}

// event listener for the button
btnAdvice.addEventListener('click', FetchAdvice);
