const http = require("http")
const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")

const server = http.createServer((req, res) => {

})
app.get("/", (req, res) => {
    console.log(req)
    res.send(notes)
})
const port = 3000
app.listen((port) => {
    console.log(`The server is listen on port ${port}`)
})

app.get("/home", (req, res, next) => {
    console.log("One")
    next()
})

app.get("/two", (req, res, next) => {
    console.log("Two")
    next()
})

app.get("")

const newDoc = path.join(__dirname, 'NewDoc')

if (!fs.existsSync(newDoc)) {
    fs.mkdir(newDoc, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("New file created created asynchronously")
        }
    })
} else {
    console.log("File already exist...")
}

const newFile = path.join(newDoc, "asyncFile.txt")
fs.writeFile(newFile, "Hello async method of creating file using Node.js", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("File already created")
    }
})



// module.exports = [notes]

const notes = [
    {
        id: 1,
        title: "The boy that fall on th e ground",
        text: "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
        date: "6/JAN/2023"
    },

    {
        id: 2,
        title: "The boy that fall on th e ground",
        text: "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
        date: "6/JAN/2023"
    }, {
        id: 3,
        title: "The boy that fall on th e ground",
        text: "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
        date: "6/JAN/2023"
    },
    {
        id: 4,
        title: "The boy that fall on th e ground",
        text: "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
        date: "6/JAN/2023"
    },
    {
        id: 5,
        title: "The boy that fall on th e ground",
        text: "The boy is runnin and he fall on the ground and then start crying and the mother came and carry him up to see th injured the boy had but he wall not injured",
        date: "6/JAN/2023"
    }
]