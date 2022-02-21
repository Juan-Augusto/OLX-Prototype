import styled from "styled-components";


export const Fake = styled.div`
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`;

export const AdArea = styled.div`
    display: flex;
    margin-top: 20px;
    
    
    .box{
        display: flex;
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0 0 4px #999;
        margin-bottom: 20px;
    }
    .box--adjustment{
        display: flex;
        justify-content: center;
        padding: 10px;
        border: 1px inset red;
        transition: .3s;
        box-shadow: -5px -5px 1px #ff0000;



    }
    .box--adjustment:hover{
        border: 1px solid blue;
        box-shadow: 5px 5px 5px #0000ff;
        transform: translateY(-3px);
        
    }
    .leftSide{
        flex: 1;
        margin-right: 20px;
        .adImage{
            width: 320px;
            heigth: 320px;
            margin-right: 20px;
            
            each-slide img{
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }
        .adInfo{
            padding: 10px;
            .adName{
                margin-bottom: 20px;
            }
            small{
                color: #999;
            }
            .adDescription{
                
            }
        }

    }
    .rightSide{
        width: 250px;
        .price{
            padding: 5px;
            border-radius: 5px;
        }
        .price span{
            display: block;
            font-size: 27px;
            font-weight: bold;
        }
        .contactSeller{
            background-color: #FFF;
            color: #000;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 25px;
            box-shadow: -5px -5px 1px #ff0000;
            border-radius: 5px;
            text-decoration: none;
            transition: .3s;
        }
        .contactSeller:hover{
            background-color: #000;
            color: #FFF;
            border: 1px solid blue;
            box-shadow: 1px 1px 7px #0000ff;
            transform: translateY(-3px);
        }
        .createdBy{
            flex-direction: column;
        }

    }

`;
export const OthersArea = styled.div`
    h2{
        font-size: 20px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;


        .--ad-item{
            width: 25%;
        }
    }
`;
export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a{
        display: inline-block;
        margin: 0 5px;
        text-decoration: underline;
        color: #000;
    }


`;
