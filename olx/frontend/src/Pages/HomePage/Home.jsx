import { useState, useEffect } from "react";
import { PageArea, SearchArea } from "./styled";
import { PageContainer } from "../../Components/MainComponents";
import useAPI from '../../Components/Helpers/OlxApi'
import { Link } from "react-router-dom";

export const Home = () => {
    const api = useAPI();
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);

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
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}