

// const doctorBill = 
// {

// officeName:"What's up Doc and Associates",
// streetAddress:"5000 Barksdale Harbor",
// doctorName:"Dr. Peabody",
// patientName:"Duke Maverick",
// visitDate:"May 10",
// amountBilled: 590000,
// dueDate:"Aug 10"
// }



// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// console.log("date visited", doctorBill[dateVisited])
// console.log("amount owed", doctorBill[owed])
// console.log("patient name", doctorBill[patient])


// for (const value of Object.values(doctorBill)) {
//     console.log(value)
// }




//  for (const key of Object.keys(doctorBill)) {
//   console.log(key)
//  }

// //  <section class="doctor">
// //  <span></span>
// // </section>

// const doctorApp = document.querySelector(".doctor")

// const doctorKeySection = document.createElement("section")

// for (const key of Object.keys(doctorBill)){
//     const doctorKeySpan = document.createElement("span")
//     doctorKeySpan.textContent = key
//     doctorKeySection.appendChild(doctorKeySpan)
// }

// // doctorApp.appendChild(doctorKeySection)

// let doctorKeysHTML = "<h1> Doctor Bill Object</h1>"


const yumYums = {
    name: "meatball",
    weight: "5 lbs",
    size: "golfball",
    count: 5,
    vegetarian: false

}

//Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.


const yumArray = Object.entries(yumYums)
console.log(yumArray)

const yumApp = document.querySelector(".food")

let yumEntriesHTML = ""
for(const entry of yumArray){
    yumEntriesHTML += `<p>${entry[0]}: ${entry[1]}</p>`
}

yumApp.innerHTML = `
<h1>Dinner Entry</h1>
<article class="food">${yumEntriesHTML}</article>`
;