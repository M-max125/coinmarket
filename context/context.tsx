import Moralis from "moralis/types";
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import {
  dogeAbi,
  daiAbi,
  usdcAbi,
  linkAbi,
  linkAddress,
  daiAddress,
  dogeAddress,
  usdcAddress,
} from "../lib/constants";

export type ApiTopTenCoins = {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: {
    id: number;
    name: string;
    slug: string;
    symbol: string;
    token_address: string;
  } | null;
  quote: {
    USD: {
      fully_diluted_market_cap: number;
      last_updated: string;
      market_cap: number;
      market_cap_dominance: number;
      percent_change_1h: number;
      percent_change_7d: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_60d: number;
      percent_change_90d: number;
      price: number;
      tvl: null;
      volume_24h: number;
      volume_change_24h: number;
    };
  };
  self_reported_circulating_supply: null;
  self_reported_market_cap: null;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
  tvl_ratio: null;
};

interface CMCContextProps {
  topTenCoins: ApiTopTenCoins[];
  setOpenSwapCryptoModal?: Dispatch<SetStateAction<boolean>>;
  openSwapCryptoModal?: boolean;
  fromToken?: string;
  toToken?: string;
  setFromToken?: Dispatch<SetStateAction<string>>;
  setToToken?: Dispatch<SetStateAction<string>>;
  amount?:  string;
  setAmount?: Dispatch<SetStateAction< string>>;
  mint?: () => Promise<void>;
 
  loadingCoins?: boolean;
  coins?:Moralis.Object<Moralis.Attributes>[]
}

export const CoinMarketCapContext = createContext<CMCContextProps>({
  topTenCoins: [],
});

export const CoinMarketCapProvider = ({ children }: any) => {
  const { isAuthenticated, user, Moralis } = useMoralis();

  const{data:coins,error,isLoading:loadingCoins} = useMoralisQuery('Coins')

  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [openSwapCryptoModal, setOpenSwapCryptoModal] =
    useState<boolean>(false);
  const [fromToken, setFromToken] = useState<string>("");
  const [toToken, setToToken] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    if (isAuthenticated) {
      const account = user!.get("ethAddress");
      setCurrentAccount(account);
    }
  }, [isAuthenticated]);

  const getContractAddress = () => {
    if (fromToken === "Dai") return daiAddress;
    if (fromToken === "usdc") return usdcAddress;
    if (fromToken === "Dogecoin") return dogeAddress;
    if (fromToken === "Link") return linkAddress;
  };

  const getToAdress = () => {
    if (toToken === "Dai") return daiAddress;
    if (toToken === "usdc") return usdcAddress;
    if (toToken === "Dogecoin") return dogeAddress;
    if (toToken === "Link") return linkAddress;
  };

  const getToAbi = () => {
    if (toToken === "Dai") return daiAbi;
    if (toToken === "usdc") return usdcAbi;
    if (toToken === "Dogecoin") return dogeAbi;
    if (toToken === "Link") return linkAbi;
  };

  const mint = async () => {
    try {
      if (fromToken === "ETH") {
        if (!isAuthenticated) return;
        await Moralis.enableWeb3();
        const contractAddress = getToAdress();
        const abi = getToAbi();

        let options: Moralis.ExecuteFunctionOptions = {
          contractAddress: contractAddress!,
          functionName: "mint",
          abi: abi!,
          params: {
            to: currentAccount,
            amount: Moralis.Units.Token(amount),
          },
        };
        sendEth();
        const transaction = await Moralis.executeFunction(options);
        const receipt = await transaction.data;
      } else {
        swapTokens();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const swapTokens = async () => {
    try {
      if (!isAuthenticated) return;
      await Moralis.enableWeb3();
      if(fromToken === '' || toToken === '' || amount === '') return alert('Please fill all fields');
      if (fromToken === toToken) return alert("You cannot swap the same token");

      const fromOptions: Moralis.TransferOptions = {
        type: "native",
        amount: Moralis.Units.Token(amount, 18),
        receiver: getContractAddress(),
        contractAddress: getContractAddress(),
      };

      const toMintOptions: Moralis.ExecuteFunctionOptions = {
        contractAddress: getToAdress()!,
        functionName: "mint",
        abi: getToAbi()!,
        params: {
          to: currentAccount,
          amount: Moralis.Units.Token(amount, 18),
        },
      };

      let fromtTransaction = await Moralis.transfer(fromOptions);
      let toMintTransaction = await Moralis.executeFunction(toMintOptions);
      let fromRceipt = await fromtTransaction.data;
      let toMintReceipt = await toMintTransaction.data;
      console.log(fromRceipt, toMintReceipt);
    } catch (err) {
      console.log(err);
    }
  };

  const sendEth = async () => {
    if (!isAuthenticated) return;

    const contractAddress = getToAdress();
    const abi = getToAbi();

    let options: Moralis.TransferOptions = {
      type: "native",
      amount: Moralis.Units.ETH("0.01"),
      receiver: contractAddress,
    };

    const transaction = await Moralis.transfer(options);
    //const result:TransactionResponse = await transaction.wait();
  };

  

  const [topTenCoins, setTopTenCoins] = useState<ApiTopTenCoins[]>([]);

  useEffect(() => {
    getTopTenCoins();
  }, []);
  const getTopTenCoins = async () => {
    try {
      const res = await fetch("/api/getTopTen");
      const data = await res.json();
      setTopTenCoins(data.data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CoinMarketCapContext.Provider
      value={{
        topTenCoins,
        openSwapCryptoModal,
        setOpenSwapCryptoModal,
        fromToken,
        setFromToken,
        toToken,
        setToToken,
        amount,
        setAmount,
        mint,
       
        loadingCoins,
        coins
      }}
    >
      {children}
    </CoinMarketCapContext.Provider>
  );
};
