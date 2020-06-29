module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "items",
      [
        {
          name: "서울 북한산 럭셔리 카라반&수영장 글램핑",
          description: "서울 북한산자락에 위치한 최고급글램핑과 럭셔리카라반",
          price: 79000,
          review: 1406,
          img: "1.png",
        },
        {
          name: "채움글램핑&카라반(럭셔리수영장)",
          description:
            "채움관광농원 최신식수영장 백운계곡바로옆 넓은잔디밭 가족텃밭무료이용~",
          price: 89000,
          review: 560,
          img: "2.png",
        },
        {
          name: "새연 카라반 글램핑 현리1호점",
          description: "경기 가평군 조종면 운악청계로333번길 86(신상리 475-3)",
          price: 69000,
          review: 791,
          img: "3.png",
        },
        {
          name: "새연 카라반 글램핑 설악2호점",
          description: "고급형 카라반에서 하룻밤",
          price: 64000,
          review: 614,
          img: "4.png",
        },
        {
          name: "해여림빌리지",
          description: "서울근교 프라이빗한 풀빌라,복층 독채",
          price: 40000,
          review: 351,
          img: "5.png",
        },
        {
          name: "솔다람숲 힐링파크",
          description: "경기 가평군 가평읍 두밀리 144-7",
          price: 39000,
          review: 372,
          img: "6.png",
        },
        {
          name: "달빛애견글램핑 럭셔리수영장",
          description: "경기 포천시 일동면 사기막길 67-6(화대리 167-2)",
          price: 89000,
          review: 516,
          img: "7.png",
        },
        {
          name: "호수카라반캠핑장",
          description: "호수가 바로 앞 서울근교(파주), 미세먼지 없는 청정호수",
          price: 90000,
          review: 470,
          img: "8.png",
        },
        {
          name: "라스블랑카스",
          description: "지중해를 닮은 스페인 하얀 마을, 라스블랑카스",
          price: 112000,
          review: 643,
          img: "9.png",
        },
        {
          name: "가람슬기 수영장펜션",
          description: "신축!리버뷰끝판왕!야외수영장!",
          price: 119000,
          review: 593,
          img: "10.png",
        },
        {
          name: "가평 둥지글램핑",
          description: "사계절 아름다운 캠핑장",
          price: 40000,
          review: 608,
          img: "11.png",
        },
        {
          name: "화이트큐브24 스파펜션",
          description: "인기숙소,리버뷰,힐링스파",
          price: 109000,
          review: 722,
          img: "12.png",
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete("items", null, {}),
};
