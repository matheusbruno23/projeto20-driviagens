export function conflictError(resource = "item"){
    return{
        type:"conflict",
        message:`${resource} já existe.`
    }
}

export function invalidError(resource = "item"){
    return{
        type:"invalid",
        message:`${resource} está inválido.`
    }
}

export function notFoundError(resource = "item"){
    return{
        type:"notFound",
        message:`${resource} não encontrado.`
    }
}

export function incompleteData(){
    return{
        type:"incompleteData",
        message:`Preencha todos os dados necessários.`
    }
}