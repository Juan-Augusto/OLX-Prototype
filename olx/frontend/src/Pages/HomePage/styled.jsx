import styled from "styled-components";

export const PageArea = styled.div`
    h2{
        font-size: 20px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
    }
    .seeAllLink{
        color: #000;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin-top: 10px;
    }
`;
export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox{
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px .3px rgba(0,0,0,.2);
        display: flex;
        form{
            flex: 1;
            display: flex;
            
            input, select{
                height: 40px;
                border: 0;
                border-radius: 5px;
                outline: 0;
                font-size: 15px;
                margin-right: 20px; 
            }
            input{
                flex: 1;
                padding: 0 10px;
            }
            select{
                width: 100px;
            }
            button{
                background-color: #007;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                color: #FFF;
                padding: 0 20px;
                cursor: pointer;
                transition: .3s;
                &:hover{
                    background-color: #060;
                    transform: translateY(-3px);
                }
            }
        }
    }
    .categoryList{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

       
        .categoryItem{
            width: 25%;
            display: flex;
            align-items: center;
            color: #000;
            text-decoration: none;
            height: 50px;
            margin-bottom: 10px;
            transition: .3s;
            border-radius: 5px;
            padding: 5px;

            &:hover{
                transform: translateY(-3px);
                background-color: #007;
                color: #999;
                font-weight: bold;
            }

            img{
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
            
        }
    }
`;