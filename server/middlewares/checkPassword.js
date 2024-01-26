const { Users } = require('../database-Sequelize/index');
const bcrypt = require('bcrypt');

const checkPassword = async function (req, res, next) {
    const passwordToCheck = req.body.previousPassword;
    const userId = req.params.id;

    try {
        const user = await Users.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (!user.user_password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // console.log("passw to check ", passwordToCheck);
        // console.log("userpass",user.user_password);
        const passwordMatch = await bcrypt.compare(passwordToCheck, user.user_password);

        if (passwordMatch) {
            next();
        } else {
            // Passwords don't match, send an error response
            return res.status(401).json({ error: 'Invalid password' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error in password checking' });
    }
};

module.exports = checkPassword;
