<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ident = $_POST['ident'];
    $dispo = $_POST['dispo'];
    $dem = $_POST['dem'];
    $defi = $_POST['defi'];
    $fuente = $_POST['fuen'];
    $uso = $_POST['us'];
    $esta = $_POST['esta'];
    $esca = $_POST['esca'];
    // $ide = $_POST['ide'];

    $query = "INSERT INTO plan_cuencas.balance_hidrico (id, disponibilidad, demanda, defi_superavit, fuente, uso, estaciones, escasez) 
              VALUES ('$ident', '$dispo', '$dem', '$defi', '$fuente', '$uso', '$esta', '$esca')";
              "INSERT INTO plan_cuencas.agua_saneamiento (id)
              VALUES ('$ident')";
              
    $result = pg_query($conn, $query);

    if ($result) {
        echo "<script>window.location.href = 'http://localhost:8080/PlataformaSEL/formularios/cuenca.html';</script>";
    } else {
        echo "Error al insertar datos: " . pg_last_error($conn);
    }


}


?>



