export type TabNavProps = {
    tabs: {
        title: string;
        value: string;
        disabled?: boolean;
        /**
         * 탭을 클릭했을 때 실행되는 함수입니다.
         */
        onClick?: () => void;
    }[];
    selected: string;
    /**
     * Tab을 클릭했을 때 실행되는 함수입니다. Tab에 onClick이 있을 경우 실행되지 않습니다.
     */
    setSelected?: (value: string) => void;
};
