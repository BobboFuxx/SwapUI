import DepositArmContainer from "../components/DepositArmContainer";
import FormContainer from "../components/FormContainer";
import "./SwapUIPRYSM.css";

const SwapUIPRYSM = () => {
  return (
    <div className="swap-ui-prysm">
      <div className="frame-parent">
        <DepositArmContainer />
        <FormContainer />
        <div className="arm-to-psm">ARM to PSM Vesting Scheduler</div>
        <div className="prysm-spectrum-no-bg-1" />
      </div>
      <div className="group-parent">
        <div className="frame-group">
          <div className="group-child" />
          <div className="connect-to-wallet">Connect to wallet</div>
        </div>
        <div className="governance-parent">
          <div className="governance">Governance</div>
          <div className="transfers">Transfers</div>
          <div className="lp-creation">LP Creation</div>
          <div className="stake">Stake</div>
          <div className="swap">Swap</div>
          <div className="home">Home</div>
        </div>
      </div>
      <img className="prysm-text-1" alt="" src="/prysm-text-1@2x.png" />
      <img className="prysm-icon-1" alt="" src="/prysm-icon-1@2x.png" />
    </div>
  );
};

export default SwapUIPRYSM;
