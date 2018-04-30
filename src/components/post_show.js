import React, {Component,PropTypes} from  'react';
import { deletePost, fetchPost } from "../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router";

class ShowPost extends Component{
    static contextTypes ={
      router:PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    deleteThisPost(id){
        this.props.deletePost(this.props.params.id).then(
            this.context.router.push("/posts")
        );
    }

    render () {
        if (!this.props.post){
            return <div>Loading ... </div>
        }
        const { title, categories, content } =this.props.post;
        return (
            <div>
                <Link to="/posts">{`<Back to Index`}</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.deleteThisPost.bind(this)}>Delete</button>
                <h3>{title}</h3>
                <h6>{categories}</h6>
                <p>{content}</p>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
  return{
      post:state.post.post
  }
};

export default connect(mapStateToProps,{ fetchPost, deletePost })(ShowPost);