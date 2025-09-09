import { R2Explorer } from 'r2-explorer';

export default R2Explorer({ readonly: false }

  // Learn more how to secure your R2 Explorer instance:
  // https://r2explorer.com/getting-started/security/
  // cfAccessTeamName: "my-team-name",
});
import { R2Explorer } from 'r2-explorer';

export default R2Explorer({ readonly: false, basicAuth: {
    username: 'anotherUser',
    password: '123567'
  }
});
