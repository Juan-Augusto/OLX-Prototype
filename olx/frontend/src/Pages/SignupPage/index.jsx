
import { LoginArea } from "./styled";
import { PageContainer, PageTitle } from "../../Components/MainComponents";
import { useState, useEffect } from "react";
import useAPI from '../../Components/Helpers/OlxApi'
import { doLogin } from "../../Components/Helpers/AuthHandler";
import { ErrorMessage } from "../../Components/MainComponents";

export const SignupPage = () => {
    const api = useAPI();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('')
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [ stateList, setStateList ] = useState([]);
    const [ disabled, setDisabled ] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword){
            setError('Senhas não batem!');
            setDisabled(false);
            return;
        }
        const json = await api.register(name, email, password, stateLoc);
        if(json.error) {
            setError(json.error);
        }else{
            doLogin(json.token); //saves cookie
            window.location.href = '/'
        }
        setDisabled(false);
    }

    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <LoginArea>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                        <label className="area">
                            <div className="area--title">Nome Completo</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled} 
                                    value={name}
                                    onChange={e=>setName(e.target.value)}    
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Estado</div>
                            <div className="area--input">
                                <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                                    <option value=""></option>
                                    {stateList.map((state, stateKey) =>
                                        <option key={stateKey} value={state._id}>{state.name}</option>
                                    )}
                                </select>
                            </div>
                        </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                disabled={disabled} 
                                value={email}
                                onChange={e=>setEmail(e.target.value)}    
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disabled}
                                value={password}
                                onChange={e=>setPassword(e.target.value)} 
                                required  
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={disabled}
                                value={confirmPassword}
                                onChange={e=>setConfirmPassword(e.target.value)} 
                                required  
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>  
            </LoginArea>
        </PageContainer>
    );
}