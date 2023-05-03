class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();
	}

    validateonSubmit(){
        let self=this;
        this.form.addEventListener("submit", (e) => {
          e.preventDefault();
          var error = 0;
          self.fields.forEach((field) => {
              const input = document.querySelector(`#${field}`);
              if (self.validateFields(input) == false) {
                  error++;
              }
          });
          if (error == 0) {
              localStorage.setItem("auth", 1);
              this.form.submit();
          }
      });
      }


       containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
      }


      containsNumbers(str){
        const numbers = /[1234567890]/;
        return numbers.test(str);

      }

    validateFields(field){
        const data = document.getElementById('username');
     
        if(field.value.trim() ==""){
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} can not be blank`,
                "error"
            );
            return false;
        }else{
            if(field.type =="password"){
                if(field.value.length<8){
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText},  Must be at last 8 characters`,
                        "error"
                    );
                    return false;
                }else{
                    this.setStatus(field,null,"success");
                    return true;
                }
            }else if(data!=''){
                if(this.containsSpecialChars(data.value)== true){
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText},  Special characteres`,
                        "error"
                    );
                    return false;
                }else if(this.containsNumbers(data.value)== true){
                    
                        this.setStatus(
                            field,
                            `${field.previousElementSibling.innerText},  contains numbers`,
                            "error"
                        );
                        return false;
                }
                
                else{
                    this.setStatus(field,null,"success");
                    return true;
                }

            }else{
                this.setStatus(field,null,"success");
                return true;
            }
        }
    }

    setStatus(field,message,status){
        const errorMessage = field.parentElement.querySelector(".error-message");

        if(status =="success"){
            if(errorMessage){
                errorMessage.innerText="";
            }
            field.classList.remove("input-error");
        }

        if(status=="error"){
            errorMessage.innerText =message;
            field.classList.add("input-error");
        }
    }

}

const form = document.querySelector('.loginForm');
if(form){
  const fields =["username","password"];
  const validator=new Login(form,fields);
}


  
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
console.log(containsSpecialChars("kasimiro"));
console.log(containsSpecialChars("christian"));