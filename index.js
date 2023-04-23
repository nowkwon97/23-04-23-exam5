const basicData = [
  { number:1 , name: "코카콜라", price: 1500 },
  { number:2 , name: "사이다", price: 1200 },
  { number:3 , name: "포카리", price: 1000 },
  { number:4 , name: "칸쵸", price: 800 },
  { number:5 , name: "오예스", price: 1000 },
  { number:6 , name: "초코파이", price: 1200 },
  { number:7 , name: "허니버터칩", price: 1500 },
  { number:8 , name: "새우깡", price: 900 },
  { number:9 , name: "치즈볼", price: 1200 },
  { number:10 , name: "신라면", price: 900 },
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  ficeThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  Hundred: { value: 100, name: "일백원" },
};

// 우리학원 휴게실에 있는 자판기에 들어 있는 음료수의 정보를 담은 배열이다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인 할 수 있게 로직을 구성한다.
function exampleOne(inputPrice, currency, basicData) {
  // Q.1
  // 만약 inputprice가 1000원 이라면 currency.thousand.name을 반환하여
  // "일천원권을 넣었습니다" 라는 문구를 console.log를 통해 출력하도록 제작하시오.

  // Q.2
  // 만약 inputPrice가 1000원일 때, basicData를 통해 구매 가능한 제품을
  // console.log()를 통해 출력하세요.
  if(inputPrice === 1000) {
    const result = currency.thousand.name;
    console.log(result + "을 넣었습니다.");
    let canBuy = [];
    for(let i = 0; i < basicData.length; i++) {
      if(basicData[i].price <= inputPrice) {
        canBuy.push(basicData[i].name);
      };
    };
    console.log(canBuy);
  }

  // Q.3
  // 만약 inputData가 모든 제품의 가격보다 적다면 "잔액이 부족합니다"라는 문구를
  // console.log()를 통해 출력하세요.
  let canBuy = [];
    for(let i = 0; i < basicData.length; i++) {
      if(basicData[i].price <= inputPrice) {
        canBuy.push(basicData[i].name);
      };
    };
    if(canBuy.length === 0) {
      console.log("잔액이 부족합니다.");
    }else if(canBuy.length === 10) {
      console.log("당신은 부자입니다.")
    };

  // Q.4
  // 만약 inputData가 모든 제품의 가격보다 많다면 "당신은 부자입니다."라는 문구를
  // console.log()를 통해 출력하세요.
}

exampleOne(1500, currency, basicData);