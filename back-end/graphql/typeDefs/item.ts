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

  type PageInfo {
    endCursor: Int
    hasNextPage: Boolean
  }

  type ItemEdge {
    cursor: Int
    node: Item
  }
  
  type ItemConnection {
    edges: [ItemEdge]
    pageInfo: PageInfo
  }

  extend type Query{
    getItems(first: Int!, cursor: Int):ItemConnection
  }
`;

export default itemType;
