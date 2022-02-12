import { useState, useEffect } from "react";
import { PageArea, SearchArea } from "./styled";
import { PageContainer } from "../../Components/MainComponents";
import useAPI from '../../Components/Helpers/OlxApi'
import { Link } from "react-router-dom";
import { AdItem } from "../../Components/Partials/AdItem";

export const Home = () => {
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
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="ads">
                            <input type="text" name="q" placeholder="O que você procura?"/>
                            <select name="state">
                                {stateList.map((state, stateKey) =>
                                    <option key={stateKey} value={state.name}>{state.name}</option>
                                )}
                            </select>
                            <button>
                                Pesquisar
                            </button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((category, categoryKey) =>
                            <Link key={categoryKey} to={`ads?cats=${category.slug}`} className="categoryItem">
                                <img src={category.img} alt="" />
                                <span>{category.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios recentes</h2>
                    <div className="list">
                        {adList.map((ads, adKey) =>
                            <AdItem key={adKey} data={ads}/>
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">
                        Ver todos
                    </Link>
                    <hr />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat temporibus officiis magni, sunt odio error consectetur doloremque suscipit fugit ad est cum quis a, nemo asperiores nostrum voluptates aspernatur.
            
                </PageArea>
            </PageContainer>
        </>
    );
}