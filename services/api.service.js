module.exports = {
    getWelcomeMessage: (req, res) => {
        return res.status(200).json({ message: 'Welcome to Screen Capture 1.0.2'});
    },

    postScreenCapture: (req, res) => {
      
      console.log('welcome', req.body);
      return res.status(200).json({ message: 'Process Data'});
  }
}