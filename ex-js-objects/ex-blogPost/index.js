// criar um objt de postagem de blog com essas propriedades:
//title, body, author, views, comments
// (author, body)
// isLive

function Postagem(title, body, author, views, comments, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
    this.result = function () {
        console.log(`Título: ${title}\nConteúdo: ${body}\nAutor: ${author}\nVisualizações: ${views}\nEstá no ar? ${isLive}\nComentários:`);
        this.comments.forEach((comment, index) => {
            console.log(`${index + 1}. ${comment.author}: ${comment.body}`);
        });
    };
}

let post = new Postagem(
    'Opinião da Linda',
    'Oi, sou a Linda e penso isso e isso e isso.',
    'Linda da Silva',
    23,
    [
        { author: 'Leitora1', body: 'Gostamos da sua opinião!' },
        { author: 'Leitor2', body: 'Concordo com tudo!' }
    ],
    true
);

post.result();
