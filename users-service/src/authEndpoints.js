const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./db/models/user');

const authEndpoints = app => {
  app.post('/', async (req, res, next) => {
    // const body = await req.body.email;
    // console.log(body);
    // res.send(body);
    // res.send('req.body.email');
    // if (req.body.login) {
    //   if (!req.body.email || !req.body.password) {
    //     return next(new Error("Invalid body!"));
    //   }
    //   try {
    //     const user = await User.findOne({ email: req.body.email });
    //     if (!user) {
    //       throw new Error('User does not exist!');
    //     }
    //     const isEqual = await bcrypt.compare(req.body.password, user.password);
    //     if (!isEqual) {
    //       throw new Error('Password is incorrect!');
    //     }
    //     const token = jwt.sign(
    //       { userId: user.id, email: user.email },
    //       'somesupersecretkey',
    //       {
    //         expiresIn: '1h'
    //       }
    //       );
    //       return res.json({ userId: user.id, token: token, tokenExpiration: 1 });
    //     } catch (err) {
    //       return next(err);
    //   }
    // }
    // if (req.body.createUser) {
      if (!req.body.email || !req.body.password) {
        return next(new Error("Invalid body!"));
      }
      try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          throw new Error('User exists already.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        
        const user = new User({
          email: req.body.email,
          password: hashedPassword
        });
        
        const result = await user.save();
        
        return res.json({ ...result._doc, password: null, _id: result.id });
      } catch (err) {
        return next(err);
      }
    // }
  });
};

export default authEndpoints;