import { useContext } from "react"
import PostCard from "./PostCard"
import { PostList as PostListData } from "../store/post-list-store"


function PostList() {
  const {postList} = useContext(PostListData)

  return (
    <>
    {postList.map(({postId, postTitle, body, reactions, tags})=>(
      <PostCard key={postId} id = {postId} title={postTitle} body={body} reactions = {reactions} tags ={tags}/>
    ))}
    </>
  )
}

export default PostList
