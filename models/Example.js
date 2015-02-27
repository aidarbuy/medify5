// reference
var schema = mongoose.Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        min: 18,
        max: 65
    },
    mixed: mongoose.Schema.Types.Mixed,
    _someId: mongoose.Schema.Types.ObjectId,
    array: [],
    ofString: [String],
    ofNumber: [Number],
    ofDate: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [mongoose.Schema.Types.Mixed],
    ofObjectId: [mongoose.Schema.Types.ObjectId],
    nested: {
        stuff: {
            type: String,
            lowercase: true,
            trim: true
        }
    }
});

// example use
var Thing = mongoose.model('Thing', schema);

var m = new Thing;
m.name = 'Statue of Liberty'
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = {
    any: {
        thing: 'i want'
    }
};
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1, 2, 3, 4);
m.ofDate.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', {
    four: 5
}];
m.nested.stuff = 'good';
// m.save();