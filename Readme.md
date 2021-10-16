# MERN stack with JWT authentication

MERN stack with protected routes (react-router-dom is used for routing) and JWT authentication. User needs to login to see reusable components. If the user is not logged in then he would be able to see the list of components, but in order to see the actual code and usage of the reusable component, logging in or signing up is required.

For most styles of reusable components styled-components library is used. For the page mainly global styles are used.

For backend Node is used with Express, while database is MongoDB.

Refresh tokens are implemented for higher security and http-only for cookies so those won't be accessible using JS.
