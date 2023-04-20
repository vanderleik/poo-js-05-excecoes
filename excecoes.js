//Lançando exceções

try {
    throw new Error('Gerando um erro genérico');
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}

//Criando uma exceção
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos");
}

try {
    vaiDarErro();
} catch (e) {
    console.error(`${e.name}: ${e.message}`)
}


//Capturando uma exceção
let json = "Incorreto";

try {
    let pessoa = JSON.parse(json);
    console.log(pessoa.nome);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`Erro ${error.name}: ${error.message}`);
    } else {
        console.log("Relança a exceção pois não sabe como tratar.");
        throw error;
    }
} finally {
    console.log("Encerra tratamento");
}

