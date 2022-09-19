const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: { type: 'String', required: 'true' },
    name: { type: 'String', required: 'true' },
    desc: { type: 'String', required: 'true' },
    amount: { type: 'Number', required: 'true' },
    btn: {type: 'Boolean', required: 'true'},
    userId: { type: 'String', required: 'true' }
});

module.exports = mongoose.model('Expense', expenseSchema);