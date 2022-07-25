import config from "../config/apiConfig";

class UserRequest{
    PopularFilms(setPopularFilms){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
                return doc.json()
            }).then(data => {
                setPopularFilms(data.results)
            }
            )
    }

    NewFilms(setNewFilms){
    
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
                return doc.json()
            }).then(data => {
                setNewFilms(data.results)
            }
            )
    }

    TopFilms(setTopFilms){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
            return doc.json()
        }).then(data => {
            setTopFilms(data.results)
        }
        )
    }

    Recomendations(setRecomendation){
        fetch(`https://api.themoviedb.org/3/movie/15/recommendations?api_key=${config.chave}&language=pt-BR&page=1`).then(doc => {
            return doc.json()
        }).then(data => {
            setRecomendation(data.results)
        }
        )
    }

    async AboutMovie(setInfo, idMovie){
        let allData;
        
        await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${config.chave}&language=pt-BR`).then(doc => {
            return doc.json()
        }).then(data => {
            allData = data;
            if(setInfo){
                setInfo(data);
            }
        }
        )
    
        return allData;
    }

    async LikeMovie(idMovie){
        let allData;
        
        await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${config.chave}&language=pt-BR`).then(doc => {
            return doc.json()
        }).then(data => {
            allData = data;
        }
        )
    
        return allData;
    }

    async listMovies(setInfo, idMovie){
        let allData;
        await fetch(`https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=${config.chave}&language=pt-BR`).then(doc => {
            return doc.json()
        }).then(data => {
            allData = data;
            setInfo(data)
        }
        )
    
        return allData;
    }

    LogOut(){
        localStorage.setItem('Usuario', null);
        localStorage.setItem('Token', null);
    
    } 
}

export default new UserRequest();