import RwandaMap from './components/RwandaMap'
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  View,

} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>

      <Button onClick={signOut}>Sign Out</Button>
      <RwandaMap />
    </View>
  );
}

// The withAuthenticator component will scaffold out an  user auth flow
// (sign up, sign in, resest password, confirm sign in with MFA, sign out)
export default withAuthenticator(App);
