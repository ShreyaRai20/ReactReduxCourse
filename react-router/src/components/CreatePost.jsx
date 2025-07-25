import { useContext, useRef } from "react"
import { PostList as PostListData } from "../store/post-list-store"
import { Form, redirect, useNavigate } from "react-router-dom"

function CreatePost() {
  // const {addPost} = useContext(PostListData)
  // const titleElement = useRef('')
  // const bodyElement = useRef('')
  // const tagElement = useRef('')
  // const reactionElement = useRef('')
  // const navigate = useNavigate()

  const onAdd = (e) => {
    // e.preventDefault()
    // const title = titleElement.current.value
    // const body = bodyElement.current.value
    // const tag = tagElement.current.value.split(" ")
    // const reaction = reactionElement.current.value

    // titleElement.current.value = ""
    // bodyElement.current.value = ""
    // tagElement.current.value = ""
    // reactionElement.current.value = ""

  }

    return (
    <Form method="POST" className="create-post">
      <h1>Create Post</h1>
        <div className="mb-3">
        <label htmlFor="userId" className="htmlForm-label">User Id</label>
        <input type="text" name="userId" className="" id="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="htmlForm-label">Post Title</label>
        <input type="text" name="title" className="" id="title" />
      </div>
        <div className="mb-3">
        <label htmlFor="body" className="htmlForm-label">Post Description</label>
        <input type="text" name="body"  className="htmlForm-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="htmlForm-label">reactions</label>
        <input type="text" name="reactions" className="" id="tag" />
      </div>
            <div className="mb-3">
        <label htmlFor="tag" className="htmlForm-label">tags</label>
        <input type="text" name="tags"className="" id="tag" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
</Form>

  )


//   return (
//     <form onSubmit={(e)=>{onAdd(e)}}>
//       <h1>Create Post</h1>
//       <div className="mb-3">
//         <label htmlFor="title" className="htmlForm-label">Post Title</label>
//         <input type="text" ref={titleElement} className="" id="title" />
//       </div>
//         <div className="mb-3">
//         <label htmlFor="body" className="htmlForm-label">Post Description</label>
//         <input type="text" ref={bodyElement}  className="htmlForm-control" id="body" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="tag" className="htmlForm-label">reactions</label>
//         <input type="text" ref={reactionElement} className="" id="tag" />
//       </div>
//             <div className="mb-3">
//         <label htmlFor="tag" className="htmlForm-label">tags</label>
//         <input type="text" ref={tagElement} className="" id="tag" />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
// </form>

//   )
}

export default CreatePost


export const submitPost = async (data) =>{
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(' ')
  console.log(postData)


     fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      })
      .then(res => res.json())
      .then(post => {
        console.log(post)
        // addPost(data) 
        // navigate('/')});
      // navigate('/')
      })
      return redirect('/')
}
