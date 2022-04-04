module.exports = {
   apps: [
      {
         name: 'nestjs-nextjs',
         script: './__build__/main.js',
         env: {
            NODE_ENV: 'production',
         },
      },
   ],
}
