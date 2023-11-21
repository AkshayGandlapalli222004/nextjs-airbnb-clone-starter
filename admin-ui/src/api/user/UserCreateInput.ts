import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  description: string;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password: string;
  price: number;
  roles: InputJsonValue;
  title: string;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
};
