import React from 'react';
import styled from 'styled-components';
import Pin from "./Pin";
import uniqid from "uniqid";
import "./Mainboard.css"
const Mainboard = ({pins}) =>  {
    return(
        <Wrapper>
            <Container className="main-board-container">
                {
                    pins.map(pin => {
                        const {urls} = pin;
                        const key = uniqid();
                        return(
                            <Pin
                                key={key}
                                urls={urls}/>
                        );
                    })
                }
            </Container>
        </Wrapper>
    );
}

export default Mainboard;

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 15px;
`

const Container = styled.div`
    display: grid;
    height: 100%;
    margin: 0 auto;
`