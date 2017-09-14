# State Shape

3 top level reducers:
* `entities` has all data fetched from server
  * `entities.channels` has is an object of all channels
  * `entities.directMessages` is an object of all active messages
* `ui` has ui data
  * `ui.currentViewType` either channel or directMessage
  * `ui.currentViewId` identifies the current active view for rendering purposes
* `errors` is an array of whatever is being sent back from the server as errors (normally in an array)

```javascript
{
  entities: {
    channels: {
      1: {
        id: 1,
        name: 'general',
        workspace: 'App Academy'
      },
      2: {
        id: 2,
        name: 'White walker talk',
        workspace: "Night's Watch"
      }
    },
    directMessages: {
      1: {
        id: 1,
        user: {
          id: 19,
          username: 'khaivubui',
          displayname: 'Khai Bui'
        }
      },
      2: {
        id: 2,
        user: {
          id: 9,
          username: 'thewhitewolf',
          displayname: 'Jon Snow'
        }
      }
    }
  },
  ui:{
    currentViewType: 'channel',
    currentViewId: 1,
    loading: false
  },
  errors:[
    'Username must be present',
    'Password must be present'
  ]
}
```
