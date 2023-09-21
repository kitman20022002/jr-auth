1. Password cannot be plain (DONE)

2. When show user it should show the password (DONE)

3. How to login logout (DONE)

4. how to ensure other endpoint need to validate before going to api (DONE)

//http://localhost:8080/api/v1/login
/////////////////////////////////////////////////////////////////////////////////
Run
npm install
npm run dev

1. Login -> /login -> await bcrypt.compare(password, user.password) -> user.generateAuthToken() -> return user (with return a jwt token)

2. http://localhost:8080/api/v1/posts -> authMiddleware.isAuth (check is valid JWT Token) -> postController.index (return all the post if valid)

//////////////////////////////////////////////////////////////////////////////
