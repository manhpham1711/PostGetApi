import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";

class Posts extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
        this.getData();
    }

    getData(){
        localStorage.removeItem('posts');
        fetch("http://127.0.0.1:8000/api/getdata")
        .then(response => {
                response.json().then((data) =>  {
                    console.log(data);
                    localStorage.setItem('posts',JSON.stringify(data));
                this.updateUI(data);
            });
        });
        }

    updateUI(data){
        this.setState({
            posts:data
        })
    }

    show(){
        const { posts } = this.state;
        var list = posts.map((item,index)=>
            <div key = {index}>
                <h3>{item.id}</h3>
                <h4>{item.name}</h4>
                <h3><Link to={'/posts/'+item.id}>Detail</Link></h3>
            </div>
        )
        return list;

    }

    render(){
        return(
            <div>
            <h4>Posts</h4>
            {this.show()}
            </div>
        )
        }
}

export default Posts;