import React, {Component} from 'react';

class Add extends Component {

onAdd(event){
    event.preventDefault();
    var name = event.target['name'].value;
    var price = event.target['price'].value;

    let posts = {
        name: name,
        price: price
    }
    var postJson = JSON.stringify(posts);
        console.log(postJson);

    fetch("http://127.0.0.1:8000/api/posts",{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: postJson,
    })
    .then((Response) => {
        console.log(Response);
    });
    
}
render(){
    return(
        <div>
           <form onSubmit = {this.onAdd}>
               <input type="text" name="name"></input>
               <input type="number" name="price"></input>

               <button type="submit"> add </button>
           </form>
        </div>
    )
}

}
export default Add;