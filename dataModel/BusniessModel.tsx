export const businessSchema = {
    title: 'business schema',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        maxLength: 100,
      },
      name: {
        type: 'string',
      },
    },
    required: ['id', 'name'],
  };
  