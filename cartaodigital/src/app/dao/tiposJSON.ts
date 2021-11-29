export type BeneficioEstrutura = {
    idProduto: number;
    beneficio: string;
    status: string;
    quantidade: number;
}

export type BeneficioUsuario = {
    codFuncionario: number;
    nomeFuncionario: string;
    beneficios: Array<BeneficioEstrutura>;
}

export type BeneficioJSON = {
    beneficios: BeneficioUsuario;
    terceiros: Array<BeneficioUsuario>;
}






export type BeneficiarioJSON = {
    identificaoTerceiro: number;
    nomeTerceiro: string;
}






export type LoginJSON = {
    
}