
import {Button, Card, CardContent, Typography, TextField} from '@material-ui/core'
import {LinkComponent} from '../index'
function App() {
  return (
    <div className="App">
    <Card style={{width:250, marginBottom:12}}><CardContent><Typography color="textSecondary" style={{fontSize:14}}>You are now chattting with user.</Typography></CardContent></Card>
    <Button
  variant={'outlined'}
  color={'primary'}
  component={LinkComponent}
  to={'/'}>
  Go home
</Button>
    <TextField color="primary" placeholder="Write message here..." style={{bottom:0, left:0, right:0, position:"absolute", }}></TextField>
    </div>
  );
}

export default App;