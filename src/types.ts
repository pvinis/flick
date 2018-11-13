export enum Shade {
    Light = 'LIGHT',
    Dark = 'Dark',
}
 
export type Extension = {
    name: string
    shouldRun(): boolean
    run(shade: Shade): void
  }

  