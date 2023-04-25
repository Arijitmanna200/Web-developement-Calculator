let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click" , function(){
        if (this.textContent == "="){
            if(string == ""){
                document.querySelector("input").value = string;
            }
            else{
            string = eval(string);
            document.querySelector("input").value = string;
            }
        }
        else if (this.textContent == "AC"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(this.textContent == "DEL"){
            string = document.getElementById("display").value = string.substring(0 , string.length-1);
            document.querySelector("input").value = string;

        }
        else{
            let lastChar = string[string.length-1];
            if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
                if(this.textContent === "+" || this.textContent === "-" || this.textContent === "*" || this.textContent === "/"){
                    console.log(this.textContent);
                    string = string.substring(0 , string.length-1) + this.textContent;
                    document.querySelector("input").value = string;
                }
                else{
                    console.log(this.textContent);
                    string = string + this.textContent;
                    document.querySelector("input").value = string;
                }        
            }
            else if(string == ""){
                if(this.textContent === "+" || this.textContent === "-" || this.textContent === "*" || this.textContent === "/"){
                    document.querySelector("input").value = string;
                }
                else{
                    console.log(this.textContent);
                    string = string + this.textContent;
                    document.querySelector("input").value = string;
                }  
            }
            else{
                console.log(this.textContent);
                string = string + this.textContent;
                document.querySelector("input").value = string;
            }
        
        }
    })
})