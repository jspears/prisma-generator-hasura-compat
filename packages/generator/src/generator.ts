import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import { GENERATOR_NAME } from './constants'
import { printAllEnums } from './helpers/genEnum'
import { writeFileSafely } from './utils/writeFileSafely'
const pkg = require('../package.json');
generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version:pkg.version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    const writeLocation = options.generator.output?.value ?? 'enums.graphql';

    await writeFileSafely(writeLocation, printAllEnums(options.dmmf.datamodel.enums))
  },
})
