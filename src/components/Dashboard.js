import * as React from 'react';

export default function Dashboard({token}) {

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [accounts, setAccounts] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.dev.citizenwave.me/api/v1/admin/accounts', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((response) => response.json()
        .then((account) => {
          setIsLoaded(true);
          setAccounts(account.content)
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error)
        })
      )
  }, [token])

  if (error) {
    return <div> Erreur: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Chargement... </div>;
  } else {
    return (
      <ul>
        {accounts.map(item => (
          <li key={item.id}>
            {item.email} - {item.status}
          </li>
        ))}
      </ul>
    );
  }
}