const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading'); 
const postContainer = document.querySelector('#post-container');

const postPage = document.querySelector("#post")
const postPageContainer = document.querySelector("#posts-container");
const conteinerDeComentario = document.querySelector("#comments-contain");

const commentForm = document.querySelector('#comment-form');
const emailInput = document.querySelector('#email');
const bodyInput = document.querySelector('#text');

//Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");


// Get all post
async function getAllPost(){
    const response = await fetch(url)
    
    const post = await response.json();

    console.log(post);

    loadingElement.classList.add('hide');

    post.map(dados =>{
        const divElement = document.createElement('div');
        const title = document.createElement('h3');
        const corpoDoPost = document.createElement('p');
        const link = document.createElement('a');

        title.textContent = dados.title;
        corpoDoPost.innerText = dados.body;
        link.innerText = "Ler";
        link.setAttribute("href",`post.html?id=${dados.id}`);

        divElement.appendChild(title);
        divElement.appendChild(corpoDoPost);
        divElement.appendChild(link);
        postContainer.appendChild(divElement);

        
    });
}

//Get individual post
async function getPost(id)
{
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])
    
    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    loadingElement.classList.add('hide');
    postPage.classList.remove('hide');

    const title = document.createElement("h1");
    const corpo = document.createElement('p');

    title.textContent = dataPost.title;
    corpo.textContent = dataPost.body;
    const postContainer = document.querySelector('#posts-container');
    postContainer.appendChild(title);
    postContainer.appendChild(corpo);

    dataComments.map(comment =>{
        // const pComentarioCorpo = document.createElement('p');
        // const pComentarioEmail = document.createElement('p');        
        // const pComentarioName = document.createElement('p');
        // pComentarioCorpo.textContent = `Comentario: ${comment.body}`;
        // pComentarioEmail.textContent = `E-mail: ${comment.email}`;
        // pComentarioName.textContent = `Nome: ${comment.name}`;

        // conteinerDeComentario.appendChild(pComentarioName);
        // conteinerDeComentario.appendChild(pComentarioEmail);
        // conteinerDeComentario.appendChild(pComentarioCorpo);

        createComment(comment);
        
    });
}

function createComment(comment){
    const divElement = document.createElement('div');
    const email = document.createElement('h3');
    const commentsBody = document.createElement('p');
    const name = document.createElement('h3');

    name.textContent = comment.name;
    email.textContent = comment.email;
    commentsBody.textContent = comment.body;

    divElement.appendChild(name);
    divElement.appendChild(email);
    divElement.appendChild(commentsBody);

    conteinerDeComentario.appendChild(divElement);
}

async function postComment(commment)
{
    const response = await fetch(`${url}/${postId}/comments`,{
        method:"POST",
        body:commment,
        headers:{
            "Content-type":"application/json",
        }
    });

    const post = await response.json();

    console.log(post);
    createComment(post);
}

if(!postId)
{
    getAllPost();
}else{
    getPost(postId);
    commentForm.addEventListener('submit', e => {
        e.preventDefault();

        let commment = {
            email: emailInput.value,
            body: bodyInput.value
        };

        let teste =  JSON.stringify(commment);

        postComment(teste);
    });
}
