// export default async function fetcher<JSON = any>(
//   input: RequestInfo,
//   init?: RequestInit
// ): Promise<JSON> {
//   const res = await fetch(input, init);
//   return res.json();
// }
import axios from 'axios'

export default async function fetcher(url) {
    const res = await axios.get(url).then((res) => res.data)
    return res
}
