import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  contacts.push(updatedContacts);
  await writeFile(PATH_DB, JSON.stringify(contacts));
};
