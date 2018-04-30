import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from "../actions/index";
import { Link } from "react-router";

class CreatePost extends Component {
    static contextTypes = {
        router:PropTypes.object
    };

    submitPost(props){
        this.props.createPost(props).then(
          this.context.router.push("/posts")
        );
    }


    render () {

        const { fields:{ title , category, content } , handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitPost.bind(this))}>
                <h3>Create New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger':''}`}>
                    <label>Title</label>
                    <input {...title} type="text" className="form-control"/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${category.touched && category.invalid ? 'has-danger':''}`}>
                    <label>Categories</label>
                    <input  {...category} type="text" className="form-control"/>
                    <div className="text-help">
                        {category.touched ? category.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger':''}`}>
                    <label>Content</label>
                    <textarea {...content} type="text" className="form-control"/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/posts" className="btn btn-danger" >Cancel</Link>
            </form>

        );
    }
}

const validate=(values) => {
  const errors = {};
    if (!values.title){
      errors.title = "Enter a Title";
    }
    if (!values.content){
      errors.content = "Enter Content";
    }
    if (!values.category){
      errors.category = "Enter Category";
    }
  return errors;
};

export default reduxForm({
    form:'CreatePost',
    fields:['title','category','content'],
    validate
},null, {createPost})(CreatePost);