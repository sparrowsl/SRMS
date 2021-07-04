<script>
  export let isLoggedIn = true;
</script>

<nav>
  <div class="logo">Spind</div>
  <ul>
    <li><a href="#/">Home</a></li>
    {#if isLoggedIn}
      <li><a href="#/dashboard">Dashboard</a></li>
      <li><a href="#/settings">Settings</a></li>
      <!-- logout goes inside settings -->
      <li><a href="#/logout" class="logout">&#9755;</a></li>
    {:else}
      <li><a href="#/login">Login</a></li>
      <li><a href="#/signup">Signup</a></li>
    {/if}
  </ul>
</nav>

<style>
  nav{
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1.5em 1em;
    border-bottom: 1px solid #d3d3d3;
    background-color: #fff;
    height: 10vh;
  }
  .logo{
    font-size: 1.6rem;
    color: #555;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
  }
  .logout{
    color: red;
    font-size: 2.7rem;
    font-weight: bold;
  }
  nav ul{
    list-style-type: none;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 1em;
    font-size: 1.7rem;
  }
  a{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #4169e1;
    text-decoration: none;
  }

  @media (min-width: 400px){
    nav{ padding: 1em 1.5em; }
  }
  @media (min-width: 576px){
    .logo{ margin-left: 5%; }
    nav ul{ margin-right: 5%; }
  }
  @media (min-width: 768px){
    a:hover{ color: #0000ff; }
    .logo{ margin-left: 10%; }
    nav ul{ margin-right: 10%; }
  }
  @media (min-width: 992px){}
</style>
