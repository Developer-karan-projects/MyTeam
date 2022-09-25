let teamArray = [
     {
          name : "Ravi Bhiya",
          age :  31,
          description : "Supererb Electrical Enginer with more then 10 year of experience highly professional in house wiring and fitting",
          link : "ravi45.com"
     },
     {
          name : "Shrikant",
          age :  20,
          description : "Good financial knowledge , and Internet Knowledge , Tax Manegment And many more",
          link : "shrikant.com"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "Ravi Bhiya",
          age :  31,
          description : "Supererb Electrical Enginer with more then 10 year of experience highly professional in house wiring and fitting",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },{
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     {
          name : "karan",
          age :  20,
          description : "computer enginering student",
          link : "github.io"
     },
     ]

function autoAdd() {
     console.log("autoadd");
     let boxTeam = document.getElementsByClassName("boxTeam")[0]
     teamArray.forEach((element)=>{
          let myHtml = `
          <div class="card">
               <img class="miniImg">
               <p>${element.name}</p>
          </div>
          `
          boxTeam.innerHTML += myHtml
     }
     )
}
autoAdd()


let porfileComponent = document.querySelectorAll(".card")
porfileComponent.forEach((element , index) => {
     element.addEventListener("click", () => {
          let boxData = element.parentElement.nextElementSibling
          let boxTeam = element.parentElement
          let boxSlide = element.parentElement.parentElement
          boxTeam.classList.add("hide")
          boxData.classList.add("translate")
          boxData.classList.add("show")
          boxSlide.classList.add("slide")
          boxData.getElementsByClassName("change")[0].innerHTML = `
          <table class="boxProfile" CELLSPACING=0 BORDER=0>
          <div class="boxMiniImg"></div>
          <tr  class="boxDataName">
               <td><span class="highlight">Name:-</span></td>
               <td>${teamArray[index].name}</td>
          </tr>
          <tr class="boxDataAge">
               <td><span class="highlight">Age:-</span></td>
               <td>${teamArray[index].age}</td>
          </tr>
          <tr class="boxDataDiscription">
               <td><span class="highlight">Desc:-</span></td>
               <td>${teamArray[index].description}</td>
          </tr>
          <tr class="boxDataResume">
               <td><span class="highlight">Resume:-</span></td>
               <td><a href="${teamArray[index].link}">Resume</a></td>
          </tr>
     </table>
     `
     })

})

let btn = document.getElementsByClassName("closebox")[0]
btn.addEventListener("click", () => {
     let boxSlide = document.getElementsByClassName("boxSlide")[0]
     let boxTeam = document.getElementsByClassName("boxTeam")[0]
     let boxData = document.getElementsByClassName("boxData")[0]
     boxSlide.classList.remove("slide")
     boxTeam.classList.remove("hide")
     boxData.classList.remove("show")
     console.log("close");
})
