const Query = require('../models/Query');

exports.getAllQueries = async (req, res) => {
  const queries = await Query.find();
  res.json(queries);
};

exports.respondQuery = async (req, res) => {
  await Query.findByIdAndUpdate(req.params.id, { responded: true });
  res.json({ message: 'Query marked as responded' });
};

exports.resolveQuery = async (req, res) => {
  await Query.findByIdAndDelete(req.params.id);
  res.json({ message: 'Query resolved and deleted' });
};
