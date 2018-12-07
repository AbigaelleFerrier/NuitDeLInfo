<!DOCTYPE html>
<html lang="fr">

        <?php include'assets/php/head.php'; ?>


<body>

    <?php include 'assets/php/nav.php'; ?>

    <div class="container" id="start">
        <div class="row">
            <div class="col s12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>    
        </div>
        <div class="col s12">
            <div id="test1" class="col s12" >
                <?php
                    
                    $data = [
                            "Eolienne"    =>  [10,20,30,40,50],
                            "Cardiaque"   =>  [55,42],
                            "Hydrometrie" =>  ["01",15,21],
                            "Test"        =>  [10,11,12,13,14,15,16,17,18,19,20]
                            ];

                    foreach ($data as $key => $data2) {
                        echo '<div class="chartT">';
                            echo '<h4>- '. $key .' -</h4>';
                            
                            foreach ($data2 as $value) {
                                echo "<span class='charTpr'>".$value . "% :</span> ";
                                for ($i=0; $i < $value; $i++) { 
                                    echo "-";
                                }
                                echo "<br>";
                            }
                            echo("<p>Type de données : </p>");
                        echo "</div>";
                    }
                        
                ?>
            </div>
            <div id="test2" class="col s12">Test 2</div>
        </div>
    </div>



    <?php
        include 'assets/php/footer.php';
        include 'assets/php/script.php';
    ?>

    <script type="text/javascript">

        function eaa() {
            document.getElementById('logo-container').innerHTML = 'SLT COMMENT TU VAS ?';
        }

    </script>            
</body>
</html>
