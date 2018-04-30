import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./components/app";
import PostList from "./containers/posts_index";
import CreatePost from "./components/create_post";
import ShowPost from "./components/post_show";

export default (
      <Route path="posts" component={App}>
            <IndexRoute component={PostList}/>
            <Route path="new" component={CreatePost}/>
            <Route path=":id" component={ShowPost}/>
      </Route>
)