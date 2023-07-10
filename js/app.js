const $ = document;
let counters = $.querySelectorAll(".num")
let benefits = $.querySelector(".benefits")
let startCount = false

window.addEventListener("scroll" , (event)=>{
    console.log(benefits.offsetTop);
    if(window.scrollY >= benefits.offsetTop ){
        if(!startCount){

            counters.forEach((counter)=>setCounter(counter))
        }
        startCount = true
    }
})

function setCounter(ele){
    let dataCount  = ele.dataset.count

    let itervalCount = setInterval(()=>{
        if(dataCount === ele.textContent){
            clearInterval(itervalCount)
        }
        ele.textContent++
    },10)
    

}