import { createPublicClient, createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";

export const publicClient = await createPublicClient({
  batch: {
    multicall: true,
  },
  chain: mainnet,
  transport: http(
    "https://eth-mainnet.g.alchemy.com/v2/mfdJmbUXWpftUfZtysWZvoY8E8d8-7Hj"
  ),
});

export const walletClient = await createWalletClient({
  chain: mainnet,
  transport: http(),
});
