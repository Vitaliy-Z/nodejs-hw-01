import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () =>
  await writeFile(PATH_DB, JSON.stringify([]));

removeAllContacts();
