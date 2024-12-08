import pack1 from '@monorepo-ts/pack1'

export default function pack2(origin: string): void {
    console.log('pack2 :', origin);
    pack1('pack2');
}
