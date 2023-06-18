let text = document.getElementById("urlBox");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",async()=>{
    try {
        await fetch("http://localhost:8080/url",{
           method:"POST",
           headers:{
               "Content-Type" : "application/json"
           },
           body:JSON.stringify(text.value)
        })
   } catch (error) {
       console.log(error);
   }
})




const getData = async()=>{
    try {
        const data = await fetch("http://localhost:8080/mye-SW1LY");
        data = data.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();