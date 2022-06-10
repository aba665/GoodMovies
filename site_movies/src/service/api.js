export const API = 'http://localhost:5000';

//Função de criação de usuário
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

    fetch(API + '/newUser', OPTIONS).then(data => {
        return data.json();
    }).then((doc) => {
        dataReceive = doc.redirection;
    })
   
    
};

export function useLoginUser(email, password, token, setToken, setUserVerificated){
    console.log('fetch do login 1')
    console.log(email, password, token);
    token = localStorage.getItem('Token');
    console.log("novo valor", token)
    if(password.length < 4){
        return alert('Erro! Password deve conter mais de 4 caracteres!')
    }

    if(email == undefined || password == undefined){
        return alert('Erro! Preencha todos os dados corretamente!');
    }else{
        
        const LoginUser = async () => {
            console.log('fetch do login 2')
            
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
            
            console.log('cabeçalho', myHeaders);
    
            const OPTIONS = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(user)
            }
        
        
            return fetch(API + '/user/login', OPTIONS).then(data => {
                    return data.json();
                }).then((doc) => {
                
                console.log(doc);
                setterToken(doc);
                setterUserVerificated(doc);
                localStorage.setItem('Usuario', JSON.stringify({id: doc.user.id, email: doc.user.email}));
                localStorage.setItem('Token', doc.token);
                
                if(doc.token){
                   console.log('indo para página de usuario');
                
                }else{
                    console.log('Algo não deu certo!');
                }
            })

        }
        
        LoginUser();

    }
    
}
//Pega os alguns dados do usuário e filmes
export function getData(){
    let user = 'Abisson Santos';

    // fetch(API + '/data', OPTIONS).then(data => {
    //     return data.json();
    // }).then(
    //     user = doc.user.sobrenome
    // )
    return user;

}




