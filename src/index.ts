import { erc20Abi, type Address } from "viem";
import { publicClient } from "./client";

const addresses = [
  "0xC85CdA8dc3F2fD45aD75f27EF7aA08C8bfef4dDb",
  "0x05E9a3A526B1CC3942dF333B9B1B0764A2Bb0385",
  "0xf0F0663e383D1239813946E38511150B3AD1d85D",
];

const multicall = await publicClient.multicall({
  contracts: addresses.map((address) => ({
    abi: erc20Abi,
    address: "0xa00453052A36D43A99Ac1ca145DFe4A952cA33B8" as Address,
    functionName: "balanceOf",
    args: [address],
  })),
  blockNumber: 20735335n,
});

console.log(multicall.map((call) => call.result));
