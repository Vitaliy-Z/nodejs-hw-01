import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await writeFile(PATH_DB, JSON.stringify(contacts));
};

removeLastContact();
