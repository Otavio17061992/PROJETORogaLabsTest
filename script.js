function get(path, obj) {
    const clearPath = path
        .replaceAll("[", ".") // percorre toda a string em busca do '[' e retorna o valor de '.'.
        .replaceAll("]", "")  // percorre toda a string em busca do ']' e retrona o valor "" <--- 
        .split("."); // Percorre o a string embusca de '.' para dividir - lo em substrings

    let position = obj;

    for (let index = 0; index < clearPath.length; index++) { // percorre o Object abrindo e consultando o conteudo ate satisfazer o as 5 position
    
        position = position[clearPath[index]];  
    }

    return position ? position : false; // retorna false se a posicao for fora do parametro do oBject
}

module.exports = get;
