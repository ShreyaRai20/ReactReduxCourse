import { useContext } from "react"
import PostCard from "./PostCard"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMessage from "./WelcomeMessage"
import { useState } from "react"
import { useEffect } from "react"
import LoadingSpinner from "./LoadingSpinner"


function PostList() {
  const {postList, fetching} = useContext(PostListData)


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
    {fetching && <LoadingSpinner/>}
    {
      !fetching && 
      postList.length === 0 && <WelcomeMessage
      //  onGetPost ={onGetPost}
       />
    }
    {!fetching && postList.map(({ id, title, body, reactions, tags }) => (
  <PostCard key={id} id={id} title={title} body={body} reactions={reactions.likes} tags={tags} />
))}


    

    {/* {postList.map(({postId, postTitle, body, reactions, tags})=>(
      <PostCard key={postId} id = {postId} title={postTitle} body={body} reactions = {reactions} tags ={tags}/>
    ))} */}
    </>
  )
}

export default PostList
