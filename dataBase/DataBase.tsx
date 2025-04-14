import { createRxDatabase, addRxPlugin } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageSQLiteTrial, getSQLiteBasicsNodeNative } from 'rxdb/plugins/storage-sqlite';
// @ts-ignore
import SQLite from 'react-native-sqlcipher-storage';
import { businessSchema } from '../dataModel/BusniessModel';
import { articleSchema } from '../dataModel/ArticaleModel';
import validateAjv from 'rxdb/plugins/validate-ajv';

import Ajv from 'ajv';

const ajv = new Ajv();
console.log('AJV instance created:', ajv);


// Enable dev plugin (optional but helpful)
if (__DEV__) {
  addRxPlugin(RxDBDevModePlugin);
}


// Setup SQLite storage
const storage = getRxStorageSQLiteTrial({
  sqliteBasics: getSQLiteBasicsNodeNative({
    SQLite,
    dbName: 'businessdb',
  }),
});

export const initDatabase = async () => {
  const db = await createRxDatabase({
    name: 'businessdb',
    storage,
    ignoreDuplicate: true,
  });

  await db.addCollections({
    businesses: { schema: businessSchema },
    articles: { schema: articleSchema },
  });
  addRxPlugin(validateAjv as any);

  return db;
};
