import "./DepositArmContainer.css";

const DepositArmContainer = () => {
  return (
    <div className="rectangle-parent">
      <div className="frame-child" />
      <div className="deposit-arm-wrapper">
        <div className="deposit-arm">Deposit ARM</div>
      </div>
      <div className="enter-amount">Enter Amount</div>
      <div className="rectangle-group">
        <div className="group-item" />
        <div className="prysm1hy4228jnl00">PRYSM1HY4228JNL00</div>
      </div>
      <div className="balance-0">Balance: 0</div>
      <div className="insufficient-balance">Insufficient balance</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="frame-container">
        <div className="group-inner" />
        <div className="max">Max</div>
      </div>
      <div className="arm-wrapper">
        <div className="arm">ARM</div>
      </div>
      <div className="vest-your-airdrop">{`Vest Your Airdrop Too (If Eligible) `}</div>
      <div className="checkbox" />
      <div className="image-30-parent">
        <img className="image-30-icon" alt="" src="/image-30@2x.png" />
        <div className="connected">Connected</div>
      </div>
      <div className="prysm-adddress-wrapper">
        <div className="prysm-adddress">PRYSM Adddress</div>
      </div>
      <div className="current-arm-price-wrapper">
        <div className="current-arm-price">Current ARM Price</div>
      </div>
      <div className="xdhf00000000x-wrapper">
        <div className="xdhf00000000x">0XDHF00000000X</div>
      </div>
      <div className="wrapper">
        <div className="div">$ 0.00015823</div>
      </div>
      <div className="verify-smart-contract-parent">
        <div className="verify-smart-contract">{`Verify Smart Contract `}</div>
        <img className="group-icon" alt="" src="/group.svg" />
      </div>
      <img
        className="arbitrumium-og-1-icon"
        alt=""
        src="/arbitrumium-og-1@2x.png"
      />
      <div className="note-only">
        Note : Only 1 Deposit per wallet is permitted
      </div>
    </div>
  );
};

export default DepositArmContainer;
