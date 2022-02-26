
export function Login() {
  return(
    <form>
      <span>Criar cadastro rodrigonied@hotmail.com</span>
      <input 
        type="email"
        placeholder="E-mail"
      />
      <input 
        type="text" 
        name="username"
        placeholder="Nome"
      />
      <input 
        type="password" 
        name="password"
        placeholder="Senha"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}