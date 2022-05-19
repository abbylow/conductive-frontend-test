export const CSV_PATH = './quidd-bsc-transfers-0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed.csv';

export const ZERO = '0x0000000000000000000000000000000000000000';
const OWNER = '0x72571d815dd31fbde52be0b9d7ffc8344aede616';
const POLKASTARTER = '0xee62650fa45ac0deb1b24ec19f983a8f85b727ab';
const PANCAKE_SWAP = '0xd6d206f59cc5a3bfa4cc10bc8ba140ac37ad1c89';

export const nodes = [
  { name: 'Mint', color: 'purple' },
  { name: 'Polkastarter', color: 'blue' },
  { name: 'PancakeSwap', color: 'red' },
  { name: 'Jump 1', color: 'yellow' },
  { name: 'HODL', color: 'green' },
];

export const nodeMap = {
  [OWNER]: 0,
  [POLKASTARTER]: 1,
  [PANCAKE_SWAP]: 2
  // all the other wallet addresses that not fall into the cases above will be Jump 1
};