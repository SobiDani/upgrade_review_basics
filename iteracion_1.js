const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

/* i = 0
for (const movie of movies) {

} */

const categorie = []
for (i = 0; i < movies.length; i++){
    for (e = 0; e < movies[i].categories.length; e++){
        if(!categorie.includes(movies[i].categories[e])) {
            categorie.push(movies[i].categories[e])
        }
      
    }
}

 console.log(categorie);