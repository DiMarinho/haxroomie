/**
 * Example haxroomie configuration file.
 * Opens 2 private room.
 * 
 * Copy this to the haxroomie directory and edit to your liking to
 * easily get haxroomie running.
 * 
 * CHANGE THE admin PASSWORD!!!
 */

let config = {
  'priv1': {
    autoStart: true,
    roomName: `fs arena`,
    playerName: `host`,
    maxPlayers: 20,
    public: false,
    pluginConfig: {
      'sav/roles': {
        roles: {
          // get admin priviledges with !auth admin adminpass
          admin: `adminpass`,
          // get host priviledges with !auth host hostpass
          host: `hostpass`
        }
      },
    }
  },
  'priv2': {
    autoStart: true,
    roomName: `fs arena`,
    playerName: `host`,
    maxPlayers: 20,
    public: false,
    pluginConfig: {
      'sav/roles': {
        roles: {
          // get admin priviledges with !auth admin adminpass
          admin: `adminpass`,
          // get host priviledges with !auth host hostpass
          host: `hostpass`
        }
      },
    }
  }
};
module.exports = config;