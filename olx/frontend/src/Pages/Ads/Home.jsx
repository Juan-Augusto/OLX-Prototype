import { useState, useEffect } from "react";
import { PageArea, SearchArea } from "./styled";
import { PageContainer } from "../../Components/MainComponents";
import useAPI from '../../Components/Helpers/OlxApi'
import { Link } from "react-router-dom";
import  AdItem  from "../../Components/Partials/AdItem";

export const Ads = () => {
    const api = useAPI();
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setadList] = useState([]);


    useEffect(() => {
        const getStates = async() => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);
    useEffect(() => {
        const getCategories = async() => {
            const cList = await api.getCategories();
            setCategories(cList);
        }
        getCategories();
    }, []);
    useEffect(() => {
        const getRecentAds = async() => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setadList(json.ads);
            
        }
        getRecentAds();
    }, []);
    return(
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="q" />

                        <div className="filterName">Estado:</div>
                        
                        <select name="state" id="">
                            <option value=""></option>
                            {
                                stateList.map((stateForm, stateFormKey) => 
                                    <option value={stateForm.name} key={stateFormKey}>{stateForm.name}</option>
                                )
                            }
                        </select>
                    
                        <div className="filterName"> Categoria:</div>
                        <ul>
                            {
                                categories.map((categories, categoriesKey) =>
                                    <li key={categoriesKey} className="categoryItem"> 
                                        <img src={categories.img} alt="teste" />
                                        <span>{categories.name}</span>
                                    </li>
                                )
                            }
                        </ul>
                           
                    </form>
                </div>
                <div className="rightSide">
                    ...
                </div>
            </PageArea>
        </PageContainer>
    );
}