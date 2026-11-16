/**
 * ARAVEX TECH STUDIO — Official Payment Accounts
 * 
 * Candidates and clients can transfer project or cohort fees directly via 
 * Meezan Bank, Askari Bank Limited, or Easypaisa mobile wallet.
 */

export interface PaymentAccount {
  id: string;
  name: string;
  type: 'bank' | 'wallet' | 'raast';
  title: string;
  accountNumber: string;
  iban?: string;
  bankName?: string;
  raastId?: string;
  instructions: string;
}

export const PAYMENT_ACCOUNTS: PaymentAccount[] = [
  {
    id: 'bank-meezan',
    name: 'Meezan Digital Centre',
    type: 'bank',
    title: 'MUHAMMAD RAYAN',
    bankName: 'MEEZAN DIGITAL CENTRE',
    accountNumber: '00300116267985',
    iban: 'PK76MEZN0000300116267985',
    instructions: 'Transfer via 1Link IBFT, Raast, or Meezan App to Meezan Digital Centre.',
  },
  {
    id: 'bank-askari',
    name: 'Askari Bank Limited',
    type: 'bank',
    title: 'MUHAMMAD RAYYAN',
    bankName: 'Askari Bank Limited',
    accountNumber: '08980200009092',
    iban: 'PK73ASCM0008980200009092',
    instructions: 'Transfer via 1Link IBFT, Raast, or Askari Banking App.',
  },
  {
    id: 'easypaisa',
    name: 'Easypaisa',
    type: 'wallet',
    title: 'MUHAMMAD RAYYAN',
    accountNumber: '03355013206',
    instructions: 'Send money via Easypaisa App or mobile account to 03355013206.',
  },
];
