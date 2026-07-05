class projeto {
    constructor(idProjeto, tipo, estagio, dataPublicacao, dataAtualizacao, numeroVizualizacoes, numeroCurtidas, situacaoProjeto, titulo, descricao, capa){
        this.idProjeto = idProjeto
        this.tipo = tipo
        this.estagio = estagio
        this.dataPublicacao = dataPublicacao
        this.dataAtualizacao = dataAtualizacao
        this.numeroVizualizacoes = numeroVizualizacoes
        this.numeroCurtidas = numeroCurtidas
        this.situacaoProjeto = situacaoProjeto
        this.titulo = titulo
        this.descricao = descricao
        this.capa = capa
    }
}

const projetoTeste1 = new projeto(
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    "Wireframes/X.webp"
)

const projetoTeste2 = new projeto(
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    "Wireframes/X.webp"
)

const projetoTeste3 = new projeto(
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    "Wireframes/X.webp"
)

const projetosDestaque = document.getElementById("projetos-destaque")
const projetosRecomendados = document.getElementById("projetos-recomendados")
const listaProjetos = []
let htmlAcumulado = ""

listaProjetos.push(projetoTeste1)
listaProjetos.push(projetoTeste2)
listaProjetos.push(projetoTeste3)


listaProjetos.forEach(projeto =>{
    htmlAcumulado += `
        <div class="destaque${projeto.idProjeto}" id="${projeto.id}"><img src="${projeto.capa}" alt=""></div>
    `
})

projetosDestaque.innerHTML = htmlAcumulado
projetosRecomendados.innerHTML = htmlAcumulado