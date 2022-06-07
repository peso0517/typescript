export {};

// pick

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;

// omit

type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, "name" | "weight">;
type MySmallProfile = MyOmit;
