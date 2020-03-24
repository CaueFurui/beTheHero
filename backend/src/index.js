const express = require ('express');
const routes = require ('./routes');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)


/**
 * Rotas / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação no Back-End
  * POST: Criar uma informação no Back-End
  * PUT: Alterar uma informação no Back-End
  * DELETE: Deleta uma informação no Back-End
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Banco de Dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * 
     * Driver: SELECT * FROM USERS
     * Query Builder: table ('users').select(*).where()
     */



app.listen(3333);