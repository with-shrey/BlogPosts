import React, { Component } from 'react';
import { fetchPosts } from "../actions/index";
import { connect } from 'react-redux';
import  {Link} from 'react-router';
import { bindActionCreators } from "redux";

class PostList extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    renderList(){
        return this.props.posts.map((post) => {
            return (
                <Link to={"/posts/"+post.id} key={post.id}>
                <li className="list-group-item" >
            <span className="pull-xs-right">{post.categories}</span>
                <strong>{post.title}</strong>
                </li>
                </Link>
           );
        });
    }

    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className=" btn btn-primary">Create New Post</Link>
                </div>

                <h3 className="text-xs-left">List Of Posts</h3>
                <ul className="list-group">
                { this.renderList() }
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts:state.post.all
    }
};

export default connect(mapStateToProps,{fetchPosts})(PostList);