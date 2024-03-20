const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app.post('/api/users/register', UserController.registerUser);
    app.post('/api/users/login', UserController.loginUser);
    app.get('/api/users/profile/:id', UserController.getUserProfile);
    app.put('/api/users/profile/:id', UserController.updateUserProfile);
    app.delete('/api/users/:id', UserController.deleteUser);
    app.post('/api/users/logout', UserController.logoutUser);
};

