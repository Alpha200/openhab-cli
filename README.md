openhab-cli
=========================================================

Command line tool to control your OpenHAB instance

Features
---------------------------------------------------------

- List all items
- Send a command to an item

Installation
------------------------------------------------------------------------------

```
npm install -g openhab-cli
```

After the installation via npm, you will need to create the configuration file ```~/.config/openhab-cli/config.json```:

```
{
  "url": "http://yourdomain.tld"
}
```

Usage
------------------------------------------------------------------------------

### List all items

```
openhab-cli list
```

### Send a command

```
openhab-cli send item [command]
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE).
