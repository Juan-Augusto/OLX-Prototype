import { useNavigate, Link } from "react-router-dom";
import { NotFoundTemplate } from "./styled";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }
    return(
        <NotFoundTemplate>
            <div className="not-found-card">
                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png" alt="" />
                <h1>Pagina não encontrada!</h1>
            </div>
            <Link to="/">Voltar para Home</Link>
            <button onClick={handleBackButton} className='button'>Voltar</button>
        </NotFoundTemplate>

    );

}