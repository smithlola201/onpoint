import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'Alba',
    lastName: 'Daniel',
    email: 'a*@gmail.com',
    username: 'Danalbac201',
    password: 'withlovbev1',
    transactionCode: '7894',
    createdAt: '2026-2-11', // y-m-d
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 340067.50,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Flight Ticket First Class',
            category: '****2735',
            date: 'Feb 10, 2026',
            amount: 7450.0,
            status: 'success'
          },
          {
            merchant: 'Stamp Duty',
            category: '****9374',
            date: 'Feb 3, 2026',
            amount: -83.50,
            status: 'success'
          },
          {
            merchant: 'Vat Deposit',
            category: '****1265',
            date: 'Jan 26, 2026',
            amount: 50000.0,
            status: 'success'
          },
          {
            merchant: 'FGCA Stamp Duty',
            category: '****8432',
            date: 'Jan 24, 2026',
            amount: -40000.0,
            status: 'success'
          },
          {
            merchant: 'International transfer to business ending 0394',
            category: '****5910',
            date: 'Jan 15, 2026',
            amount: -150000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Bravo Steel Manufacturing Corp.',
            category: '****3748',
            date: 'Jan 4, 2026',
            amount: -28000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Publisher Clearing House',
            category: '****6592',
            date: 'Dec 5, 2025',
            amount: 47000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to BluePeak Industries',
            category: '****2081',
            date: 'Aug 23, 2025',
            amount: -26000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Silverline Corp.',
            category: '****7319',
            date: 'Feb 11, 2025',
            amount: 45000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to TChloe Baker',
            category: '****1942',
            date: 'Nov 14, 2025',
            amount: -24000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Quantum Dynamics Ltd.',
            category: '****8623',
            date: 'Jun 29, 2025',
            amount: 44000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to NorthStar Enterprises',
            category: '****5107',
            date: 'Mar 3, 2025',
            amount: -22000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Crestview Solutions',
            category: '****3784',
            date: 'Dec 18, 2024',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Edgewater Tech',
            category: '****9462',
            date: 'Sep 7, 2024',
            amount: -25000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Apexium Consulting',
            category: '****1259',
            date: 'Apr 25, 2024',
            amount: 43000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Orion Ventures',
            category: '****7341',
            date: 'Oct 30, 2023',
            amount: -20000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Steven King',
            category: '****5683',
            date: 'Jul 21, 2023',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Olivia Turner',
            category: '****9210',
            date: 'Mar 12, 2023',
            amount: -21000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  },
  {
    id: '0003',
    firstName: 'James',
    lastName: 'Stanton',
    email: 's*@gmail.com',
    username: 'Stanjames101',
    password: 'Lovebev@321',
    transactionCode: '7894',
    createdAt: '2026-2-24', // y-m-d
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 344517.50,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Flight Ticket First Class',
            category: '****9643',
            date: 'Feb 18, 2026',
            amount: 4450.0,
            status: 'success'
          },
          {
            merchant: 'Flight Ticket First Class',
            category: '****2735',
            date: 'Feb 10, 2026',
            amount: 7450.0,
            status: 'success'
          },
          {
            merchant: 'Stamp Duty',
            category: '****9374',
            date: 'Feb 3, 2026',
            amount: -83.50,
            status: 'success'
          },
          {
            merchant: 'Vat Deposit',
            category: '****1265',
            date: 'Jan 26, 2026',
            amount: 50000.0,
            status: 'success'
          },
          {
            merchant: 'FGCA Stamp Duty',
            category: '****8432',
            date: 'Jan 24, 2026',
            amount: -40000.0,
            status: 'success'
          },
          {
            merchant: 'International transfer to business ending 0394',
            category: '****5910',
            date: 'Jan 15, 2026',
            amount: -150000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Bravo Steel Manufacturing Corp.',
            category: '****3748',
            date: 'Jan 4, 2026',
            amount: -28000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Publisher Clearing House',
            category: '****6592',
            date: 'Dec 5, 2025',
            amount: 47000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to BluePeak Industries',
            category: '****2081',
            date: 'Aug 23, 2025',
            amount: -26000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Silverline Corp.',
            category: '****7319',
            date: 'Feb 11, 2025',
            amount: 45000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to TChloe Baker',
            category: '****1942',
            date: 'Nov 14, 2025',
            amount: -24000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Quantum Dynamics Ltd.',
            category: '****8623',
            date: 'Jun 29, 2025',
            amount: 44000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to NorthStar Enterprises',
            category: '****5107',
            date: 'Mar 3, 2025',
            amount: -22000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Crestview Solutions',
            category: '****3784',
            date: 'Dec 18, 2024',
            amount: 46000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Edgewater Tech',
            category: '****9462',
            date: 'Sep 7, 2024',
            amount: -25000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Apexium Consulting',
            category: '****1259',
            date: 'Apr 25, 2024',
            amount: 43000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Orion Ventures',
            category: '****7341',
            date: 'Oct 30, 2023',
            amount: -20000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Steven King',
            category: '****5683',
            date: 'Jul 21, 2023',
            amount: 48000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer to Olivia Turner',
            category: '****9210',
            date: 'Mar 12, 2023',
            amount: -21000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
