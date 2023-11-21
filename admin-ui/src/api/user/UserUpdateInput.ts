import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  description?: string;
  firstName?: string | null;
  lastName?: string | null;
  listings?: ListingWhereUniqueInput | null;
  password?: string;
  price?: number;
  roles?: InputJsonValue;
  title?: string;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
};
