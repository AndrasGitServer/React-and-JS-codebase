import React, { Component } from 'react';


// ***     class-based component    ***


class MyNewComponent extends Component {

    render() {

        const { my_text, my_age , my_hobbies } = this.props;      // Destructuring or use this.props.my_text
    
        return (
        
            <div>
               <h1> We are in MyNewComponent *** { my_text} *** </h1>

               <h2> Your age *** { my_age } *** </h2>

               {    
                    my_hobbies.map( (item , index) => 
                       <ul key={ index }>
                           <li> { index + 1 } * { item } </li>
                       </ul>
                   )
               }

            </div>
        
        );
    
    }
}
    
export default MyNewComponent;
