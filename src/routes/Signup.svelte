<script>
  const signUp = () => {
    console.log("Adding user...")
  };
</script>

<section>
  <h2>Sign Up</h2>

  <form on:submit|preventDefault={signUp}>
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" placeholder="johndoe" id="username">
    </div>

    <div>
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="johndoe@mail.com" id="email">
    </div>

    <div>
      <label for="psswd">Password</label>
      <input type="password" name="password" placeholder="********" id="psswd">
    </div>

    <div>
      <button type="submit">Sign Up</button>
    </div>
  </form>
</section>

<style>
  h2{
    font-size: 2rem;
    text-align: center;
    margin: 1em 0;
    color: #666;
    text-transform: uppercase;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 90%;
    margin: 2em auto;
  }
  label{
    font-size: 1.8rem;
    display: block;
    margin-bottom: .25em;
  }
  input{
    width: 100%;
    padding: .7em 1em;
    font-size: 1.6rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
  form div:last-child{
    align-self: center;
    margin-top: 1.7em;
  }
  button {
    display: block;
    font-size: 1.6rem;
    color: #fff;
    background-color: #125D98;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bold;
    padding: .6em 1.5em;
    outline: none;
    cursor: pointer;
  }
  button:focus, input:focus{ border-color: #666; }

  @media (min-width: 400px){
    form{ max-width: 75%; }
  }
  @media (min-width: 576px){
    form{ max-width: 70%; }
  }
  @media (min-width: 768px){
    form{ max-width: 60%; }
    button:hover{ background-color: #2169a0; }
  }
  @media (min-width: 992px){
    form{ max-width: 50%; }
  }
</style>
