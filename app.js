function clickButton(){
    let cep = document.getElementById("cep").value
    
    searchData(cep)
}

function cleanAll(){
    document.getElementById("cep").value = ""
    document.getElementById("logradouro").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}

async function searchData(cep){
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    screenData(dados)
}

function screenData(dados){
    document.getElementById("logradouro").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("estado").value = dados.uf
}