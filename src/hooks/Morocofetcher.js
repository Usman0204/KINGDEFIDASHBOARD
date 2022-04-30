import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import useWeb3 from './useWeb3'
import { MorocoContract } from '../utils/contractHelpers.js'
import Environment from '../utils/Environment';

const morocoAddress = Environment.MorocoContractcAddress;

const Spinner = () => {
    const { account } = useWeb3React();
    console.log("account we have here is ",account)
    const web3 = useWeb3();
    const contract = MorocoContract(morocoAddress, web3);
    const spinroulet = useCallback(async () => {
      try {
        const spinss = await contract.methods
          .spin()
          .send({ from: account })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .on("error", () => {
            return false;
          });
          console.log("we get spinner here is ", spinss)
        return spinss;
      } catch (error) {
        console.log("error:÷:::::", error);
        throw error;
      }
    }, [contract,account]);
  
    return { Spinnerinner: spinroulet };
  };
  const UserInfo = () => {
    const [balance, setBalance] = useState(0);
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = MorocoContract(morocoAddress, web3);
    useEffect(() => {
      // if (!account) {
      //   setBalance(0);
      //   return;
      // }
      const fetchBalance = async () => {
        try {
          let balance = await contract.methods.getUserInfo(account).call();
          console.log("History of account",balance)
          await setBalance(balance);
        } catch (error) {
          setBalance(0);
        }
      };
      // if (account) {
      fetchBalance();
      // }
    }, [account]);
    return balance;
  };

export default Spinner;

export { Spinner,UserInfo }