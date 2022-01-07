// let url = "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
async function  getRecipes(url) {   // make api call and grab data     and  append data

   try {
       let response = await fetch (url);

       let recipeData = await response.json()
        let mealList = recipeData.meals
      return mealList;
    //   console.log('recipe:',recipeData)
   }catch (e) {
       console.log("err:",e)
   }

}


 const appendMeal = (arr1, location) => {


    arr1.forEach(({strMeal, strCategory, strArea, strInstructions,strMealThumb}) => {
        

        let div = document.createElement('div');

        let name = document.createElement('p')
        name.innerText = `Name - ${strMeal}`

        let category = document.createElement('p')
        category.innerText = `Category - ${strCategory}`

        let type = document.createElement('p')
        type.innerText = `Type Of Food - ${strArea}`;

        let instr = document.createElement('p')
        instr.innerText = `Recipe Instructions - ${strInstructions}`;

        let image_meal = document.createElement('img')
        image_meal.setAttribute ('id',"image_meal")

        image_meal.src = strMealThumb

        div.append(image_meal,name,category, type,instr);

        location.append(div)
    });

    
}

export {getRecipes,appendMeal}