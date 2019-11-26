import React from "react";
import styled from "styled-components"
import ItemContainer from "../components/ItemContainer";
import Search from "../components/Search";
import Background from "../components/Background";



class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (
            <div>
                <Background></Background>
                <Search></Search>
                <ItemContainer></ItemContainer>
            </div>
        );
    }
}

export default Main;
