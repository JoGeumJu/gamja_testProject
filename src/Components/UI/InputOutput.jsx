import React, {useState, useRef} from 'react';
import styled from 'styled-components';

// styledComponents
const Wrapper = styled.div`
    margin: 12px;

    box-shadow: 3px 3px 10px grey;
    border-radius:10px; 
`;

const Output = styled.div`
    padding:12px;
    padding-bottom:24px;
    width:60vw;
    height:30vh;

    background-color: #8DB18D;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;  

    color: #F0F0F0;
    font-size:14px;
    text-align:left;

    word-break: break-all;
    overflow-y: auto;
    overflow-x: visible;

    &::-webkit-scrollbar {
        width: 19px;
        height: 5px;\
        border-radius: 10px;
    }
    &::webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.0);
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        background-clip: padding-box;
        border: 7px solid transparent;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-button {
        height:1px;
        background-color:rgba(255, 255, 255, 0.0);
    }
`;

const P = styled.p`
    padding-top: 1px;
    margin: 0px;
`;

const Input = styled.input`
    padding:8px 12px;
    width: 60vw;

    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    text-align:center;

    border: 0px;
`;

function InputOutput(props){
    const [content, setContent] = useState('');
    const [contents, setContents] = useState([]);

    const scrollRef = useRef();

    const onChangeInput = (e) => {
        setContent(e.target.value);
    };
    const onChangeOutput = (e) => {
        setContents([...contents, e.target.value]);
    };
    const scrollToBottom = () => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    };
    const onEnter = (e) => {
        if(e.key==='Enter' && e.target.value!==""){
            onChangeInput(e);
            onChangeOutput(e);
            setContent('');
            scrollToBottom();
            console.log(scrollRef.current.scrollHeight);
            console.log(scrollRef.current.scrollTop);
            console.log("--------------------");
        }
    };

    return (
        <Wrapper>
            <Output name="outputBox" id="ChatRoom" value={content} ref={scrollRef}>
                {contents.map((content, index) => (<P key={index}>{content}</P>))}
            </Output>
            <Input name="inputBox" placeholder="입력해주세요." value={content} onChange={onChangeInput} onKeyPress={onEnter}/>
        </Wrapper>
    );
}

export default InputOutput;