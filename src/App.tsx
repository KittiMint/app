import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {TonConnectButton} from "@tonconnect/ui-react";
import {TxForm} from "./components/TxForm/TxForm";
import {SendTransactionRequest, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";


const AppWallet = "UQCtxUNpn6PKvcD1wOZmXr5VlX-E1dATRYu-mf0Vt0QEcYNH"

// const WhalePyload = await payload({ text:  })

const WhaleTx: SendTransactionRequest = {
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [
		{
			address: AppWallet,
			amount: '10000000000',
			payload: 'te6ccsEBAQEAIgAiAEAjV2hhbGVFZ2cgMTBUT04vRGFseSBpZCA6ICM0MzI5ONcWwCM=',
		},
	],
};


const DolphinTx: SendTransactionRequest = {
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [
		{
			address: AppWallet,
			amount: '5000000000',
			payload: 'te6ccsEBAQEAIwAjAEIjRG9scGhpbkVnZyA1VE9OL0RhbHkgaWQgOiAjMzI0NTjnqkAT',
		},
	],
};


const HIPPOTx: SendTransactionRequest = {
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [
		{
			address: AppWallet,
			amount: '2000000000',
			payload: 'te6ccsEBAQEAIQAhAD4jSElQUE9FZ2cgMlRPTi9EYWx5IGlkIDogIzI1NjI0ywcmgg==',
		},
	],
};


const EagleTx: SendTransactionRequest = {
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [
		{
			address: AppWallet,
			amount: '1000000000',
			payload: 'te6ccsEBAQEAIQAhAD4jRWFnbGVFZ2cgMVRPTi9EYWx5IGlkIDogIzE0MzIw0TwTSQ==',
		},
	],
};



export function GridPage() {
  const items = [
    { img: "assets/Whale.webp", title: "WHALE", reward: '10', tx: WhaleTx},
    { img: "assets/Eagle.webp", title: "Eagle", reward: '1', tx: EagleTx},
    { img: "assets/Dolphin.webp", title: "Dolphin", reward: '5', tx: DolphinTx},
    { img: "assets/Hippo.webp", title: "HIPPO", reward: '2', tx: HIPPOTx},

  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto min-h-screen max-w-[350px] overflow-auto scrollbar-none">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          {['Eagle', 'HIPPO'].includes(item.title) ? (
            <img draggable="false" src={item.img} alt={item.title} width={135} className="w-24 h-24 object-cover rounded-lg" />
          ) : (
            <img draggable="false" src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
          )}

          
          <p className="mx-auto mt-[14px] w-fit text-[20px] font-[500] uppercase leading-[24px] text-[#FFA701]">{item.title}</p>
          <div className="text-center ml-auto w-fit mx-auto">
            <p className="text-[16px] font-[400] leading-[19.2px] text-[#C6BADE]">Reward</p><p className="mt-1 flex items-center justify-center text-[16px] font-[400] leading-[19.2px]"><span className="text-[#FFA701]">+ {item.reward}</span><picture className="flex-shrink-0"><img decoding="auto" loading="eager" className="flex-shrink-0 object-cover mx-[4.8px] h-auto w-[19.2px]" draggable="false" width="16" height="17" src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.0174%205.57338L10.7524%2017.1425C10.6637%2017.283%2010.5408%2017.3985%2010.3953%2017.4785C10.2497%2017.5584%2010.0863%2017.6001%209.92019%2017.5996C9.75412%2017.5991%209.5909%2017.5564%209.44583%2017.4756C9.30075%2017.3948%209.17857%2017.2785%209.09074%2017.1375L1.96823%205.56922C1.76853%205.24475%201.6632%204.87105%201.66407%204.49005C1.67328%203.92813%201.90497%203.3928%202.30834%203.00147C2.7117%202.61014%203.25379%202.39475%203.81573%202.40255H16.1891C17.3699%202.40255%2018.3307%203.33338%2018.3307%204.48588C18.3307%204.86755%2018.2224%205.24505%2018.0166%205.57338M3.71657%205.18672L9.01657%2013.3584V4.36255H4.27073C3.7224%204.36255%203.47657%204.72588%203.7174%205.18672M10.9774%2013.3584L16.2774%205.18672C16.5216%204.72588%2016.2716%204.36255%2015.7232%204.36255H10.9774V13.3584Z'%20fill='%23DDDDDD'/%3e%3c/svg%3e"/></picture><span>/ day</span></p></div>
          
          <TxForm initialTx={item.tx} /> 
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://app.kittymint.xyz/tonconnect-manifest.build.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "telegram-wallet",
            name: "Wallet",
            imageUrl: "https://wallet.tg/images/logo-288.png",
            aboutUrl: "https://wallet.tg/",
            universalLink: "https://t.me/wallet?attach=wallet",
            bridgeUrl: "https://bridge.ton.space/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "tonwallet",
            name: "TON Wallet",
            imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
            aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
            universalLink: "https://wallet.ton.org/ton-connect",
            jsBridgeKey: "tonwallet",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["chrome", "android"]
          },
          {
            appName: "nicegramWallet",
            name: "Nicegram Wallet",
            imageUrl: "https://static.nicegram.app/icon.png",
            aboutUrl: "https://nicegram.app",
            universalLink: "https://nicegram.app/tc",
            deepLink: "nicegram-tc://",
            jsBridgeKey: "nicegramWallet",
            bridgeUrl: "https://tc.nicegram.app/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "tokenpocket",
            name: "TokenPocket",
            imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
            aboutUrl: "https://www.tokenpocket.pro",
            universalLink: "https://tp-lab.tptool.pro/ton-connect/",
            jsBridgeKey: "tokenpocket",
            bridgeUrl: "https://ton-connect.mytokenpocket.vip/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "dewallet",
            name: "DeWallet",
            imageUrl: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
            aboutUrl: "https://delabwallet.com",
            universalLink: "https://t.me/dewallet?attach=wallet",
            bridgeUrl: "https://bridge.dewallet.pro/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "cdcTonWallet",
            name: "Crypto.com DeFi Wallet",
            imageUrl: "https://apro-ncw-api-file.crypto.com/wallet/logo",
            aboutUrl: "https://crypto.com/defi-wallet",
            universalLink: "https://wallet.crypto.com/deeplink/ton-connect",
            deepLink: "dfw://",
            jsBridgeKey: "cdcTonWallet",
            bridgeUrl: "https://wallet.crypto.com/sse/tonbridge",
            platforms: ["ios", "android", "chrome"]
          },
          {
            appName: "tobi",
            name: "Tobi",
            imageUrl: "https://app.tobiwallet.app/icons/logo.png",
            aboutUrl: "https://tobi.fun",
            universalLink: "https://t.me/TobiCopilotBot?attach=wallet",
            bridgeUrl: "https://ton-bridge.tobiwallet.app/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "trustwalletTon",
            name: "Trust",
            imageUrl: "https://assets-cdn.trustwallet.com/dapps/trust.logo.png",
            aboutUrl: "https://trustwallet.com/about-us",
            bridgeUrl: "https://tonconnect.trustwallet.com/bridge",
            universalLink: "https://link.trustwallet.com/tc",
            deepLink: "trust://ton-connect",
            jsBridgeKey: "trustwalletTon",
            platforms: ["chrome", "ios", "android"]
          },
          {
            appName: "bitgetWalletLite",
            name: "Bitget Wallet Lite",
            imageUrl: "https://raw.githubusercontent.com/bitgetwallet/download/main/logo/png/bitget_wallet_lite_logo.png",
            aboutUrl: "https://web3.bitget.com",
            universalLink: "https://t.me/BitgetWallet_TGBot?attach=wallet",
            bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "onekey",
            name: "OneKey",
            imageUrl: "https://common.onekey-asset.com/logo/onekey-x288.png",
            aboutUrl: "https://onekey.so",
            jsBridgeKey: "onekeyTonWallet",
            platforms: ["chrome"]
          },
          {
            appName: "tomoWallet",
            name: "Tomo Wallet",
            imageUrl: "https://pub.tomo.inc/logo.png",
            aboutUrl: "https://www.tomo.inc/",
            universalLink: "https://t.me/tomowalletbot?attach=wallet",
            bridgeUrl: "https://go-bridge.tomo.inc/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "hpyTonWallet",
            name: "HyperPay Wallet",
            imageUrl: "https://onchain-oss.hyperpay.online/images/logo.png",
            aboutUrl: "https://www.hyperpay.tech",
            universalLink: "https://www.hyperpay.tech/download&deeplink=hyperpay://web3/wallet/tonconnect",
            jsBridgeKey: "hpyTonWallet",
            bridgeUrl: "https://onchain-wallet.hyperpay.online/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "unstoppable",
            name: "Unstoppable Wallet",
            imageUrl: "https://unstoppable.money/logo288.png",
            aboutUrl: "https://unstoppable.money/",
            universalLink: "https://unstoppable.money/ton-connect",
            bridgeUrl: "https://bridge.unstoppable.money/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "foxwallet",
            name: "FoxWallet",
            imageUrl: "https://hc.foxwallet.com/img/logo.png",
            aboutUrl: "https://foxwallet.com/",
            universalLink: "https://link.foxwallet.com/tc",
            jsBridgeKey: "foxwallet",
            bridgeUrl: "https://connect.foxwallet.com/ton/bridge",
            platforms: ["ios", "android", 'macos', 'windows', 'linux']
          },
          {
            appName: "jambo",
            name: "Jambo",
            imageUrl: "https://cdn-prod.jambotechnology.xyz/content/jambo_288x288_02da416a6c.png",
            aboutUrl: "https://www.jambo.technology/",
            deepLink: "jambotc://",
            universalLink: "https://jambophone.xyz/",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            jsBridgeKey: "jambowallet",
            platforms: ['android', 'macos', 'windows', 'linux']
          },
          {
            appName: "Gate.io wallet",
            name: "Gate.io wallet",
            imageUrl: "https://gimg2.gateimg.com/tgwallet/1730688473495507406-Gatewallet.png",
            aboutUrl: "https://www.gate.io",
            universalLink: "https://t.me/gateio_wallet_bot?attach=wallet",
            bridgeUrl: "https://dapp.gateio.services/tonbridge_api/bridge/v1",
            platforms: ["ios", "android", "linux", "windows", "macos"]
          },
          {
            appName: "coin98",
            name: "Coin98 ",
            imageUrl: "https://coin98.s3.ap-southeast-1.amazonaws.com/SocialLogo/ninetyeight.png",
            aboutUrl: "https://docs.coin98.com",
            deepLink: "coin98://ton-connect",
            bridgeUrl: "https://ton-bridge.coin98.tech/bridge",
            platforms: ["ios", "android"],
            universalLink: "https://coin98.com/ton-connect"
          },
          {
            appName: "coin98TelegramWallet",
            name: "Coin98 Telegram Wallet",
            imageUrl: "https://coin98.s3.ap-southeast-1.amazonaws.com/SocialLogo/ninetyeight.png",
            aboutUrl: "https://docs.coin98.com",
            universalLink: "https://t.me/Coin98_bot?attach=wallet",
            bridgeUrl: "https://ton-bridge.coin98.tech/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "miraiapp-tg",
            name: "Mirai Mini App",
            imageUrl: "https://cdn.mirailabs.co/miraihub/miraiapp-tg-icon-288.png",
            aboutUrl: "https://mirai.app",
            universalLink: "https://t.me/MiraiAppBot?attach=wallet",
            bridgeUrl: "https://bridge.mirai.app",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "miraiapp",
            name: "Mirai App",
            imageUrl: "https://cdn.mirailabs.co/miraihub/miraiapp-icon-288.png",
            aboutUrl: "https://mirai.app",
            universalLink: "https://go.miraiapp.io/ton-connect",
            deepLink: "miraiapp://",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            jsBridgeKey: "miraiapp",
            platforms: ["ios", "android", "chrome", "firefox"]
          },
          {
            appName: 'nestwallet',
            name: 'Nest Wallet',
            imageUrl: 'https://storage.googleapis.com/nestwallet-public-resource-bucket/logo/nest_logo_square.png',
            aboutUrl: 'https://www.nestwallet.xyz',
            jsBridgeKey: 'nestwallet',
            platforms: ['chrome']
          },
          {
            appName: "Architec.ton",
            name: "Architec.ton",
            imageUrl: "https://raw.githubusercontent.com/Architec-Ton/wallet-tma/refs/heads/dev/public/images/arcwallet_logo.png",
            aboutUrl: "https://architecton.tech",
            universalLink: "https://t.me/architec_ton_bot?attach=wallet",
            bridgeUrl: "https://tc.architecton.su/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "uxuyWallet",
            name: "UXUY Wallet",
            imageUrl: "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
            aboutUrl: "https://docs.uxuy.com",
            universalLink: "https://t.me/UXUYbot?attach=wallet",
            bridgeUrl: "https://bridge.uxuy.me/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          },
          {
            appName: "tonflow",
            name: "TONFLOW",
            imageUrl: "https://tonflow.app/assets/images/tonflow_ico_256.png",
            aboutUrl: "https://tonflow.app",
            universalLink: "https://tonflow.app/ton-connect",
            deepLink: "tonflow-tc://",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            jsBridgeKey: "tonflow",
            platforms: ["windows", "linux", "macos", "chrome"]
          },
          {
            appName: 'Tonkeeper',
            name: 'TonkeeperWeb',
            imageUrl: 'https://raw.githubusercontent.com/tonkeeper/tonkeeper-web/0f197474c57937787608697e794ef2b20a62f0d4/apps/twa/public/logo-128x128.png',
            aboutUrl: 'https://wallet.tonkeeper.com/',
            universalLink: 'https://wallet.tonkeeper.com/ton-connect',
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/@kittymintbot/kittymint'
      }}
    >
      <div className="app">
        <div className="fixed left-[50%] top-0 flex h-full w-full max-w-[428px] -translate-x-1/2 flex-col">
        <div className="mt-[24px] max-w-[320px] text-[32px] font-[600] capitalize leading-[44.8px] tracking-[-0.6px] mx-auto">Claim Your Profit Event <span className="gradient-text tracking-[1.3px]">Time Limted</span></div>
        <div className='mx-auto mt-[10px] mb-[15px]'><TonConnectButton/></div>
        <GridPage/>
        {/* <h1 className="text-[24px] leading-[30.24px] text-[#FFA701] mx-auto">Welcome to Kitty Mint</h1> */}
        <picture className="flex-shrink-0"><img decoding="auto" loading="lazy" className="h-auto flex-shrink-0 object-cover fixed bottom-0 left-1/2 z-[-1] mx-auto w-full max-w-[428px] translate-x-[-50%]" draggable="false" src="assets/img-bottom-bg.png" alt="bottom background"/></picture>
        </div>
      </div>

    </TonConnectUIProvider>
  )
}

export default App
