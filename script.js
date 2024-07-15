const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

// Add eventListener and Function

checkBtn.addEventListener("click", ()=> {
   const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)\d{4}$/
console.log(regex.test("1 555-555-5555"))

   if(!input.value){
     alert("Please provide a phone number")

   }  else if(regex.test(input.value)){
      result.innerHTML = `Valid US number: ${input.value}`;
   }  else {
      result.innerHTML = `Invalid US number: ${input.value}`
   }
});

  clearBtn.addEventListener("click", ()=>{
     result.innerHTML = "";
     input.value = "";
  })