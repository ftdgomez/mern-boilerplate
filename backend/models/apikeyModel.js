import mongoose from 'mongoose'

const apikeySchema = mongoose.Schema(
    {
        value: {
            type: String,
            required: true
        },
        isUsed: {
            type: Boolean,
            required: true,
            default: false
        },
        usedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'User',
        }
    }
)

const ApiKey = mongoose.model('ApiKey', apikeySchema)

export default ApiKey