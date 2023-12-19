import {  generateAllEnums } from '../helpers/genEnum'
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'
import {print} from 'graphql';

test('enum generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  expect(print(generateAllEnums(sampleDMMF.datamodel.enums))).toMatchSnapshot('enums')
})
