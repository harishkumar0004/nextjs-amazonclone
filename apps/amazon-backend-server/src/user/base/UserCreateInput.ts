/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  IsBoolean,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { EnumUserRoles } from "./EnumUserRoles";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAdmin?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => ReviewCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReviewCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReviewCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  reviews?: ReviewCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    enum: EnumUserRoles,
    isArray: true,
  })
  @IsEnum(EnumUserRoles, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserRoles], {
    nullable: true,
  })
  roles?: Array<"Option1">;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
