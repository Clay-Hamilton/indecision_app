import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}) );
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };
    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid input.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists.";
        }

        this.setState((prevState) => ({options:prevState.options.concat(option)}));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    componentDidMount() {
        try { //use try/catch for invalid JSON:
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) { //only setState if there's something in options:
                this.setState(() => ({options: options}));
                //if variable name is the same you can just write {options}
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount!");
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                        <OptionModal
                            selectedOption={this.state.selectedOption}
                            handleClearSelectedOption = {this.handleClearSelectedOption}
                        />
                    </div>
                </div>
            </div>
        );
    }
}