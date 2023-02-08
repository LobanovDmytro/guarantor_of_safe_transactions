const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role, nickname, score, password, systemMessage, checkRu, minimumTransferAmount, sumTransferAmoumt, completed) => {
    return jwt.sign(
        {id, email, role, nickname, score, password, systemMessage, checkRu, minimumTransferAmount, sumTransferAmoumt, completed},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, nickname, checkRu} = req.body
        if (!email || !password || !nickname) {
            return next(ApiError.badRequest('Введите все данные'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const checkNickname = await User.findOne({where: {nickname}})
        if (checkNickname) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role: 'USER', password: hashPassword, nickname, checkRu})
        const systemMessage = 'false'
        const token = generateJwt(user.id, 
            user.email, 
            user.role, 
            user.nickname, 
            user.score, password, 
            systemMessage, 
            user.checkRu, 
            user.minimumTransferAmount, 
            user.sumTransferAmoumt,
            user.completed)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}}) ?? await User.findOne({where: {nickname: email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {

            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, 
            user.email, 
            user.role, 
            user.nickname, 
            user.score, 
            password, 
            user.systemMessage, 
            user.checkRu, 
            user.minimumTransferAmount, 
            user.sumTransferAmoumt,
            user.completed)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, 
            req.user.email, 
            req.user.role, 
            req.user.nickname, 
            req.user.score, 
            req.user.password, 
            req.user.checkRu, 
            req.user.minimumTransferAmount, 
            req.user.sumTransferAmoumt,
            req.user.completed)
        return res.json({token})
    }

    async changeNickname(req, res, next) {
        const {nickname, id, password} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const checkNickname = await User.findOne({where: {nickname}})
        if (checkNickname) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        if (nickname) {
            await User.update({nickname: nickname}, {where: {id: id}})
           return res.json({...user.dataValues, nickname: nickname})
        } else {
            return next(ApiError.internal('Указано неверное имя пользователя'))
        }
    }

    async changePassword(req, res, next) {
        const {newPassword, id, password} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if (newPassword) {
            const hashPassword = await bcrypt.hash(newPassword, 5)
            await User.update({password: hashPassword}, {where: {id: id}})
           return res.json({...user.dataValues, password: newPassword})
        } else {
            return next(ApiError.internal('Указан неверный id пользователя'))
        }
    }

    async changeRole(req, res, next) {
        const {role, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER' || 
        creator.role === 'CHATER' || 
        (role === 'MODERATOR' && creator.role !== 'ADMIN') || 
        (user.role === 'MODERATOR' && creator.role !== 'MODERATOR') ||
        role === 'ADMIN' || 
        user.role === 'ADMIN'){
            return next(ApiError.badRequest('Нет доступа'))
        }
          const updatedUser = await User.update({role}, {where: {id}})
           return res.json(updatedUser)
    }

    async changeScore(req, res, next) {
        const {score, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER'){
            return next(ApiError.badRequest('Нет доступа'))
        }
           const updatedUser = await User.update({score}, {where: {id}})
           return res.json(updatedUser)
    }

    async changeSystemMessage(req, res, next) {
        const {systemMessage, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER'){
            return next(ApiError.badRequest('Нет доступа'))
        }
            await User.update({systemMessage}, {where: {id}})
           return res.json({...user.dataValues, systemMessage})
    }

    async changeCompleted(req, res, next) {
        const {completed, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER'){
            return next(ApiError.badRequest('Нет доступа'))
        }
           const updatedUser = await User.update({completed: Number(completed)}, {where: {id}})
           return res.json(updatedUser)
    }

    async changeCheckRu(req, res, next) {
        const {checkRu, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER'){
            return next(ApiError.badRequest('Нет доступа'))
        }
            await User.update({checkRu}, {where: {id}})
           return res.json({...user.dataValues, checkRu})
    }

    async changeTransferAmount(req, res, next) {
        const {minimumTransferAmount, sumTransferAmoumt, id, creatorEmail, creatorPassword} = req.body
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role === 'USER'){
            return next(ApiError.badRequest('Нет доступа'))
        }
            await User.update({minimumTransferAmount, sumTransferAmoumt}, {where: {id}})
           return res.json({...user.dataValues, minimumTransferAmount, sumTransferAmoumt})
    }

    async changeUser(req, res, next) {
        const {id, 
            role, 
            score, 
            systemMessage, 
            checkRu, 
            completed, 
            minimumTransferAmount, 
            creatorEmail, 
            creatorPassword} = req.body
            if (!id || !creatorEmail || !creatorPassword) {
                return next(ApiError.badRequest('Введите все данные'))
            }
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role !== 'ADMIN'){
            return next(ApiError.badRequest('Нет доступа'))
        }
       const updatedUser = await User.update({role, 
        score, 
        systemMessage, 
        checkRu, 
        completed, 
        minimumTransferAmount}, {where: {id}})
           return res.json(updatedUser)
    }

    async decreaseUserScore(req, res, next) {
        const {score, email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(score > user.score){
            return next(ApiError.internal('Недостаточно средств'))
        }
           await User.update({score: user.score - score}, {where: {email}})
           return res.json({...user.dataValues, score: user.score - score})
    }

    async deleteUsers(req, res, next) {
        const {id, creatorEmail, creatorPassword} = req.body
        if (!id || !creatorEmail || !creatorPassword) {
            return next(ApiError.badRequest('Введите все данные'))
        }
        const user = await User.findOne({where: {id}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const creator = await User.findOne({where: {email: creatorEmail}})
        if (!creator) {
            return next(ApiError.internal('Админ не найден'))
        }
        let comparePassword = bcrypt.compareSync(creatorPassword, creator.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        if(creator.role !== 'ADMIN'){
            return next(ApiError.badRequest('Нет доступа'))
        }
            await User.destroy({
                where: {id}
            })
           return res.json({...user.dataValues})
    }

    async getAllUsers(req, res, next) {
        const users = await User.findAll()
        return res.json({users})
    }

}

module.exports = new UserController()
