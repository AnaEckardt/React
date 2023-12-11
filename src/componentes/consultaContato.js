import Search from "./search";

export default function ConsultaContato(){
    const Contatos = [
        {nome:"Arthur",email:"arthur@gmail",fone:12334134},
        {nome:"Sarah",email:"sarah@gmail",fone:524522452}
    ]
    return(
        <> 
        <h2 className="text-center">Consultar Contatos </h2>
        <hr/>
        <Search/>
        <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Fone</th>
          </tr>
          </thead> 
          <tbody>
          <tr>
            <td>Sarah</td>
            <td>sarah@gmail</td>
            <td>114242353353</td>
          </tr>
          <tr>
            <td>Arthur</td>
            <td>arhut@gmail</td>
            <td>57657887752</td>
          </tr>
        </tbody>
        {
         Contatos.map(ct =>
            <tr>
                <td>{ct.nome}</td>
                <td>{ct.email}</td>
                <td>{ct.fone}</td>
            </tr>
            )   
        }
      </table>
      </>
    )
}

