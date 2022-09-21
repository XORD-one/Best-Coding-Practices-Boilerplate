import React, { FC, useCallback } from 'react'
import { Connector } from '@web3-react/types'
import {
  ConnectionType,
  getConnection,
  getConnectionName,
} from '../../connection'
import { useAppDispatch } from '@hooks/'
import { setSelectedWallet } from '@redux/slices/walletSlice'
import { useWeb3React } from '@web3-react/core'

type Props = {
  wallets: ConnectionType[]
}

const WalletButtons: FC<Props> = props => {
  const { account, connector } = useWeb3React()

  const dispatch = useAppDispatch()

  const tryActivation = useCallback(
    async (connector: Connector) => {
      const connectionType = getConnection(connector).type

      console.log('connection tyoe -', connectionType, connector)

      try {
        //  setPendingConnector(connector)
        //  setWalletView(WALLET_VIEWS.PENDING)
        //  dispatch(updateConnectionError({ connectionType, error: undefined }))

        await connector.activate()
        dispatch(setSelectedWallet(connectionType))
      } catch (error) {
        console.error(`web3-react connection error: ${error}`)
        // dispatch(
        //   updateConnectionError({ connectionType, error: error.message }),
        // )
        // sendAnalyticsEvent(EventName.WALLET_CONNECT_TXN_COMPLETED, {
        //   result: WALLET_CONNECTION_RESULT.FAILED,
        //   wallet_type: getConnectionName(connectionType, getIsMetaMask()),
        // })
      }
    },
    [dispatch],
  )

  function onDisconnectClick() {
    connector.deactivate && connector.deactivate()
    connector.resetState && connector.resetState()
  }

  return (
    <div className="buttons_container">
      {!account ? (
        props.wallets.map(walletType => {
          return (
            <button
              onClick={() => tryActivation(getConnection(walletType).connector)}
              key={walletType}
            >
              Connect {getConnectionName(walletType)}
            </button>
          )
        })
      ) : (
        <button onClick={onDisconnectClick}>Disconnect</button>
      )}
    </div>
  )
}

export default WalletButtons
