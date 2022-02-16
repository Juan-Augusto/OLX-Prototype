
import { AdArea, Fake } from "./styled";
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
                                {
                                    loading && <Fake height={300}/>
                                }
                            </div>
                            <div className="adInfo">
                                <div className="adName">
                                    {
                                        loading && <Fake height={20}/>
                                    }
                                </div>
                                <div className="adDescription">
                                    {
                                        loading && <Fake height={100}/>
                                    }
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div className="rightSide">
                        <div className="box box--adjustment">
                            {
                              loading && <Fake height={20}/>
                            }
                        </div>
                        <div className="box box--adjustment">
                            {
                              loading && <Fake height={50}/>
                            }
                        </div>
                    </div>
                </AdArea>
            </PageContainer>
       // }
    );
}