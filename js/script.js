class Validator {
    constructor(){
        this.validations = [
            "data-min-length",
        ]
    }

    // Inicio das validações nos campos
    validate(form) {

        let inputs = form.getElementsByTagname("input");

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input){
            for(let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i])!=null){

                    let method = this.validations[i].replace("data-", " ").replace("-", " ");
                    let value = input.getAttribute(this.validations[i]);
                    this[method](input, value);
                }
            }

        }, this);
    }
    minlength(input, minValue){
        let inputLength = input.value.length
        let errorMessage = `O campo precisa ter pelo menos ${minValue}`
        if(inputLenght < minValue){
            this.printMessage(input, errorMessage)
        }
    }

    printMessage(input, msg){
        let template = document.querySelector('.errodevalidacao').cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;

        template.classList.remove("template");

        inputParent.appendChild(template)
    }
}


let form = document.getElementById("registro-form")
let submit = document.getElementById("btn-submit")
let validator = new Validator();

// validações

submit.addEventListener("click", function(e) {

    e.preventDefaul();
    
    validator.validate(form);
})
