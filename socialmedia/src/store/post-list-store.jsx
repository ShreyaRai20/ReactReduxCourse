import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{},
})

const postListReducer = (currPostList, action) => {
  
  let newPostList = currPostList
  if(action.type === "NEW_POST"){
    newPostList = [
      action.payload,
      ...currPostList
    ]
    return newPostList
  } else if (action.type === "DELETE_POST"){
    newPostList = currPostList.filter( (item) => (item.postId !== action.payload.id))
    return newPostList
  }
  return newPostList
}
 

const PostListProvider  = ({children}) => {
  
  const [postList, dispatchPostList] = useReducer(postListReducer, [])
  
  const addPost = (title, body, tag) => {
    dispatchPostList({
      type: "NEW_POST",
      payload: {
        postId: postList.length,
        postTitle: title,
        body: body,
        reactions: 3,
        userId: '',
        tags: tag.split(' ')
      }
    })
  }

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  }

    return(
        <PostList.Provider value = {{
            postList: postList,
            addPost,
            deletePost
        }}>
            {children}
        </PostList.Provider>
    )
}

// const DEFAULT_POST_LIST = [{
//   postId: '1',
//   postTitle: 'Go to Mum',
//   body: 'Hi there!!',
//   reactions: 2,
//   userId: '9',
//   tags: ['vacation', 'mumbai', 'enjoying']
// },
// {
//   postId: '2',
//   postTitle: 'Go to del',
//   body: 'Hi there!! all ',
//   reactions: 3,
//   userId: '2',
//   tags: ['pass', 'grad']
// }]

export default PostListProvider