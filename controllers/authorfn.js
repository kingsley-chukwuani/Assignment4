const getALlAuthors = (req, res) => {
    res.status(200).send("this is all the authors");
  };
  const createAuthor = (req, res) => {
    res.status(200).send("Author created successfully");
  };
  const getAuthorById = (req, res) => {
    const id = req.params.id
    res.status(200).send(`author gotton successfully by id ${id}`);
  };
  const deleteAuthor = (req, res) => {
    res.status(200).send("author deleted successfully");
  };
  const updateAuthor = (req, res) => {
    res.status(200).send("author updated successfully");
  };
  
  module.exports = {
    getALlAuthors,
    createAuthor,
    getAuthorById,
    deleteAuthor,
    updateAuthor,
  };