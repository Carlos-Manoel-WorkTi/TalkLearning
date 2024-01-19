// api.js

async function Api() {
    try {
      const response = await fetch('http://localhost/testeBase/BACK_END/DATABASE.php', {
        method: 'GET',
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
  }
  
  export default Api;
  