function buttonfood(){

    var meal = document.getElementById("mealinput").value;
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then((response) => response.json())
    .then((data) => {
      
        console.log(data); //output the API into console.

        var info = data;

        
        loc.innerHTML ="<br><br>"+ "From:" + info.meals[0].strArea + "<br><br>" + "Food:" + info.meals[0].strMeal + "<br><br>" + "Category food:" + info.meals[0].strCategory + " dish";

        para.innerHTML = "Ingredients:" + "<br>" + info.meals[0].strIngredient1 +","
        +info.meals[0].strIngredient2 +","
        +info.meals[0].strIngredient3 +","
        +info.meals[0].strIngredient4 +","
        +info.meals[0].strIngredient5 +","
        +info.meals[0].strIngredient6 +","
        +info.meals[0].strIngredient7 +","
        +info.meals[0].strIngredient8 +","
        +info.meals[0].strIngredient9 +","
        +info.meals[0].strIngredient10 +",";
        
        

        document.getElementById("para").innerHTML == para.innerHTML;
        document.getElementById("loc").innerHTML == loc.innerHTML;
    })
  }