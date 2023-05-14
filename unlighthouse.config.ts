export default {
    unlighthouse: {
      scanner: {
        // simulate a desktop device
        device: 'mobile',
        throttle: true,
      }
    },
    puppeteerOptions: {
        headless: true,
        args: ['--no-sandbox']
      }
    
  }