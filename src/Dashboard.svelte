<script>
  let accounts = [];
</script>

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
    {#each accounts as account, password }
    <tr>
      <td>{{ account }}</td>
      <td>{{ password }}</td>
      <td><a href="/" class="editBtn">Edit</a></td>
      <td><a href="/" class="deleteBtn">Delete</a></td>
    </tr>
    {/each}
  </tbody>
</table>


<style></style>
