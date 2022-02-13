import styled from "styled-components";

export const Item = styled.div`
    a{
        color: #000;
        display: block;
        border: 1px solid #FFF;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
        background-color: #FFF;
        transition: all ease .3s;

        &:hover{
            transform: scale(1.15);
            border: 1px solid #CCC;

        }

        .item-image img{
            width: 100%;
            border-radius: 5px;
        }

        .item-name{
            color: #000;
            font-weight: bold;
        }
    }
`;
