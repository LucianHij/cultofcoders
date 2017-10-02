import SimpleSchema from 'simpl-schema';

export const schema = new SimpleSchema({
    name: String,
    age: SimpleSchema.Integer,
    registered: Boolean,
});