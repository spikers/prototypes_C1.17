## Version .1

### Create your basic web server based on your notes.
- Requirements  
  - should return a string to the requesting browser
  - should console.log that a request was made
- Steps
  - load the html object from node
  - create the server object
  - add the request event listener to the server object
  - tell the server to listen to a port
  - test it with a browser request.  See if the text comes out accurately
  
  
## Version .5

### Fetch a file from node's file system
- Requirements
  - create a folder to server as your document root
  - create a basic web page, index.html, in the document root folder
    - add an externally linked image in your index.html file.  Do not save the file locally on the node server
  - load index.html whenever a browser makes any request to your web server
- Resource:
  - <a href="https://nodejs.org/api/fs.html" target="_blank">node.js FS object</a>
  - Potentially useful functions
    - synchronous (easier to understand)
      - <a href="https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options" target="_blank">readFileSync</a>
    - asynchronous (more modern, harder to understand)
      - <a href="https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback" target="_blank">readFileSync</a>
      
## Version .7

### Fetch an arbitrary file from node's file system
- Requirements
  - parse the incoming URL request and fetch the file name from it
  - load any file baed upon the requested url whenever a browser makes any request to your web server
  - create a 404.html page that is loaded whenever you request a file that doesn't exist in the document root
  - return a 404 code to the browser
- Resource:
  - Potentially useful functions
    - synchronous (easier to understand)
      - <a href="https://nodejs.org/api/fs.html#fs_fs_existssync_path" target="_blank">existSync</a>
      https://nodejs.org/api/http.html
    - asynchronous (more modern, harder to understand)
      - <a href="https://nodejs.org/api/fs.html#fs_fs_stat_path_callback" target="_blank">stat (exists is deprecated)</a> 
    - http:
      - <a href="https://nodejs.org/api/http.html#http_response_statuscode" target="_blank">statusCode</a> 

## Version .9

### Fetch an arbitrary file from node's file system
- Requirements
  - parse the incoming URL request and determine what type of file it is based upon the extension
  - add an outbound response header based upon the determined mime type
  - inside your sample HTML files, put a request to an image (on your server) as well as a style sheet (also on your server)
  - your web server should properly send the requested files with the appropriate header
  - set a few arbitrary headers.  Anything you like!
  - test the page on your browser
- Resource:
  - Potentially useful functions
    - http
      - <a href="https://nodejs.org/api/http.html#http_response_setheader_name_value" target="_blank">setHeader</a>
      
