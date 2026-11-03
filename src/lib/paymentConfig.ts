/**
 * ARAVEX TECH STUDIO — Official Payment Accounts for Training Enrollments
 * 
 * Candidates can transfer cohort fees directly via Bank Alfalah, Meezan Bank, Raast,
 * or EasyPaisa/JazzCash mobile wallets and upload their payment screenshot.
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
    name: 'Meezan Bank / Raast',
    type: 'bank',
    title: 'ARAVEX TECH STUDIO',
    bankName: 'Meezan Bank Ltd',
    accountNumber: '0101-0105263748',
    iban: 'PK55MEZN0001010105263748',
    raastId: '03130000000',
    instructions: 'Instant transfer via Raast (0% fee) or 1Link IBFT from any Pakistani banking app.',
  },
  {
    id: 'easypaisa',
    name: 'EasyPaisa Wallet',
    type: 'wallet',
    title: 'Muhammad Rayyan (ARAVEX)',
    accountNumber: '0313-0000000',
    instructions: 'Send money via EasyPaisa App > EasyPaisa Transfer or CNIC/Mobile.',
  },
  {
    id: 'jazzcash',
    name: 'JazzCash Wallet',
    type: 'wallet',
    title: 'Muhammad Rayyan (ARAVEX)',
    accountNumber: '0300-0000000',
    instructions: 'Send money via JazzCash App or *786# mobile banking.',
  },
];
