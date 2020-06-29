const itemType: string = `
  type Item{
    id:Int!
    name:String
    description:String
    price:Int
    review:Int
    img:String
    createAt:String
    updateAt:String
  }

  extend type Query{
    getItems:[Item]
  }
`;

export default itemType;
