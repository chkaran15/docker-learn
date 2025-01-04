const GREETINGS = [
   "Hello world!",
   "Hi there!",
   "I am learning Docker!",
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};