const Pin = require("../Database/pins");

async function createPin(req, res) {
    const {
        title,
        description,
        image,
        email,
        avatar,
        comments
    } = req.body

    await Pin.create({
        title,
        description,
        image,
        email,
        avatar,
        comments
    });

    return res.status(200).send({
        status: "success",
        message: "Pin Created"
    })
}

async function sendPins(req, res) {
    const pins = await (await Pin.find()).reverse();
    return res.status(200).send({
        status: "success",
        message: "Pin send",
        pins
    })
}

async function individualPin(req, res) {

    const { id } = req.body
    console.log(id)
    const pin = await Pin.findOne({ _id: id });

    return res.status(200).send({
        status: "success",
        message: "pin send",
        comments: pin.comments.length,
        pin
    })
}

async function createComment(req, res) {

    const id = req.query.id;
    if (!id) {
        return res.status(400).res("Bad Request")
    }

    const pin = await Pin.findOne({ _id: id });

    console.log(pin)

    if (pin.length == 0) {
        return res.status(400).send({
            response: "error",
            message: "id not matched"
        })
    }

    let commentsArray = pin.comments

    console.log(commentsArray);

    const { comments } = req.body

    commentsArray.push(comments);

    console.log("after", commentsArray)

    try {
        await Pin.updateOne({ _id: id }, { comments: commentsArray })
    } catch (error) {
        console.log(error)
    }

    res.status(200).send({
        response: "success",
        message: " Comment Added"
    })
}

async function search(req, res) {
    let { q } = req.query
    if (!q) {
        res.status(400).send("Bad Request")
    }
    
    q = q.toLowerCase();
    const pins = await Pin.find({ $or: [{ title: {$regex:`^${q}`,$options: 'i'} }, { description: {$regex:`^${q}`,$options: 'i'} }] });
    return res.status(200).send({
        status: "success",
        message: "Pin send",
        pins
    })
}

async function createdPosts(req, res) {
    let { email } = req.query
    if (!email) {
        res.status(400).send("Bad Request")
    }

    email = email.toLowerCase();
    const pins = await Pin.find({ email });
    return res.status(200).send({
        status: "success",
        message: "Pin send",
        pins
    })
}

module.exports = {
    createPin,
    sendPins,
    individualPin,
    createComment,
    search,
    createdPosts
}