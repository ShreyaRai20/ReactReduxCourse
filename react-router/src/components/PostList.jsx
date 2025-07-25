import { useContext } from "react"
import PostCard from "./PostCard"
// import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"
import { useState } from "react"
import { useEffect } from "react"
import LoadingSpinner from "./LoadingSpinner"
import { useLoaderData } from "react-router-dom"


function PostList() {
  // const {postList, addInitialPosts} = useContext(PostListData)
  const postList = useLoaderData()
  // const [fetching, setFetching] = useState(false)



  // useEffect(()=>{
  //   const controller = new AbortController()
  //   const signal = controller.signal
  //   setFetching(true)
  //   fetch('https://dummyjson.com/posts', {signal})
  //   .then(res => res.json())
  //   .then((data)=> {
  //     addInitialPosts(data.posts)
  //     setFetching(false)
  //   });

  //   return () => { // call when killing
  //     console.log("cleaning up")
  //     controller.abort()
  //   }
  // },[])

  // const [dataFetched, setDataFetched] = useState(false)
  
  // if (!dataFetched){
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then((data)=> (addInitialPosts(data.posts)));
  //   setDataFetched(true)
  // }


  // const onGetPost = () => {
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then((data)=> (addInitialPosts(data.posts)));
  // }


  return (
    <>
    {/* {fetching && <LoadingSpinner/>} */}
    {
      postList.length === 0 && <WelcomeMessage
      //  onGetPost ={onGetPost}
       />
    }
  { postList.map(({ id, title, body, reactions, tags }) => (
  <PostCard key={id} id={id} title={title} body={body} reactions={reactions.likes} tags={tags} />
))}


  


    {/* {postList.map(({postId, postTitle, body, reactions, tags})=>(
      <PostCard key={postId} id = {postId} title={postTitle} body={body} reactions = {reactions} tags ={tags}/>
    ))} */}
    </>
  )
}

export default PostList


export const dataLoader = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=> {return data.posts});
  }
