let convertBtn = document.getElementById("convert")
let meter = document.getElementById("meter")
let volume = document.getElementById("volume")
let kilos = document.getElementById("kilos")
let enterNum = document.getElementById("num")



convertBtn.addEventListener("click", function(){
    
   if (enterNum.valueAsNumber > 0) {
        meter.textContent = `${enterNum.valueAsNumber} meters = ${(enterNum.valueAsNumber * 3.281).toFixed(3)} feet | ${enterNum.valueAsNumber} feet = ${(enterNum.valueAsNumber * 0.3048).toFixed(3)} meters`
        
        volume.textContent = `${enterNum.valueAsNumber} liters = ${(enterNum.valueAsNumber * 0.264).toFixed(3)} gallons | ${enterNum.valueAsNumber} gallons = ${(enterNum.valueAsNumber * 3.78541).toFixed(3)} liters`
        
        kilos.textContent = `${enterNum.valueAsNumber} kilos = ${(enterNum.valueAsNumber * 2.204).toFixed(3)} pounds | ${enterNum.valueAsNumber} pounds = ${(enterNum.valueAsNumber * 0.453592).toFixed(3)} kilos`
    } else {
        console.log("not happy")
    }
})



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
