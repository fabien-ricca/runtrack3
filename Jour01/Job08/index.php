<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="script.js"></script>
    
    <title>Jour01 - Job08</title>
</head>

<body>
    <?php
        for($i=2; $i<1000; $i++){
            $div = 0;
            
            for($a=1; $a<=$i; $a++){
                if($i % $a === 0){
                    $div ++;
                }
            }
        
            
            if ($div === 2){
                echo "$i<br>";
            }
        }
    ?>
</body>

</html>