require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5eadafe5ab0d943c3fdaefc3', 19).then((count) => {
    console.log('count : ', count)
}).catch((e) => {
    console.log(e)
})