<?php
	session_start();
    
    try {
	    $dsn ="mysql:host=172.16.220.29; dbname=NuitDeLinfo; charset=UTF8";
	    $user='root';
	    $mdp ='root';

		$connect = new PDO($dsn,$user,$mdp);
	}
	catch (PDOException $e) {
		echo 'Connexion échouée : ' . $e->getMessage();
	}

?>