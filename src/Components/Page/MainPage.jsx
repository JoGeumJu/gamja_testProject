import React from "react";
import styled from "styled-components";
import InputOutput from "../UI/InputOutput";

const Wrapper = styled.div`
    padding: 8px;
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

const Title = styled.h3`
    margin: 12px;
`;

function MainPage(props){


    return (
        <Wrapper>
            <Title>
                202010114 조금주 감자4기 프론트 과제
            </Title>
            <InputOutput/>
        </Wrapper>
    );
}

export default MainPage;