import { v4 } from 'uuid';
import handler from '../libs/handler-lib';
import dynamoDb from '../libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.productsTable,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      productId: v4(),
      title: data.title,
      description: data.description,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});
