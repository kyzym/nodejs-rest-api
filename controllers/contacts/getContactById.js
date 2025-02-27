const { NotFound } = require('http-errors');
const service = require('../../services');

const getContactById = async (req, res) => {
  const result = await service.getContactById(req);

  if (!result) {
    throw NotFound(
      `contact with id: ${req.params.id} not found`
    );
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
