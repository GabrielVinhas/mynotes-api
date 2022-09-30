const knex = require("../database/knex");

class TagsController {
  // função responsável por litar todas as tags cadastradas do usuário
  async index( request, response) {
    const  user_id  = request.user.id; // pegando o id pelo middleware

    const tags = await knex("tags")
      .where({ user_id }) 
      .groupBy("name") 
    return response.json(tags);
  }
}

module.exports = TagsController;