import { glob } from 'glob-promise'

export const analyzePath = (path: string, remain: string) => {
   if (!path) return remain || ''

   const arr = path.split(/^(\/.*)?\/(.*)$/)
   if (arr.length === 0) throw new Error('Invalid route')
   if (!arr[2]) return ''

   const rest = arr[1] || ''

   // Path parameter /foo/[bar]/[baz]
   let match = arr[2].split(/^\[(\w+)\]$/)
   if (match[1]) return analyzePath(rest, '/:' + match[1]) + (remain || '')

   // Catch all routes /foo/[...bar]
   match = arr[2].split(/^\[\.{3}(\w+)\]$/)
   if (match[1]) {
      if (remain) throw new Error('Invalid route')
      return analyzePath(rest, '/*')
   }

   // Optional catch all routes /foo/[[...bar]]
   match = arr[2].split(/^\[\[\.{3}(\w+)\]\]$/)
   if (match[1]) {
      if (remain) throw new Error('Invalid route')
      return analyzePath(rest, '*')
   }

   // Index page
   if (arr[2] === 'index' && !remain) return analyzePath(rest, '/')

   return analyzePath(rest, '/' + arr[2]) + (remain || '')
}

export const pageRoutes = glob
   .sync('pages/**/[^_]*.tsx')
   .map((el) => analyzePath(el.split(/^pages(\/.*)\.\w+$/)[1], null))
