import React, { createContext, useContext, ReactNode, useState } from "react";

// 상태 타입 정의
interface GlobalState {
  footerHeight: number;
  otherVariable: string; // 예시로 다른 변수 추가
  setFooterHeight: (height: number) => void;
  setOtherVariable: (value: string) => void;
}

// 초기 상태
const initialState: GlobalState = {
  footerHeight: 700,
  otherVariable: "",
  setFooterHeight: () => {},
  setOtherVariable: () => {},
};

// Context 생성
const GlobalContext = createContext<GlobalState>(initialState);

// Provider 컴포넌트
const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [footerHeight, setFooterHeight] = useState<number>(
    initialState.footerHeight
  );
  const [otherVariable, setOtherVariable] = useState<string>(
    initialState.otherVariable
  );

  return (
    <GlobalContext.Provider
      value={{ footerHeight, otherVariable, setFooterHeight, setOtherVariable }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// 커스텀 훅
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
