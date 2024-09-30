const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jy8liu:hgnXDtKrBOBCkMs2@cluster0.ebesr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;
