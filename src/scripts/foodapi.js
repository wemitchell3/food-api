//Create a function which returns a string template. The template is the HTML representation for a food item.
const foodList = document.querySelector(".foodList")


fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })


