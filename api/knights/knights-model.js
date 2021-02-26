const db = require('../../data/dbConfig');

module.exports = {
    find,
    add,
    remove,
  };
  
  function find() {
    return db('knights');
  }
  
  function add(newKnight) {
    return db('knights').insert(newKnight);
  }
  
  
  function remove(id) {
    return db('knights').where({ id }).delete();
  }