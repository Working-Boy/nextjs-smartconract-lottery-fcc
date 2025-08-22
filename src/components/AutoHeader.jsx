// yarn add web3uikit : to install the web3uikit package

import { ConnectButton } from "web3uikit"

export default function AutoHeader() {
    return (
        <div>
            <ConnectButton moralisAuth={false}/>
        </div>
    )
}

// and then go to your page.js file and replace the ManualHeader import with AutoHeader
// import AutoHeader from "../components/AutoHeader";