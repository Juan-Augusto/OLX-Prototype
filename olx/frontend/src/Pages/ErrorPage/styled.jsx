import styled from "styled-components";

export const NotFoundTemplate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .not-found-card{
        width: 300px;
        border: solid #000000 1px;
        transition: .3s;
        margin: 20px;
        & img{
            width: 300px;
        }
        &:hover{
            transform: scale(1.1);
        }
        
    }
`;