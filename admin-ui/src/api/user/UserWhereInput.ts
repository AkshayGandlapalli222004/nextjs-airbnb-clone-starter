import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  description?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingWhereUniqueInput;
  price?: FloatFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
