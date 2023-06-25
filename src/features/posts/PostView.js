import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'











import { featchPosts } from './postesSlice';










const PostView = () => {
    const {isLoading,error,posts} = useSelector((state) =>state.posts);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(featchPosts());
    })
  return (
    <div>
        <h4>PostView</h4>

        {isLoading && <h5>Loading ...</h5>}
        {error && <h>{error}</h>}
         <section>
         {posts && posts.map((post) =>{
            return <section>
                 <article>
                <h5>{"Id : "+post.id}</h5>
                <h5>{"title : "+post.title}</h5>
                <h5>{"body : "+post.body}</h5>
                 </article>
                 </section>
           
        })}
         </section>

    </div>
  )
}

export default PostView