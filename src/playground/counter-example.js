class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try { //use try/catch for invalid JSON:
            const stringCount = localStorage.getItem("count");
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({count: count}));
            }
            //if variable name is the same you can just write {count}
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            localStorage.setItem("count", this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count - 1
        //     };
        // });
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }


    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

//provides default props if they're not entered (in ReactDOM.render in this case)
// Counter.defaultProps = { 
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById("app"));










// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// );


// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();