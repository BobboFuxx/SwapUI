import type { NextPage } from "next";
import DepositArmContainer from "../components/deposit-arm-container";
import FormContainer from "../components/form-container";

const SwapUIPRYSM: NextPage = () => {
  return (
    <div className="relative bg-gray-500 w-full h-[1117px] overflow-hidden text-center text-[48px] text-white font-kanit">
      <div className="absolute top-[233px] left-[180px] rounded-3xs bg-gray-300 w-[1405px] h-[800px] overflow-hidden">
        <DepositArmContainer />
        <FormContainer />
        <div className="absolute top-[7px] left-[346px] font-light flex items-center justify-center w-[712px] h-[104px]">
          ARM to PSM Vesting Scheduler
        </div>
        <div className="absolute top-[2255px] left-[3302px] w-[570px] h-[570px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[52px] left-[597px] rounded-3xs bg-gray-400 w-[1055px] h-[75px] overflow-hidden hidden text-left text-5xl">
        <div className="absolute top-[9px] left-[779px] w-[264px] h-14">
          <div className="absolute top-[0px] left-[0px] rounded-3xs [background:linear-gradient(90deg,_#0c82fc,_#a67eff)] w-[264px]" />
          <div className="absolute top-[10px] left-[40px] font-light">
            Connect to wallet
          </div>
        </div>
        <div className="absolute top-[23px] left-[23px] w-[726px] h-7">
          <div className="absolute top-[0px] left-[306px] font-light flex items-center w-[140px] h-7">
            Governance
          </div>
          <div className="absolute top-[0px] left-[459px] font-light flex items-center w-[140px] h-7">
            Transfers
          </div>
          <div className="absolute top-[0px] left-[586px] font-light flex items-center w-[140px] h-7">
            LP Creation
          </div>
          <div className="absolute top-[0px] left-[206px] font-light flex items-center w-[66px] h-7">
            Stake
          </div>
          <div className="absolute top-[0px] left-[106px] font-light flex items-center w-[66px] h-7">
            Swap
          </div>
          <div className="absolute top-[0px] left-[0px] font-light flex items-center w-[66px] h-7">
            Home
          </div>
        </div>
      </div>
      <img
        className="absolute top-[100px] left-[746px] w-[475px] h-[70px] object-cover"
        alt=""
        src="/prysm-text-1@2x.png"
      />
      <img
        className="absolute top-[50px] left-[578px] w-[150px] h-[134px] object-contain"
        alt=""
        src="/prysm-icon-1@2x.png"
      />
    </div>
  );
};

export default SwapUIPRYSM;
