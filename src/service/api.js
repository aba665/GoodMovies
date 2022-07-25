import config from "../config/apiConfig";
export const API = config.api;

//Função de criação de usuário e retorna a confirmação se o usuário foi criado ou não.
export const createUser = async (email, password, name, nickname, age) => {
    let dataReceive;    
    let user = {
        email,
        password,
        name,
        nickname,
        age
    }
    const OPTIONS = {
        method: "POST",
        headers: new Headers({'content-type':  'application/json'}),
        body: JSON.stringify(user)
    }

    fetch(API + 'newUser', OPTIONS).then(data => {
        return data.json();
    }).then((doc) => {
        dataReceive = doc.redirection;
    })
   
   return dataReceive; 
};
//Função de login e autenticação
export function useLoginUser(email, password, token, setToken, setUserVerificated){
    token = localStorage.getItem('Token');
    if(password.length < 4){
        return alert('Erro! Password deve conter mais de 4 caracteres!')
    }

    if(email == undefined || password == undefined){
        return alert('Erro! Preencha todos os dados corretamente!');
    }else{
        
        const LoginUser = async () => {
            
            let user = {
                email,
                password,
                token
            }
        
            const setterToken = (file) => {
                setToken(file.token);
            }
    
            const setterUserVerificated = (file) => {
                setUserVerificated(file.userVerificated)
            }
            
            const myHeaders = new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            });
            
            const OPTIONS = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(user)
            }
        
        
            return fetch(API + 'user/login', OPTIONS).then(data => {
                    return data.json();
                }).then((doc) => {
                
                if(doc != null){
                    setterToken(doc);
                    setterUserVerificated(doc);
                    localStorage.setItem('Usuario', JSON.stringify({id: doc.user.id, email: doc.user.email, nickname: doc.user.nickname}));
                    localStorage.setItem('Token', doc.token);
                }    
                
            })

        }
        
        LoginUser();

    }
    
}
//Pega os alguns dados do usuário e filmes favoritos do usuário
export async function getData(){
    let user;
    let fullUser = JSON.parse(localStorage.getItem('Usuario'));
    let token = localStorage.getItem('Token');

   const OPTIONS = {
        method: "POST",
        headers: new Headers({'content-type':  'application/json'}),
        body: JSON.stringify(
                {
                    email: fullUser.email,
                    Authorization: token
                }
            )
    }

    await fetch(API + 'data', OPTIONS).then(data => {
        return data.json();
    }).then((doc) => {
            user = doc.nickname
    })
    
    return user;

}

export async function FavoriteMovie(name, description, urlImg){
    let fullUser = JSON.parse(localStorage.getItem('Usuario'));
    let token = localStorage.getItem('Token');
    let allData;

    const OPTIONS = {
        method: "PUT",
        headers: new Headers({'content-type':  'application/json'}),
        body: JSON.stringify(
                {
                    email: fullUser.email,
                    name,
                    description,
                    urlImg,
                    Authorization: token
                }
            )
    }

    await fetch(API + 'movies/favorite', OPTIONS).then(data => {
        return data.json();
    }).then((doc) => {
        allData = doc.resultado;
    }
    );
    return allData
}

export async function AllFavoriteMovie(){
    let fullUser = JSON.parse(localStorage.getItem('Usuario'));
    let token = localStorage.getItem('Token');
    let allData;
    const OPTIONS = {
        method: "POST",
        headers: new Headers({'content-type':  'application/json'}),
        body: JSON.stringify(
                {
                    email: fullUser.email,
                    Authorization: token
                }
            )
    }

    await fetch(API + '/movies/favorite/show', OPTIONS).then(data => {
        return data.json();
    }).then((doc) => {
        allData = doc;
        
    })
    return allData;
}