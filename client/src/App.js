


import {Button, Card, CardContent, Typography} from '@material-ui/core'

import {LinkComponent} from './index'
function App() {
  return (
    <div className="App">
      <Card style={{width:250, marginBottom:12}}><CardContent><Typography color="textSecondary" style={{fontSize:14}}>Welcome to Omegle 0.5!</Typography> <Typography component="h2">The Omegle downgrade that includes a chat feature but no camera!</Typography></CardContent></Card>
      <Button
  variant={'outlined'}
  color={'primary'}
  component={LinkComponent}
  to={'/chat'}
  >
  Chat with other users.
</Button>
    </div>
  );
}

export default App;
