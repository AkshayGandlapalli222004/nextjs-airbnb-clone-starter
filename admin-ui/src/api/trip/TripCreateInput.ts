import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  tripinfo: InputJsonValue;
  user: UserWhereUniqueInput;
};
