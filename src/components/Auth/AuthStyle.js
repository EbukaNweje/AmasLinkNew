import styled from "styled-components";

export const NavRight = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    /* background: yellow; */
    gap: 20px;
    justify-content: flex-end;

    button {
        width: 30%;
        padding: 10px;
        border: none;
        background-color: #FF0000;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
`
export const Logo = styled.div`
    width: 20%;
    height: 100%;
    /* background-color: #fff; */
    display: flex;
    align-items: center;
    object-fit: cover;

    img{
        width: 100%;
        object-fit: cover;
    }
`
export const AuthHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 40%;
    height: max-content;
    /* background: red; */
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
`
export const MymainBody = styled.div`
    width: 100%;
    height: 100vh;
    background: #F8F9F9;
    display: flex;
    justify-content: center;
`