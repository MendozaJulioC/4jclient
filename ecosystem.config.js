module.exports = {
  apps : [{
    script: 'npm start',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      key: 'backssepdm.pem',
      user : 'ubuntu',
      host : '3.145.172.128',
      ref  : 'origin/main',
      repo : 'git@github.com:MendozaJulioC/4jclient.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};

