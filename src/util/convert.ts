
export function mapToArr(myMap: Map<string, any>): any[] {
   return [...myMap].map(([name, value]) => ({ name, value }))
}
