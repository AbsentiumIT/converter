alert("This is my first ever converter in JS, soooo Happy!")
const kg = document.querySelector("#kg");
const pound = document.querySelector("#pound");

kg.addEventListener("click",()=>{
    kg.style.boxShadow = "5px 5px 10px white";
    pound.style.boxShadow = "none";
    $("#output").val("");
    $("#input").val("");
})
pound.addEventListener("click",()=>{
    pound.style.boxShadow = "5px 5px 10px white";
    kg.style.boxShadow = "none";
    $("#input").val("");
    $("#output").val("");
})
$("#btn-kg").click(()=>{
    const input = $("#input").val() * 2.205;
    $("#output").val(input);
})
$("#btn-pound").click(()=>{
    const output = $("#output").val() / 2.205;
    $("#input").val(output);
})
