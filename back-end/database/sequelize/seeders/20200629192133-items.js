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
        {
          name: "산울림한옥펜션",
          description: "17년신축 애견동반펜션 청정계곡인근",
          price: 26000,
          review: 328,
          img: "13.png",
        },
        {
          name: "판타루시아",
          description: "대부도 드넓은 바닷가 앞 예쁜 펜션",
          price: 80000,
          review: 881,
          img: "14.png",
        },
        {
          name: "메이플베이",
          description: "경기 가평군 가평읍 북한강변로 900(이화리 19-1)",
          price: 100000,
          review: 333,
          img: "15.png",
        },
        {
          name: "인터라켄",
          description: "전객실 청평호View 유러피안펜션",
          price: 110000,
          review: 628,
          img: "16.png",
        },
        {
          name: "아이린키즈풀빌라",
          description: "고객만족1위!!!키즈펜션 끝판왕!!",
          price: 290000,
          review: 505,
          img: "17.png",
        },
        {
          name: "에일린펜션",
          description: "경기 가평군 가평읍 태봉두밀로 522-68(두밀리 337-3)",
          price: 84600,
          review: 461,
          img: "18.png",
        },
        {
          name: "걸리버여행기",
          description: "sweet sailing&dream",
          price: 64000,
          review: 303,
          img: "19.png",
        },
        {
          name: "플레이독",
          description: "반려견을 위한 각종 편의시설 보유",
          price: 240000,
          review: 64,
          img: "20.png",
        },
        {
          name: "아프리카예술박물관 카라반펜션캠핑장",
          description:
            "광릉수목원인근 캠핑&수영장&동물원 카라반&펜션 체험컨텐츠",
          price: 40000,
          review: 789,
          img: "21.png",
        },
        {
          name: "스톤애견풀빌라",
          description: "애견동반가능 실내미온수수영장 보유!",
          price: 59000,
          review: 735,
          img: "22.png",
        },
        {
          name: "에이엔디 클라우드",
          description: "루프탑에서 즐기는 수영장과 월풀스파",
          price: 130000,
          review: 420,
          img: "23.png",
        },
        {
          name: "메이플트리 글램핑",
          description: "경기 가평군 상면 수목원로 181-22(행현리 374)",
          price: 79000,
          review: 307,
          img: "24.png",
        },
        {
          name: "드림펜션",
          description: "넓은 계곡과 대형수영장, 워터슬라이드",
          price: 25000,
          review: 296,
          img: "25.png",
        },
        {
          name: "꼬리별계곡펜션",
          description: "명지계곡도보1분! 개별수영장보유!",
          price: 45000,
          review: 300,
          img: "26.png",
        },
        {
          name: "모아이풀빌라스파펜션",
          description: "6월 코로나 특별 할인중",
          price: 240000,
          review: 696,
          img: "27.png",
        },
        {
          name: "오블라디 풀빌라",
          description: "독채 럭셔리풀빌라 애견동반객실보유",
          price: 450000,
          review: 364,
          img: "28.png",
        },
        {
          name: "하루강아지애견펜션",
          description: "가평최대(친환경)애견전문펜션!",
          price: 59000,
          review: 227,
          img: "29.png",
        },
        {
          name: "그라티아글램핑",
          description: "그라티아 펜션 & 글램핑!",
          price: 99000,
          review: 205,
          img: "30.png",
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete("items", null, {}),
};
