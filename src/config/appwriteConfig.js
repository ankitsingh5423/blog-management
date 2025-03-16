import { Client, Databases, Account } from "appwrite";

const client = new Client();
client.setProject("67b0c4bd001c302014de");

export const account = new Account(client);
export const databases = new Databases(client);

console.log(databases);
