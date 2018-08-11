# Wordy

## Local Testing Documentation

Used lampp for database and server setup. Commands are given in case to that.

### Database
Create a new database. Import 'wordy.sql' to that. Set password to your database.
```
https://synoguide.com/2014/02/20/change-password-sql-database-phpmyadmin/
```
To solve the no permission error,
```
https://stackoverflow.com/questions/11096045/mysql-said-documentation-1045-access-denied-for-user-rootlocalhost-usi/41643388
```

### Server Files

Put the folder `wordy` in `/opt/lampp/htdocs` and `cgi-bin` in `/opt/lampp/cgi-bin`. Modify `wordy/php/connect.php` to setup mysql connection.

For the files in cgi-bin, run
```
chmod 755 *.py
```

### Run
Go to `about:debugging', click on 'Load Temporary Add-on' and load the manifest.json file.

Voila!

