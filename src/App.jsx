import { useState } from 'react'
import './App.css'
import NavBar from '../../Learn-React/src/composants/NavBar';
import Post from './composants/Post';
import Footer from './composants/Footer';

function App() {
 
  

  const [posts, setPosts] = useState([
    {
      "id": 1,
      "titre": "Nzati Doumbi Evans",
      "description": "Nzati Doumbi Evans est un entrepreneur gabonais visionnaire, reconnu pour son engagement dans le développement technologique en Afrique centrale. Il est à l'origine de plusieurs startups innovantes dans le secteur des fintechs.",
      "liker": false
  },
  {
      "id": 2,
      "titre": "Leo Messi",
      "description": "Leo Messi est un footballeur de renommée mondiale, souvent considéré comme l'un des meilleurs joueurs de tous les temps. Son parcours exceptionnel au FC Barcelone et sa transition réussie à l'Inter Miami inspirent des millions de fans.",
      "liker": false
  },
  {
      "id": 3,
      "titre": "Jeff Bezos",
      "description": "Jeff Bezos est le fondateur d'Amazon, la plus grande plateforme de commerce en ligne au monde. En plus de ses réalisations dans le domaine du e-commerce, il est également un pionnier dans l'exploration spatiale avec sa société Blue Origin.",
      "liker": false
  },
  {
      "id": 4,
      "titre": "Aliko Dangote",
      "description": "Aliko Dangote est un magnat des affaires nigérian, connu pour être l'homme le plus riche d'Afrique. Son empire industriel s'étend dans les secteurs du ciment, du sucre, et du pétrole, jouant un rôle clé dans l'économie africaine.",
      "liker": false
  }
  
]);

const liker = (data) => {
// console.log(data);

const copie =[...posts];
const index = posts.indexOf(data);
console.log(copie[index]);
copie[index] = {...posts[index], liker: !posts[index].liker};

    setPosts(copie);

   
};

const nbLike = () => {

    const nb = posts.filter(post => post.liker === true);
    console.log(nb)

    return nb.length;
}

const nbPost = () => {
   return posts.length;
}
const deletePost = (id)=>{
    
   // const index = posts.indexOf(data);
    const postFiltre = posts.filter(post => post.id !== id);
    setPosts(postFiltre);

}

  return (
    <>
      <NavBar nbLike={nbLike} />
      
      {posts.length > 0 ? (
        posts.map(p => (
          <Post 
            data={p} 
            key={p.id} 
            liker={liker} 
            deletePost={deletePost} 
          />
        ))
      ) : (
        <p>Aucun post trouvé</p>
      )}
      <Footer/>
    </>
  )
}

export default App
