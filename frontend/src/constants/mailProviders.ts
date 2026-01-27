export const mailProviderOptions = [
  { label: 'DuckMail', value: 'duckmail' },
  { label: 'Moemail', value: 'moemail' },
  { label: 'Freemail', value: 'freemail' },
] as const

export type TempMailProvider = typeof mailProviderOptions[number]['value']

export const defaultMailProvider: TempMailProvider = 'duckmail'
