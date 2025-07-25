import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store"

function PostCard({id, title, body, reactions, tags}) {
  const {deletePost} = useContext(PostListData)
  return (
    <div className="card post-card">
  <div className="card-body">
    <h5 className="card-title">
      {title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick= {()=>{deletePost(id)}}>
    <MdDelete />
    <span className="visually-hidden">unread messages</span>
  </span>
    </h5>
    <p className="card-text">{body}</p>
    <FaHeart /> : {reactions}
    <br/>
    {tags.map((tag,index)=>(
      <span key={index} className="badge text-bg-secondary" style={{margin: "2px"}}>{tag}</span>
    ))}
  </div>
</div>
  )
}

export default PostCard
