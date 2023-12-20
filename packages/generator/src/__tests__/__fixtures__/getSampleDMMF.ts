import { getDMMF, getSchema } from '@prisma/internals'
import {join} from 'path'


export const getSampleDMMF = async () => {
  return getDMMF({
    datamodel: await getSchema(join(__dirname, './sample.prisma')),
  })
}
