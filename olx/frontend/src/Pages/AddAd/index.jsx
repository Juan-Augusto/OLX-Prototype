import { useState, useRef } from "react";
import { LoginArea } from "./styled";
import { PageContainer, PageTitle } from "../../Components/MainComponents";
import useAPI from '../../Components/Helpers/OlxApi'
import { doLogin } from "../../Components/Helpers/AuthHandler";
import { ErrorMessage } from "../../Components/MainComponents";

export const AddAdPage = () => {
    const api = useAPI();

    const fileField = useRef();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');
    const [ disabled, setDisabled ] = useState(false);
    const [error, setError] = useState('');

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     setDisabled(true);

    //     const json = await api.login(email, password);
    //     if(json.error) {
    //         setError(json.error);
    //     }else{
    //         doLogin(json.token, rememberPassword); //saves cookie
    //         window.location.href = '/'
    //     }
    //     setDisabled(false);
    // }

    return(
        <PageContainer>
            <PageTitle>Postar um anúncio</PageTitle>
            <LoginArea>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }
                <form onSubmit={alert}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                disabled={disabled} 
                                value={title}
                                onChange={e=>setTitle(e.target.value)}    
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select name="" id=""></select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            ...
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e=>setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                disabled={disabled}
                                value={description}
                                onChange={e=>setDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                            <input 
                                type="file" 
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Adicionar anúncio</button>
                        </div>
                    </label>
                </form>  
            </LoginArea>
        </PageContainer>
    );
}