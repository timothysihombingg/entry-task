export const loginService = (param: {
  email: string,
  password: string
}): Promise<boolean> => {
  return fetch('http://localhost:4000/login', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: param.email,
      password: param.password
    })
  })
  .then(response => response.json())
  .then(data => {
    return (data === 'success')
  })
}