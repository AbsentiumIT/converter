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



/*$("#kg").click(function (kgToPounds) {
    $("#kg").css("box-shadow","5px 5px 10px white");
    $("#pound").css("box-shadow","none");
    //$("#output").val("");
    //$("#input").val("");
    $("#btn").click(()=> {
        $("#output").text($("#input").val());
    })  
});

$("#pound").click(function () {
    $("#pound").css("box-shadow","5px 5px 10px white");
    $("#kg").css("box-shadow","none");
   // $("#output").val("");
    //$("#input").val("");
    $("#input").keydown(() => {
        const input = $("#input").val();
            if(input !== "") {
                $("#btn").click(()=> {
                    $("#output").append(input);
                    $("#output").text($("#input").val());
                })
            }    
    });
    
});*/
