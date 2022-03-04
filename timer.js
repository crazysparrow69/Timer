window.onload = timer;

//Main function
function timer() {

  //Function that does calculations and shows the time
  function showTime() {

    //Algorithm that is responsible for calculation
    if(sec > 0) {
      sec--;
    } else {
      if(min > 0) {
        min--;
        sec = 59;
      } else {
        if(hour > 0) {
          hour--;
          min = 59;
          sec = 59;
        } else {

          //Stopping the program if the time's up
          clearInterval(id);
          alert("Time's up!")
        }
      }
    }
    
    //Converting time into "hh:mm:ss" format
    let num1 = hour;
    let num2 = min;
    let num3 = sec;
    if((num1 / 10) < 1) num1 = "0" + num1;
    if((num2 / 10) < 1) num2 = "0" + num2;
    if((num3 / 10) < 1) num3 = "0" + num3;

    //Show the time
    document.getElementById("timer").innerHTML = num1 + ":" + num2 + ":" + num3;
  }
  
  //Getting time
  let time = prompt("Enter time in 'hh mm ss' format");

  //Getting hr/min/sec separately 
  let hour = parseInt(time.slice(0, 2));
  let min = parseInt(time.slice(3, 5));
  let sec = parseInt(time.slice(6));

  //Launching the program
  let id = setInterval(showTime, 1000);
}

