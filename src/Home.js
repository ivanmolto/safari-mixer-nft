import { useEffect, useState } from "react";
import { ethers } from "ethers";
import styled from "styled-components";
import { useContext } from "react";
import { HeaderContext } from "./HeaderContext";
import safariMixerNFT from "./utils/SafariMixerNFT.json";

const WelcomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Start = styled.div`
  background-color: #517363;
  background-image: url("/static/img/waves.png");
  background-size: cover;
  height: 59px;
  width: 325px;
  margin: auto;
  border-radius: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 250px;
    height: 45px;
  }
`;

const StartText = styled.span`
  font-family: "Nanum Gothic";
  font-size: 16px;
  line-height: 19px;
  color: #ecf2dc;
  margin-right: auto;
  width: 252px;
`;

const MicIcon = styled.i`
  color: #ecf2dc;
  margin-left: auto;
`;

const Logo = styled.img`
  width: 100%;
  margin: auto;
  @media (max-width: 600px) {
    width: 250px;
  }
`;

const Spinner = styled.div`
  
  background-image: url(/static/img/safari_mixer_spinner.gif) no-repeat center center fixed;
  
`;

const CONTRACT_ADDRESS = "0x95B4f2897B96e94Ce73aAF1298EaE00Bd01defCb";

const Home = () => {
  const [header, setHeader] = useContext(HeaderContext);
  const [loading, setLoading] = useState(false);
  const [mined, setMined] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [txMined, setTxMined] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have Metamask!");
      return;
    } else {
      console.log("We have the Ethereum object", ethereum);
    }

    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("connected to chain " + chainId );

    // String, hex code of the chainId of the Polygon Mumbai test network
    const polygonMumbaiChainId = "0x13881";
    if (chainId !== polygonMumbaiChainId) {
      alert("You are not connected to the Polygon Mumbai Testnet");
    }

    // Check if we're authorized to access the user's wallet
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      setHeader(true);
      setupEventListener();
    } else {
      setHeader(false);
      console.log("No authorized account found");
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get Metamask");
        return;
      }

      // Method to requet access to account
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      setHeader(true);
      setupEventListener();
    } catch (error) {
      setHeader(false);
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <div>
      <Logo className="center-align" src="/static/img/safari_mixer_logo.png" />
      <Start className="valign-wrapper" onClick={connectWallet}>
        <MicIcon className="small material-icons">
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
        </MicIcon>
        <StartText className="center-align">CONNECT YOUR WALLET</StartText>
      </Start>
    </div>
  );

  const renderMintBox = () => (
    <div>
      <Start className="valign-wrapper" onClick={askContractToMintNft}>
        <MicIcon className="small material-icons">
          <span className="material-symbols-outlined">star</span>
        </MicIcon>
        <StartText className="center-align">MINT YOUR ANIMAL</StartText>
      </Start>
      {!loading && !mined && <div>Price: 0.1 MATIC</div>}
      {loading && <div>Mining...please wait</div>}
      {mined && <div>Mined, see <a href={`https://mumbai.polygonscan.com/tx/${txMined}`} target="_blank"
              rel="noopener noreferrer">transaction</a></div>}
    </div>
  );

  // Setup our listener
  const setupEventListener = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, safariMixerNFT.abi, signer);

        /* connectedContract.on("NftMinted", (animalSpecie, animalOwner) => {
          console.log(animalSpecie, animalOwner);
        }); */

        console.log("Setup event listener");
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log(error);
    }
  }

  const askContractToMintNft = async () => {
    setMined(false);
    setTxMined();
    const CONTRACT_ADDRESS = "0x95B4f2897B96e94Ce73aAF1298EaE00Bd01defCb";

    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);

        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          safariMixerNFT.abi,
          signer
        );

        const mintFee = await connectedContract.getMintFee();

        console.log("Going to pop wallet now to pay gas...");

        let nftTxn = await connectedContract.requestNft({
          value: mintFee.toString(),
        });
        setLoading(true);
        console.log("Mining...please wait.");
        await nftTxn.wait();
        setLoading(false)
        console.log(
          `Mined, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
        );
        setTxMined(nftTxn.hash);
        setMined(true);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <WelcomeContainer
      className="row valign-wrapper"
      style={{ marginBottom: "0px" }}
    >
      <div className="col s10 offset-s1 m6 offset-m3 l4 offset-l4 center-align">
        {currentAccount === ""
          ? renderNotConnectedContainer()
          : renderMintBox()}
      </div>
    </WelcomeContainer>
  );
};
export default Home;
