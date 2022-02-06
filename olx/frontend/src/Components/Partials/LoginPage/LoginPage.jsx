
import { LoginArea } from "./styled";
import { PageContainer, PageTitle } from "../../MainComponents";
import { useState } from "react";
import useAPI from '../../Helpers/OlxApi'
import { doLogin } from "../../Helpers/AuthHandler";
import { ErrorMessage } from "../../MainComponents";

export const LoginPage = () => {
    const api = useAPI();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ rememberPassword, setRememberPassword ] = useState('');
    const [ disabled, setDisabled ] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);
        if(json.error) {
            setError(json.error);
        }else{
            doLogin(json.token, rememberPassword); //saves cookie
            window.location.href = '/'
        }
        setDisabled(false);
    }

    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <LoginArea>
                {error &&
                    <ErrorMessage>
                        {error}
                    </ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
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
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                disabled={disabled}
                                checked={rememberPassword}
                                onChange={()=>setRememberPassword(!rememberPassword)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>  
            </LoginArea>
        </PageContainer>
    );
}