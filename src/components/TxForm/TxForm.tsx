import React, {useCallback, useState} from 'react';
import ReactJson from 'react-json-view';
import './style.scss';
import {SendTransactionRequest, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";


// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.


const defaultTx: SendTransactionRequest = {
	// The transaction is valid for 10 minutes from now, in unix epoch seconds.
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [

		{
			// The receiver's address.
			address: 'EQDr6eSxPx3olIc5NfPfBTXvK2rU0HIAobR1reGjZLRTVneX',
			// Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
			amount: '1000000000',
			// (optional) State initialization in boc base64 format.
			// stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
			// (optional) Payload in boc base64 format.
			//payload: '',
		},

		// Uncomment the following message to send two messages in one transaction.
		/*
    {
      // Note: Funds sent to this address will not be returned back to the sender.
      address: 'UQAuz15H1ZHrZ_psVrAra7HealMIVeFq0wguqlmFno1f3B-m',
      amount: toNano('0.01').toString(),
    }
    */

	],
};

export function TxForm({ initialTx }: { initialTx?: SendTransactionRequest}) {
	const [tx, setTx] = useState(initialTx || defaultTx);
	const wallet = useTonWallet();
	const [tonConnectUi] = useTonConnectUI();

	// const onChange = useCallback((value: object) => setTx((value as { updated_src: typeof defaultTx }).updated_src), []);

	return (
		
		<div className="send-tx-form">
			{/* <ReactJson src={defaultTx} theme="ocean" onEdit={onChange} onAdd={onChange} onDelete={onChange} /> */}
			{wallet ? (
				<button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-auto' onClick={() => tonConnectUi.sendTransaction(tx)}>Claim Egg</button>
			) : (
				<button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-auto' onClick={() => tonConnectUi.openModal()}>Conncet Ton Wallet</button>
			)}
		</div>
	);
}
