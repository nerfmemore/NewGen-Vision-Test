let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    { name: "Courses in Japan", prices: [0, 10] },
    { name: "Courses in Hungary", prices: [300, null] }
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterCoursesByPrice(priceArray){
    return courses.filter(item => {
        if(priceArray[1] === null && item.prices[1] === null){
            return item;
        } else if (priceArray[1] === null && priceArray[0] <= item.prices[1]){
            return item;
        } else if (priceArray[1] != null && priceArray[1] >= item.prices[0] && (priceArray[0] <= item.prices[1] || item.prices[1] === null)){
            return item;
        }
    })
}

function sortCoursesByPrice(newArray){
    courses.sort((course1, course2) => {return course1.prices[0] > course2.prices[0] ? 1 : -1});
}