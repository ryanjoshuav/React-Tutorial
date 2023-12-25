import AddPostForm from "./features/posts/AddPostForm";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SingPostPage";
import EditPostForm from "./features/posts/EditPostForm";
import PostsList from "./features/posts/PostsLists";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* if page is not found */}
        {/* <Route path="*" element={<Navigate to={"/"} replace />} /> */}
      </Route>
    </Routes>
  );
};
export default App;