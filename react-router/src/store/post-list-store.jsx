// import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useReducer,useCallback } from "react";

export const PostList = createContext({
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{},
    // fetching: false
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
    newPostList = currPostList.filter( (item) => (item.id !== action.payload.id))
    return newPostList
  } else if (action.type === "NEW_POSTS"){
    newPostList = action.payload.posts
    return newPostList
  }
  return newPostList
}
 

const PostListProvider  = ({children}) => {
  
  const [postList, dispatchPostList] = useReducer(postListReducer, [])
    const [fetching, setFetching] = useState(false)

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
  //     controller.abort()
  //   }
  // },[])
  
  const addPost = (post) => {
    dispatchPostList({
      type: "NEW_POST",
      payload: post,
    })
  }
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "NEW_POSTS",
      payload: {
        posts
      }
    })
  }

  const deletePost = useCallback((id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  },[dispatchPostList])



  // const arr = [5,2,3,4,5,6,8]
  // const sortedArr = useMemo(()=>arr.sort(),[arr])

    return(
        <PostList.Provider value = {{
            postList: postList,
            addPost,
            deletePost,
            // fetching
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