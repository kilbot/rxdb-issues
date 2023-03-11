import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';

import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
addRxPlugin(RxDBDevModePlugin);

const mySchema = {
  title: 'human schema',
  version: 0,
  primaryKey: 'passportId',
  type: 'object',
  properties: {
    passportId: {
      type: 'string',
      maxLength: 100 // <- the primary key must have set maxLength
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    address: {
      type: 'object',
      properties: {
        city: {
          type: 'string'
        },
        country: {
          type: 'string'
        }
      }
    }
  }
}

export const document = createRxDatabase({
  name: 'heroesdb',
  storage: getRxStorageMemory()
})
.then(async(db) => {
  await db.addCollections({
    humans: {
      schema: mySchema
    },
  });

  return db.humans.insert({
    passportId: 'foobar',
    firstName: 'Alice',
    lastName: 'Bobby',
    address: {
      city: 'London',
      country: 'UK'
    }
  });
})
