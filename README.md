# Onist NPM

## Consuming

To be able to install modules from the Onist npm repo, you'll need to do the following:

### Log in to the registry

`npm adduser --registry http://[registry]:[port]`

When prompted, enter your username, password, and email address.

### Tell npm which registry you'd like to use

In `lerna.json`, add your registry url and port to the registry property:

```
{
  "lerna": "2.2.0",
  "packages": ["packages/*"],
  "version": "independent",
  "registry": "http://[registry]:[port]",
  "command": {
    "publish": {
      "conventionalCommits": true,
      "message": "chore: Publish"
    }
  }
}
```