class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility() { 
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Here are some details! (again)</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));




// let isVisible = false;

// const toggleVisibility = () => {
//     //show details:
//     if(!isVisible) {
//         isVisible = true;
//     }
//     else {
//         isVisible = false;
//     }
//     render();
// }

// const appRoot = document.getElementById("app");

// const render = () => {
//     const template2 = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{isVisible ? "Hide Details" : "Show Details"}</button>
//             {isVisible && <p>"Here are some details!"</p>}
//             <button onClick={toggleVisibility}>{!isVisible ? "Forgot Password? Click here." : "You'll remember it! I believe in you!"}</button>
//         </div>
//     )

//     ReactDOM.render(template2, appRoot);
// };

// render();