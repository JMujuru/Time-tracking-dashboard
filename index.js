// Variables for clicks 
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

// Variables for Cards
const weeklyHours = document.querySelectorAll(".weeklyHours");
const lastWeekHours = document.querySelectorAll(".last");
const data = "data.json"


fetch(data)
  .then((response) => response.json())
  .then((data) => (finalData = data));


daily.addEventListener("click", ()=>{
  monthly.classList.toggle("active", false);
  weekly.classList.toggle("active",false);
  daily.classList.toggle("active");
  for(let i = 0; i <=5; i++ ){
    weeklyHours[i].innerHTML = finalData[i].timeframes.daily.current;
    lastWeekHours[i].innerHTML = finalData[i].timeframes.daily.previous;
  }
} );


weekly.addEventListener("click", ()=>{
  monthly.classList.toggle("active", false);
  weekly.classList.toggle("active");
  daily.classList.toggle("active", false);
  for(let i = 0; i <=5; i++ ){
    weeklyHours[i].innerHTML = finalData[i].timeframes.weekly.current;
    lastWeekHours[i].innerHTML = finalData[i].timeframes.weekly.previous;
  }
});

monthly.addEventListener("click", ()=>{
  monthly.classList.toggle("active");
  weekly.classList.toggle("active", false);
  daily.classList.toggle("active", false);
  for(let i = 0; i <=5; i++ ){
    weeklyHours[i].innerHTML = finalData[i].timeframes.monthly.current;
    lastWeekHours[i].innerHTML = finalData[i].timeframes.monthly.previous;
  
  }
});