export const Form = () => {
  return (
    <div className="main">
      <p className="sign">Jovem Programador</p>

      <form className="form">
        <input type="text" className="username" placeholder="Usuário" />
        <input type="password" className="password" placeholder="Senha" />

        <a href="#" className="submit">
          Entrar
        </a>

        <p className="forgot">
          <a href="https://www.youtube.com/c/JovemProgramadortv?sub_confirmation=1">
            Inscreva-se
          </a>
        </p>
      </form>
    </div>
  );
};
