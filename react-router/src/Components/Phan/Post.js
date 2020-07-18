import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Show from './show';
class Post extends Component{

    constructor(){
        super();
        this.state ={
            posts: JSON.parse(localStorage.getItem("posts")),
        }
    }
    
    show(id){

        const { posts } = this.state;
        var post = "kh tim thay";
        for(var i = 0; i< posts.length; i++){
            if(posts[i].id == id){
                post = <Show item = {posts[i]}/>;
                break;
            }
        }return post;
    }

    render(){
        const id = this.props.match.params.id;
        return(
        <div>
            <h1>chi tiet </h1>
            <div>
                {this.show(id)}
            </div>
        </div>
        );

    }
}
export default withRouter(Post);