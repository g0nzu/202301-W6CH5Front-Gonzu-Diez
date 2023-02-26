type HasId = {
  id: number;
};

export type ProtoItemStructure = {
  name: string;
  price: number;
};

export type ItemStructure = HasId & ProtoItemStructure;
