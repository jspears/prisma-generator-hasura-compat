import { DMMF } from '@prisma/generator-helper'
import type {  DocumentNode,  EnumTypeDefinitionNode,
  DefinitionNode } from 'graphql'
import { print,Kind } from 'graphql';
type EnumType = DMMF.DatamodelEnum;
type EnumValue = DMMF.EnumValue;


export function generateAllEnums(enums:EnumType[]):DocumentNode{

  const definitions:DefinitionNode[] = enums.map(({ name,dbName, values }) =>({
    kind: Kind.ENUM_TYPE_DEFINITION,
    name: { kind: Kind.NAME, value:  dbName ?? name },
    values: values.map(v=>({
      kind: Kind.ENUM_VALUE_DEFINITION,
      name: { kind: Kind.NAME, value: v.dbName ??v.name },
    }))
  }) )

  return {
    kind: Kind.DOCUMENT,
    definitions
  } as const;
}

export function printAllEnums(enums:EnumType[]){
  return print(generateAllEnums(enums));
}

