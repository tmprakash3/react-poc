

export default {
    updateProfile: (req, res, next) => {
        req.user.comparedPassword(req.body.password, (err, good) => {
            if (err || !good) return res.status(401).send(err || 'Incorrect Password')
            const userId = req.user._id;
            const newProfile = {
                name: {
                    first: req.body.firstName, 
                    last: req.body.lastName
                },
                phone:{

                    number:req.body.mobile
                },
                eventmangament:req.body.eventmangament,
                cateringservices:req.body.cateringservices,
                foodservice:req.body.foodservice
               
            };
            delete newProfile.email;
            delete newProfile.password;
            
            UserModel.findByIdAndUpdate(userId, newProfile, {new: true})
            .then(() => res.sendStatus(200))
            .catch(next)
        })
    }
    
}
