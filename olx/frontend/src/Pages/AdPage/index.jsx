
import { AdArea, Fake, OthersArea, BreadCrumb } from "./styled";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../Components/MainComponents";
import { Link } from "react-router-dom";
import useAPI from '../../Components/Helpers/OlxApi'
import { useEffect, useState } from "react";
import {Slide} from 'react-slideshow-image';
import AdItem from '../../Components/Partials/AdItem';
import 'react-slideshow-image/dist/styles.css';

export const AdPage = () => {
    const api = useAPI();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const[adInfo, setAdInfo] = useState({});
    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, [])
    const formatDate = (date) => {
        let cDate = new Date(date);
        let months = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ];
        let cDay = cDate.getDate();
        let cMonth = cDate. getMonth();
        let cYear = cDate.getFullYear();
        return `${cDay} de ${months[cMonth]} de ${cYear}`
    }
        return(
            
            <PageContainer>
                {adInfo.category &&
                    <BreadCrumb>
                        Você está aqui:  
                        <Link to="/">Home</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                        /
                        <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                        /
                        {adInfo.title}
                    </BreadCrumb>
                }
                <AdArea>
                    <div className="leftSide">
                        <div className="box">
                            <div className="adImage">
                                {
                                    loading && <Fake height={300}/>
                                }
                                {
                                    adInfo.images &&
                                    <Slide>
                                        {adInfo.images.map((img, imageKey) => 
                                            <div key={imageKey} className='each-child'>
                                                <img src={img} alt="item-image" />
                                            </div>
                                        )}
                                    </Slide>
                                }
                            </div>
                            <div className="adInfo">
                                <div className="adName">
                                    {
                                        loading && <Fake height={20}/>
                                    }
                                    {
                                        adInfo.title &&
                                        <h2>{adInfo.title}</h2>

                                    }
                                    {
                                        adInfo.dateCreated &&
                                        <small>Criado em: {formatDate(adInfo.dateCreated)}</small>
                                    }
                                </div>
                                <div className="adDescription">
                                    {
                                        loading && <Fake height={100}/>
                                    }
                                    {adInfo.description}
                                    <hr />
                                    {
                                        adInfo.views &&
                                        <small>Visualizações: {adInfo.views}</small>
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
                            {
                                adInfo.priceNegotiable &&
                                "Preço negociável"
                            }
                            {
                                !adInfo.priceNegotiable && adInfo.price &&
                                    <div className="price">
                                        Preço: <span>R$ {adInfo.price},00</span>
                                    </div>
                            }
                        </div>
                        {
                            loading && <Fake height={50}/>
                        }
                        {adInfo.userInfo &&
                            <>
                                <div className=" createdBy box box--adjustment">
                                    Criado por:
                                    <strong>{adInfo.userInfo.name}</strong>
                                    <small>E-mail: {adInfo.userInfo.email}</small>
                                    <small>Estado: {adInfo.stateName}</small>
                                </div>
                                <a href={`mail to: ${adInfo.userInfo.email}`} className="contactSeller" target="_blank"> Fale com o vendendor</a>

                            </>    
                        }
                    </div>

                    
                </AdArea>
                <OthersArea>

                    {
                        adInfo.others &&
                        <>
                            <h2>Outras ofertas do vendedor</h2>
                            <div className="list">
                                {
                                    adInfo.others.map((item, otherItemsKey) =>
                                        <AdItem key={otherItemsKey} data={item}/>
                                    )
                                }
                            </div>
                        </>
                    }
                </OthersArea>

            </PageContainer>
    );
}