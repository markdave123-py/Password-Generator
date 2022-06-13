function generate() {
    const arr = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T",
"Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",";","/","?","!","@","#","$","%","^","&","*","(",")",
"1","2","3","4","5","6","7","8","9","0"]
    let gen1 = " "
    let gen2 = " "
    let gen3 = " "
    let gen4 = " "
    let i = 0;
    let value = document.querySelector("#number").value
    if(value < 1 || value > 13){
        document.querySelector(".generated1").value = "invalid input"
        document.querySelector(".generated2").value = "invalid input"
        document.querySelector(".generated3").value = "invalid input"
        document.querySelector(".generated4").value = "invalid input" 
    }
    
    else {
        while(i < value){
            gen1 += arr[Math.floor(Math.random() * arr.length)]
            gen2 += arr[Math.floor(Math.random() * arr.length)]
            gen3 += arr[Math.floor(Math.random() * arr.length)]
            gen4 += arr[Math.floor(Math.random() * arr.length)]
            i += 1;
        }
         document.querySelector(".generated1").value = gen1
         document.querySelector(".generated2").value = gen2
         document.querySelector(".generated3").value = gen3
         document.querySelector(".generated4").value = gen4
    }


}
function copyA(){
    let generated1 = document.querySelector(".generated1");
    generated1.select();
    generated1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated1.value);
    alert("You copied " + generated1.value)
}
function copyB(){
    let generated2 = document.querySelector(".generated2");
    generated2.select();
    generated2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated2.value);
    alert("You copied " + generated2.value)
}
function copyC(){
    let generated3 = document.querySelector(".generated3");
    generated3.select();
    generated3.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated3.value);
    alert("You copied " + generated3.value)
}
function copyD(){
    let generated4 = document.querySelector(".generated4");
    generated4.select();
    generated4.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generated4.value);
    alert("You copied " + generated4.value)
}

