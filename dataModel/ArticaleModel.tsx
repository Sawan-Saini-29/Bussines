export const articleSchema = {
    title: 'article schema',
    version: 0,
    description: 'Describes an article',
    type: 'object',
    primaryKey: 'id',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      qty: { type: 'number' },
      selling_price: { type: 'number' },
      business_id: { type: 'string' },
    },
    required: ['id', 'name', 'qty', 'selling_price', 'business_id'],
  };
  