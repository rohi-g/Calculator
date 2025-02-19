let b = document.querySelectorAll("button");
let result = document.querySelector(".result");

let expression = '';
let res;

b.forEach(function(button){
    button.addEventListener("click",function(){
        let value = button.innerHTML;
        if(value == '=')
        {
            try{
                res = eval(expression);
                if(typeof res === 'undefined')
                {
                    alert("Enter a Valid Expression");
                    res = '';
                }
                else
                {
                    result.value = res;
                    expression = res;
                 }
            }
            catch{
                    alert("Enter a Valid Expression");
                    res = '';
            }
        }
        else if(value == "CE")
        {
            expression = "";
            result.value = expression;
        }
        else
        {
            expression += value;
            result.value = expression;
        }
        
    })
})
