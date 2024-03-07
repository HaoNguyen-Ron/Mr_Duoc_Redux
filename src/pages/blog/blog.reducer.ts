import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constant/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initalPostList
}

//Create actions

export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    // nếu dùng React đơn thuần: state.postList.push() là 1 điều cấm kỵ vì ta đang bị tham chiếu đến object (mutate object) mà react state chỉ được dùng setState để thay đổi giá trị (nếu state là object thì dụng SPREAD OPERATOR + phần tử trong state cần set)

    //Tuy nhiên, trong Redux toolkit, việc sử dụng state.postList.push() sẽ không ảnh hưởng đến giá trị gốc đang sử dụng Immerjs: tạo 1 draft state và cho phép ta mutate trên đó.
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
