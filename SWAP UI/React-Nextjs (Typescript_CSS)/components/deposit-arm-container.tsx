import type { NextPage } from "next";
import styles from "./deposit-arm-container.module.css";

const DepositArmContainer: NextPage = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.depositArmWrapper}>
        <div className={styles.depositArm}>Deposit ARM</div>
      </div>
      <div className={styles.enterAmount}>Enter Amount</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.prysm1hy4228jnl00}>PRYSM1HY4228JNL00</div>
      </div>
      <div className={styles.balance0}>Balance: 0</div>
      <div className={styles.insufficientBalance}>Insufficient balance</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.frameParent}>
        <div className={styles.groupItem} />
        <div className={styles.max}>Max</div>
      </div>
      <div className={styles.armWrapper}>
        <div className={styles.arm}>ARM</div>
      </div>
      <div
        className={styles.vestYourAirdrop}
      >{`Vest Your Airdrop Too (If Eligible) `}</div>
      <div className={styles.checkbox} />
      <div className={styles.image30Parent}>
        <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
        <div className={styles.connected}>Connected</div>
      </div>
      <div className={styles.prysmAdddressWrapper}>
        <div className={styles.prysmAdddress}>PRYSM Adddress</div>
      </div>
      <div className={styles.currentArmPriceWrapper}>
        <div className={styles.currentArmPrice}>Current ARM Price</div>
      </div>
      <div className={styles.xdhf00000000xWrapper}>
        <div className={styles.xdhf00000000x}>0XDHF00000000X</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div}>$ 0.00015823</div>
      </div>
      <div className={styles.verifySmartContractParent}>
        <div
          className={styles.verifySmartContract}
        >{`Verify Smart Contract `}</div>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
      <img
        className={styles.arbitrumiumOg1Icon}
        alt=""
        src="/arbitrumium-og-1@2x.png"
      />
      <div className={styles.noteOnly}>
        Note : Only 1 Deposit per wallet is permitted
      </div>
    </div>
  );
};

export default DepositArmContainer;
