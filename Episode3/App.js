import React from "react";
import ReactDOM from "react-dom/client";

// const heading = <h1>Hello Akansha</h1>;

// const heading = (<h1 id="ank" className="ank">
// Hello Ankit
// </h1>
// );

//it is jsx to create react element and it is html or xml like syntax.
// console.log(heading); and jsx converted into react element at the end it is object and this convertion done by the parcel and parcel take help of babel.

// React Component (at the end everything in react is component)
// 1. class based(old way) and 2. functional component(new way)
// class based component uses javascript class and functional component uses javascript function.

const HeadingComponent = () => {
    return <h1>Hello this is react element creation using react component</h1>;
}                                      // THIS ONE IS PROPER SYNTAX AND ALSO RECOMMENDED ONE

const HeadingComponent1 = () => true;  // THIS ONE IS ALSO CORRECT

const HeadingComponent2 = () => (<h1 
    className="Hello" id="hello">Hello bro 1
    </h1>
);       
const HeadingComponent3 = () => (
    <div> 
        <HeadingComponent2/>
        <h1 className="Hello" id="hello">Hello bro 2</h1>
    </div>
);                                     // THIS IS ALSO CORRECT BUT IT IS USED FOR WHEN YOU WANT MULTIPLE LINE IN YOUR CODE

// Creating react functional component using normal function
const HeadingComponent4 = function () {
    return (
    <div>
        <h1 className="normal">
            Hello using normal function to creating a react component
        </h1>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent4 />);