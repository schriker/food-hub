import { ImageSourcePropType } from "react-native";

export interface Category {
  id: number;
  name: string;
  color: string;
  photo: ImageSourcePropType;
}
