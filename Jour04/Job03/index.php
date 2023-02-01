<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="script.js" defer></script>
        <title>Jour04 - Job02</title>
    </head>

    <body>
        <form method="get">

            <br>
            <label>id</label>
            <input type="text" name="id">
            <br><br>

            <label>Nom</label>
            <input type="text" name="name">
            <br><br>

            <label>Type</label>
            <select name="type" id="select_types">
                <option selected>--</option>
            </select>
            <br><br>
    
            <button type="submit" name="submit">Filtrer</button>
        </form>
    </body>
</html>