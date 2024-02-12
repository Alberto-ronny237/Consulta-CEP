function buscarCep() {
    const inputCepcep = document.getElementById('inputCep')



    fetch (`https://viacep.com.br/ws/${inputCep.value}/json/`).then(result=>{
        result.json().then(response => {

            if(!response.erro){
                const divResultado = document.getElementById('resultado')
                console.log(response)

                if(divResultado.classList.contains('hidden')){
                    divResultado.classList.remove('hidden')
                    divResultado.classList.add('flex')
                }

                var stado = document.getElementById('stado')
                var cidade = document.getElementById('cidade')
                var bairro = document.getElementById('bairro')
                var endereco = document.getElementById('endereco')
                var cep = document.getElementById('cep')
    
                stado.innerHTML = response.uf
                cidade.innerHTML = response.localidade
                bairro.innerHTML = response.bairro
                endereco.innerHTML = response.logradouro + " " + response.complemento
                cep.innerHTML = response.cep

            }else{alert("CEP INVÁLIDO!")}
        })
        .catch(Error => {
            console.log(`Ocorreu um erro: ${Error}`)
        })
})}