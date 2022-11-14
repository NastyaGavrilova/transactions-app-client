import convert from 'ether-converter';
import hexToDec from './hexToDec';

const weiToEth = value => {
  const wei = hexToDec(value);
  const ether = convert(wei, 'wei');

  return Number(ether.ether).toFixed(18);
};

export default weiToEth;
