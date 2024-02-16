let userInput = document.getElementById("userInput");
let sendDeleteRequestBtn = document.getElementById("sendDeleteRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");

function sendDeleteRequest(){
    let input = userInput.value;
    let requestUrl = `https://gorest.co.in/public-api/users/${input}`;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer cac876a104b9b3fdf42b9e2f071e8f655a60e0ac18623de7a0f5f1c786393c7f"
        }
    };
    fetch(requestUrl, options)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        requestStatus.textContent = data.code;
        httpResponse.textContent = JSON.stringify(data);
        console.log(data);
    });
    userInput.value = "";    
}

sendDeleteRequestBtn.onclick = function(){
    sendDeleteRequest();
};