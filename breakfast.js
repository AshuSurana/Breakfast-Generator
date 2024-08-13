const breakfasts = [
    "Overnight oats",
    "Scrambled eggs",
    "Croissant and a banana",
    "Greek yoghurt with berries",
    "Pancakes with whipped cream",
    "French toast"
  ];
  
  const button = document.getElementById("button");
  const answer = document.getElementById("answer");
  
  const getRandomBreakfast = () => {
    const randomBreakfast =
      breakfasts[Math.floor(Math.random() * breakfasts.length)];
     
  
    answer.innerHTML = randomBreakfast;
  };
  
  button.addEventListener("click", getRandomBreakfast);
  