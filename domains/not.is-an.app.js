addSubDomain({
  description: 'A website for my vercel bot',
  domain: 'is-an.app',
  subdomain: 'not',
  owner: {
    email: 'minhvmware@duck.com',
  },
  record: {
    CNAME: 'minhvmware.top',
    TXT: ['_discord.not.is-an.app', 'txt', 'dh=4d2afead8a4b28129541bbf95b156eeaa6b2632b'],
  },
  proxy: false
})
