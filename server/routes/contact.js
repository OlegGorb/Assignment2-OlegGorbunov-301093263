let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next) {
    
    // check is the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Rout for the Book List page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Rout for displaying Add page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* GET Rout for processing Add page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Rout for displaying Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* GET Rout for processing Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET Rout to Deletion page - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;