
        //alert("Jfono beta 1.0")
        //const nome = prompt("Qual seu nome?")    
        //console.log("Olá "+nome+", seja bem vindo ao Jfono beta 1.0")

        const frm = document.querySelector("form")
        const nome = document.getElementById("inNome")

        frm.addEventListener("submit",(e)=>{
            console.log(nome.value)
            e.preventDefault()
        })

        
