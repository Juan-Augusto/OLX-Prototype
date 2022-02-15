
import { AdArea } from "./styled";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import useAPI from '../../Components/Helpers/OlxApi'
import { useState } from "react";

export const AdPage = () => {
    const api = useAPI();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const[adInfo, setAdInfo] = useState([]);
    //if(){
        return(
            
            <PageContainer>
                <AdArea>
                    <div className="leftSide">
                        <div className="box">
                            <div className="adImage">
                                ...
                            </div>
                            <div className="adInfo">
                                <div className="adName">
                                    ...
                                </div>
                                <div className="adDescription">
                                    ...
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div className="rightSide">
                        ...
                    </div>
                </AdArea>
            </PageContainer>
       // }
    );
}