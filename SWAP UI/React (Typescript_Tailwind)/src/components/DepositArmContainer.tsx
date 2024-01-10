import { FunctionComponent } from "react";

const DepositArmContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[141px] left-[20px] rounded-3xs bg-gray-200 w-[659px] h-[600px] overflow-hidden text-center text-5xl text-white font-kanit">
      <div className="absolute top-[294px] left-[28px] rounded-3xs bg-gray-300 w-[597px] h-[147px]" />
      <div className="absolute top-[519px] left-[28px] rounded-3xs [background:linear-gradient(90deg,_#0c82fc,_#a67eff)] w-[597px] h-[59px] flex flex-row items-start justify-start py-2.5 px-10 box-border">
        <div className="relative font-light flex items-center justify-center w-[522px] h-[39px] shrink-0">
          Deposit ARM
        </div>
      </div>
      <div className="absolute top-[349px] left-[40px] font-light text-gray-100">
        Enter Amount
      </div>
      <div className="absolute top-[221px] left-[268px] w-[367px] h-[50px] text-gray-100">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 w-[367px] h-[50px]" />
        <div className="absolute top-[4px] left-[41.18px] font-light flex items-center justify-center w-[265.41px] h-[43px]">
          PRYSM1HY4228JNL00
        </div>
      </div>
      <div className="absolute top-[309px] left-[40px] text-base font-light text-gray-100">
        Balance: 0
      </div>
      <div className="absolute top-[401px] left-[57px] text-base font-light text-gray-100">
        Insufficient balance
      </div>
      <img
        className="absolute h-[2.56%] w-[1.82%] top-[67.5%] right-[92.26%] bottom-[29.94%] left-[5.92%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[312px] left-[557px] w-[51px] h-[21px] text-base">
        <div className="absolute top-[21px] left-[0px] rounded-8xs bg-darkslategray box-border w-[51px] h-[21px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[3px] left-[11px] font-light flex items-center justify-center w-[29px] h-[15px]">
          Max
        </div>
      </div>
      <div className="absolute top-[360px] left-[545px] w-[63px] h-[18px]">
        <div className="absolute top-[0px] left-[0px] font-light flex items-center justify-center w-[63px] h-[18px]">
          ARM
        </div>
      </div>
      <div className="absolute top-[462px] left-[240px] font-light text-left">{`Vest Your Airdrop Too (If Eligible) `}</div>
      <div className="relative w-[37.5px] h-[37.5px]" />
      <div className="absolute top-[156px] left-[31px] rounded-3xs bg-gray-300 flex flex-row items-start justify-start py-2.5 px-5 gap-[10px] text-left">
        <img
          className="relative rounded-2xl-5 w-[29px] h-[30px] object-cover"
          alt=""
          src="/image-30@2x.png"
        />
        <div className="relative font-light flex items-center w-[125px] h-[30px] shrink-0">
          Connected
        </div>
      </div>
      <div className="absolute top-[221px] left-[31px] rounded-3xs bg-gray-300 flex flex-row items-start justify-start py-2.5 px-5 text-left">
        <div className="relative font-light flex items-center w-[180px] h-[30px] shrink-0">
          PRYSM Adddress
        </div>
      </div>
      <div className="absolute top-[91px] left-[31px] rounded-3xs bg-gray-300 w-[223px] h-[50px] flex flex-row items-start justify-start py-2.5 px-5 box-border text-left">
        <div className="relative font-light flex items-center w-48 h-[29px] shrink-0">
          Current ARM Price
        </div>
      </div>
      <div className="absolute top-[156px] left-[266px] rounded-3xs bg-gray-300 w-[369px] h-[50px] flex flex-row items-start justify-start py-2.5 px-5 box-border text-gray-100">
        <div className="relative font-light flex items-center justify-center w-[336px] h-[31px] shrink-0">
          0XDHF00000000X
        </div>
      </div>
      <div className="absolute top-[91px] left-[266px] rounded-3xs bg-gray-300 w-[369px] h-[50px] flex flex-row items-start justify-start py-2.5 px-5 box-border text-gray-100">
        <div className="relative font-light flex items-center justify-center w-[321px] h-8 shrink-0">
          $ 0.00015823
        </div>
      </div>
      <div className="absolute top-[22px] left-[168px] rounded-3xs bg-deepskyblue-200 h-[50px] flex flex-row items-start justify-start py-2.5 px-5 box-border gap-[10px] text-left text-deepskyblue-100">
        <div className="relative font-light flex items-center w-[235px] h-[30px] shrink-0">{`Verify Smart Contract `}</div>
        <img className="relative w-[30px] h-[30px]" alt="" src="/group.svg" />
      </div>
      <img
        className="absolute top-[353px] left-[522px] w-[21.43px] h-[30px] object-cover"
        alt=""
        src="/arbitrumium-og-1@2x.png"
      />
      <div className="absolute top-[390px] left-[305px] text-base font-light text-gray-100 flex items-center justify-center w-[316px] h-[46px]">
        Note : Only 1 Deposit per wallet is permitted
      </div>
    </div>
  );
};

export default DepositArmContainer;
