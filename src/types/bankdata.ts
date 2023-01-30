import { Client } from "./client";

export type BankAccount = {
    id: number;
    agency: string;
    account: string;
    bank: string;
    owner_id: number;
}

export type BankAccountWithOwner = {
    id: number;
    agency: string;
    account: string;
    bank: string;
    owner_id: number;
    owner: Client;
}