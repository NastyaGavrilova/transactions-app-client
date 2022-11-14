import hexToDec from './hexToDec';
import convert from 'ether-converter';

const transactionFeeCalc = (gas, gasPrice) => {
  const weiGasLimit = hexToDec(gas);
  const weiGasPrice = hexToDec(gasPrice);
  const transactionFee = weiGasLimit * weiGasPrice;
  const convertedToEthFee = convert(transactionFee, 'wei');
  return Number(convertedToEthFee.ether).toFixed(9);
};

export default transactionFeeCalc;
