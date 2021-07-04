<script>
  let accounts = [
    {
      accountName: "Facebook",
      accountPassword: "23456",
    },
    {
      accountName: "Email",
      accountPassword: "2948",
    },
    {
      accountName: "Twitter",
      accountPassword: "903h43",
    },
    {
      accountName: "Computer",
      accountPassword: "jkw7976",
    },
    {
      accountName: "GitHub",
      accountPassword: "kie983903",
    },


    {
      accountName: "Email",
      accountPassword: "2948",
    },
    {
      accountName: "Twitter",
      accountPassword: "903h43",
    },
    {
      accountName: "Computer",
      accountPassword: "jkw7976",
    },
    {
      accountName: "GitHub",
      accountPassword: "kie983903",
    },
    {
      accountName: "Email",
      accountPassword: "2948",
    },
    {
      accountName: "Twitter",
      accountPassword: "903h43",
    },
    {
      accountName: "Computer",
      accountPassword: "jkw7976",
    },
    {
      accountName: "GitHub",
      accountPassword: "kie983903",
    },
  ];

  const deleteAccount = (account) => {
    // const toDelete = confirm(`Do you want to delete this account: ${account}`);
    console.log(account.account);
    console.log(account.account.accountName);
    console.log(account.account.accountPassword);
  }

  const showEditModal = (account) => console.log("Editing...", account);
</script>

<section>
  <table>
    <thead>
      <tr>
        <th>Accounts</th>
        <th>Passwords</th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {#each accounts as account}
        <tr>
          <td>{ account.accountName }</td>
          <td>{ account.accountPassword }</td>
          <td class="editBtn" on:click={() => showEditModal({account})}>Edit</td>
          <td class="deleteBtn" on:click={() => deleteAccount({account})}>&#10006</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  section{
    max-height: 100vh;
  }
  table{
    overflow: scroll;
    width: 100%;
    margin: 1em auto;
    white-space: nowrap;
    border-collapse: collapse;
  }
  th{ border-top: 2px solid #555; }
  th, td {
    font-size: 1.6rem;
    border-left: 1px solid #e1e1e1;
    border-bottom: 1px solid #E1E1E1;
    padding: .7em;
    text-align: left;
  }
  td{ font-family: Geneva, sans-serif; }
  .deleteBtn{
    color: #dd275e;
    font-size: 2.25rem;
  }
  .editBtn{ color: #3282b8; }
  .editBtn, .deleteBtn{
    padding: 0;
    text-align: center;
    text-decoration: none;
    outline-color: inherit;
    cursor: pointer;
  }

  @media (min-width: 768px){
    table{ max-width: 80%; }
  }
  @media (min-width: 992px){
    table{ max-width: 85%; }
  }
</style>
