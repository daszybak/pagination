import { api } from '../api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Ad = {
  __typename?: 'Ad';
  _count: AdCount;
  ad_auto?: Maybe<AdAuto>;
  ad_categories?: Maybe<Array<AdCategory>>;
  ad_house?: Maybe<AdHouse>;
  ad_id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  coords_latitude?: Maybe<Scalars['Float']>;
  coords_longitude?: Maybe<Scalars['Float']>;
  coords_radius?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
  price_eurocent?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AdAuto = {
  __typename?: 'AdAuto';
  ad: Ad;
  ad_auto_id: Scalars['ID'];
  ad_id: Scalars['Int'];
  condition_type?: Maybe<Category>;
  condition_type_cid?: Maybe<Scalars['Int']>;
  fuel_type?: Maybe<Category>;
  fuel_type_cid?: Maybe<Scalars['Int']>;
  km?: Maybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: Maybe<Scalars['Int']>;
  transmission_type?: Maybe<Category>;
  transmission_type_cid?: Maybe<Scalars['Int']>;
  vehicle_type?: Maybe<Category>;
  vehicle_type_cid?: Maybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type AdAutoCreateManyCondition_TypeInput = {
  ad_id: Scalars['Int'];
  fuel_type_cid?: InputMaybe<Scalars['Int']>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type_cid?: InputMaybe<Scalars['Int']>;
  vehicle_type_cid?: InputMaybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type AdAutoCreateManyCondition_TypeInputEnvelope = {
  data: Array<AdAutoCreateManyCondition_TypeInput>;
};

export type AdAutoCreateManyFuel_TypeInput = {
  ad_id: Scalars['Int'];
  condition_type_cid?: InputMaybe<Scalars['Int']>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type_cid?: InputMaybe<Scalars['Int']>;
  vehicle_type_cid?: InputMaybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type AdAutoCreateManyFuel_TypeInputEnvelope = {
  data: Array<AdAutoCreateManyFuel_TypeInput>;
};

export type AdAutoCreateManyTransmission_TypeInput = {
  ad_id: Scalars['Int'];
  condition_type_cid?: InputMaybe<Scalars['Int']>;
  fuel_type_cid?: InputMaybe<Scalars['Int']>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  vehicle_type_cid?: InputMaybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type AdAutoCreateManyTransmission_TypeInputEnvelope = {
  data: Array<AdAutoCreateManyTransmission_TypeInput>;
};

export type AdAutoCreateManyVehicle_TypeInput = {
  ad_id: Scalars['Int'];
  condition_type_cid?: InputMaybe<Scalars['Int']>;
  fuel_type_cid?: InputMaybe<Scalars['Int']>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type_cid?: InputMaybe<Scalars['Int']>;
  year: Scalars['Int'];
};

export type AdAutoCreateManyVehicle_TypeInputEnvelope = {
  data: Array<AdAutoCreateManyVehicle_TypeInput>;
};

export type AdAutoCreateNestedManyWithoutCondition_TypeInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutCondition_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutCondition_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyCondition_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutFuel_TypeInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutFuel_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutFuel_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyFuel_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutTransmission_TypeInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutTransmission_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutTransmission_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyTransmission_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutVehicle_TypeInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVehicle_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutVehicle_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyVehicle_TypeInputEnvelope>;
};

export type AdAutoCreateNestedOneWithoutAdInput = {
  connect?: InputMaybe<AdAutoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdAutoCreateOrConnectWithoutAdInput>;
  create?: InputMaybe<AdAutoCreateWithoutAdInput>;
};

export type AdAutoCreateOrConnectWithoutAdInput = {
  create: AdAutoCreateWithoutAdInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutCondition_TypeInput = {
  create: AdAutoCreateWithoutCondition_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutFuel_TypeInput = {
  create: AdAutoCreateWithoutFuel_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutTransmission_TypeInput = {
  create: AdAutoCreateWithoutTransmission_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutVehicle_TypeInput = {
  create: AdAutoCreateWithoutVehicle_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateWithoutAdInput = {
  condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
  fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
  vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
  year: Scalars['Int'];
};

export type AdAutoCreateWithoutCondition_TypeInput = {
  ad: AdCreateNestedOneWithoutAd_AutoInput;
  fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
  vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
  year: Scalars['Int'];
};

export type AdAutoCreateWithoutFuel_TypeInput = {
  ad: AdCreateNestedOneWithoutAd_AutoInput;
  condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
  vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
  year: Scalars['Int'];
};

export type AdAutoCreateWithoutTransmission_TypeInput = {
  ad: AdCreateNestedOneWithoutAd_AutoInput;
  condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
  fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
  year: Scalars['Int'];
};

export type AdAutoCreateWithoutVehicle_TypeInput = {
  ad: AdCreateNestedOneWithoutAd_AutoInput;
  condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
  fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
  km?: InputMaybe<Scalars['Int']>;
  make: Scalars['String'];
  model: Scalars['String'];
  power_kw?: InputMaybe<Scalars['Int']>;
  transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
  year: Scalars['Int'];
};

export type AdAutoListRelationFilter = {
  every?: InputMaybe<AdAutoWhereInput>;
  none?: InputMaybe<AdAutoWhereInput>;
  some?: InputMaybe<AdAutoWhereInput>;
};

export type AdAutoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdAutoOrderByWithRelationInput = {
  ad?: InputMaybe<AdOrderByWithRelationInput>;
  ad_auto_id?: InputMaybe<SortOrder>;
  ad_id?: InputMaybe<SortOrder>;
  condition_type?: InputMaybe<CategoryOrderByWithRelationInput>;
  condition_type_cid?: InputMaybe<SortOrder>;
  fuel_type?: InputMaybe<CategoryOrderByWithRelationInput>;
  fuel_type_cid?: InputMaybe<SortOrder>;
  km?: InputMaybe<SortOrder>;
  make?: InputMaybe<SortOrder>;
  model?: InputMaybe<SortOrder>;
  power_kw?: InputMaybe<SortOrder>;
  transmission_type?: InputMaybe<CategoryOrderByWithRelationInput>;
  transmission_type_cid?: InputMaybe<SortOrder>;
  vehicle_type?: InputMaybe<CategoryOrderByWithRelationInput>;
  vehicle_type_cid?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type AdAutoRelationFilter = {
  is?: InputMaybe<AdAutoWhereInput>;
  isNot?: InputMaybe<AdAutoWhereInput>;
};

export type AdAutoScalarWhereInput = {
  AND?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  OR?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  ad_auto_id?: InputMaybe<IntFilter>;
  ad_id?: InputMaybe<IntFilter>;
  condition_type_cid?: InputMaybe<IntNullableFilter>;
  fuel_type_cid?: InputMaybe<IntNullableFilter>;
  km?: InputMaybe<IntNullableFilter>;
  make?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  power_kw?: InputMaybe<IntNullableFilter>;
  transmission_type_cid?: InputMaybe<IntNullableFilter>;
  vehicle_type_cid?: InputMaybe<IntNullableFilter>;
  year?: InputMaybe<IntFilter>;
};

export type AdAutoUpdateManyMutationInput = {
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateManyWithWhereWithoutCondition_TypeInput = {
  data: AdAutoUpdateManyMutationInput;
  where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutFuel_TypeInput = {
  data: AdAutoUpdateManyMutationInput;
  where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutTransmission_TypeInput = {
  data: AdAutoUpdateManyMutationInput;
  where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutVehicle_TypeInput = {
  data: AdAutoUpdateManyMutationInput;
  where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithoutCondition_TypeNestedInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutCondition_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutCondition_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyCondition_TypeInputEnvelope>;
  delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutCondition_TypeInput>>;
  updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutCondition_TypeInput>>;
  upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutCondition_TypeInput>>;
};

export type AdAutoUpdateManyWithoutFuel_TypeNestedInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutFuel_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutFuel_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyFuel_TypeInputEnvelope>;
  delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutFuel_TypeInput>>;
  updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutFuel_TypeInput>>;
  upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutFuel_TypeInput>>;
};

export type AdAutoUpdateManyWithoutTransmission_TypeNestedInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutTransmission_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutTransmission_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyTransmission_TypeInputEnvelope>;
  delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutTransmission_TypeInput>>;
  updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutTransmission_TypeInput>>;
  upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutTransmission_TypeInput>>;
};

export type AdAutoUpdateManyWithoutVehicle_TypeNestedInput = {
  connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVehicle_TypeInput>>;
  create?: InputMaybe<Array<AdAutoCreateWithoutVehicle_TypeInput>>;
  createMany?: InputMaybe<AdAutoCreateManyVehicle_TypeInputEnvelope>;
  delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
  update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutVehicle_TypeInput>>;
  updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutVehicle_TypeInput>>;
  upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutVehicle_TypeInput>>;
};

export type AdAutoUpdateOneWithoutAdNestedInput = {
  connect?: InputMaybe<AdAutoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdAutoCreateOrConnectWithoutAdInput>;
  create?: InputMaybe<AdAutoCreateWithoutAdInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AdAutoUpdateWithoutAdInput>;
  upsert?: InputMaybe<AdAutoUpsertWithoutAdInput>;
};

export type AdAutoUpdateWithWhereUniqueWithoutCondition_TypeInput = {
  data: AdAutoUpdateWithoutCondition_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutFuel_TypeInput = {
  data: AdAutoUpdateWithoutFuel_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutTransmission_TypeInput = {
  data: AdAutoUpdateWithoutTransmission_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutVehicle_TypeInput = {
  data: AdAutoUpdateWithoutVehicle_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithoutAdInput = {
  condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
  fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
  vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutCondition_TypeInput = {
  ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
  fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
  vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutFuel_TypeInput = {
  ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
  condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
  vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutTransmission_TypeInput = {
  ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
  condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
  fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutVehicle_TypeInput = {
  ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
  condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
  fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
  km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  make?: InputMaybe<StringFieldUpdateOperationsInput>;
  model?: InputMaybe<StringFieldUpdateOperationsInput>;
  power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpsertWithWhereUniqueWithoutCondition_TypeInput = {
  create: AdAutoCreateWithoutCondition_TypeInput;
  update: AdAutoUpdateWithoutCondition_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutFuel_TypeInput = {
  create: AdAutoCreateWithoutFuel_TypeInput;
  update: AdAutoUpdateWithoutFuel_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutTransmission_TypeInput = {
  create: AdAutoCreateWithoutTransmission_TypeInput;
  update: AdAutoUpdateWithoutTransmission_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutVehicle_TypeInput = {
  create: AdAutoCreateWithoutVehicle_TypeInput;
  update: AdAutoUpdateWithoutVehicle_TypeInput;
  where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithoutAdInput = {
  create: AdAutoCreateWithoutAdInput;
  update: AdAutoUpdateWithoutAdInput;
};

export type AdAutoWhereInput = {
  AND?: InputMaybe<Array<AdAutoWhereInput>>;
  NOT?: InputMaybe<Array<AdAutoWhereInput>>;
  OR?: InputMaybe<Array<AdAutoWhereInput>>;
  ad?: InputMaybe<AdRelationFilter>;
  ad_auto_id?: InputMaybe<IntFilter>;
  ad_id?: InputMaybe<IntFilter>;
  condition_type?: InputMaybe<CategoryRelationFilter>;
  condition_type_cid?: InputMaybe<IntNullableFilter>;
  fuel_type?: InputMaybe<CategoryRelationFilter>;
  fuel_type_cid?: InputMaybe<IntNullableFilter>;
  km?: InputMaybe<IntNullableFilter>;
  make?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  power_kw?: InputMaybe<IntNullableFilter>;
  transmission_type?: InputMaybe<CategoryRelationFilter>;
  transmission_type_cid?: InputMaybe<IntNullableFilter>;
  vehicle_type?: InputMaybe<CategoryRelationFilter>;
  vehicle_type_cid?: InputMaybe<IntNullableFilter>;
  year?: InputMaybe<IntFilter>;
};

export type AdAutoWhereUniqueInput = {
  ad_auto_id?: InputMaybe<Scalars['Int']>;
  ad_id?: InputMaybe<Scalars['Int']>;
};

export type AdAvgAggregate = {
  __typename?: 'AdAvgAggregate';
  ad_id?: Maybe<Scalars['Float']>;
  coords_latitude?: Maybe<Scalars['Float']>;
  coords_longitude?: Maybe<Scalars['Float']>;
  coords_radius?: Maybe<Scalars['Float']>;
  price_eurocent?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type AdCategory = {
  __typename?: 'AdCategory';
  ad: Ad;
  ad_id: Scalars['Int'];
  category: Category;
  category_id: Scalars['Int'];
};

export type AdCategoryAd_IdCategory_IdCompoundUniqueInput = {
  ad_id: Scalars['Int'];
  category_id: Scalars['Int'];
};

export type AdCategoryCreateManyAdInput = {
  category_id: Scalars['Int'];
};

export type AdCategoryCreateManyAdInputEnvelope = {
  data: Array<AdCategoryCreateManyAdInput>;
};

export type AdCategoryCreateManyCategoryInput = {
  ad_id: Scalars['Int'];
};

export type AdCategoryCreateManyCategoryInputEnvelope = {
  data: Array<AdCategoryCreateManyCategoryInput>;
};

export type AdCategoryCreateNestedManyWithoutAdInput = {
  connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutAdInput>>;
  create?: InputMaybe<Array<AdCategoryCreateWithoutAdInput>>;
  createMany?: InputMaybe<AdCategoryCreateManyAdInputEnvelope>;
};

export type AdCategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<AdCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<AdCategoryCreateManyCategoryInputEnvelope>;
};

export type AdCategoryCreateOrConnectWithoutAdInput = {
  create: AdCategoryCreateWithoutAdInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryCreateOrConnectWithoutCategoryInput = {
  create: AdCategoryCreateWithoutCategoryInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryCreateWithoutAdInput = {
  category: CategoryCreateNestedOneWithoutAd_CategoriesInput;
};

export type AdCategoryCreateWithoutCategoryInput = {
  ad: AdCreateNestedOneWithoutAd_CategoriesInput;
};

export type AdCategoryListRelationFilter = {
  every?: InputMaybe<AdCategoryWhereInput>;
  none?: InputMaybe<AdCategoryWhereInput>;
  some?: InputMaybe<AdCategoryWhereInput>;
};

export type AdCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
  ad_id?: InputMaybe<IntFilter>;
  category_id?: InputMaybe<IntFilter>;
};

export type AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput = {
  ad_id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdCategoryUpdateManyWithWhereWithoutAdInput = {
  data: AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput;
  where: AdCategoryScalarWhereInput;
};

export type AdCategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput;
  where: AdCategoryScalarWhereInput;
};

export type AdCategoryUpdateManyWithoutAdNestedInput = {
  connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutAdInput>>;
  create?: InputMaybe<Array<AdCategoryCreateWithoutAdInput>>;
  createMany?: InputMaybe<AdCategoryCreateManyAdInputEnvelope>;
  delete?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<AdCategoryUpdateWithWhereUniqueWithoutAdInput>>;
  updateMany?: InputMaybe<Array<AdCategoryUpdateManyWithWhereWithoutAdInput>>;
  upsert?: InputMaybe<Array<AdCategoryUpsertWithWhereUniqueWithoutAdInput>>;
};

export type AdCategoryUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<AdCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<AdCategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<AdCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<AdCategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<AdCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type AdCategoryUpdateWithWhereUniqueWithoutAdInput = {
  data: AdCategoryUpdateWithoutAdInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: AdCategoryUpdateWithoutCategoryInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpdateWithoutAdInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutAd_CategoriesNestedInput>;
};

export type AdCategoryUpdateWithoutCategoryInput = {
  ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_CategoriesNestedInput>;
};

export type AdCategoryUpsertWithWhereUniqueWithoutAdInput = {
  create: AdCategoryCreateWithoutAdInput;
  update: AdCategoryUpdateWithoutAdInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: AdCategoryCreateWithoutCategoryInput;
  update: AdCategoryUpdateWithoutCategoryInput;
  where: AdCategoryWhereUniqueInput;
};

export type AdCategoryWhereInput = {
  AND?: InputMaybe<Array<AdCategoryWhereInput>>;
  NOT?: InputMaybe<Array<AdCategoryWhereInput>>;
  OR?: InputMaybe<Array<AdCategoryWhereInput>>;
  ad?: InputMaybe<AdRelationFilter>;
  ad_id?: InputMaybe<IntFilter>;
  category?: InputMaybe<CategoryRelationFilter>;
  category_id?: InputMaybe<IntFilter>;
};

export type AdCategoryWhereUniqueInput = {
  ad_id_category_id?: InputMaybe<AdCategoryAd_IdCategory_IdCompoundUniqueInput>;
};

export type AdCount = {
  __typename?: 'AdCount';
  ad_categories: Scalars['Int'];
};

export type AdCountAggregate = {
  __typename?: 'AdCountAggregate';
  _all: Scalars['Int'];
  ad_id: Scalars['Int'];
  address: Scalars['Int'];
  coords_latitude: Scalars['Int'];
  coords_longitude: Scalars['Int'];
  coords_radius: Scalars['Int'];
  created_at: Scalars['Int'];
  deleted_at: Scalars['Int'];
  price_eurocent: Scalars['Int'];
  text: Scalars['Int'];
  title: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type AdCreateInput = {
  ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
  ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
  address?: InputMaybe<Scalars['String']>;
  coords_latitude?: InputMaybe<Scalars['Float']>;
  coords_longitude?: InputMaybe<Scalars['Float']>;
  coords_radius?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  deleted_at?: InputMaybe<Scalars['DateTime']>;
  price_eurocent?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateManyUserInput = {
  address?: InputMaybe<Scalars['String']>;
  coords_latitude?: InputMaybe<Scalars['Float']>;
  coords_longitude?: InputMaybe<Scalars['Float']>;
  coords_radius?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  deleted_at?: InputMaybe<Scalars['DateTime']>;
  price_eurocent?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type AdCreateManyUserInputEnvelope = {
  data: Array<AdCreateManyUserInput>;
};

export type AdCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AdWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AdCreateWithoutUserInput>>;
  createMany?: InputMaybe<AdCreateManyUserInputEnvelope>;
};

export type AdCreateNestedOneWithoutAd_AutoInput = {
  connect?: InputMaybe<AdWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_AutoInput>;
  create?: InputMaybe<AdCreateWithoutAd_AutoInput>;
};

export type AdCreateNestedOneWithoutAd_CategoriesInput = {
  connect?: InputMaybe<AdWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_CategoriesInput>;
  create?: InputMaybe<AdCreateWithoutAd_CategoriesInput>;
};

export type AdCreateOrConnectWithoutAd_AutoInput = {
  create: AdCreateWithoutAd_AutoInput;
  where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutAd_CategoriesInput = {
  create: AdCreateWithoutAd_CategoriesInput;
  where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutUserInput = {
  create: AdCreateWithoutUserInput;
  where: AdWhereUniqueInput;
};

export type AdCreateWithoutAd_AutoInput = {
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
  ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
  address?: InputMaybe<Scalars['String']>;
  coords_latitude?: InputMaybe<Scalars['Float']>;
  coords_longitude?: InputMaybe<Scalars['Float']>;
  coords_radius?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  deleted_at?: InputMaybe<Scalars['DateTime']>;
  price_eurocent?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutAd_CategoriesInput = {
  ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
  ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
  address?: InputMaybe<Scalars['String']>;
  coords_latitude?: InputMaybe<Scalars['Float']>;
  coords_longitude?: InputMaybe<Scalars['Float']>;
  coords_radius?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  deleted_at?: InputMaybe<Scalars['DateTime']>;
  price_eurocent?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutUserInput = {
  ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
  ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
  address?: InputMaybe<Scalars['String']>;
  coords_latitude?: InputMaybe<Scalars['Float']>;
  coords_longitude?: InputMaybe<Scalars['Float']>;
  coords_radius?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  deleted_at?: InputMaybe<Scalars['DateTime']>;
  price_eurocent?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  title: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type AdHouse = {
  __typename?: 'AdHouse';
  ad: Ad;
  ad_house_id: Scalars['ID'];
  ad_id: Scalars['Int'];
  meters?: Maybe<Scalars['Int']>;
};

export type AdHouseCreateNestedOneWithoutAdInput = {
  connect?: InputMaybe<AdHouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdHouseCreateOrConnectWithoutAdInput>;
  create?: InputMaybe<AdHouseCreateWithoutAdInput>;
};

export type AdHouseCreateOrConnectWithoutAdInput = {
  create: AdHouseCreateWithoutAdInput;
  where: AdHouseWhereUniqueInput;
};

export type AdHouseCreateWithoutAdInput = {
  meters?: InputMaybe<Scalars['Int']>;
};

export type AdHouseOrderByWithRelationInput = {
  ad?: InputMaybe<AdOrderByWithRelationInput>;
  ad_house_id?: InputMaybe<SortOrder>;
  ad_id?: InputMaybe<SortOrder>;
  meters?: InputMaybe<SortOrder>;
};

export type AdHouseRelationFilter = {
  is?: InputMaybe<AdHouseWhereInput>;
  isNot?: InputMaybe<AdHouseWhereInput>;
};

export type AdHouseUpdateOneWithoutAdNestedInput = {
  connect?: InputMaybe<AdHouseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdHouseCreateOrConnectWithoutAdInput>;
  create?: InputMaybe<AdHouseCreateWithoutAdInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AdHouseUpdateWithoutAdInput>;
  upsert?: InputMaybe<AdHouseUpsertWithoutAdInput>;
};

export type AdHouseUpdateWithoutAdInput = {
  meters?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type AdHouseUpsertWithoutAdInput = {
  create: AdHouseCreateWithoutAdInput;
  update: AdHouseUpdateWithoutAdInput;
};

export type AdHouseWhereInput = {
  AND?: InputMaybe<Array<AdHouseWhereInput>>;
  NOT?: InputMaybe<Array<AdHouseWhereInput>>;
  OR?: InputMaybe<Array<AdHouseWhereInput>>;
  ad?: InputMaybe<AdRelationFilter>;
  ad_house_id?: InputMaybe<IntFilter>;
  ad_id?: InputMaybe<IntFilter>;
  meters?: InputMaybe<IntNullableFilter>;
};

export type AdHouseWhereUniqueInput = {
  ad_house_id?: InputMaybe<Scalars['Int']>;
  ad_id?: InputMaybe<Scalars['Int']>;
};

export type AdListRelationFilter = {
  every?: InputMaybe<AdWhereInput>;
  none?: InputMaybe<AdWhereInput>;
  some?: InputMaybe<AdWhereInput>;
};

export type AdMaxAggregate = {
  __typename?: 'AdMaxAggregate';
  ad_id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  coords_latitude?: Maybe<Scalars['Float']>;
  coords_longitude?: Maybe<Scalars['Float']>;
  coords_radius?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  deleted_at?: Maybe<Scalars['DateTime']>;
  price_eurocent?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AdMinAggregate = {
  __typename?: 'AdMinAggregate';
  ad_id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  coords_latitude?: Maybe<Scalars['Float']>;
  coords_longitude?: Maybe<Scalars['Float']>;
  coords_radius?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  deleted_at?: Maybe<Scalars['DateTime']>;
  price_eurocent?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AdOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdOrderByWithRelationInput = {
  ad_auto?: InputMaybe<AdAutoOrderByWithRelationInput>;
  ad_categories?: InputMaybe<AdCategoryOrderByRelationAggregateInput>;
  ad_house?: InputMaybe<AdHouseOrderByWithRelationInput>;
  ad_id?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  coords_latitude?: InputMaybe<SortOrder>;
  coords_longitude?: InputMaybe<SortOrder>;
  coords_radius?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  deleted_at?: InputMaybe<SortOrder>;
  price_eurocent?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  user_id?: InputMaybe<SortOrder>;
};

export type AdRelationFilter = {
  is?: InputMaybe<AdWhereInput>;
  isNot?: InputMaybe<AdWhereInput>;
};

export enum AdScalarFieldEnum {
  AdId = 'ad_id',
  Address = 'address',
  CoordsLatitude = 'coords_latitude',
  CoordsLongitude = 'coords_longitude',
  CoordsRadius = 'coords_radius',
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  PriceEurocent = 'price_eurocent',
  Text = 'text',
  Title = 'title',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type AdScalarWhereInput = {
  AND?: InputMaybe<Array<AdScalarWhereInput>>;
  NOT?: InputMaybe<Array<AdScalarWhereInput>>;
  OR?: InputMaybe<Array<AdScalarWhereInput>>;
  ad_id?: InputMaybe<IntFilter>;
  address?: InputMaybe<StringNullableFilter>;
  coords_latitude?: InputMaybe<FloatNullableFilter>;
  coords_longitude?: InputMaybe<FloatNullableFilter>;
  coords_radius?: InputMaybe<IntNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  deleted_at?: InputMaybe<DateTimeNullableFilter>;
  price_eurocent?: InputMaybe<IntNullableFilter>;
  text?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type AdSumAggregate = {
  __typename?: 'AdSumAggregate';
  ad_id?: Maybe<Scalars['Int']>;
  coords_latitude?: Maybe<Scalars['Float']>;
  coords_longitude?: Maybe<Scalars['Float']>;
  coords_radius?: Maybe<Scalars['Int']>;
  price_eurocent?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type AdUpdateInput = {
  ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
  ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpdateManyWithWhereWithoutUserInput = {
  data: AdUpdateManyMutationInput;
  where: AdScalarWhereInput;
};

export type AdUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AdWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AdCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AdCreateWithoutUserInput>>;
  createMany?: InputMaybe<AdCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AdWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AdScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AdWhereUniqueInput>>;
  set?: InputMaybe<Array<AdWhereUniqueInput>>;
  update?: InputMaybe<Array<AdUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AdUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AdUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AdUpdateOneRequiredWithoutAd_AutoNestedInput = {
  connect?: InputMaybe<AdWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_AutoInput>;
  create?: InputMaybe<AdCreateWithoutAd_AutoInput>;
  update?: InputMaybe<AdUpdateWithoutAd_AutoInput>;
  upsert?: InputMaybe<AdUpsertWithoutAd_AutoInput>;
};

export type AdUpdateOneRequiredWithoutAd_CategoriesNestedInput = {
  connect?: InputMaybe<AdWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_CategoriesInput>;
  create?: InputMaybe<AdCreateWithoutAd_CategoriesInput>;
  update?: InputMaybe<AdUpdateWithoutAd_CategoriesInput>;
  upsert?: InputMaybe<AdUpsertWithoutAd_CategoriesInput>;
};

export type AdUpdateWithWhereUniqueWithoutUserInput = {
  data: AdUpdateWithoutUserInput;
  where: AdWhereUniqueInput;
};

export type AdUpdateWithoutAd_AutoInput = {
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
  ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutAd_CategoriesInput = {
  ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
  ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutUserInput = {
  ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
  ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpsertWithWhereUniqueWithoutUserInput = {
  create: AdCreateWithoutUserInput;
  update: AdUpdateWithoutUserInput;
  where: AdWhereUniqueInput;
};

export type AdUpsertWithoutAd_AutoInput = {
  create: AdCreateWithoutAd_AutoInput;
  update: AdUpdateWithoutAd_AutoInput;
};

export type AdUpsertWithoutAd_CategoriesInput = {
  create: AdCreateWithoutAd_CategoriesInput;
  update: AdUpdateWithoutAd_CategoriesInput;
};

export type AdWhereInput = {
  AND?: InputMaybe<Array<AdWhereInput>>;
  NOT?: InputMaybe<Array<AdWhereInput>>;
  OR?: InputMaybe<Array<AdWhereInput>>;
  ad_auto?: InputMaybe<AdAutoRelationFilter>;
  ad_categories?: InputMaybe<AdCategoryListRelationFilter>;
  ad_house?: InputMaybe<AdHouseRelationFilter>;
  ad_id?: InputMaybe<IntFilter>;
  address?: InputMaybe<StringNullableFilter>;
  coords_latitude?: InputMaybe<FloatNullableFilter>;
  coords_longitude?: InputMaybe<FloatNullableFilter>;
  coords_radius?: InputMaybe<IntNullableFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  deleted_at?: InputMaybe<DateTimeNullableFilter>;
  price_eurocent?: InputMaybe<IntNullableFilter>;
  text?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  user_id?: InputMaybe<IntNullableFilter>;
};

export type AdWhereUniqueInput = {
  ad_id?: InputMaybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  AdAutoConditionType?: Maybe<Array<AdAuto>>;
  AdAutoFuelType?: Maybe<Array<AdAuto>>;
  AdAutoTransmissionType?: Maybe<Array<AdAuto>>;
  AdAutoVehicleType?: Maybe<Array<AdAuto>>;
  _count: CategoryCount;
  ad_categories?: Maybe<Array<AdCategory>>;
  category_id: Scalars['ID'];
  children?: Maybe<Array<Category>>;
  code: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<Category>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  category_id?: Maybe<Scalars['Float']>;
  parent_category_id?: Maybe<Scalars['Float']>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  AdAutoConditionType: Scalars['Int'];
  AdAutoFuelType: Scalars['Int'];
  AdAutoTransmissionType: Scalars['Int'];
  AdAutoVehicleType: Scalars['Int'];
  ad_categories: Scalars['Int'];
  children: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  category_id: Scalars['Int'];
  code: Scalars['Int'];
  icon: Scalars['Int'];
  name: Scalars['Int'];
  parent_category_id: Scalars['Int'];
};

export type CategoryCreateInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateManyParentInput = {
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryCreateManyParentInputEnvelope = {
  data: Array<CategoryCreateManyParentInput>;
};

export type CategoryCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutAdAutoConditionTypeInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditionTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoConditionTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoFuelTypeInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoFuelTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoFuelTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoTransmissionTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoVehicleTypeInput>;
};

export type CategoryCreateNestedOneWithoutAd_CategoriesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAd_CategoriesInput>;
  create?: InputMaybe<CategoryCreateWithoutAd_CategoriesInput>;
};

export type CategoryCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
};

export type CategoryCreateOrConnectWithoutAdAutoConditionTypeInput = {
  create: CategoryCreateWithoutAdAutoConditionTypeInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoFuelTypeInput = {
  create: CategoryCreateWithoutAdAutoFuelTypeInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput = {
  create: CategoryCreateWithoutAdAutoTransmissionTypeInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput = {
  create: CategoryCreateWithoutAdAutoVehicleTypeInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAd_CategoriesInput = {
  create: CategoryCreateWithoutAd_CategoriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutAdAutoConditionTypeInput = {
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutAdAutoFuelTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutAdAutoTransmissionTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutAdAutoVehicleTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutAd_CategoriesInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutChildrenInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
};

export type CategoryCreateWithoutParentInput = {
  AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
  AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
  ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  code: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  category_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  category_id?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  AdAutoConditionType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
  AdAutoFuelType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
  ad_categories?: InputMaybe<AdCategoryOrderByRelationAggregateInput>;
  category_id?: InputMaybe<SortOrder>;
  children?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parent?: InputMaybe<CategoryOrderByWithRelationInput>;
  parent_category_id?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CategoryId = 'category_id',
  Code = 'code',
  Icon = 'icon',
  Name = 'name',
  ParentCategoryId = 'parent_category_id'
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  category_id?: InputMaybe<IntFilter>;
  code?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parent_category_id?: InputMaybe<IntNullableFilter>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  category_id?: Maybe<Scalars['Int']>;
  parent_category_id?: Maybe<Scalars['Int']>;
};

export type CategoryUpdateInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutParentInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutParentInput>>;
};

export type CategoryUpdateOneRequiredWithoutAd_CategoriesNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAd_CategoriesInput>;
  create?: InputMaybe<CategoryCreateWithoutAd_CategoriesInput>;
  update?: InputMaybe<CategoryUpdateWithoutAd_CategoriesInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAd_CategoriesInput>;
};

export type CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditionTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoConditionTypeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutAdAutoConditionTypeInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAdAutoConditionTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoFuelTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoFuelTypeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutAdAutoFuelTypeInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAdAutoFuelTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoTransmissionTypeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutAdAutoTransmissionTypeInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAdAutoTransmissionTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput>;
  create?: InputMaybe<CategoryCreateWithoutAdAutoVehicleTypeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutAdAutoVehicleTypeInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAdAutoVehicleTypeInput>;
};

export type CategoryUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutChildrenInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutChildrenInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
  data: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutAdAutoConditionTypeInput = {
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutAdAutoFuelTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutAdAutoTransmissionTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutAdAutoVehicleTypeInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutAd_CategoriesInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutChildrenInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
};

export type CategoryUpdateWithoutParentInput = {
  AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
  AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
  AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
  AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
  ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  update: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutAdAutoConditionTypeInput = {
  create: CategoryCreateWithoutAdAutoConditionTypeInput;
  update: CategoryUpdateWithoutAdAutoConditionTypeInput;
};

export type CategoryUpsertWithoutAdAutoFuelTypeInput = {
  create: CategoryCreateWithoutAdAutoFuelTypeInput;
  update: CategoryUpdateWithoutAdAutoFuelTypeInput;
};

export type CategoryUpsertWithoutAdAutoTransmissionTypeInput = {
  create: CategoryCreateWithoutAdAutoTransmissionTypeInput;
  update: CategoryUpdateWithoutAdAutoTransmissionTypeInput;
};

export type CategoryUpsertWithoutAdAutoVehicleTypeInput = {
  create: CategoryCreateWithoutAdAutoVehicleTypeInput;
  update: CategoryUpdateWithoutAdAutoVehicleTypeInput;
};

export type CategoryUpsertWithoutAd_CategoriesInput = {
  create: CategoryCreateWithoutAd_CategoriesInput;
  update: CategoryUpdateWithoutAd_CategoriesInput;
};

export type CategoryUpsertWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  update: CategoryUpdateWithoutChildrenInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  AdAutoConditionType?: InputMaybe<AdAutoListRelationFilter>;
  AdAutoFuelType?: InputMaybe<AdAutoListRelationFilter>;
  AdAutoTransmissionType?: InputMaybe<AdAutoListRelationFilter>;
  AdAutoVehicleType?: InputMaybe<AdAutoListRelationFilter>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  ad_categories?: InputMaybe<AdCategoryListRelationFilter>;
  category_id?: InputMaybe<IntFilter>;
  children?: InputMaybe<CategoryListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<CategoryRelationFilter>;
  parent_category_id?: InputMaybe<IntNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  category_id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  createUser: User;
  removeAd?: Maybe<Ad>;
  removeCategory?: Maybe<Category>;
  removeUser?: Maybe<User>;
  updateAd?: Maybe<Ad>;
  updateCategory?: Maybe<Category>;
  updateUser?: Maybe<User>;
};


export type MutationCreateAdArgs = {
  data: AdCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveAdArgs = {
  where: AdWhereUniqueInput;
};


export type MutationRemoveCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateAdArgs = {
  data: AdUpdateInput;
  where: AdWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findAllAds: Array<Ad>;
  findAllCategories: Array<Category>;
  findAllUsers: Array<User>;
  findOneAd?: Maybe<Ad>;
  findOneCategory?: Maybe<Category>;
  findOneUser?: Maybe<User>;
  findUniqueAd?: Maybe<Ad>;
  findUniqueCategory?: Maybe<Category>;
  findUniqueUser?: Maybe<User>;
};


export type QueryFindAllAdsArgs = {
  cursor?: InputMaybe<AdWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdWhereInput>;
};


export type QueryFindAllCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindAllUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindOneAdArgs = {
  cursor?: InputMaybe<AdWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdWhereInput>;
};


export type QueryFindOneCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindOneUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueAdArgs = {
  where: AdWhereUniqueInput;
};


export type QueryFindUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  ads?: Maybe<Array<Ad>>;
  cloud_user_id: Scalars['Int'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  user_id: Scalars['ID'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  cloud_user_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  ads: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  cloud_user_id: Scalars['Int'];
  email: Scalars['Int'];
  name: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type UserCreateInput = {
  ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
  cloud_user_id: Scalars['Int'];
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutAdsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdsInput>;
  create?: InputMaybe<UserCreateWithoutAdsInput>;
};

export type UserCreateOrConnectWithoutAdsInput = {
  create: UserCreateWithoutAdsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAdsInput = {
  cloud_user_id: Scalars['Int'];
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  cloud_user_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  cloud_user_id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserOrderByWithRelationInput = {
  ads?: InputMaybe<AdOrderByRelationAggregateInput>;
  cloud_user_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CloudUserId = 'cloud_user_id',
  Email = 'email',
  Name = 'name',
  UserId = 'user_id'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  cloud_user_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
  cloud_user_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutAdsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdsInput>;
  create?: InputMaybe<UserCreateWithoutAdsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutAdsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAdsInput>;
};

export type UserUpdateWithoutAdsInput = {
  cloud_user_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdsInput = {
  create: UserCreateWithoutAdsInput;
  update: UserUpdateWithoutAdsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  ads?: InputMaybe<AdListRelationFilter>;
  cloud_user_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

export type CreateAdMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
}>;


export type CreateAdMutation = { __typename?: 'Mutation', createAd: { __typename?: 'Ad', ad_id: string, title: string, text: string } };

export type FindOneAdByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
}>;


export type FindOneAdByIdQuery = { __typename?: 'Query', findOneAd?: { __typename?: 'Ad', title: string, text: string } | null };


export const CreateAdDocument = `
    mutation CreateAd($title: String!, $text: String!) {
  createAd(data: {title: $title, text: $text}) {
    ad_id
    title
    text
  }
}
    `;
export const FindOneAdByIdDocument = `
    query FindOneAdById($id: Int) {
  findOneAd(where: {ad_id: {equals: $id}}) {
    title
    text
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    CreateAd: build.mutation<CreateAdMutation, CreateAdMutationVariables>({
      query: (variables) => ({ document: CreateAdDocument, variables })
    }),
    FindOneAdById: build.query<FindOneAdByIdQuery, FindOneAdByIdQueryVariables | void>({
      query: (variables) => ({ document: FindOneAdByIdDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCreateAdMutation, useFindOneAdByIdQuery, useLazyFindOneAdByIdQuery } = injectedRtkApi;

