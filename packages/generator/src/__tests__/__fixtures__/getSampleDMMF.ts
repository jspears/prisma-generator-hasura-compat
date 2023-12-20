import { getDMMF, getSchema } from '@prisma/internals'
import path from 'path'


export const getSampleDMMF = async () => {
  return getDMMF({
    datamodel: await getSchema(path.join(__dirname, './sample.prisma')),
  })
}
