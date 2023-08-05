const heading1 = React.createElement("h1",{id:"title"},"heading1")
const heading2 = React.createElement("h2", {id:"title"},"heading2")
const container = React.createElement("div", {id:"container"}, [heading1,heading2]);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the render method

//async defer
root.render(container);