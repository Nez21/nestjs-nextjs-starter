import { analyzePath } from './next.routes'

describe('NextRoutes', () => {
   it('should be matched', () => {
      expect(
         [
            '/foo/bar',
            '/foo/[bar]',
            '/[foo]/[bar]',
            '/foo/[...bar]',
            '/foo/[[...bar]]',
            '/foo/bar/index',
            '/foo/index/[...bar]',
            '/foo/index/[[...bar]]',
         ].map((el) => analyzePath(el, null)),
      ).toMatchObject([
         '/foo/bar',
         '/foo/:bar',
         '/:foo/:bar',
         '/foo/*',
         '/foo*',
         '/foo/bar/',
         '/foo/index/*',
         '/foo/index*',
      ])
   })

   it('should be not matched', () => {
      expect(() => analyzePath('/[...foo]/index', null)).toThrowError(
         'Invalid route',
      )
      expect(() => analyzePath('/[[...foo]]/index', null)).toThrowError(
         'Invalid route',
      )
   })
})
