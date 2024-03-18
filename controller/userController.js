
const home = (req, res) => {
    res.send('Hey i am home page ')
}


const about = (req, res) => {
    res.send('Hey i am about page ')
}


module.exports = { home, about }