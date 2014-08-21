router.get('/', function(req, res) {
	  // Use res.sendfile, as it streams instead of reading the file into memory.
	  res.json({ message: 'hooray! welcome to our api!' });
});
