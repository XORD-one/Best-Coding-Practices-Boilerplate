import React, { FC, useState } from 'react';
import { ethers } from 'ethers';
import {
  Erc20__factory,
  DaoEventsV2__factory,
  PHXStake__factory,
} from '@contracts/types/index';

const Stake: FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [account, setAccount] = useState<string>();
  const [tokenBalance, setTokenBalance] = useState<string>();
  const [eventsCount, setEventsCount] = useState<string>();

  const connect = async () => {
    if (!window.ethereum?.request) {
      alert('MetaMask is not installed!');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setProvider(provider);
    setAccount(accounts[0]);
  };

  const getTokenBalance = async () => {
    if (provider && account) {
      console.log('getting token balance');
      const TOKEN_ADDR = '0xa13823b51d33d4F11E7CbfA76fb98f0D5F156c11';
      const token = Erc20__factory.connect(TOKEN_ADDR, provider.getSigner());

      const rawBalance = await token.balanceOf(account.toString());
      const decimals = await token.decimals();

      const balance = ethers.utils.formatUnits(rawBalance, decimals);
      setTokenBalance(balance);
    }
  };

  const getEventCount = async () => {
    if (provider && account) {
      const TOKEN_ADDR = '0xa8b9A1dA93B4a96d9D0a464f6897A9A7D20c9874';
      const contract = DaoEventsV2__factory.connect(
        TOKEN_ADDR,
        provider.getSigner(),
      );

      const rawCount = await contract.getEventsCount();
      setEventsCount(rawCount.toString());
    }
  };

  const stakePHNX = async () => {
    if (provider && account) {
      console.log('staking PHNX');
      const TOKEN_ADDR = '0x66663724b50f4EA40e5ceD7Fc5181fE1816cE0C4';
      const contract = PHXStake__factory.connect(
        TOKEN_ADDR,
        provider.getSigner(),
      );
      const rawlpTokenSupply = await contract.lpTokenSupply();
      console.log(
        'raw lpTokenSupply',
        ethers.utils.formatEther(rawlpTokenSupply.toString()),
      );
    }
  };

  return (
    <>
      <button onClick={connect}>Connect</button>
      <p>Account: {account}</p>
      <button onClick={getTokenBalance}>Get Token Balance</button>
      <p>Token Balance: {tokenBalance}</p>
      <button onClick={getEventCount}>Get Events Count</button>
      <p>Events Count:{eventsCount}</p>
      <br />
      <button onClick={stakePHNX}>stake PHNX</button>
    </>
  );
};

export default Stake;
