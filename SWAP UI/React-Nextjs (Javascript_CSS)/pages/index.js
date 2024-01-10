import DepositArmContainer from "../components/deposit-arm-container";
import FormContainer from "../components/form-container";
import styles from "./index.module.css";

const SwapUIPRYSM = () => {
  return (
    <div className={styles.swapUiPrysm}>
      <div className={styles.frameParent}>
        <DepositArmContainer />
        <FormContainer />
        <div className={styles.armToPsm}>ARM to PSM Vesting Scheduler</div>
        <div className={styles.prysmSpectrumNoBg1} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.frameGroup}>
          <div className={styles.groupChild} />
          <div className={styles.connectToWallet}>Connect to wallet</div>
        </div>
        <div className={styles.governanceParent}>
          <div className={styles.governance}>Governance</div>
          <div className={styles.transfers}>Transfers</div>
          <div className={styles.lpCreation}>LP Creation</div>
          <div className={styles.stake}>Stake</div>
          <div className={styles.swap}>Swap</div>
          <div className={styles.home}>Home</div>
        </div>
      </div>
      <img className={styles.prysmText1} alt="" src="/prysm-text-1@2x.png" />
      <img className={styles.prysmIcon1} alt="" src="/prysm-icon-1@2x.png" />
    </div>
  );
};

export default SwapUIPRYSM;
