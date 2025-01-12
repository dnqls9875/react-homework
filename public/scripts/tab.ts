export enum TabText {
  NEARDY = "가까운 순",
  RESERVATION = "예약",
  ORDER = "주문",
  USED = "사용완료",
  EXPIRATION = "기간만료",
}

export const Tab = {
  items: [
    { id: 1, label: TabText.NEARDY },
    { id: 2, label: TabText.RESERVATION },
    { id: 3, label: TabText.ORDER },
    { id: 4, label: TabText.USED },
    { id: 5, label: TabText.EXPIRATION },
  ],
};
