type dataPost = {
  msg:string;
  remetente:string;
  idMsg?:string;

}

class Api {
  private static URL: string = 'http://localhost/testeBase/BACK_END/DATABASE.php';

  
  // Funcao para enviar e pegar os dados
   static async postReq(data:dataPost){
    try{

      const sendReq = await fetch(Api.URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const resp = await sendReq.json()
      
      
      return resp

    }catch(error){

      console.error('Erro ao enviar dados:', error);
      throw error;
      
    }
  }
}
// console.log(Api.postReq({ msg: 'Hello, what is your name?', remetente: 'root'}))


  export default Api;
  