<script>
</script>

<section>
  <div class="intro">
    <h1>Hashup</h1>
    <h4>The most simple and easy password manager.</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ipsam, rem doloribus explicabo modi placeat.</p>
  </div>
  <div class="svg">
    <img src="../../locker.svg" alt="">
  </div>
</section>

<style>
  section{
    margin: 2em 0;
    display: flex;
    flex-direction: column;
  }
  .intro{
    text-align: center;
    margin-bottom: 2em;
  }
  .intro h1{
    font-size: 3.5rem;
  	color: #444;
  }
  .intro h4{
    font-weight: normal;
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 2em;
  }
  .intro p{
    font-size: 1.6rem;
    line-height: 1.5;
    color: #777;
  }
  .svg img{
    width: 100%;
    height: auto;
  }

  @media (min-width: 400px){
    .intro p{
      max-width: 50ch;
      margin: auto;
    }
  }
  @media (min-width: 576px){
    .intro h4{
      font-size: 1.7rem;
    }
    section{
      gap: 1em;
      flex-direction: row;
      align-items: center;
      min-height: 50vh;
    }
    section > div{ width: 100%; }
    .intro{ text-align: left; }
  }
  @media (min-width: 768px){
    .intro p{
      margin: 0;
      max-width: 50ch;
    }
  }
</style>
