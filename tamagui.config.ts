import { createTamagui } from '@tamagui/core'
import { shorthands } from '@tamagui/shorthands'
import defaultConfig from '@tamagui/config-default'

export default createTamagui({
  ...defaultConfig,
  shorthands,
})
