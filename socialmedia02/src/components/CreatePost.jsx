import { useContext, useRef } from "react"
import { PostList as PostListData } from "../store/post-list-store"

function CreatePost() {
  const {addPost} = useContext(PostListData)
  const titleElement = useRef('')
  const bodyElement = useRef('')
  const tagElement = useRef('')

  const onAdd = (e) => {
    e.preventDefault()
    const title = titleElement.current.value
    const body = bodyElement.current.value
    const tag = tagElement.current.value
    addPost(title, body, tag)
    titleElement.current.value = ""
    bodyElement.current.value = ""
    tagElement.current.value = ""
  }

  return (
    <form onSubmit={(e)=>{onAdd(e)}}>
      <h1>Create Post</h1>
      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">Post Title</label>
        <input type="text" ref={titleElement} className="" id="title" />
      </div>
        <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">Post Description</label>
        <input type="text" ref={bodyElement}  className="htmlForm-control" id="body" />
      </div>
            <div className="mb-3">
        <label htmlFor="tag" className="htmlForm-label">tags</label>
        <input type="text" ref={tagElement} className="" id="tag" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}

export default CreatePost
