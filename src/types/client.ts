import { BankAccount } from "./bankdata";

export type Client = {
    id: number;
    corporate_name: string;
    phone_number: string;
    declared_billing: number;
    created_at: string;
}

export type ClientWithBankData = {
    id: number;
    corporate_name: string;
    phone_number: string;
    declared_billing: number;
    created_at: string;
    bank_data: BankAccount[];
}