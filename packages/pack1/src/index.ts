import pack3 from '@monorepo-ts/pack3'

export default function pack1(origin: string): void {
    console.log('pack1 :', origin)

    pack3('pack1')
}
