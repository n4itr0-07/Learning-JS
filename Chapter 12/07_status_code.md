# HTTP Status Codes

HTTP status codes are standard response codes given by web servers on the internet. They help identify the result of the client's request to the server.

## Categories of Status Codes

### 1xx: Informational
These codes indicate that the request was received and understood, and the server is continuing to process it.
- **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
- **101 Switching Protocols**: The server is switching protocols as requested by the client.

### 2xx: Success
These codes indicate that the request was successfully received, understood, and accepted.
- **200 OK**: The request was successful.
- **201 Created**: The request was successful, and a new resource was created.
- **204 No Content**: The server successfully processed the request, but there is no content to return.

### 3xx: Redirection
These codes indicate that further action is needed to complete the request.
- **301 Moved Permanently**: The resource has been permanently moved to a new URL.
- **302 Found**: The resource is temporarily located at a different URL.
- **304 Not Modified**: The resource has not been modified since the last request.

### 4xx: Client Errors
These codes indicate that the client made an error in the request.
- **400 Bad Request**: The server could not understand the request due to invalid syntax.
- **401 Unauthorized**: Authentication is required and has failed or has not been provided.
- **403 Forbidden**: The client does not have permission to access the resource.
- **404 Not Found**: The requested resource could not be found.

### 5xx: Server Errors
These codes indicate that the server failed to fulfill a valid request.
- **500 Internal Server Error**: The server encountered an unexpected condition.
- **502 Bad Gateway**: The server received an invalid response from an upstream server.
- **503 Service Unavailable**: The server is currently unable to handle the request due to maintenance or overload.

## Common Use Cases
- **200 OK**: Used for successful GET or POST requests.
- **201 Created**: Used when a new resource is created via POST.
- **404 Not Found**: Used when a resource cannot be located.
- **500 Internal Server Error**: Used for unexpected server issues.

## Additional Resources
- [MDN Web Docs: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [RFC 7231: Hypertext Transfer Protocol (HTTP/1.1)](https://tools.ietf.org/html/rfc7231)
