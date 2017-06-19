module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://lyb:a2250800@ds133271.mlab.com:33271/lyb_blog'

};