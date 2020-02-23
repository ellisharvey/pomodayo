/* code for changing between the homepage, login page, and signup page */
var id1 = document.getElementById("homepage");
var id2 = document.getElementById("login_page");
var id3 = document.getElementById("signup-page");
function changeDiv1()
{
  id1.style.display = "none";
  id2.style.display = "block";
}
function changeDiv2 ()
{
  id1.style.display = "none";
  id3.style.display = "block";
}
function returnDivs ()
{
  id1.style.display = "block";
  id2.style.display = "none";
  id3.style.display = "none";
}

/*makes the timer work */
var handle = null;
function startTimer(duration, display) {
    var timer = duration;
    var minutes;
    var seconds;
        document.getElementById("start").disabled = true; 
        document.getElementById("stop").disabled = false; 
        handle = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function startWithButton() {
    var twentyFiveMinutes = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(twentyFiveMinutes, display);
}
function stopWithButton() {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;  
  clearInterval(handle);
}
  fetch('https://nphglvokre.execute-api.us-west-2.amazonaws.com/Prod/auth/sign-in', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    ChromeSamples.log('Created Gist:', data.html_url);
  });
}
