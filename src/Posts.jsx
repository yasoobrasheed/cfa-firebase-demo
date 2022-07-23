import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from './firebase_config.js';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [content, setContent] = useState("")
  const [imgsrc, setImgSrc] = useState("")

  const readPosts = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'posts/');
    onValue(dbRef, (snapshot) => {
      const dbTable = snapshot.val();

      const newPosts = []
      dbTable.forEach((dbItem) => {
        newPosts.push(dbItem)
      })
      console.log(newPosts)
      setPosts(newPosts)
    })
  }

  const writePost = (postId, content, imgsrc) => {
    const db = getDatabase(app);
    set(ref(db, 'posts/' + postId), {
      content: content,
      imgsrc: imgsrc
    });
  }

  useEffect(() => {
    readPosts()
  }, [])

  return (
    <>
      <form onSubmit={() => writePost(posts.length + 1, content, imgsrc)}>
        <label>
          Content:
          <input type="text" value={content} onChange={() => setContent(event.target.value)} />
        </label>
        <label>
          Image Source:
          <input type="text" value={imgsrc} onChange={() => setImgSrc(event.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {posts.map(
        post => (
          <div>
            <p>{post.content}</p> 
            <img src={post.imgsrc}/>
          </div>
        )
      )}
    </>
  )
}

export default Posts;