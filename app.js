sdbdbsdbb////
ddfd////



const heading = React.createElement("div",{id:"parent"},[(React.createElement("div",{id:"child"},[(React.createElement("h1",{id:"child"},"I am a H1 tag")),(React.createElement("h2",{id:"child"},"I am a H2 tag"))])),(React.createElement("div",{id:"child"},[(React.createElement("h1",{id:"child"},"I am a H1 tag")),(React.createElement("h2",{id:"child"},"I am a H2 tag"))]))]);
const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(heading);
console.log(heading);