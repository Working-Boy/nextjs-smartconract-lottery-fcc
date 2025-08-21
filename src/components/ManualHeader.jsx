"use client";

import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function ManualHeader() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      console.log("✅ Wallet connected:", address);
    } else {
      console.log("❌ Wallet disconnected");
    }
  }, [isConnected, address]);

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected to {address.slice(0,6)}...{address.slice(address.length - 4)}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (


        <button 
            onClick={() => connect({ connector: connectors[0] })} 
            disabled={connectors.length === 0}
            style={{ opacity: connectors.length === 0 ? 0.5 : 1, cursor: connectors.length === 0 ? "not-allowed" : "pointer" }}
          >
            {connectors.length === 0 ? "No Wallet Detected" : "Connect Wallet"}
      </button>

      )}
    </div>
  );
}
