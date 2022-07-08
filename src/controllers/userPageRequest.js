import config from "../config/apiConfig";

export function PopularFilms(setPopularFilms){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
            return doc.json()
        }).then(data => {
            setPopularFilms(data.results)
        }
        )
}

export function NewFilms(setNewFilms){
    
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
            return doc.json()
        }).then(data => {
            setNewFilms(data.results)
        }
        )
}

export function TopFilms(setTopFilms){
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
        return doc.json()
    }).then(data => {
        setTopFilms(data.results)
    }
    )
}
//
export function Recomendations(setRecomendation){
    fetch(`https://api.themoviedb.org/3/movie/15/recommendations?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
        return doc.json()
    }).then(data => {
        setRecomendation(data.results)
    }
    )
}
export function AboutMovie(setInfo, idMovie){
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${config.chave}&language=pt-BR`).then(doc => {
        return doc.json()
    }).then(data => {
        setInfo(data)
    }
)
}
//
export function LogOut(){
    localStorage.setItem('Usuario', null);
    localStorage.setItem('Token', null);

}

