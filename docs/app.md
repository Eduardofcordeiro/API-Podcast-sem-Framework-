# Podcast Menager
    
### Descrição
API de Podcasts com divisão de categorias

### Domínio
Podcasts feitos em vídeo

### Features

-Listar os podcasts em sesso~es de acategorias

#### Como vou implementar:

Vou retornar uma api rest  (json) com o nome do podcast, nome do episódio, imagem, link e categoria

```js

[
    {
        podcastName: "Flow Podcast",
        episode: "CBUM - Flow #319",
        videoID: "pQSuQmUfS30"
        cover: "https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg?",
        link: "https://www.youtube.com/watch?v=${videoID}",
        category: ["esporte", "saúde", "bodybuilder"]
    },
    {
        podcastName: "Flow Podcast",
        episode: "RUBENS BARRICHELO - Flow #339",
        cover: "https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg?   sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBonxQwlEalhS13RJbrvH2sVHnASw",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["esporte", "corrida"]
    }

]
```