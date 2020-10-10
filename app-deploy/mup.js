
module.exports = {
  servers: {
    one: {
      host: '13.233.108.136',
      username: 'ubuntu',
      pem:'~/birdwa.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

meteor: {
    name: 'ci-cd_demo',
    path: '../../ci-cd_demo',
    servers: {
      one: {}
    },

    buildOptions: {
      serverOnly: true,
    },
   env:{
      ROOT_URL: '13.233.108.136',
    	PORT:4000,
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    dockerImage: 'abernix/meteord:node-8.4.0-base',
    deployCheckWaitTime: 60,
    enableUploadProgressBar: true,
  },


mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
