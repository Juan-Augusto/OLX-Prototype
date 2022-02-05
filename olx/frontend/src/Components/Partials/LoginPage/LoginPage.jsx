
import { LoginArea } from "./styled";
import { PageContainer, PageTitle } from "../../MainComponents";

export const LoginPage = () => {
    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <LoginArea>
                <form>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input type="checkbox" />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Fazer Login</button>
                        </div>
                    </label>
                </form>  
            </LoginArea>
        </PageContainer>
    );
}