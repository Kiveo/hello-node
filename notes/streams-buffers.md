Streams and Buffers

INCOMING REQUEST

  Stream
  Request Body Part 1
  Request Body Part 2
    BUFFER
    Request Body Part 3
    Request Body part 4
  Fully Parsed

A buffer is a construct that allows holding multiple chunks and work with them until done/released.

Sample

~~~
 const body = [];
    //req.on() fired when a new chunk is ready for reading
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //once done parsing data, res.on(end)
    req.on('end', () => {
      //take the text data, add to body and convert toString
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    })
~~~

Result:  
(message came from <input> name)

~~~
<Buffer 6d 65 73 73 61 67 65 3d 54 48 49 53 2b 49 53 2b 4d 59 2b 4d 45 53 53 41 47 45 2b 53 45 4e 54>

message=THIS+IS+MY+MESSAGE+SENT
~~~