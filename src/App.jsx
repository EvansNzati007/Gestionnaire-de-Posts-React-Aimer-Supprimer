import { useState } from 'react'
import './App.css'
import NavBar from '../../Learn-React/src/composants/NavBar';
import Post from './composants/Post';
import Footer from './composants/Footer';

function App() {
 
  

  const [posts, setPosts] = useState([
    {
        id :1,
        titre: "Nzati Doumbi Evans",
        description:
        "voici un exemple de description de texte placer ici meme",
        liker: false
    },
    {
        id :2,
        titre: "Leo Messi",
        description:
        "voici un exemple de description de texte placer ici meme",
        liker: false
    },
    {
        id :3,
        titre: "Jeff Bezos",
        description:
        "voici un exemple de description de texte placer ici meme",
        liker: false
    },
    {
        id :4,
        titre: "Aliko Dangote",
        description:
        "voici un exemple de description de texte placer ici meme",
        liker: false
    },
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
